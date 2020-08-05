import { connect } from 'react-redux'
import ToDoList from '../components/TodoList'
import {getAll} from '../action/index'


const mapStateToProps = (state) => {
   return {
    todoList: state.todoList
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
       getAll: (todo) => dispatch(getAll(todo))
   }
}

const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(ToDoList);
export default TodoListContainer