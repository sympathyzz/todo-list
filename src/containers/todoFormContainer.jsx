import { connect } from 'react-redux'
import TodoForm from '../components/todoForm'

const mapDispatchToProps = (dispatch) => {
    return {       
        addTodo: (text) => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null,mapDispatchToProps)(TodoForm)