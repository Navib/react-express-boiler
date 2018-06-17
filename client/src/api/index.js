import axios from "axios";
import actions from "../actions";

const makeRequest = (urlExtension, data = {}) =>
  axios.get("https://api.myjson.com/bins/15vnj7", data, {
    withCredentials: false
  });

export default {
  getStuff: () => makeRequest("getStuff.php")
};
