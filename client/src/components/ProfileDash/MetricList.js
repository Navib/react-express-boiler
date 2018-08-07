import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const metricStyle = {
  list: {
    display: 'flex',
    listStyleType: 'none',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingLeft: '0'
  },
  anchorTag: {
    textDecoration: 'none',
    color: '#000'
  },
  p: {
    margin: '0 auto'
  },
  li: {
    paddingTop: '0',
    paddingBottom: '0'
  }
};

const MetricList = props => {
  const renderMenu = () => {
    let menu;
    if (props.match.path === '/user/:userId') {
      return (menu = [
        {
          id: 0,
          name: 'Messages',
          link: '#',
          count: `${props.activeProfile.messages.length}`
        },
        {
          id: 1,
          name: 'Follows',
          link: '#',
          count: `${props.selectedFollowing.length}`
        },
        {
          id: 2,
          name: 'Followers',
          link: '#',
          count: `${props.selectedFollowers.length}`
        },
        { id: 3, name: 'Likes', link: '#', count: '10' }
      ]);
    } else {
      return (menu = [
        {
          id: 0,
          name: 'Messages',
          link: '#',
          count: `${props.messagesSent.length}`
        },
        {
          id: 1,
          name: 'Follows',
          link: '#',
          count: `${props.following.length}`
        },
        {
          id: 2,
          name: 'Followers',
          link: '#',
          count: `${props.followers.length}`
        },
        { id: 3, name: 'Likes', link: '#', count: '10' }
      ]);
    }
  };

  return (
    <List style={metricStyle.list} component="nav">
      {renderMenu().map(item => (
        <ListItem key={item.id} button style={metricStyle.li}>
          <a href={item.link} style={metricStyle.anchorTag}>
            <small>{item.name}</small>
            <p style={metricStyle.p}>{item.count}</p>
          </a>
        </ListItem>
      ))}
    </List>
  );
};

MetricList.propTypes = {
  menuItems: PropTypes.any,
  messagesSent: PropTypes.any,
  activeProfile: PropTypes.any,
  followers: PropTypes.any
};

MetricList.defaultProps = {};

export default withRouter(MetricList);
