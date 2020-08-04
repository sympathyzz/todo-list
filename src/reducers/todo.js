const todo=(state=[{}],action)=>{
    switch(action.type){  
        case "MARK_TODO":
            return [...state].map((item,index)=>{
                   let i=item.isDone;                  
                    if(index===action.index){
                        i=!item.isDone;
                    }
                    return {text:item,isDone:true};
                });
        default:
            return [...state];    
    }
}

export default todo;