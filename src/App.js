import React , {useState , useEffect , useReducer} from 'react'
import TodoList from './TodoList'
import {Context} from './context'
import reducer from './reducer'

export default function App() {
  // state = {
  //   todos: [
  //     {id: 1, title: 'First todo', completed: false},
  //     {id: 2, title: 'Second todo', completed: true},
  //   ]
  // }
  const [state,dispatch] = useReducer(reducer,JSON.parse(localStorage.todos));
  const [todoTitle,setTodoTitle] = useState('');
  
  const addTodo = event => {
    if(event.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle
      })

      // setTodos([
      //   ...state,
      //   {
      //     id:Date.now(),
      //     title:todoTitle,
      //     completed: false
      //   }
      // ])
      setTodoTitle('');
    }
  }

  // useEffect(()=>{
  //   var raw = [];
  //   if(localStorage.todos)
  //     var raw = JSON.parse(localStorage.todos) || [];
   
  //   setTodos(raw);
  // } , [])

  useEffect( () => {
    localStorage.setItem('todos',JSON.stringify(state))
  } , [state])

  // const removeTodo = id => {
  //   setTodos(todos.filter(todo => {
  //     return todo.id !== id
  //   }))
  // }

  // const toggleTodo = id => {
  //   setTodos(todos.map(todo => {
  //     if(todo.id === id ) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   })) 
  // }

  return (
    <Context.Provider value = {{dispatch}}>
      <div className="container">
        <h1>Todo app</h1>
          <div className="input-field">
            <input 
              type="text" 
              value = {todoTitle}
              onChange = {event => setTodoTitle(event.target.value)}
              onKeyPress = {addTodo}
            />
            <label> Todo name </label>
          </div>
          <TodoList todos={state} />
      </div>
    </Context.Provider>
    );
  }