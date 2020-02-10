import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'

const todos =[
  {
    name:'Code App',
    id: 123,
    completed: false
  },
  {
    name:'cook',
    id: 1235,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos:[],
      todo: ''
    };
  }
  addTodo = event =>{
    event.preventDefault();
    const newTodo = {
      name: this.state.todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [ ...this.state.todos, newTodo]
    })
}
toggleItem = Id =>{
  const newtodoList = this.state.todoList.map(item =>{
    if(item.id ===Id) {
      return {
        ...item,
        completed: !item.completed
      };
    } else {
      return item;
    }
  });
  this.setState({
    todoList: newtodoList
  })
}

  render() {
    console.log('updating...');
    return (
      <div className="App">
        <h2>Todo List:</h2>
        <TodoList 
        todo={this.state.todoList}
        toggleItem={this.toggleItem}
        />
        <TodoForm 
          addNewTodo={this.addNewTodo}
        />
      </div>
    );
  }
}

export default App;
