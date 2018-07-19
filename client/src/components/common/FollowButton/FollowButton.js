import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const FollowButton = props => {
  const renderButton = () => {
    if (props.match.path === '/user/:userId') {
      return (
        <Button variant="outlined" color="primary">
          <Typography variant="button" gutterBottom>
            Follow
          </Typography>
        </Button>
      );
    } else {
      return (
        <Button variant="outlined" color="primary">
          <Link to="/profile/edit" className={classNames('edit-btn')}>
            <Typography variant="button" gutterBottom>
              Edit Profile
            </Typography>
          </Link>
        </Button>
      );
    }
  };

  return <div>{renderButton()}</div>;
};

FollowButton.propTypes = {};
FollowButton.defaultProps = {};

export default withRouter(FollowButton);
