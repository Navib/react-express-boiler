import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import List from '@material-ui/core/List';
import ChatCard from './ChatCard';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiFired: false
    };
  }
  componentDidMount() {
    if (this.props.match.params.userId) {
      this.props.getActiveUserMessages(this.props.match.params.userId, null);
    } else {
      this.props.getAllMessages('all', null);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.username != this.props.username) {
      this.props.getUserMessages(this.props.username, this.props.auth);
    }
  }

  renderMessages() {
    if (this.props.match.url === '/') {
      return this.props.allMessages.map(message => {
        if (message.sentBy === this.props.username) {
          return (
            <ChatCard message={message} adminMenu={true} key={Math.random()} />
          );
        } else {
          return (
            <ChatCard message={message} adminMenu={false} key={Math.random()} />
          );
        }
      });
    } else if (this.props.match.path === '/profile/:userId') {
      return this.props.messages.map(message => {
        return (
          <ChatCard message={message} adminMenu={true} key={Math.random()} />
        );
      });
    } else {
      return this.props.activeProfile.messages.map(message => {
        return (
          <ChatCard message={message} adminMenu={false} key={Math.random()} />
        );
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">{this.renderMessages()}</List>
      </div>
    );
  }
}

ChatList.propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.any
};
ChatList.defaultProps = {};

export default withStyles(styles)(withRouter(ChatList));
