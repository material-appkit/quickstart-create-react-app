import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


const styles = makeStyles((theme) => ({
  main: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },

  accountBalanceIcon: {
    fontSize: theme.typography.pxToRem(120),
    marginBottom: 10,
  },
}));


function ForexDetailViewPlaceholder(props) {
  const classes = styles();

  return (
    <main className={classes.main}>
      <AccountBalanceIcon className={classes.accountBalanceIcon} />
      <Typography variant="h1">
        Foreign Currency Exchange
      </Typography>

    </main>
  );
}

export default ForexDetailViewPlaceholder;
