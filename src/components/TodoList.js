import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo, age}) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} {...todo} toggleTodo={toggleTodo} />
    })
  )
}