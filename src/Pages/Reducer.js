import { ADD_TODO, COMPLETED_TODO, DELETE_TODO, EDIT_TODO } from "./Action.Type";

export const reducer = (state={todos:[]},{type,payload,id})=>{
    switch(type)
    {
        case ADD_TODO:
            {
                console.log(state)
                return {
                    ...state,
                    todos:[
                        ...state.todos,
                        {
                            ...payload,
                            id:Date.now()
                        }
                        ]   
                }
            }

        case DELETE_TODO:
            {
                const UpdatedTodos =  state.todos.filter((el)=>{
                    return el.id!==payload.id;
                })
                return {
                    ...state,
                    todos:[
                        ...UpdatedTodos
                    ]
                }
            }
            
        case COMPLETED_TODO:
            {
                let newTodo =  state.todos.map((todo)=>{
                    if(todo.id===payload.id)
                    {
                        todo.isCompleted=!todo.isCompleted;
                    }
                    return todo
                })
            return {...state,todos:newTodo}
        }
        
        case EDIT_TODO:
           { 
               let newTodo =  state.todos.map((todo)=>{
                if(todo.id===payload.id)
                {
                    return payload;
                }
                else
                return todo
            })
         
        return {...state,todos:newTodo}
           }
        default:
            {
                return state;
            }
    }
    
}