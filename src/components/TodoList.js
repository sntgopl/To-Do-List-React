/* eslint-disable react/prop-types */
import React from 'react';

class TodosList extends React.PureComponent {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

export default TodosList;
