import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProfileHeader extends Component {
  renderHeader() {
    if (this.props.match.path === '/user/:userId') {
      return (
        <img
          src={`http://via.placeholder.com/800x260?text=${
            this.props.match.params.userId
          }`}
          style={{
            margin: '0 auto',
            display: 'block',
            width: '100%',
            height: '260px'
          }}
        />
      );
    } else {
      return (
        <img
          src={`http://via.placeholder.com/800x260?text=${this.props.username}`}
          style={{
            margin: '0 auto',
            display: 'block',
            width: '100%',
            height: '260px'
          }}
        />
      );
    }
  }
  render() {
    return <div>{this.renderHeader()}</div>;
  }
}

export default withRouter(ProfileHeader);
