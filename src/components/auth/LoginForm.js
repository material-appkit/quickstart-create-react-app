import intl from 'react-intl-universal';

import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import AttributedTextField from '@material-appkit/core/components/AttributedTextField';
import NavManager from '@material-appkit/core/managers/NavManager';
import { useInit } from '@material-appkit/core/util/hooks';

import AuthManager from 'managers/AuthManager';

import AppContext from 'AppContext';
import paths from 'paths';


const styles = makeStyles((theme) => ({
  actionButton: theme.mixins.actionButton,
  linkButton: theme.mixins.linkButton,

  emailFieldInput: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  passwordFieldInput: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
}));

function LoginForm(props) {
  const classes = styles();
  const context = useContext(AppContext);

  const { loading, setLoading, setTitle } = props;

  const [redirectTo] = useState(null);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);


  useInit(() => {
    setTitle(intl.get('SIGN_IN'));
  });

  useEffect(() => {
    setIsValid(Object.values(credentials).every((value) => value.length));
  }, [credentials]);


  const handleFormFieldChange = (fieldName) => (value) => {
    setCredentials({ ...credentials, [fieldName]: value })
  };


  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    AuthManager.authenticate(credentials)
      .then((authInfo) => {
        context.update({ authInfo });
        NavManager.navigate(paths.dashboard)
      }).catch(() => {
        setLoading(false);
      });
  };


  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <AttributedTextField
        fullWidth
        InputProps={{
          className: classes.emailFieldInput,
        }}
        label={intl.get('EMAIL')}
        onChange={handleFormFieldChange('email')}
        type="email"
        value={credentials.email}
        variant="contained"
      />

      <AttributedTextField
        fullWidth
        InputProps={{
          className: classes.passwordFieldInput,
        }}
        label={intl.get('PASSWORD')}
        onChange={handleFormFieldChange('password')}
        type="password"
        value={credentials.password}
        variant="contained"
      />

      <Button
        color="secondary"
        className={classes.actionButton}
        disabled={loading || !isValid}
        type="submit"
        variant="contained"
      >
        {loading ? `${intl.get('AUTHENTICATING')}...` : intl.get('SIGN_IN')}
      </Button>

      <Link
        className={classes.linkButton}
        color="textPrimary"
        component={RouterLink}
        to={paths.auth.forgotPassword}
        underline="always"
      >
        {intl.get('FORGOT_PASSWORD')}
      </Link>
    </form>
  );
}

LoginForm.propTypes = {
  location: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
  setTitle: PropTypes.func,
};

export default LoginForm;
