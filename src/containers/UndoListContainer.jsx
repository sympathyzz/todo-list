import { connect } from 'react-redux'
import ToDoList from '../components/TodoList'


const mapStateToProps = (state) => {
   return {
    todoList: state.todoList.filter((todo)=>{return !todo.isDone})
   }
};


const UndoListContainer = connect(mapStateToProps)(ToDoList);
export default UndoListContainer