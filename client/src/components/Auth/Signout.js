import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIGN_OUT } from '../../actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return <div>Sorry to See you go!</div>;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signout: () => {
      dispatch({ type: SIGN_OUT, payload: '' });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Signout);
