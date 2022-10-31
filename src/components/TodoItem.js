/* eslint-disable react/prop-types */
import React from 'react';

function TodoItem(props) {
  const { todo } = props;
  const { id, title } = todo;
  return (
    <React.StrictMode>
      <li key={id}>{title}</li>
    </React.StrictMode>
  );
}

export default TodoItem;
