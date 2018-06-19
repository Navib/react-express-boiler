import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { SIGN_OUT } from '../../actions';
import requireAuth from '../HOC/requireAuth';

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

export default compose(
  requireAuth,
  connect(
    null,
    mapDispatchToProps
  )
)(Signout);
