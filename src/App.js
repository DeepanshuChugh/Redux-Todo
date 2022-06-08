import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { addTodo,completeTodo,deleteTodo, editTodo } from './Pages/Action';


function App() {

  const dispatch =useDispatch()
  const todo = useSelector((state=>state.todos))
  const ref = useRef()

  const handleClick=()=>{
    const value = ref.current.value;
      dispatch(addTodo(
          {
            value:value,
            isCompleted:false
          }
      ))
    console.log(value)
    
  }
  return (
    <div className="App">
      <input
      ref={ref}
      placeholder='Enter New Todo'
      />
      <button onClick={handleClick}>Add</button>
      <br></br>
      <br></br>

      {todo.map(todo=>(

        <div key={todo.id} style={{color:todo.isCompleted?"green":'red'}}>

          {todo.value}

          <button onClick={()=>
          dispatch(
            deleteTodo({id:todo.id})
          )}>X</button>

          <button onClick={()=>
          dispatch(
            completeTodo({id:todo.id})
          )}>done</button>
          
          <button onClick={()=>
          dispatch(
            editTodo({id:todo.id})
          )}>edit</button>
          
         

        </div>

      ))}
    </div>
  );
}

export default App;
