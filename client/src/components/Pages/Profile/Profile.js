import React from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../../HOC/requireAuth';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SendChat from '../../Chatter/SendChat';
import ChatList from '../../../containers/ChatList/ChatList';
import UserDash from '../../../containers/UserDash/UserDash';

const Profile = props => {
  const classes = {
    backGround: {
      backGround: 'red'
    }
  };
  return (
    <div>
      <Grid container className="">
        <Grid item xs={12} sm={3}>
          <Grid container justify="center">
            <UserDash />
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
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default requireAuth(Profile);
