import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import TheComponent from '../../components/ChatList/VertMenu';
import { DELETE_USER_MESSAGE } from '../../actions';

const mapStateToProps = state => {
  return {
    username: state.user.username,
    auth: state.auth.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUserMessage: (messageId, auth) => {
      dispatch({ type: DELETE_USER_MESSAGE, payload: messageId, auth: auth });
    }
  };
};

const VertMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default VertMenu;
