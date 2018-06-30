import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = ['Pin', 'Delete'];

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

  utilDisptach = (clicked, messageId) => {
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
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
              onClick={() => this.utilDisptach(option, this.props.messageId)}
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

VertMenu.propTypes = {
  messageId: PropTypes.any
};
VertMenu.defaultProps = {};

export default VertMenu;
