import React, { lazy, useContext } from 'react';


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
  const baseCurrency = 'USD';

  const initialize = () => {
    return new Promise((resolve, reject) => {
      context.update({ loadProgress: undefined });

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
