import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ErrorMessage extends Component {

  static propTypes = {
    error: PropTypes.object
  };

  render() {
    const { message = 'Error' } = this.props.error || {};

    return (
      <div className="error-message">
        {message}
      </div>
    );
  }
}
