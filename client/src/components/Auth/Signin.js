import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SIGN_IN } from '../../actions';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      console.log('signin push');
      this.props.history.push('/profile');
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign in!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signin: (data, callback) => {
      dispatch({ type: SIGN_IN, payload: data, callback: callback });
    }
  };
};
export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'signin' })
)(Signin);
