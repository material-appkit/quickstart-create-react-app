import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.js';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { SnackbarProvider } from 'notistack';

import AlertManager from '@material-appkit/core/managers/AlertManager';
import NavManager from '@material-appkit/core/managers/NavManager';
import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';

import theme from './theme';

NavManager.initialize({});

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <SnackbarProvider
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      autoHideDuration={3000}
    >
      <CssBaseline />
      <SnackbarManager />
      <AlertManager />
      <App />
    </SnackbarProvider>
  </MuiThemeProvider>
), document.getElementById('root'));
