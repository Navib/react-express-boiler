import React from 'react';
import ChatList from '../../../containers/ChatList/ChatList';
import UserDash from '../../../containers/UserDash/UserDash';
import getProfile from '../../HOC/getProfile';

const Home = props => {
  return (
    <div>
      <h1>HomePage</h1>
      <UserDash />
      <ChatList />
    </div>
  );
};

export default getProfile(Home);
