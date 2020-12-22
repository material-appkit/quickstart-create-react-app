import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import ViewController from '@material-appkit/core/components/ViewController';

import ForgotPasswordForm from './ForgotPasswordForm';
import LoginForm from './LoginForm';
import paths  from 'paths';
import { NAVIGATION_CONTROLLER_PAGE_PROPS } from 'variables';

const styles = makeStyles((theme) => ({
  paper: {
    margin: '40px auto',
    overflow: 'hidden',
    width: 360,
    maxWidth: '90%',
  },

  formContainer: {
    padding: theme.spacing(3),
  },
}));


function AuthorizationPage(props) {
  const classes = styles();

  const [contextMenuItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rightToolbarItem] = useState(null);

  const routes = [
    { path: paths.auth.login, Component: LoginForm },
    { path: paths.auth.forgotPassword, Component: ForgotPasswordForm },
  ];

  return (
    <ViewController
      contextMenuItems={contextMenuItems}
      rightBarItem={rightToolbarItem}
      title="Sign In"
      {...props}
    >
      <main>
        <Paper className={classes.paper} elevation={1}>
          <LinearProgress style={{ visibility: loading ? 'visible' : 'hidden' }} />

          <div className={classes.formContainer}>
            <Switch>
              {routes.map((routeInfo) => (
                <Route
                  exact
                  key={routeInfo.path}
                  path={routeInfo.path}
                  render={(routeProps) => (
                    <routeInfo.Component
                      location={props.location}
                      match={routeProps.match}
                      loading={loading}
                      setLoading={setLoading}
                    />
                  )}
                />
              ))}
              <Redirect to={paths.auth.login} />
            </Switch>
          </div>
        </Paper>
      </main>
    </ViewController>
  );
}

AuthorizationPage.propTypes = NAVIGATION_CONTROLLER_PAGE_PROPS;

export default AuthorizationPage;
