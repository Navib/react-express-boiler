import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

const App = props => (
  <div>
    <Route path="/profile" component={Profile} />
    <Route path="/" exact component={Home} />
  </div>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
