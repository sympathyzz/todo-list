import React from 'react'

class ToDo extends React.Component {
    handleDelete=()=> {
        this.props.deleteTodo(this.props.index)
    }
    render() {
        return (
            <div>
                <span>{this.props.todo}</span>
                <input type="submit" value="删除" onClick={this.handleDelete}></input>
            </div>
        )
    }
}

export default ToDo