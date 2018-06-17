import actions from "../actions";

const basicReducer = (state = "some other text", action) => {
  switch (action.type) {
    case actions.BASIC_ACTION:
      return action.text;
    default:
      return state;
  }
};
export default basicReducer;
