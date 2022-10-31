import React from 'react';

class TodosList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

export default TodosList;
