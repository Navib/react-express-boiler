import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { store, history } from './store';
import { ConnectedRouter } from 'react-router-redux';
import muiTheme from './theme/index';

import './styles/main.scss';
import './assets/Rick.png';

import App from './containers/app';
import Home from './components/Pages/Home/Home';
import Profile from './components/Pages/Profile/Profile';
import User from './containers/Pages/User/User';
import Signout from './components/Auth/Signout';

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <App>
            <Route path="/user/:userId" component={User} />
            <Route exact path="/" component={Home} />
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/signout" component={Signout} />
          </App>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
