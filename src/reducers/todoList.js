const todoList=(state=[],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.text];
        case "DELETE_TODO":
            return [...state].filter(
                (item,index)=>{
                    return index!==action.index
                }               
            ); 
        default:
            return [...state];    
    }
}

export default todoList;