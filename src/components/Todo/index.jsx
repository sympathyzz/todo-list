import React from 'react'
import './todo.css';
import api from '../../api'
import { Input } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

class ToDo extends React.Component {

    handleDelete = () => {
        api.deleteOne(this.props.todo.id).then(response => {
            this.props.deleteTodo(this.props.todo.id)
        })
    }
    handleMark = () => {
        api.update(this.props.todo.id).then(response => {
            this.props.markTodo(this.props.todo.id)
        })
    }
    render() {
        return (
            <React.Fragment>
                <Input onClick={this.handleMark} className={this.props.todo.status ? "done" : "notDone"}
                    value={this.props.todo.content} style={{ width: 814, textAlign: 'center' ,marginTop:5}} readOnly></Input>
                <CloseOutlined onClick={this.handleDelete} style={{ left: -20, position: "relative" }} />
            </React.Fragment>
        )
    }
}

export default ToDo