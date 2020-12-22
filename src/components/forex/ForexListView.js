import PropTypes from 'prop-types';

import React, { useContext, useEffect, useState } from 'react';

import { reverse } from '@material-appkit/core/util/urls';

import ListView from '@material-appkit/core/components/ListView';
import StorageManager from '@material-appkit/core/managers/StorageManager';

import ForexListItem from './ForexListItem';

import AppContext from 'AppContext';
// import paths from 'paths';

import 'media/flag_sprites.css';


function ForexListView(props) {
  const { onNavigate } = props;

  const context = useContext(AppContext);
  const { forexData } = context;
  
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    const baseCurrency = StorageManager.localValue('baseCurrency');
    const { rates } = forexData;

    setDataSource(Object.keys(rates).map((currency) => ({
      base: baseCurrency,
      currency,
      value: rates[currency],
    })));
  }, [forexData]);


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
    />
  );
}

ForexListView.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};


export default ForexListView;
