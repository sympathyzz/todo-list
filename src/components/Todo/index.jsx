import React from 'react'
import './todo.css';
import api from '../../api'

class ToDo extends React.Component {

    handleDelete=()=> {       
        api.deleteOne(this.props.todo.id).then(response=>{
            this.props.deleteTodo(this.props.todo.id)
        })
    }
    handleMark=()=>{      
        api.update(this.props.todo).then(response=>{
            this.props.markTodo(this.props.todo.id)
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleMark} className={this.props.todo.status?"done":"notDone"}>{this.props.todo.content}</span>
                <input type="submit" value="删除" onClick={this.handleDelete}></input>
            </div>
        )
    }
}

export default ToDo