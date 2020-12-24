import intl from 'react-intl-universal';

import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';

import NavManager from '@material-appkit/core/managers/NavManager';

import AuthManager from 'managers/AuthManager';
import AppContext from 'AppContext';
import paths from 'paths';

const styles = makeStyles((theme) => ({
  accountButtonAvatar: {
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 500,
  },

  toolbar: {
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1),
  },

  email: {
    marginLeft: theme.spacing(2),
  },

  listItemIcon: {
    minWidth: 'unset',
    marginRight: theme.spacing(1),
  },
}));

function AccountButton({ authInfo }) {
  const classes = styles();
  const context = useContext(AppContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const signOut = () => {
    AuthManager.logout();
    context.update({ authInfo: null });
    NavManager.navigate(paths.dashboard);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverButtonClick = (e) => {
    setAnchorEl(e.currentTarget);

  };

  const handleSignOutButtonClick = () => {
    handlePopoverClose();
    signOut();
  };

  const handleReloadButtonClick = () => {
    window.location.reload();
  };

  return (
    <>
      <IconButton
        color="inherit"
        edge="start"
        onClick={handlePopoverButtonClick}
      >
        <SettingsIcon />
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box display="flex" alignItems="center" p={2}>
          <Avatar>
            <PersonIcon />
          </Avatar>

          <Typography className={classes.email}>
            {authInfo.email}
          </Typography>
        </Box>

        <Divider />

        <List disablePadding>
          <ListItem button onClick={handleReloadButtonClick}>
            <ListItemIcon className={classes.listItemIcon}>
              <RefreshIcon />
            </ListItemIcon>
            <ListItemText primary={intl.get('RELOAD')} />
          </ListItem>

          <ListItem button onClick={handleSignOutButtonClick}>
            <ListItemIcon className={classes.listItemIcon}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={intl.get('SIGN_OUT')} />
          </ListItem>
        </List>
      </Popover>
    </>
  );
}

AccountButton.propTypes = {
  authInfo: PropTypes.object.isRequired,
};

export default AccountButton;
