import React from 'react';
import PropTypes from 'prop-types';

import BottomNav from '../containers/BottomNav/BottomNav';

export default ({ children }) => {
  return (
    <div>
      <BottomNav />
      {children}
    </div>
  );
};
