import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';
import { SEND_MESSAGE } from '../../actions';

class SendChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        body: null,
        timeSent: null,
        sentBy: this.props.username
      }
    };
  }
  onSubmit = formProps => {
    this.setState(
      {
        message: {
          body: formProps.message,
          timeSent: new Date(),
          sentBy: this.props.username
        }
      },
      () =>
        this.props.sendMessage(this.state.message, () => {
          console.log('sendMessage push', this.state.message);
        })
    );
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form style={{ width: '100%' }} onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <Field
            name="message"
            type="text"
            component={TextField}
            autoComplete="none"
            floatingLabelText="Chat"
            fullWidth
            required
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <Button variant="outlined" color="primary" type="submit">
          Send
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { username: state.user.username };
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendMessage: data => {
      dispatch({ type: SEND_MESSAGE, payload: data });
    }
  };
};
export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'sendChat' })
)(SendChat);
