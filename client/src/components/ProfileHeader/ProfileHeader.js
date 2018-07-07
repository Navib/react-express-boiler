import React from 'react';
import getProfile from '../HOC/getProfile';

const ProfileHeader = props => {
  console.log(props);
  return (
    <img
      src={`http://via.placeholder.com/800x260?text=${props.username}`}
      style={{
        margin: '0 auto',
        display: 'block',
        width: '100%',
        height: '260px'
      }}
    />
  );
};

export default ProfileHeader;
