import { connect } from 'react-redux'
import ToDoList from '../components/TodoList'


const mapStateToProps = (state) => {
   return {
    todoList: state.todoList
   }
};


const TodoListContainer = connect(mapStateToProps)(ToDoList);
export default TodoListContainer