import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MoodIcon from '@material-ui/icons/Mood';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import VertMenu from '../../containers/ChatList/VertMenu';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

class ChatCard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const { classes, message } = this.props;
    const data = message.messageSent
      ? moment(message.messageSent).format('dddd, MMMM Do YYYY, h:mm:ss a')
      : moment(message.timeSent.toISOString()).format(
          'dddd, MMMM Do YYYY, h:mm:ss a'
        );
    return (
      <ListItem divider>
        <Card style={{ width: '100%' }}>
          <CardContent>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className="center-card-typeography"
            >
              <Link to={`/user/${message.sentBy}`}>
                <span>
                  <Avatar
                    alt="Remy Sharp"
                    src="http://via.placeholder.com/120x120"
                    className="message-avatar"
                  />
                  @{message.sentBy}
                </span>
              </Link>
              <VertMenu
                messageId={message.messageId}
                adminMenu={this.props.adminMenu}
              />
            </Typography>

            <Typography variant="body1" gutterBottom>
              {message.message ? message.message : message.body}
            </Typography>
            <Typography variant="caption" gutterBottom align="right">
              {data}
            </Typography>
          </CardContent>
        </Card>
      </ListItem>
    );
  }
}

ChatCard.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.object
};
ChatCard.defaultProps = {
  message: null
};

export default withStyles(styles)(ChatCard);
