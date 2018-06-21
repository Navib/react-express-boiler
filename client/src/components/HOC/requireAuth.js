import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_USER } from '../../actions';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
      this.getProfile();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
      this.getProfile(this.props.auth);
    }

    getProfile() {
      if (this.props.auth) {
        this.props.getUser(this.props.auth);
      }
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth.authenticated };
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getUser: token => {
        dispatch({ type: GET_USER, payload: token });
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComposedComponent);
};
