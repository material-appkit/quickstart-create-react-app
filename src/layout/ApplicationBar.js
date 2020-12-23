import PropTypes from 'prop-types';

import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GitHubIcon from '@material-ui/icons/GitHub';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import ApplicationMenuControl from './ApplicationMenuControl';
import AppContext from 'AppContext';
import paths from 'paths';

//------------------------------------------------------------------------------
const styles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.appBar + 2,
    justifyContent: 'center',
    position: 'relative',
  },

  progressBar: {
    height: 2,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 62,
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },

  toolBar: {
    minHeight: theme.topbar.height,
    padding: theme.spacing(0, 0.5, 0, 2),
  },

  appTitle: {
    flex: 1,
    fontSize: theme.typography.pxToRem(20),
  },

  navButton: {
    color: theme.palette.common.white,
  },
}));

const navLinkArrangement = [
  {
    Icon: DashboardIcon,
    path: paths.dashboard,
    title: 'Dashboard',
  },
  {
    Icon: AccountBalanceIcon,
    path: paths.forex.index,
    title: 'Foreign Exchange',
  },
  {
    Icon: GitHubIcon,
    href: 'https://github.com/material-appkit/quickstart-create-react-app',
    title: 'GitHub Repository',
  },
];

function ApplicationBar(props) {
  const classes = styles();

  const context = useContext(AppContext);
  const { loadProgress } = context;

  return (
    <AppBar
      className={classes.appBar}
      color="primary"
      elevation={2}
      position="static"
    >
      <Toolbar className={classes.toolBar}>
        <ApplicationMenuControl
          navLinkArrangement={navLinkArrangement}
        />

        <Typography className={classes.appTitle}>
          {process.env.REACT_APP_TITLE}
        </Typography>

        <IconButton
          className={classes.navButton}
          component={RouterLink}
          to={paths.auth.login}
        >
          <VpnKeyIcon />
        </IconButton>
      </Toolbar>

      {loadProgress !== null &&
        <LinearProgress className={classes.progressBar} />
      }
    </AppBar>
  );
}

ApplicationBar.propTypes = {
  navLinkArrangement: PropTypes.array.isRequired,
};


ApplicationBar.defaultProps = {
  navLinkArrangement: [],
};

export default ApplicationBar;
