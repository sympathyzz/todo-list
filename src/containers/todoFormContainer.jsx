import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'
import  {addToDo}  from '../action/index'

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (todo) => dispatch(addToDo(todo))
    }
}

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm)
export default TodoFormContainer;