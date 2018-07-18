import React, { Component } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import MetricList from './MetricList';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

class ProfileDash extends Component {
  render() {
    return (
      <Grid container className="profile-dash">
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classNames('avatar-container')}
          xs={12}
          sm={3}
        >
          <Avatar
            alt="User Avatar"
            src="http://via.placeholder.com/200x200?text=User+Avatar"
            className={classNames('avatar-img')}
          />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          sm={6}
        >
          <MetricList />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          sm={3}
        >
          <Button variant="outlined" color="primary">
            Edit/Follow
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default ProfileDash;
