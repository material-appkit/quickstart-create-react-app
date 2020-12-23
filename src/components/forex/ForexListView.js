import PropTypes from 'prop-types';

import React, { useEffect } from 'react';

import ListView from '@material-appkit/core/components/ListView';
import NavManager from '@material-appkit/core/managers/NavManager';
import StorageManager from '@material-appkit/core/managers/StorageManager';

import ForexListItem from './ForexListItem';

import 'media/flag_sprites.css';

import { FOREX_API_ENDPOINT } from 'variables';


function ForexListView(props) {
  const { onNavigate } = props;

  const qsParams = NavManager.qsParams;
  const { base } = qsParams;

  useEffect(() => {
    if (!base) {
      let baseCurrency = StorageManager.localValue('baseCurrency');
      if (!baseCurrency) {
        baseCurrency = 'USD';
        StorageManager.setLocalValue('baseCurrency', baseCurrency);
      }
      NavManager.updateUrlParam('base', baseCurrency);
    }
  }, [base]);


  const transformFetchItemsResponse = (res) => {
    const responseData = res.jsonData;
    const { rates } = responseData;
    const sortedCurrencies = Object.keys(rates).sort();

    const items = sortedCurrencies.map((currency) => ({
      base,
      currency,
      value: rates[currency],
    }));

    return { items };
  };

  if (!base) {
    return null;
  }

  return (
    <ListView
      displayMode="list"
      itemIdKey="currency"
      listItemComponent={ForexListItem}
      listItemProps={{
        onItemClick: (item) => {
          onNavigate(item);
        },
      }}
      responseTransformer={transformFetchItemsResponse}
      src={`${FOREX_API_ENDPOINT}/latest`}
      filterParams={{ base }}
    />
  );
}

ForexListView.propTypes = {
  location: PropTypes.object.isRequired,
  onNavigate: PropTypes.func.isRequired,
};


export default ForexListView;
