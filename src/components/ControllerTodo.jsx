import React from 'react';


export default function ControllerTodo() {


  return (
    <div className='controller'>
      <input type="text" />
      <button>Add</button>
      <button>Clear All</button>
      <button>Update</button>
      <input type="text" placeholder='seach...'/>
      <button>Search</button>
      <div className='sort'>Sort:
        <input type="radio">min to max</input>
        <input type="radio">max to min</input>
      </div>
    </div>
  );
}
