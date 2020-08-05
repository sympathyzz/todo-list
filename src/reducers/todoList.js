const todoList=(state=[],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...state,{text:action.text,isDone:false}];
        case "DELETE_TODO":
            return [...state].filter(
                (index)=>{
                    return index!==action.index
                }               
            ); 
        case "MARK_TODO":
            return state.map((todo, index) => {
                return {text: todo.text, isDone:index === action.index? !todo.isDone: todo.isDone}
            });
        default:
            return [...state];    
    }
}

export default todoList;