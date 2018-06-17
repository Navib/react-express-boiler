import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CHANGE_AUTH } from '../../actions';
import TheComponent from '../../components/BottomNav/BottomNav';

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeAuth: logged => {
      dispatch({ type: CHANGE_AUTH, payload: logged });
    }
  };
};
const BottomNav = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TheComponent)
);

export default BottomNav;
