import PropTypes from 'prop-types';

import React, { useContext, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// import Typography from '@material-ui/core/Typography';
import { reverse } from '@material-appkit/core/util/urls';

import ListView from '@material-appkit/core/components/ListView';


import ForexListItem from './ForexListItem';

import AppContext from 'AppContext';
import paths from 'paths';

import 'media/flag_sprites.css';


function ForexListView(props) {
  const context = useContext(AppContext);
  const { baseCurrency, forexData } = context;

  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    const { rates } = forexData;

    setDataSource(Object.keys(rates).map((currency) => ({
      currency: currency.toLowerCase(),
      value: rates[currency],
    })));
  }, [forexData]);


  const itemContextProvider = (item) => ({
    component: RouterLink,
    to: reverse(paths.forex.currency, { currency: item.currency }),
  });


  if (!dataSource) {
    return null;
  }

  console.log(baseCurrency);

  return (
    <ListView
      displayMode="list"
      itemContextProvider={itemContextProvider}
      itemIdKey="currency"
      itemLinkKey="path"
      items={dataSource}
      listItemComponent={ForexListItem}
      loadingVariant="linear"
    />
  );
}


export default ForexListView;
