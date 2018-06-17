import React from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../../HOC/requireAuth';

const Profile = props => (
  <div>
    <div id="first">Profile Page Header</div>
    <div id="second">Profile Page Body</div>
    <div id="third">Profile Page Footer</div>
  </div>
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default requireAuth(Profile);
