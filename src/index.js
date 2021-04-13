import intl from 'react-intl-universal';

import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import NavManager from '@material-appkit/core/managers/NavManager';
import ScriptLoader from '@material-appkit/core/util/ScriptLoader';
import { activeLocale } from 'util/shortcuts';

import App from 'App.js';
import coreThemeInfo from './theme';

import {
  DEFAULT_LOCALE,
  GSAP_SCRIPTS,
  LOCALE_CHOICES,
  LOCALE_INFO_MAP,
} from './variables';


function loadGSAP() {
  const loaders = [];
  Object.keys(GSAP_SCRIPTS).forEach((key) => {
    loaders.push(ScriptLoader.loadScript(GSAP_SCRIPTS[key]));
  });
  return Promise.all(loaders);
}


function initLocale() {
  return new Promise((resolve, reject) => {
    try {
      const intl_locales = {};
      LOCALE_CHOICES.forEach((locale) => {
        intl_locales[locale] = LOCALE_INFO_MAP[locale].source;
      });

      let currentLocale = activeLocale();
      if (!LOCALE_CHOICES[currentLocale]) {
        currentLocale = DEFAULT_LOCALE;
      }

      intl.init({
        currentLocale,
        locales: intl_locales,
        fallbackLocale: DEFAULT_LOCALE,
      }).then(() => {
        resolve();
      }).catch((intlError) => {
        reject(intlError);
      });
    } catch (err) {
      reject(err);
    }
  });
}


function initialize() {
  return new Promise((resolve, reject) => {
    NavManager.initialize({});

    Promise.all([
      loadGSAP(),
      initLocale(),
    ]).then((responses) => {
      // TODO: Mixin theme customizations contained in site profile
      const theme = createMuiTheme(coreThemeInfo);

      const application = (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />

          <App
            onLayoutDidMount={() => {
              resolve();
            }}
            theme={theme}
          />
        </MuiThemeProvider>
      );
      ReactDOM.render(application, document.getElementById('root'));
    }).catch((err) => {
      reject(err);
    });
  });
}

initialize().then(() => {
  const rootElement = document.getElementById('root');
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    document.body.removeAttribute('style');
    rootElement.removeAttribute('style');
    window.gsap.to(preloader, { opacity: 0 }).then(() => {
      document.body.removeChild(preloader);
    });
  }, preloader.classList.contains('fade-in') ? 1200 : 0);
}).catch((err) => {
  if (window.confirm("Unable to initialize application.\n\nVerify that you're online, then press OK to try again.")) {
    NavManager.reloadWindow();
  }
});
