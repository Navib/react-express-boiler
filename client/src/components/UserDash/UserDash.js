import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Metric from './Metric';

class UserDash extends Component {
  componentDidMount() {}
  componentDidUpdate(prevProps) {
    if (prevProps.username.length < this.props.username.length)
      this.props.getFollowers(this.props.username);
  }

  render() {
    return (
      <Paper className="userdash-paper" elevation={2}>
        <Grid item xs={12} sm={12} className="userdash">
          <Grid container justify="center">
            <Grid item xs={12} sm={12} className="userdash-user-meta">
              <Avatar
                alt="Remy Sharp"
                src="http://via.placeholder.com/120x120?text=User+Image"
                className="userdash-avatar"
              />
              <Typography
                variant="body1"
                gutterBottom
                align="right"
                className="userdash-name"
              >
                {this.props.username}
              </Typography>
            </Grid>
            <Metric
              messages={this.props.messages}
              followers={this.props.following}
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

UserDash.propTypes = {
  name: PropTypes.string,
  messages: PropTypes.array,
  followers: PropTypes.any
};

export default withRouter(UserDash);
