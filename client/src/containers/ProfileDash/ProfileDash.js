import React from 'react';
import { connect } from 'react-redux';
import TheComponent from '../../components/ProfileDash/ProfileDash';

const mapStateToProps = state => {
  return {
    username: state.user.username,
    messages: state.userMessages.messages,
    activeProfile: state.activeProfile
  };
};

const ProfileDash = connect(mapStateToProps)(TheComponent);

export default ProfileDash;
