import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to the gym its leg day at 5pm"
  },
  {
    title: "Live Class",
    description: "Live class today at 7pm"
  },
  {
    title: "Complete Assignments",
    description: "Complete react assignments"
  }
])

function AddTodo(){
  setTodos([...todos,{
    title: "Fuck you Bitch",
    description: Math.random()
  }])
}

  return (
    <div>
      <button onClick={AddTodo}>Add ToDo</button>
    {todos.map( todo => 
      <Todo key={todo.id} title={todo.title} description={todo.description} />) }
    </div>
  )
}

function Todo({title,description}){
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}

export default App
