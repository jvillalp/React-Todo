import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task:'Code App',
          id: 1,
          completed: false
        },
        {
          task:'cook',
          id: 2,
          completed: false
        }
      ],
      todo: ''
    }
  }
//   addNewTodo = todoText =>{
//     const newtodo = {
//       task: todoText,
//       id: Date.now(),
//       completed: false,
//     };
//     this.setState({
//       todos: [ ...this.state.todos, newtodo]
//     })
// }

addTodo = e =>{
  e.preventDefault();
  console.log(e);
  const newtodo = {
    task: this.state.todo,
    id: Date.now(),
    completed: false
  };
  console.log(newtodo);
  this.setState({
    todos: [...this.state.todos, newtodo],
    todo:''
  })
}
handleChange = e =>{
  this.setState({ [e.target.name]: e.target.value})
}
toggleItem = id =>{
  const newtodoList = this.state.todos.map(item =>{
    console.log(id)
    if(item.id ===id) {
      return {
        ...item,
        completed: !item.completed
      };
    } else {
      return item;
    }
  });
  this.setState({
    todos: newtodoList
  })
}
// toggleItem = Id =>{
//   const complete = this.state.todos.map(item =>{
//     console.log(Id)
//     if(item.id ===Id) {
//       item.completed = !item.completed;
//       return item
//     } else {
//       return item;
//     }
//   });
//   this.setState({
//     complete
//   })
// }
deleteTodo = e =>{
  e.preventDefault();
  this.setState({
    todos: this.state.todos.filter(e=>{
      return e.completed === false
    })
  })
};
  render() {
    console.log('updating...');
    return (
      <div className="App">
        <h2>To-do List:</h2>
        <TodoList 
        todos={this.state.todos}
        toggleItem={this.toggleItem}
        />
        <TodoForm 
          value={this.state.todo}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
