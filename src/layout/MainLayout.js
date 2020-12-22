import React, { lazy, useContext } from 'react';

import StorageManager from '@material-appkit/core/managers/StorageManager';
import NavigationControllerLayout from './NavigationControllerLayout';

import AppContext from 'AppContext';
import paths from 'paths';
import { FOREX_API_ENDPOINT } from 'variables';

const routes = [
  { path: paths.dashboard, component: lazy(() => import('pages/DashboardPage')) },
  { path: paths.forex.index, component: lazy(() => import('pages/ForexListPage')) },
];

function MainLayout(props) {
  const context = useContext(AppContext);

  const initialize = () => {
    return new Promise((resolve, reject) => {
      context.update({ loadProgress: undefined });

      let baseCurrency = StorageManager.localValue('baseCurrency');
      if (!baseCurrency) {
        baseCurrency = 'USD';
        StorageManager.setLocalValue('baseCurrency', baseCurrency);
      }

      fetch(`${FOREX_API_ENDPOINT}/latest?base=${baseCurrency}`)
        .then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
              context.update({ forexData: data });
              resolve();
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
    <NavigationControllerLayout
      initialize={initialize}
      redirectPath={paths.dashboard}
      routes={routes}
      {...props}
    />
  );
}

export default MainLayout;
