import intl from 'react-intl-universal';

import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';

import paths from 'paths';

const styles = makeStyles((theme) => ({
  heading: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
  },

  textfield: {
    margin: theme.spacing(2, 0),
  },

  link: {
    color: theme.palette.text.primary,
    display: 'block',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 600,
    marginTop: theme.spacing(2),
    textDecoration: 'underline',
  },
}));

function ForgotPasswordForm(props) {
  const classes = styles();

  const { loading, setLoading } = props;

  const [email, setEmail] = useState('');

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    setLoading(true);

    SnackbarManager.info(`TODO: Send password request request to "${email}"`);
    console.log(email);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };


  return (
    <Fragment>
      <Typography variant="h2" className={classes.heading}>
        {intl.get('FORGOT_PASSWORD')}
      </Typography>

      <form onSubmit={handleFormSubmit}>
        <TextField
          fullWidth
          autoFocus
          className={classes.textfield}
          name="email"
          type="email"
          label={intl.get('EMAIL_ADDRESS')}
          InputProps={{
            autoCorrect: "off",
            autoCapitalize: "none",
          }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          variant="outlined"
        />

        <Button
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
          className={classes.link}
          component={RouterLink}
          to={paths.auth.index}
        >
          Back to Login
        </Link>
      </form>
    </Fragment>
  );
}

ForgotPasswordForm.propTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default ForgotPasswordForm;
