import React from 'react'
import TodoContainer from '../../containers/TodoContainer'
import api from '../../api'

class ToDoList extends React.Component {
    componentDidMount(){
        console.log(111);
        api.getAll().then(response=>{
            this.props.getAll(response.data)
        document.getElementById('inputValue').value=""
        })
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