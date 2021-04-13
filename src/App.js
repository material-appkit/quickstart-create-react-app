import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';

import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import withWidth from '@material-ui/core/withWidth';

import { SnackbarProvider } from 'notistack';

import AlertManager from '@material-appkit/core/managers/AlertManager';
import NavManager from '@material-appkit/core/managers/NavManager';
import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';
import { filterByKeys } from '@material-appkit/core/util/object';

import AuthManager from 'managers/AuthManager';

import AppContext from 'AppContext';
import paths from 'paths';

import { activeLocale } from 'util/shortcuts';

class App extends React.PureComponent {
  constructor(props) {
    super();

    this.placeholderLayout = <div />;

    this.layoutRoutes = [
      {
        pathname: paths.auth.index,
        LayoutComponent: React.lazy(() => import('./layout/AuthorizationLayout')),
        placeholder: this.placeholderLayout,
      },
      {
        pathname: paths.index,
        LayoutComponent: React.lazy(() => import('./layout/MainLayout')),
        placeholder: this.placeholderLayout,
      },
    ];

    this.state = {
      initialized: false,
      ready: false,

      layoutConfig: null,

      appContext: {
        authInfo: AuthManager.authInfo,
        loadProgress: null,
        locale: activeLocale(),
        pageTitle: null,
        update: this.updateAppContext,
      },
    };
  }


  updateAppContext = (context) => {
    const appContext = this.state.appContext;

    const filteredContext = filterByKeys(appContext, Object.keys(context));

    if (!isEqual(filteredContext, context)) {
      const updatedContext = {...appContext, ...context };
      this.setState({ appContext: updatedContext });
    }
  };


  layoutDidMount = (layoutConfig) => {
    this.setState({ layoutConfig });

    if (this.props.onLayoutDidMount) {
      this.props.onLayoutDidMount(layoutConfig);
    }
  };


  layoutWillUnmount = () => {
    if (this.props.onLayoutWillUnmount) {
      this.props.onLayoutWillUnmount(this.state.layoutConfig);
    }

    this.setState({ layoutConfig: null });
  };


  get pageTitle() {
    const { pageTitle } = this.state.appContext;

    let pageTitleComponents = [];
    if (pageTitle) {
      if (Array.isArray(pageTitle)) {
        pageTitleComponents = [...pageTitle];
      } else {
        pageTitleComponents = [pageTitle];
      }
    }
    pageTitleComponents.push(process.env.REACT_APP_TITLE);

    return (
      <title>
        {pageTitleComponents.join(' | ')}
      </title>
    );
  }

  render() {
    const appContext = {
      ...this.state.appContext,
      breakpoint: this.props.width,
    };

    return (
      <AppContext.Provider value={appContext}>
        <Router
          basename={process.env.REACT_APP_URL_BASENAME}
          history={NavManager.history}
        >
          <HelmetProvider>
            <Helmet>
              <link rel="canonical" href="https://material-appkit.com/" />
              {this.pageTitle}
            </Helmet>
          </HelmetProvider>


          <Switch>
            {this.layoutRoutes.map((routeInfo) => {
              const {
                LayoutComponent,
                pathname,
                placeholder,
                ...layoutProps
              } = routeInfo;

              return (
                <Route
                  key={pathname}
                  path={pathname}
                  render={(routeProps) => (
                    <Suspense fallback={placeholder}>
                      <LayoutComponent
                        onMount={this.layoutDidMount}
                        onUnmount={this.layoutWillUnmount}
                        {...layoutProps}
                        {...routeProps}
                      />
                    </Suspense>
                  )}
                />
              );
            })}
          </Switch>
        </Router>

        <SnackbarProvider
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
          autoHideDuration={3000}
        >
          <SnackbarManager />
        </SnackbarProvider>

        <AlertManager />
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  onLayoutDidMount: PropTypes.func,
  onLayoutWillUnmount: PropTypes.func,
  width: PropTypes.string.isRequired,
};

export default withWidth()(App);
