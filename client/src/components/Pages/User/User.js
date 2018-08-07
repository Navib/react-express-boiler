import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SendChat from '../../Chatter/SendChat';
import ChatList from '../../../containers/ChatList/ChatList';
import UserDash from '../../../containers/UserDash/UserDash';
import ProfileHeader from '../../../containers/ProfileHeader/ProfileHeader';
import ProfileDash from '../../../containers/ProfileDash/ProfileDash';

class User extends Component {
  componentDidMount() {
    this.props.getSelectedProfile(this.props.match.params.userId);
  }

  componentDidUpdate() {
    console.log('props updated', this.props.selectedProfile);
  }
  render() {
    return (
      <div>
        <Grid container className="">
          <Grid item xs={12} sm={12}>
            <ProfileHeader />
            <ProfileDash
              selectedFollowers={this.props.selectedProfile.followers}
              selectedFollowing={this.props.selectedProfile.following}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container justify="center">
              User Info
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justify="flex-start">
              <SendChat />
              <ChatList />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container justify="center">
              SideBar #2
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

User.propTypes = {};

User.defaultProps = {};

export default withRouter(User);
