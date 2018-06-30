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
  console.log('save message', payload);
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

export default {
  signup: data => signup(data),
  signin: data => signin(data),
  getuser: token => getuser(token),
  sendMessage: payload => sendMessage(payload),
  getMessages: (username, auth) => getMessages(username, auth)
};
