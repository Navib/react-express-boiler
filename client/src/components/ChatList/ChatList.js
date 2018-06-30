import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

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
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (prevProps.username != this.props.username) {
      this.props.getUserMessages(this.props.username, this.props.auth);
    }
  }

  renderMessages() {
    return this.props.messages.map(message => {
      console.log('rendering', String(message.timeSent));
      const data = message.messageSent
        ? moment(message.messageSent).format('dddd, MMMM Do YYYY, h:mm:ss a')
        : moment(message.timeSent.toISOString()).format(
            'dddd, MMMM Do YYYY, h:mm:ss a'
          );
      return (
        <ListItem button key={Math.random()}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary={message.message ? message.message : message.body}
          />
          <ListItemText primary={message.sentBy} />
          <ListItemText primary={data} />
        </ListItem>
      );
    });
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
ChatList.defaultProps = {
  messages: null
};

export default withStyles(styles)(ChatList);
