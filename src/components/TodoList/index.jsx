import React from 'react'
import TodoContainer from '../../containers/TodoContainer'
import api from '../../api'
import { List, Space, Divider } from 'antd';

class ToDoList extends React.Component {
    componentDidMount() {
        api.getAll().then(response => {
            this.props.getAll(response.data)
        })
    }

    render() {
        return (<React.Fragment>
            <h2>todo list</h2>
            <div>
                <Space>
                    <List
                        bordered
                        dataSource={this.props.todoList}
                        renderItem={(todo, index) => (
                            <TodoContainer key={index} index={index} todo={todo}>
                                {todo}
                            </TodoContainer>
                        )}
                    />
                </Space>
                <Divider orientation="center">Fight!</Divider>

            </div>
        </React.Fragment>)

    }
}

export default ToDoList