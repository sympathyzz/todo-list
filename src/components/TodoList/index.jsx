import React from 'react'
import TodoContainer from '../../containers/TodoContainer'

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }


    render() {
        return  (<React.Fragment>
                <h2>todo list</h2>
                <div>
                    {this.props.todoList.map((todo, index) => <TodoContainer key={index} index={index} todo={todo} />)}
                </div>
            </React.Fragment>)
        
    }
}

export default ToDoList