import React, { lazy, useContext } from 'react';

import NavigationControllerLayout from './NavigationControllerLayout';

import AppContext from 'AppContext';
import paths from 'paths';

const routes = [
  { path: paths.dashboard, component: lazy(() => import('pages/DashboardPage')) },

  { path: paths.forex.index, component: lazy(() => import('pages/ForexIndexPage')) },
  { path: paths.forex.currency, component: lazy(() => import('pages/ForexDetailPage')) },
];

function MainLayout(props) {
  const context = useContext(AppContext);

  const initialize = () => {
    return new Promise((resolve, reject) => {
      context.update({ loadProgress: undefined });
      setTimeout(() => {
        context.update({ loadProgress: null });
        resolve();
      }, 1000);
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
