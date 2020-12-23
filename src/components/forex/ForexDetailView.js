import qs from 'query-string';

import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ListView from '@material-appkit/core/components/ListView';
import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';


import ForexHistoryListItem from './ForexHistoryListItem';
import AppContext from 'AppContext';
import { FOREX_API_ENDPOINT } from 'variables';

import 'media/flag_sprites.css';

const styles = makeStyles((theme) => ({

}));

function ForexDetailView(props) {
  const classes = styles();

  const { base, currency } = props;

  const context = useContext(AppContext);
  const updateAppContext = context.update;

  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    if (!(base && currency)) {
      return;
    }

    setDataSource(null);

    const queryParams = qs.stringify({
      start_at: '2020-01-01',
      end_at: '2020-12-31',
      base,
      symbols: currency,
    });

    updateAppContext({ loadProgress: undefined });
    fetch(`${FOREX_API_ENDPOINT}/history?${queryParams}`)
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            const orderedDates = Object.keys(data.rates).sort();
            setDataSource(orderedDates.map((date) => ({
              date,
              value: data.rates[date][currency],
            })));
          });
        } else {
          SnackbarManager.error('Failed to retrieve historical ForEx data');
        }
      })
      .catch(() => {
        SnackbarManager.error('Failed to retrieve historical ForEx data');
      })
      .finally(() => {
        updateAppContext({ loadProgress: null });
      });
  }, [base, currency, updateAppContext]);


  if (!(base && currency && dataSource)) {
    return null;
  }

  return (
    <ListView
      displayMode="list"
      items={dataSource}
      itemIdKey="date"
      listItemComponent={ForexHistoryListItem}
      windowed
    />
  );
}

ForexDetailView.propTypes = {
  base: PropTypes.string,
  currency: PropTypes.string,
};

export default ForexDetailView;
