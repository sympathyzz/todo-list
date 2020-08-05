import { connect } from 'react-redux'
import ToDoList from '../components/TodoList'
import {getAll} from '../action/index'


const mapStateToProps = (state) => {
   return {
    todoList: state.todoList.filter((todo)=>{return !todo.status})
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
       getAll: (todo) => dispatch(getAll(todo))
   }
}


const UndoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);
export default UndoListContainer