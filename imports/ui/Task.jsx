import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Task component - a single todo
export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};