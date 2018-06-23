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

export default {
  signup: data => signup(data),
  signin: data => signin(data),
  getuser: token => getuser(token)
};
