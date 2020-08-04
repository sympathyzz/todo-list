import React from 'react'
import './todo.css';

class ToDo extends React.Component {
    handleDelete=()=> {
        this.props.deleteTodo(this.props.index)
    }
    handleMark=()=>{
        this.props.markTodo(this.props.index)
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <span onClick={this.handleMark} className={!this.props.isDone?"done":"not-done"}>{this.props.item}</span>
                <input type="submit" value="删除" onClick={this.handleDelete}></input>
            </div>
        )
    }
}

export default ToDo