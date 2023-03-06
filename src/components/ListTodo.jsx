import React from 'react';
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'


export default function ListTodo({isSearched, searchState}) {
  const todos = useSelector((state) => state.todos)
  // console.log('todos', todos)
  const store = useSelector(state => state)
  // console.log('store', store)
  // console.log(isSearched, searchState)

  if (isSearched) {
    return (
      <div className="wrapper-todo-list">
        <h2 className="todo-list-title">My ToDo</h2>
        <ul className="todo-list">
          {searchState.map(todo => {
            return <TodoListItem key={todo.id} todo={todo} />
          })}
        </ul>
      </div>
    )
  }
  return (
    <div className="wrapper-todo-list">
      <h2 className="todo-list-title">My ToDo</h2>
      <ul className="todo-list">
        {todos.map(todo => {
          return <TodoListItem key={todo.id} todo={todo} />
        })}
      </ul>
    </div>
  )
}
