import React from 'react';

import Signup from '../../Auth/Signup';
import Signin from '../../Auth/Signin';

export default props => {
  return (
    <div>
      <h1>HomePage</h1>
      <Signup history={props.history} />
      <Signin history={props.history} />
    </div>
  );
};
