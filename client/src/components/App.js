import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar/NavBar';

const App = props => (
  <div>
    <NavBar />
    <div>Video Section</div>
    <div>Review Section</div>
    <footer>Footer area</footer>
  </div>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
