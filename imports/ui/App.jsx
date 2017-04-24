import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

// App component

class App extends React.Component {
  getTasks() {
    return [
      { _id: 1, text: 'Necktie' },
      { _id: 2, text: 'Cravat' },
      { _id: 3, text: 'Pettycoat' },
    ];
  }

  renderTasks() {
    return this.props.tasks.map(task => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    )
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);