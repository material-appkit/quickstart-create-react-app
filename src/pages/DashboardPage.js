import React from 'react';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ViewController from '@material-appkit/core/components/ViewController';

import { COMMON_PAGE_PROPS } from 'variables';

import AppKitLogo from 'media/application-logo.png';

const styles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(2),
  },

  header: {
    display: 'flex',

    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },

  headerContent: {
    flex: 3,
    padding: theme.spacing(2),
  },

  title: {
    fontSize: theme.typography.pxToRem(28),
    letterSpacing: '0.3rem',
    textTransform: 'uppercase',
    textAlign: 'center',

    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },

  appkitButton: {
    borderRadius: 10,
    flex: 2,
  },

  appkitLogo: {
    width: '100%',
    height: '100%',
    // maxWidth: 400,
    // maxHeight: 400,
  },
}));

function DashboardPage(props) {
  const classes = styles();

  return (
    <ViewController title="Dashboard" {...props}>
      <Container maxWidth="md" component="main" className={classes.main}>
        <header className={classes.header}>
          <IconButton
            className={classes.appkitButton}
            href="https://material-appkit.com"
          >
            <img
              alt="Application Logo"
              className={classes.appkitLogo}
              src={AppKitLogo}
            />
          </IconButton>

          <div className={classes.headerContent}>
            <Typography variant="h1" className={classes.title}>
              CRA QuickStart
            </Typography>
          </div>
        </header>
      </Container>
    </ViewController>
  );
}

DashboardPage.propTypes = COMMON_PAGE_PROPS;

export default DashboardPage;
