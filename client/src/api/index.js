import axios from 'axios';
import actions from '../actions';

const signup = data => {
  return axios.post('http://localhost:3090/signup', data.payload);
};

const signin = data => {
  return axios.post('http://localhost:3090/signin', data.payload);
};

export default {
  signup: data => signup(data),
  signin: data => signin(data)
};
