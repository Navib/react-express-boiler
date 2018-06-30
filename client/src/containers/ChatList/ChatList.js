import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import TheComponent from '../../components/ChatList/Chatlist';
import { GET_USER_MESSAGES } from '../../actions';

const mapStateToProps = state => {
  return {
    username: state.user.username,
    auth: state.auth.authenticated,
    messages: state.messagesSent.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserMessages: (username, auth) => {
      dispatch({ type: GET_USER_MESSAGES, payload: username, auth: auth });
    }
  };
};

const ChatList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default ChatList;
