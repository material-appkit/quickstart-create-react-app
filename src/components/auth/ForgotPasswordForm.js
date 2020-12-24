import intl from 'react-intl-universal';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import AttributedTextField from '@material-appkit/core/components/AttributedTextField';
import { useInit } from '@material-appkit/core/util/hooks';

import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';

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

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      SnackbarManager.info(`Password reset instructions have been emailed to "${email}"`);
      setLoading(false);
    }, 1000);
  };


  return (
    <form onSubmit={handleFormSubmit}>
      <AttributedTextField
        fullWidth
        autoFocus
        className={classes.textfield}
        type="email"
        label={intl.get('EMAIL_ADDRESS')}
        InputProps={{
          autoCorrect: "off",
          autoCapitalize: "none",
        }}
        onChange={(value) => setEmail(value)}
        value={email}
        variant="contained"
      />

      <Button
        className={classes.actionButton}
        color="secondary"
        disabled={!email || loading}
        fullWidth
        variant="contained"
        size="large"
        type="submit"
      >
        {loading ? intl.get('REQUESTING_PASSWORD_RESET') : intl.get('REQUEST_PASSWORD_RESET') }
      </Button>

      <Link
        className={classes.linkButton}
        component={RouterLink}
        to={paths.auth.index}
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
