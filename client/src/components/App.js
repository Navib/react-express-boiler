import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '../containers/NavBar/NavBar';
import BottomNav from '../containers/BottomNav/BottomNav';

export default ({ children, history }) => {
  return (
    <div>
      <AppBar history={history} />
      {children}
      <BottomNav />
    </div>
  );
};
