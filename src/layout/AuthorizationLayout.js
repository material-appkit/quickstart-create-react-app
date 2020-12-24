import PropTypes from 'prop-types';

import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useTheme } from '@material-ui/core/styles';

import SplitView from '@material-appkit/core/components/SplitView';

import ApplicationBar from 'components/ApplicationBar';

import AppContext from 'AppContext';
import paths from 'paths';

import AuthorizationPage from 'pages/AuthorizationPage';


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
        <Route
          exact={false}
          path={paths.auth.index}
          render={(routeProps) => (
            <AuthorizationPage
              location={props.location}
              match={routeProps.match}
              onMount={handleViewControllerMount}
            />
          )}
        />
        <Redirect to={paths.auth.login} />
      </Switch>
    </SplitView>
  );
}

AuthorizationLayout.propTypes = {
  location: PropTypes.object.isRequired,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired,
};

export default AuthorizationLayout;
