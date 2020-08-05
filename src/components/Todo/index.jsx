import React from 'react'
import './todo.css';

class ToDo extends React.Component {

    handleDelete=()=> {
        this.props.deleteTodo(this.props.todo.id)
    }
    handleMark=()=>{
        this.props.markTodo(this.props.todo.id)
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