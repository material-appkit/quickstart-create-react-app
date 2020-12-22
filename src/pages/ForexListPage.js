import qs from 'query-string';

import React, { useContext } from 'react';

import MasterDetailView from '@material-appkit/core/components/MasterDetailView';
import StorageManager from '@material-appkit/core/managers/StorageManager';
import ViewController from '@material-appkit/core/components/ViewController';

import ForexListView from 'components/forex/ForexListView';
import ForexDetailView from 'components/forex/ForexDetailView';

import AppContext from 'AppContext';

import {
  COMMON_PAGE_PROPS,
  FOREX_API_ENDPOINT,
} from 'variables';


function ForexListPage(props) {
  const context = useContext(AppContext);

  const loadForexData = (currency) => {
    return new Promise((resolve, reject) => {
      context.update({ loadProgress: undefined });

      const queryParams = qs.stringify({
        start_at: '2020-01-01',
        end_at: '2020-12-31',
        base: StorageManager.localValue('baseCurrency'),
        symbols: currency.toUpperCase(),
      });

      fetch(`${FOREX_API_ENDPOINT}/history?${queryParams}`)
        .then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
              data.currency = currency;
              resolve(data);
            });
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          context.update({ loadProgress: null });
        });
    });
  };

  return (
    <ViewController title="Foreign Exchange" {...props}>
      <MasterDetailView
        DetailViewComponent={ForexDetailView}
        detailViewPlaceholder={(
          <p>Forex Detail View Placeholder</p>
        )}
        inspectedObjectLoader={loadForexData}
        itemIdKey="currency"
        ListViewComponent={ForexListView}
        location={props.location}
      />
    </ViewController>
  );
}

ForexListPage.propTypes = COMMON_PAGE_PROPS;

export default ForexListPage;
