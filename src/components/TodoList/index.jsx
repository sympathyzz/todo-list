import React from 'react'
import TodoContainer from '../../containers/TodoContainer'

class ToDoList extends React.Component {


    render() {
        return  (<React.Fragment>
                <h2>todo list</h2>
                <div>
                    {this.props.todoList.map((item, index) => <TodoContainer key={index} index={index} item={item} />)}
                </div>
            </React.Fragment>)
        
    }
}

export default ToDoList