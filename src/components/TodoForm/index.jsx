import React from 'react'
import api from '../../api'
import {Button,Input, Space} from 'antd'

class ToDoForm extends React.Component {

    handleSubmit=()=> {
        let inputValue = document.getElementById('inputValue').value;
        let todo={
            content:inputValue,
            status:false
        }
        api.insert(todo).then(response=>{
            this.props.addToDo(response.data)
        })
    }

    render() {
       
        return (
            <div>
                <Space>
                <Input id="inputValue" type="text" style={{ width:500 }}/>
                <Button type="primary" onClick={this.handleSubmit}>提交</Button>
                </Space>
            </div>
        )
    }
}

export default ToDoForm