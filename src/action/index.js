export const addToDo = (text) => ({
    type:"ADD_TODO",
    text:text
})
export const deleteTodo = (index) => ({
    type:"DELETE_TODO",
    index:index
})
export const markTodo = (index) => ({
    type:"MARK_TODO",
    index:index
})
