import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SIGN_IN } from '../../actions';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push(`/profile/${this.props.username}`);
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <Field
            name="email"
            type="text"
            component={TextField}
            autoComplete="none"
            floatingLabelText="Email"
            fullWidth
            required
          />
        </fieldset>
        <fieldset>
          <Field
            name="password"
            type="password"
            component={TextField}
            autoComplete="none"
            floatingLabelText="Password"
            fullWidth
            required
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <Button variant="outlined" color="primary" type="submit">
          Sign in
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
    username: state.user.username
  };
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
