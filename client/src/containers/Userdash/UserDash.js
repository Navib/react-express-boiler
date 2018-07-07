import React from 'react';
import { connect } from 'react-redux';
import TheComponent from '../../components/UserDash/UserDash';

const mapStateToProps = state => {
  return {
    username: state.user.username,
    messages: state.userMessages.messages
  };
};

const UserDash = connect(mapStateToProps)(TheComponent);

export default UserDash;
