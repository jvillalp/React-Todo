import React, { Component } from "react";


class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            newTodo: ''
        };
    }
    handleChanges = event =>{
        this.setState({
            newTodo: event.target.value
        });
    };

    handleSubmit = event =>{
        event.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
        this.setState({ newTodo: ''});
    };

    render(){
        console.log('updating Form...');
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="newTodo" 
                value={this.state.newTodo}
                onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}
export default TodoForm;
