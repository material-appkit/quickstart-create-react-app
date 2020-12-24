import intl from 'react-intl-universal';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import AttributedTextField from '@material-appkit/core/components/AttributedTextField';
import NavManager from '@material-appkit/core/managers/NavManager';
import { useInit } from '@material-appkit/core/util/hooks';

import AuthManager from 'managers/AuthManager';

import paths from 'paths';

const styles = makeStyles((theme) => ({
  actionButton: theme.mixins.actionButton,
  linkButton: theme.mixins.linkButton,
}));


function ForgotPasswordForm(props) {
  const classes = styles();

  const { loading, setLoading, setTitle } = props;

  const [email, setEmail] = useState('');

  useInit(() => {
    setTitle(intl.get('FORGOT_PASSWORD'));
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    AuthManager.sendPasswordReset(email)
      .then(() => {
        setLoading(false);
        NavManager.navigate(
          paths.auth.passwordResetMailSent,
          null,
          true,
          { email }
        );
      });
  };


  return (
    <form onSubmit={handleFormSubmit}>
      <AttributedTextField
        autoFocus
        className={classes.textfield}
        fullWidth
        InputProps={{
          autoCorrect: "off",
          autoCapitalize: "none",
        }}
        label={intl.get('EMAIL_ADDRESS')}
        onChange={(value) => setEmail(value)}
        type="email"
        value={email}
        variant="contained"
      />

      <Button
        className={classes.actionButton}
        color="secondary"
        disabled={!email || loading}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
      >
        {loading ? intl.get('REQUESTING_PASSWORD_RESET') : intl.get('REQUEST_PASSWORD_RESET') }
      </Button>

      <Link
        className={classes.linkButton}
        color="textPrimary"
        component={RouterLink}
        to={paths.auth.index}
        underline="always"
      >
        {intl.get('BACK_TO_LOGIN')}
      </Link>
    </form>
  );
}

ForgotPasswordForm.propTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
  setTitle: PropTypes.func,
};

export default ForgotPasswordForm;
