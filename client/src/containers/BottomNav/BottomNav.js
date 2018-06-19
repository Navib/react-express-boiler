import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CHANGE_AUTH } from '../../actions';
import TheComponent from '../../components/BottomNav/BottomNav';

const mapStateToProps = (state, ownProps) => {
  return { authenticated: state.auth.authenticated };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
const BottomNav = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TheComponent)
);

export default BottomNav;
