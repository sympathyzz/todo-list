const todoList=(state=[],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.todo];
        case "DELETE_TODO":
            return [...state].filter(
                (todo)=>{
                    return action.id!==todo.id;
                }               
            ); 
        case "MARK_TODO":
            return state.map((todo) => {
                return {content: todo.content, status:todo.id === action.todo.id? !todo.status: todo.status}
            });
        default:
            return [...state];    
    }
}

export default todoList;