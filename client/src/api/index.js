import axios from 'axios';
import actions from '../actions';

const signup = data => {
  return axios.post('http://localhost:3090/signup', data.payload);
};

const signin = data => {
  return axios.post('http://localhost:3090/signin', data.payload);
};

const getuser = token => {
  return axios.get('http://localhost:3090/user', {
    headers: {
      ContentType: 'application/json',
      authorization: token
    }
  });
};

const sendMessage = payload => {
  return axios({
    method: 'POST',
    headers: {
      ContentType: 'application/json',
      authorization: payload.auth
    },
    url: 'http://localhost:3090/message',
    data: payload
  });
};

const getMessages = (username, auth) => {
  return axios.get(`http://localhost:3090/getMessages/${username}`, {
    headers: {
      ContentType: 'application/json',
      authorization: auth
    }
  });
};

const getAllMessages = auth => {
  return axios.get(`http://localhost:3090/getMessages/all`, {
    headers: {
      ContentType: 'application/json',
      authorization: auth
    }
  });
};

const deleteMessage = (messageId, auth) => {
  return axios({
    method: 'POST',
    headers: {
      ContentType: 'application/json',
      authorization: auth
    },
    url: `http://localhost:3090/message/delete/${messageId}`
  });
};

const addFollower = (username, auth) => {
  return axios({
    method: 'POST',
    headers: {
      ContentType: 'application/json',
      authorization: auth
    },
    url: `http://localhost:3090/add/follower/${username}`
  });
};

const getAnyUser = username => {
  return axios.get(`http://localhost:3090/get/user/${username}`, {});
};

export default {
  signup: data => signup(data),
  signin: data => signin(data),
  getuser: token => getuser(token),
  getAnyUser: username => getAnyUser(username),
  sendMessage: payload => sendMessage(payload),
  getMessages: (username, auth) => getMessages(username, auth),
  getAllMessages: auth => getAllMessages(auth),
  deleteMessage: (messageId, auth) => deleteMessage(messageId, auth),
  addFollower: (username, auth) => addFollower(username, auth)
};
