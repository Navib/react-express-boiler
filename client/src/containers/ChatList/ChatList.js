import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import TheComponent from '../../components/ChatList/Chatlist';
import {
  GET_USER_MESSAGES,
  GET_ALL_MESSAGES,
  GET_ACTIVE_USER_MESSAGES
} from '../../actions';

const mapStateToProps = state => {
  return {
    username: state.user.username,
    auth: state.auth.authenticated,
    messages: state.userMessages.messages,
    allMessages: state.allMessages.messages,
    activeProfile: state.activeProfile,
    routing: state.routing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserMessages: (username, auth) => {
      dispatch({ type: GET_USER_MESSAGES, payload: username, auth: auth });
    },
    getActiveUserMessages: username => {
      dispatch({
        type: GET_ACTIVE_USER_MESSAGES,
        payload: username
      });
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
