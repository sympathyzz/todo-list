import React from 'react'
import './todo.css';

class ToDo extends React.Component {

    handleDelete=()=> {
        this.props.deleteTodo(this.props.index)
    }
    handleMark=()=>{
        this.props.markTodo(this.props.index)
    }
    render() {
        return (
            <div>
                <span onClick={this.handleMark} className={this.props.item.isDone?"done":"notDone"}>{this.props.item.text}</span>
                <input type="submit" value="删除" onClick={this.handleDelete}></input>
            </div>
        )
    }
}

export default ToDo