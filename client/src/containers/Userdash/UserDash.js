import React from 'react';
import { connect } from 'react-redux';
import { GET_FOLLOWERS } from '../../actions';
import TheComponent from '../../components/UserDash/UserDash';

const mapStateToProps = state => {
  return {
    username: state.user.username,
    messages: state.userMessages.messages,
    auth: state.auth.authenticated,
    following: state.following
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFollowers: username => {
      dispatch({ type: GET_FOLLOWERS, payload: username });
    }
  };
};

const UserDash = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default UserDash;
