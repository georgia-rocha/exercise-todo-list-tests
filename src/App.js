import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleEvent({ target }) {
    this.setState({
      selectTask: target.innerHTML,
    });
  }

  handleRemove() {
    const { listTodo, selectTask } = this.state;
    const newArr = listTodo.filter((itemList) => itemList !== selectTask);
    this.setState({
      listTodo: newArr,
    });
  }

  removeTodo(indexTodo) {
    this.setState((prevState) => ({
      listTodo: prevState.listTodo.filter((_, index) => index !== indexTodo),
    }));
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  render() {
    const { listTodo } = this.state;

    return (
      <main className="App">
        <InputTodo
          addTodo={ (todo) => this.addTodo(todo) }
        />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>

              <Item content={ todo } />
              <button
                type="button"
                onClick={ () => this.removeTodo(index) }
              >
                Remover
              </button>
            </li>
          )) }
        </ul>
      </main>
    );
  }
}

export default App;
