import React from 'react';
import TodosList from './TodoList';
import Header from './Header';
import Navbar from './Navbar';
import InputTodo from './InputTodo';

class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    // const { task } = this.state;
    this.setState({
      /* eslint-disable no-param-reassign */
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
    /* eslint-disable no-param-reassign */
  };

  render() {
    const { todos } = this.state;
    return (
      <ul className="headContainer">
        <Navbar />
        <Header />
        <InputTodo />
        <TodosList todos={todos} handleChangeProps={this.handleChange} />
      </ul>
    );
  }
}
export default TodoContainer;
