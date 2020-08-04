import React from 'react'
import TodoContainer from '../../containers/TodoContainer'

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return  (<React.Fragment>
                <h2>todo list</h2>
                <div>
                    {this.props.todoList.map((item, index) => <TodoContainer key={index} index={index} item={item} isDone={this.props.isDone}/>)}
                </div>
            </React.Fragment>)
        
    }
}

export default ToDoList