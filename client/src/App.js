import React, { Component } from 'react';
import Todos from "./components/Todos";
import AddTodo from "./components/AddForm";


class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy rice"},
      {id: 2, content: "pay cell phone bill"}
    ]
  }
n
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id;
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    // const addedTodo = this.state.todo
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className=" center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

