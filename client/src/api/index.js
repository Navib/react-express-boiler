import axios from 'axios';
import actions from '../actions';

const signup = data => {
  return axios.post('http://localhost:3090/signup', data.payload);
};

export default {
  signup: data => signup(data)
};
