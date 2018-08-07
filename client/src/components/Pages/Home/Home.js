import React from 'react';
import Grid from '@material-ui/core/Grid';
import ChatList from '../../../containers/ChatList/ChatList';
import UserDash from '../../../containers/UserDash/UserDash';
import getProfile from '../../HOC/getProfile';

const Home = props => {
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

export default getProfile(Home);
