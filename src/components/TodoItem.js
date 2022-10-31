/* eslint-disable react/prop-types */
import React from 'react';

class TodoItem extends React.PureComponent {
  render() {
    const { todo } = this.props;
    const { id, title } = todo;
    console.log(id);
    console.log(title);
    return <li key={id}>{title}</li>;
  }
}

export default TodoItem;
