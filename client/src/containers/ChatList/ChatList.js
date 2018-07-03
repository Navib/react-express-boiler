import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import TheComponent from '../../components/ChatList/Chatlist';
import { GET_USER_MESSAGES, GET_ALL_MESSAGES } from '../../actions';

const mapStateToProps = state => {
  return {
    username: state.user.username,
    auth: state.auth.authenticated,
    messages: state.userMessages.messages,
    allMessages: state.allMessages.messages,
    routing: state.routing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserMessages: (username, auth) => {
      dispatch({ type: GET_USER_MESSAGES, payload: username, auth: auth });
    },
    getAllMessages: auth => {
      dispatch({ type: GET_ALL_MESSAGES, payload: 'all', auth: auth });
    }
  };
};

const ChatList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default ChatList;
