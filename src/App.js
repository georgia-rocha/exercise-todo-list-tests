import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      removedTodo: [],
      selectedTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo(todo) {

  }

  removeTodo(todo) {

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
            <li
              key={ index + 1 }
              onClick={ () => this.selectTodo(todo) }
              onKeyDown={ () => this.selectTodo(todo) }
              role="presentation"
            >
              <Item content={ todo } />
              {/* Colocar o botão aqui */}
            </li>
          )) }
        </ul>
      </main>
    );
  }
}

export default App;
