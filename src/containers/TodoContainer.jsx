import { connect } from 'react-redux'
import Todo from '../components/Todo'
import  {deleteTodo,markTodo}  from '../action/index'


const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (index) => dispatch(deleteTodo(index)),
        markTodo: (index) => dispatch(markTodo(index))
    }
};

const TodoContainer = connect(null, mapDispatchToProps)(Todo)
export default TodoContainer;