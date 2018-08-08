import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';

class SearchForm extends Component {
  onSubmit = formProps => {
    this.props.search(formProps, () => {
      console.log('ok submited', formProps);
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <Field
            name="search"
            type="text"
            component={TextField}
            autoComplete="none"
            floatingLabelText="Search"
            fullWidth
            required
          />
        </fieldset>

        <Button variant="outlined" color="primary" type="submit">
          Search
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    search: data => {
      console.log('Clicked!', data);
    }
  };
}

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  ),
  reduxForm({ form: 'search' })
)(SearchForm);
