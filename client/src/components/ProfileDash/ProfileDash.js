import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import MetricList from './MetricList';
import Avatar from '@material-ui/core/Avatar';
import FollowButton from '../../containers/common/FollowButton/FollowButton';

class ProfileDash extends Component {
  componentDidMount() {
    this.props.getFollowers(this.props.match.params.userId);
  }

  render() {
    console.log(this.props);
    const { messages, activeProfile, following } = this.props;
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
          <MetricList
            messagesSent={messages}
            activeProfile={activeProfile}
            followers={following}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          sm={3}
        >
          <FollowButton />
        </Grid>
      </Grid>
    );
  }
}

ProfileDash.propTypes = {
  messagesSent: PropTypes.any,
  activeProfile: PropTypes.any
};
ProfileDash.defaultProps = {};

export default withRouter(ProfileDash);
