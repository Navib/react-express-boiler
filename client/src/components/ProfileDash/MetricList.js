import React from 'react';
import PropTypes from 'prop-types';
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

const menu = [
  { id: 0, name: 'Messages', link: '#', count: '10' },
  { id: 1, name: 'Follows', link: '#', count: '10' },
  { id: 2, name: 'Followers', link: '#', count: '10' },
  { id: 3, name: 'Likes', link: '#', count: '10' }
];

const MetricList = props => {
  return (
    <List style={metricStyle.list} component="nav">
      {props.menuItems.map(item => (
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
  menuItems: PropTypes.any
};

MetricList.defaultProps = {
  menuItems: menu
};

export default MetricList;
