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
      this.props.getUserMessages(this.props.match.params.userId, null);
    } else {
      this.props.getAllMessages('all', null);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('chat', this.props);
    if (prevProps.username != this.props.username) {
      this.props.getUserMessages(this.props.username, this.props.auth);
    }
  }

  renderMessages() {
    if (this.props.match.url === '/') {
      return this.props.allMessages.map(message => {
        return <ChatCard message={message} key={Math.random()} />;
      });
    } else {
      return this.props.messages.map(message => {
        return <ChatCard message={message} key={Math.random()} />;
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
