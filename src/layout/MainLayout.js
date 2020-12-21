import React, { lazy, useContext } from 'react';


import NavigationControllerLayout from './NavigationControllerLayout';

import AppContext from 'AppContext';
import paths from 'paths';

const IndexPage = lazy(() => import('pages/IndexPage'));

const routes = [
  { path: paths.index, component: IndexPage },
];

function MainLayout(props) {
  const context = useContext(AppContext);

  const initialize = () => {
    return new Promise((resolve, reject) => {
      // context.update({ loadProgress: undefined });

      context.update({ loadProgress: null });
      resolve();
    });
  };

  return (
    <NavigationControllerLayout
      initialize={initialize}
      redirectPath={paths.index}
      routes={routes}
      {...props}
    />
  );
}

export default MainLayout;
