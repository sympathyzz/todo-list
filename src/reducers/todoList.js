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
                return {id:todo.id,content: todo.content, status:todo.id === action.id? !todo.status: todo.status}
            });
        case "GET_ALL":
            return action.list   
        default:
            return [...state];    
    }
}

export default todoList;