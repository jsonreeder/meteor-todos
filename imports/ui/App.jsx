import React from 'react';

import Task from './Task.jsx';

// App component

export default class App extends React.Component {
  getTasks() {
    return [
      { _id: 1, text: 'Necktie' },
      { _id: 2, text: 'Cravat' },
      { _id: 3, text: 'Pettycoat' },
    ];
  }

  renderTasks() {
    return this.getTasks().map(task => (
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