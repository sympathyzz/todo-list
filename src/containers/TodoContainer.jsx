import { connect } from 'react-redux'
import Todo from '../components/Todo'
import  {deleteTodo,markTodo}  from '../action/index'


const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        markTodo: (id) => dispatch(markTodo(id))
    }
};

const TodoContainer = connect(null, mapDispatchToProps)(Todo)
export default TodoContainer;