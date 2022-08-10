
import React from 'react'

export default function Todo({id, name, complete , toggleTodo }) {
  
  const handleCheck = () => {
    toggleTodo(id)  
  }
  
  return (
    <div>
      <label>
        <input type="checkbox" checked={complete}  onChange={handleCheck}/>
        {name}
        
      </label>
    </div>
  )
}