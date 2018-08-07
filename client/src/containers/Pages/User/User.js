import React from 'react';
import { connect } from 'react-redux';
import { GET_SELECTED_PROFILE } from '../../../actions';
import TheComponent from '../../../components/Pages/User/User';

const mapStateToProps = state => {
  return {
    selectedProfile: state.selectedProfile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSelectedProfile: username => {
      dispatch({ type: GET_SELECTED_PROFILE, payload: username });
    }
  };
};

const User = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default User;
