import PropTypes from 'prop-types';

import React, { useContext, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ListView from '@material-appkit/core/components/ListView';
import NavManager from '@material-appkit/core/managers/NavManager';
import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';
import StorageManager from '@material-appkit/core/managers/StorageManager';

import ForexListItem from './ForexListItem';

import AppContext from 'AppContext';

import 'media/flag_sprites.css';

import { FOREX_API_ENDPOINT } from 'variables';

const styles = makeStyles((theme) => ({
  listView: {
    width: 300,
  },
}));

function ForexListView(props) {
  const classes = styles();

  const context = useContext(AppContext);
  const updateAppContext = context.update;

  const { location, onNavigate } = props;

  const [forexData, setForexData] = useState(null);
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    const qsParams = NavManager.qsParams;
    const { base } = qsParams;

    if (!base) {
      let baseCurrency = StorageManager.localValue('baseCurrency');
      if (!baseCurrency) {
        baseCurrency = 'USD';
        StorageManager.setLocalValue('baseCurrency', baseCurrency);
      }
      NavManager.updateUrlParam('base', baseCurrency);
    } else {
      if (forexData && forexData.base === base) {
        return;
      }

      updateAppContext({ loadProgress: undefined });
      fetch(`${FOREX_API_ENDPOINT}/latest?base=${base}`)
        .then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
              setForexData(data);
              const sortedCurrencies = Object.keys(data.rates).sort();

              setDataSource(sortedCurrencies.map((currency) => ({
                base,
                currency,
                value: data.rates[currency],
              })));
            });
          }
        })
        .catch(() => {
          SnackbarManager.error('Failed to retrieve ForEx data');
        })
        .finally(() => {
          updateAppContext({ loadProgress: null });
        });

    }
  }, [updateAppContext, forexData, location]);


  if (!dataSource) {
    return null;
  }

  return (
    <ListView
      displayMode="list"
      itemIdKey="currency"
      itemLinkKey="path"
      items={dataSource}
      listItemComponent={ForexListItem}
      listItemProps={{
        onItemClick: (item) => {
          onNavigate(item);
        },
      }}
      listViewClassName={classes.listView}
    />
  );
}

ForexListView.propTypes = {
  location: PropTypes.object.isRequired,
  onNavigate: PropTypes.func.isRequired,
};


export default ForexListView;
