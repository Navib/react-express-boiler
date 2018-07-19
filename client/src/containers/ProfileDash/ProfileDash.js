import React from 'react';
import { connect } from 'react-redux';
import { GET_FOLLOWERS } from '../../actions';
import TheComponent from '../../components/ProfileDash/ProfileDash';

const mapStateToProps = state => {
  return {
    username: state.user.username,
    messages: state.userMessages.messages,
    activeProfile: state.activeProfile,
    auth: state.auth.authenticated,
    following: state.following
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFollowers: auth => {
      dispatch({ type: GET_FOLLOWERS, payload: auth });
    }
  };
};

const ProfileDash = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default ProfileDash;
