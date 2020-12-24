import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

import ViewController from '@material-appkit/core/components/ViewController';

import ForgotPasswordForm from 'components/auth/ForgotPasswordForm';
import LoginForm from 'components/auth/LoginForm';

import paths  from 'paths';
import { NAVIGATION_CONTROLLER_PAGE_PROPS } from 'variables';

const styles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.grey[200],
    height: '100%',
    paddingTop: 40,
  },

  card: {
    margin: 'auto',
    width: 360,
    maxWidth: '90%',
  },

  cardHeader: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },

  cardHeaderTitle: {
    fontSize: theme.typography.pxToRem(20),
    textAlign: 'center',
  },
}));


function AuthorizationPage(props) {
  const classes = styles();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');

  const routes = [
    { path: paths.auth.login, Component: LoginForm },
    { path: paths.auth.forgotPassword, Component: ForgotPasswordForm },
  ];

  return (
    <ViewController title="Sign In" {...props}>
      <main className={classes.main}>
        <Card className={classes.card}>
          <LinearProgress style={{ visibility: loading ? 'visible' : 'hidden' }} />

          <CardHeader
            classes={{
              root: classes.cardHeader,
              title: classes.cardHeaderTitle,
            }}
            title={title}
          />
          <CardContent>
            <Switch>
              {routes.map(({ path, Component }) => (
                <Route
                  exact
                  key={path}
                  path={path}
                  render={(routeProps) => (
                    <Component
                      location={props.location}
                      match={routeProps.match}
                      loading={loading}
                      setLoading={setLoading}
                      setTitle={setTitle}
                    />
                  )}
                />
              ))}
              <Redirect to={paths.auth.login} />
            </Switch>
          </CardContent>
        </Card>
      </main>
    </ViewController>
  );
}

AuthorizationPage.propTypes = NAVIGATION_CONTROLLER_PAGE_PROPS;

export default AuthorizationPage;
