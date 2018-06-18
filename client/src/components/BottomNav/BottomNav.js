import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import { Link, withRouter } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import TextSmsIcon from '@material-ui/icons/TextSms';

const styles = {
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0
  }
};

class BottomNav extends React.Component {
  state = {
    value: '/'
  };

  componentDidMount() {}

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(`/${value}`);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction label="Home" value="" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<AccountCircleIcon />}
        />
        <BottomNavigationAction
          label="Messages"
          value="messages"
          icon={<TextSmsIcon />}
        />
        <BottomNavigationAction
          label="signout"
          value="signout"
          icon={<PowerSettingsNewIcon />}
        />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(BottomNav));
