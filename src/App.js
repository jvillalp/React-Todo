import React from 'react';
const todo =[
  {
    name:'Code App',
    id: 123,
    purchased: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor()
  addNewTodo = todoText =>{
    const newtodo = {
      name: todoText,
      id: Date.now(),
      purchased: false,
    };
    this.setState({
      todoList: [ ...this.state.todoList, newtodo]
    })
}


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
