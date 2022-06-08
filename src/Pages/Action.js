import {COMPLETED_TODO, ADD_TODO,DELETE_TODO,EDIT_TODO } from "./Action.Type"

export const addTodo = (payload) =>({type:ADD_TODO,payload});
export const deleteTodo = (payload) =>({type:DELETE_TODO,payload});
export const completeTodo = (payload)=>({type:COMPLETED_TODO,payload})
export const editTodo = (payload) => ({type:EDIT_TODO});
