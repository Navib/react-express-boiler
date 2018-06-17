import React from 'react';

import Signup from '../../Auth/Signup';

export default props => {
  return (
    <div>
      <h1>HomePage</h1>
      <Signup history={props.history} />
    </div>
  );
};
