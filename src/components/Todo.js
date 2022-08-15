
import React from 'react'

export default function Todo({id, name, complete , toggleTodo }) {
  
  const handleCheck = () => {
    toggleTodo(id)  
  }
   
  const color = complete ? 'lightseagreen' : 'rgba(255, 255, 255, 0.25)'; 

  return (
    <div className="todo-list">
      <label>
        <input type="checkbox" checked={complete}  onChange={handleCheck}/>
        <span className="text"  style={{color}}>{name}</span>
      </label>
    </div>
  )
}