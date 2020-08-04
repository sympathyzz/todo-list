import React from 'react'
import Todo from '../Todo'

class ToDoList extends React.Component {

    render() {
        return  (<React.Fragment>
                <h2>todo list</h2>
                <div>
                    {this.props.todoList.map((todo, index) => <Todo key={index} todo={todo} />)}
                </div>
            </React.Fragment>)
        
    }
}

export default ToDoList