import PropTypes from 'prop-types';

import React, { lazy, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useTheme } from '@material-ui/core/styles';

import SplitView from '@material-appkit/core/components/SplitView';
import { isValue } from '@material-appkit/core/util/value';

import ApplicationBar from 'components/ApplicationBar';

import AppContext from 'AppContext';
import paths from 'paths';


const routes = [
  {
    exact: false,
    path: paths.auth.index,
    component: lazy(() => import('pages/AuthorizationPage')),
  },
];

function AuthorizationLayout(props) {
  const context = useContext(AppContext);
  const theme = useTheme();


  const handleViewControllerMount = (viewController) => {
    context.update({ pageTitle: viewController.props.title });
  };

  return (
    <SplitView
      bar={<ApplicationBar />}
      barSize={theme.topbar.height}
      placement="top"
    >
      <Switch>
        {routes.map((routeInfo) => {
          let exact = true;
          if (isValue(routeInfo.exact)) {
            exact = routeInfo.exact;
          }
          return (
            <Route
              exact={exact}
              key={routeInfo.path}
              path={routeInfo.path}
              render={(routeProps) => (
                <routeInfo.component
                  location={props.location}
                  match={routeProps.match}
                  onMount={handleViewControllerMount}
                />
              )}
            />
          );
        })}
        <Redirect to={paths.auth.login} />
      </Switch>
    </SplitView>
  );
}

AuthorizationLayout.propTypes = {
  initialize: PropTypes.func,
  location: PropTypes.object.isRequired,
  maxWidth: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired,
};

AuthorizationLayout.defaultProps = {
  maxWidth: 'md',
};

export default AuthorizationLayout;
