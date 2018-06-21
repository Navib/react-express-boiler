import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Typography from '@material-ui/core/Typography';

import Signup from '../Auth/Signup';
import Signin from '../Auth/Signin';
import AuthModal from '../common/Modal/AuthModal';

class NavBar extends Component {
  renderNav() {
    if (this.props.authenticated) {
      return (
        <div>
          <AppBar title="Title" iconElementLeft={<IconButton />}>
            <Toolbar>
              <Typography
                variant="body2"
                gutterBottom
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                Welcome $userName
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
    }

    return (
      <div>
        <AppBar title="Title" iconElementLeft={<IconButton />}>
          <Toolbar>
            <AuthModal modalTitle={'Welcome Back'} buttonText={'Sign in'}>
              <Signin history={this.props.history} />
            </AuthModal>
            <AuthModal modalTitle={'New user? Sign up!'} buttonText={'Sign up'}>
              <Signup history={this.props.history} />
            </AuthModal>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  render() {
    return <div>{this.renderNav()}</div>;
  }
}

export default NavBar;
