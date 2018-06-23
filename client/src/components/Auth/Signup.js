import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { CHANGE_AUTH } from '../../actions';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/profile');
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
            name="username"
            type="text"
            component={TextField}
            autoComplete="none"
            floatingLabelText="Username"
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
          Sign up!
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: (data, callback) => {
      dispatch({ type: CHANGE_AUTH, payload: data, callback: callback });
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'signup' })
)(Signup);
