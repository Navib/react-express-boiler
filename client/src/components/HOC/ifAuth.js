import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.noNeedToRender();
    }

    componentDidUpdate() {
      this.noNeedToRender();
    }

    noNeedToRender() {
      if (this.props.auth) {
        return <div style={{ display: 'none' }} />;
      }
      return <ChildComponent {...this.props} />;
    }

    render() {
      return <div>{this.noNeedToRender()}</div>;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
