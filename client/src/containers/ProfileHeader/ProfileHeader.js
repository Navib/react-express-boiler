import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import TheComponent from '../../components/ProfileHeader/ProfileHeader';

const mapStateToProps = state => {
  return {
    username: state.user.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserHeaders: (username, auth) => {
      console.log('fetch boy');
    }
  };
};

const ProfileHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default ProfileHeader;
