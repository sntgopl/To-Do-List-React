import React from 'react';

class TodoItem extends React.PureComponent {
  render() {
    const { todo } = this.props;
    return <li>{this.props.todo.title}</li>;
  }
}

export default TodoItem;
