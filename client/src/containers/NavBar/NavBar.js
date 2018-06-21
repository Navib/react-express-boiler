import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TheComponent from '../../components/NavBar/NavBar';

const mapStateToProps = (state, ownProps) => {
  return { authenticated: state.auth.authenticated };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
const NavBar = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TheComponent)
);

export default NavBar;
