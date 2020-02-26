import React from "react";


const TodoForm = props => {
    // constructor(){
    //     super();
    //     this.state = {
    //         newTodo: ''
    //     };
    // }
    // handleChanges = event =>{
    //     this.setState({
    //         newTodo: event.target.value
    //     });
    // };

    // handleSubmit = event =>{
    //     event.preventDefault();
    //     this.props.addNewTodo(this.state.newTodo);
    //     this.setState({ newTodo: ''});
    // };

    // render(){
    //     console.log('updating Form...');
        return(
            <form >
                <input 
                type="text" 
                name="todo" 
                value={props.value}
                onChange={props.handleChange}
                />
                <button onClick={props.addTodo}>Add</button>
                <button onClick={props.deleteTodo}>Completed</button>
            </form>
        )
    }
// }
export default TodoForm;
