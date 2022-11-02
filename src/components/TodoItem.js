/* eslint-disable react/prop-types */
import React from 'react';

function TodoItem(props) {
  const { todo, handleChangeProps } = props;
  const { id, title, completed } = todo;
  return (
    <React.StrictMode>
      <li key={id}>
        <input type="checkbox" checked={completed} onChange={() => handleChangeProps(id)} />
        {title}
      </li>
    </React.StrictMode>
  );
}

export default TodoItem;
