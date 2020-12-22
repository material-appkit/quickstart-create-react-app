import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import ViewController from '@material-appkit/core/components/ViewController';

import { COMMON_PAGE_PROPS } from 'variables';

import ApplicationLogo from 'media/application-logo.svg';
import CreateReactAppLogo from 'media/cra-logo.svg';

const styles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(6, 2, 2),
  },

  header: {
    textAlign: 'center',
  },

  title: {
    fontSize: theme.typography.pxToRem(28),
    letterSpacing: '0.2rem',
    marginTop: theme.spacing(1),
  },

  applicationLogo: {
    width: 200,
  },

  craGridItem: {
    [theme.breakpoints.up('md')]: {
      paddingTop: 10,
    },
  },

  craLogo: {
    margin: -25,
    width: 250,
  },

  centerGridItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
  },

  plusIcon: {
    fontSize: theme.typography.pxToRem(60),
  },
}));

function DashboardPage(props) {
  const classes = styles();

  return (
    <ViewController title="Dashboard" {...props}>
      <Container maxWidth="md" component="main" className={classes.main}>
        <header className={classes.header}>
          <Grid container>
            <Grid item xs={12} md={5}>
              <Button href="https://material-appkit.com">
                <img
                  alt="Application Logo"
                  className={classes.applicationLogo}
                  src={ApplicationLogo}
                />
              </Button>

              <Typography variant="h1" className={classes.title}>
                Material-AppKit
              </Typography>
            </Grid>

            <Grid item xs={12} md={2} className={classes.centerGridItem}>
              <AddIcon className={classes.plusIcon} />
            </Grid>

            <Grid item xs={12} md={5} className={classes.craGridItem}>
              <Button href="https://create-react-app.dev/">
                <img
                  alt="Create-React-App Logo"
                  className={classes.craLogo}
                  src={CreateReactAppLogo}
                />
              </Button>
              <Typography variant="h1" className={classes.title}>
                Create React App
              </Typography>
            </Grid>
          </Grid>
        </header>
      </Container>
    </ViewController>
  );
}

DashboardPage.propTypes = COMMON_PAGE_PROPS;

export default DashboardPage;
