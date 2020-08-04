import { connect } from 'react-redux'
import Todo from '../components/Todo'
import  {deleteTodo}  from '../action/index'

const mapStateToProps = (state) => {
    return {
     todoList: state.todoList
    }
 };

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (index) => dispatch(deleteTodo(index))
    }
};

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo)
export default TodoContainer;