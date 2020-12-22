/**
*
* LoginForm
*
*/
import intl from 'react-intl-universal';

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';

import paths from 'paths';


const styles = makeStyles((theme) => ({
  emailFieldInput: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  passwordFieldInput: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },

  link: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 600,
    marginTop: theme.spacing(2),
    textDecoration: 'underline',
  },
}));

function LoginForm(props) {
  const classes = styles();

  const { loading, setLoading } = props;

  const [redirectTo] = useState(null);


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);


  useEffect(() => {
    const formDataValid = Object.values(formData).every((value) => value.length);
    setIsValid(formDataValid);
  }, [formData]);


  const handleFormFieldChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    const updatedFormData = { ...formData };
    updatedFormData[fieldName] = fieldValue;
    setFormData(updatedFormData);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    authenticate(e.target);
  };

  const authenticate = async(loginForm) => {
    setLoading(true);

    const credentials = {
      email: loginForm.email.value,
      password: loginForm.password.value,
    };

    SnackbarManager.info('TODO: Send authorization request...', credentials);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <TextField
        fullWidth
        InputProps={{
          className: classes.emailFieldInput,
        }}
        label={intl.get('EMAIL')}
        margin="normal"
        name="email"
        onChange={handleFormFieldChange}
        type="email"
        value={formData.email}
      />

      <TextField
        fullWidth
        InputProps={{
          className: classes.passwordFieldInput,
        }}
        label={intl.get('PASSWORD')}
        margin="normal"
        name="password"
        onChange={handleFormFieldChange}
        type="password"
        value={formData.password}
      />

      <Box my={2}>
        <Button
          color="secondary"
          disabled={loading || !isValid}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          {loading ? `${intl.get('AUTHENTICATING')}...` : intl.get('SIGN_IN')}
        </Button>
      </Box>

      <Link
        className={classes.link}
        component={RouterLink}
        to={paths.auth.forgotPassword}
      >
        Forgot Password?
      </Link>
    </form>
  );
}

LoginForm.propTypes = {
  location: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default LoginForm;
