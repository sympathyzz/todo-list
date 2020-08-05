export const addToDo = (todo) => ({
    type:"ADD_TODO",
    todo
})
export const deleteTodo = (id) => ({
    type:"DELETE_TODO",
    id
})
export const markTodo = (id) => ({
    type:"MARK_TODO",
    id
})
