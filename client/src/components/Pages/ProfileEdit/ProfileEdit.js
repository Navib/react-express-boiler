import React from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../../HOC/requireAuth';

const ProfileEdit = props => <div>{props.data}</div>;

ProfileEdit.propTypes = {
  data: PropTypes.any
};

ProfileEdit.defaultProps = {
  data: 'Forms render here!'
};

export default requireAuth(ProfileEdit);
