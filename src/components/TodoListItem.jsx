import React from 'react';


export default function TodoListItem(todo) {

  return (
    <li className="todo-item" id={todo.id}>
      <input type="checkbox" checked={todo.completed} />
      <span className="text">{todo.text}</span>
      <button>Edit</button>
      <button>Remove</button>
    </li>
  )
}
