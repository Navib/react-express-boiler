import React from 'react';
import { connect } from 'react-redux';
import TheComponent from '../../../components/common/FollowButton/FollowButton';
import { ADD_FOLLOWER } from '../../../actions';

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addFollower: (username, auth) => {
      dispatch({ type: ADD_FOLLOWER, payload: username, auth: auth });
    }
  };
};

const FollowButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default FollowButton;
