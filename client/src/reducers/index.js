import { combineReducers } from "redux";
import basicReducer from "./basic_reducer";
import stuffReducer from "./stuff_reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  routing: routerReducer,
  text: basicReducer,
  stuff: stuffReducer
});

export default rootReducer;
