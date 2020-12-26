import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Toolbar from '@material-ui/core/Toolbar';

import ListView from '@material-appkit/core/components/ListView';
import NavManager from '@material-appkit/core/managers/NavManager';
import ServiceAgent from '@material-appkit/core/util/ServiceAgent';
import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';
import SplitView from '@material-appkit/core/components/SplitView';
import { reverse } from '@material-appkit/core/util/urls';

import ForexHistoryListItem from './ForexHistoryListItem';
import paths from 'paths';
import { FOREX_API_ENDPOINT } from 'variables';

import 'media/flag_sprites.css';

function ForexDetailView(props) {
  const { representedObject, standalone } = props;
  const { base, currency } = representedObject;

  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    if (!(base && currency)) {
      return;
    }

    setDataSource(null);

    ServiceAgent.get(`${FOREX_API_ENDPOINT}/history`, {
      start_at: '2020-01-01',
      end_at: '2020-12-31',
      base,
      symbols: currency,
    }).then((res) => {
      const rates = res.jsonData.rates;
      const orderedDates = Object.keys(rates).sort();
      setDataSource(orderedDates.map((date) => ({
        date,
        rate: rates[date][currency],
      })));
    }).catch(() => {
      SnackbarManager.error('Failed to retrieve historical ForEx data');
    });
  }, [base, currency]);


  const handleSwapButtonClick = useCallback(() => {
    if (!(base && currency)) {
      return;
    }

    if (standalone) {
      const params = { base: currency };
      const path = reverse(paths.forex.currency, { currency: base });
      NavManager.setUrlParams(params, path);
    } else {
      NavManager.updateUrlParams({
        base: currency,
        currency: base,
      });
    }
  }, [base, currency, standalone]);


  return (
    <SplitView
      bar={(
        <AppBar position="relative" color="default">
          {(base && currency) &&
            <Toolbar variant="dense">
              <img
                alt=''
                className={`flag flag-${base}`}
              />
              <IconButton
                onClick={handleSwapButtonClick}
              >
                <SwapHorizIcon />
              </IconButton>
              <img
                alt=''
                className={`flag flag-${currency}`}
              />
            </Toolbar>
          }
        </AppBar>
      )}
      barSize={48}
      placement="top"
      scrollContent
    >
      <ListView
        displayMode="list"
        itemIdKey="date"
        items={dataSource}
        loadingVariant="linear"
        listItemComponent={ForexHistoryListItem}
        windowed
      />
    </SplitView>
  );
}

ForexDetailView.propTypes = {
  representedObject: PropTypes.object.isRequired,
  standalone: PropTypes.bool,
};

export default React.memo(ForexDetailView);
