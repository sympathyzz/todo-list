import { combineReducers } from "redux";
import todoList from "./todoList";
import todo from "./todo"

const reducer = combineReducers({ todoList ,todo})

export default reducer;