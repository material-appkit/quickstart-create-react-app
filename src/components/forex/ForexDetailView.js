import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import ListView from '@material-appkit/core/components/ListView';
import NavManager from '@material-appkit/core/managers/NavManager';
import ServiceAgent from '@material-appkit/core/util/ServiceAgent';
import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';
import SplitView from '@material-appkit/core/components/SplitView';

import ForexHistoryListItem from './ForexHistoryListItem';
import { FOREX_API_ENDPOINT } from 'variables';

import 'media/flag_sprites.css';


function ForexDetailView(props) {
  const { base, currency } = props;

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

    NavManager.updateUrlParams({
      base: currency,
      currency: base,
    });
  }, [base, currency]);  


  return (
    <SplitView
      bar={(
        <AppBar position="relative" color="default">
          {(base && currency) &&
            <Toolbar variant="dense">
              <img
                alt=''
                className={`flag flag-${base.toLowerCase()}`}
              />
              <IconButton
                onClick={handleSwapButtonClick}
              >
                <SwapHorizIcon />
              </IconButton>
              <img
                alt=''
                className={`flag flag-${currency.toLowerCase()}`}
              />
            </Toolbar>
          }
        </AppBar>
      )}
      barSize={56}
      placement="top"
    >
      {dataSource &&
        <ListView
          displayMode="list"
          items={dataSource}
          itemIdKey="date"
          listItemComponent={ForexHistoryListItem}
          windowed
        />
      }
    </SplitView>
  );
}

ForexDetailView.propTypes = {
  base: PropTypes.string,
  currency: PropTypes.string,
};

export default ForexDetailView;
