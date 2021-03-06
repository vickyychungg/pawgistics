// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import { LOGIN_PAGE_ROUTE } from './routes';

type Props = {
  isAuthenticated: boolean,
}

const App = ({ isAuthenticated }: Props) => (
  <Switch>
    <Route
      exact
      path={LOGIN_PAGE_ROUTE}
      render={props => (isAuthenticated ?
        <Redirect to="/" /> :
        <LoginPage {...props} />
      )}
    />
    <Route
      render={props => (isAuthenticated ?
        <DashboardPage {...props} /> :
        <Redirect to={LOGIN_PAGE_ROUTE} />
      )}
    />
  </Switch>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(process.env.NODE_ENV === 'production' ?
  // eslint-disable-next-line global-require
  App : require('react-hot-loader').hot(module)(App)));
