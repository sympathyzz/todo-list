import React from 'react'

class ToDoForm extends React.Component {

    handleSubmit=()=> {
        let inputValue = document.getElementById('inputValue').value;
        this.props.addToDo(inputValue)
        document.getElementById('inputValue').value=""
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