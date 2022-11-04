import React from 'react';

const InputTodo = () => (
  <div>
    <form className="form">
      <input type="text" className="taskInput" placeholder="write your task here..." />
      <button type="button" className="addButton">Add Task</button>
    </form>
  </div>
);

export default InputTodo;
