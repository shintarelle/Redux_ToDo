import React from 'react';
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodos = state => state.todos


export default function ListTodo() {
  const todos = useSelector(selectTodos)

  // const renderedListItems = todos.map(todo => {
  //   return <TodoListItem key={todo.id} todo={todo} />
  // })

  return (
    <ul className="todo-list">
      {todos.map(todo => {
      <TodoListItem key={todo.id} todo={todo} />
      })}
    </ul>
  )
}
