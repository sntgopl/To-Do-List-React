/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    const { todos, handleChangeProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChangeProps} />
        ))}
      </ul>
    );
  }
}

export default TodosList;
