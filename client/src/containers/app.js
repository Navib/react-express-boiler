import { connect } from 'react-redux';
import actions from '../actions/';

import TheComponent from '../components/app';

const mapStateToProps = (state, ownProps) => {
  return {
    buttonText: state.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: actions.BASIC_ACTION, text: 'new text' });
    }
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default App;
