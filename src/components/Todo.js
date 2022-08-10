
import React from 'react'

export default function Todo({ name, complete }) {
  
  
  return (
    <div>
      <label>
        <input type="checkbox" checked={complete} />
        {name}
      </label>
    </div>
  )
}