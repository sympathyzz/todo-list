const todoList=(state=[],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.text];
        case "DELETE_TODO":
            return [...state].filter(
                (value,index)=>{
                    return action.index!==index
                }               
            );  
        default:
            return state;    
    }
}

export default todoList;