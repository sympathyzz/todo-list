import React from 'react'
import api from '../../api'

class ToDoForm extends React.Component {

    handleSubmit=()=> {
        let inputValue = document.getElementById('inputValue').value;
        let todo={
            content:inputValue,
            status:false
        }
        api.insert(todo).then(response=>{
            this.props.addToDo(response.data)
        document.getElementById('inputValue').value=""
        })
    }

    render() {
       
        return (
            <div>
                <input id="inputValue" type="text" />
                <input type="submit" onClick={this.handleSubmit} value="提交" />
            </div>
        )
    }
}

export default ToDoForm