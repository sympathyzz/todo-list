import React from 'react'

class ToDo extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.todo}</p>
            </div>
        )
    }
}

export default ToDo