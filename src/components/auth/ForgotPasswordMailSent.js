import intl from 'react-intl-universal';

import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useInit } from '@material-appkit/core/util/hooks';

const styles = makeStyles((theme) => ({
  heading: {
    borderBottom: '1px solid #cacaca',
    marginBottom: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: 'center',
  },
  email: {
    color: theme.palette.primary.main,
  },
}));


function ForgotPasswordMailSent({ location, setTitle }) {
  const classes = styles();
  const email = location.state ? location.state.email : '';

  useInit(() => {
    setTitle(intl.get('EMAIL_SENT'));
  });

  return (
    <Typography align="center">
      Password reset instructions have been emailed
      {email && (
        <>
          &nbsp;to <span className={classes.email}>{email}</span>
        </>
      )}
    </Typography>
  );
}

ForgotPasswordMailSent.propTypes = {
  location: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default ForgotPasswordMailSent;
