import React from 'react';

import AppBar from '../../NavBar/NavBar';

export default props => {
  return (
    <div>
      <AppBar history={props.history} />
      <h1>HomePage</h1>
    </div>
  );
};
