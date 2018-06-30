import React from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../../HOC/requireAuth';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SendChat from '../../Chatter/SendChat';
import ChatList from '../../../containers/ChatList/ChatList';

const Profile = props => {
  const classes = {
    backGround: {
      backGround: 'red'
    }
  };
  return (
    <div>
      <Grid container className="" spacing={16}>
        <Grid item xs={12} sm={3}>
          <Grid container justify="center" spacing={Number(16)}>
            SideBar
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container justify="flex-start" spacing={Number(16)}>
            <SendChat />
            <ChatList />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid container justify="center" spacing={Number(16)}>
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
