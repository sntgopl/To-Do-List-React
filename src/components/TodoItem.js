/* eslint-disable react/prop-types */
import React from 'react';

function TodoItem(props) {
  const { todo } = props;
  const { id, title, completed } = todo;
  return (
    <React.StrictMode>
      <li key={id}>
        <input type="checkbox" checked={completed} />
        {title}
      </li>
    </React.StrictMode>
  );
}

export default TodoItem;
