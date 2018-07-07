import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [['Pin', 'Delete'], ['Mute', 'Report']];

class VertMenu extends React.Component {
  state = {
    anchorEl: null
  };

  componentDidMount() {}
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  utilDispatch = (clicked, messageId) => {
    this.setState({ anchorEl: null });
    switch (clicked) {
      case 'Delete':
        return this.props.deleteUserMessage(messageId, this.props.auth);
        break;
      default:
        return true;
    }
  };
  render() {
    const { anchorEl } = this.state;

    if (this.props.adminMenu) {
      return (
        <div>
          <IconButton
            aria-label="More"
            aria-owns={anchorEl ? 'long-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                width: 100
              }
            }}
          >
            {options[0].map(option => (
              <MenuItem
                key={option}
                selected={option === 'Pyxis'}
                onClick={() => this.utilDispatch(option, this.props.messageId)}
                className="vert-menu-item"
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      );
    } else {
      return (
        <div>
          <IconButton
            aria-label="More"
            aria-owns={anchorEl ? 'long-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                width: 100
              }
            }}
          >
            {options[1].map(option => (
              <MenuItem
                key={option}
                selected={option === 'Pyxis'}
                onClick={() => this.utilDispatch(option, this.props.messageId)}
                className="vert-menu-item"
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      );
    }
  }
}

VertMenu.propTypes = {
  messageId: PropTypes.any
};
VertMenu.defaultProps = {};

export default VertMenu;
