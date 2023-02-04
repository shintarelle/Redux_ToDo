import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { configureStore } from '@reduxjs/toolkit'
// import { Provider } from 'react-redux';
// import Counter from './Counter/Counter';
// import CounterSlice from './Counter/CounterSlice';
// import TodoSlice from './store/Reducer';


// const store = configureStore({
//   reducer: {
//     number: TodoSlice
//   }
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <Counter  /> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);


// {type: 'todos/todoAdded', payload: todoText}
// {type: 'todos/todoToggled', payload: todoId}
// {type: 'todos/todoDeleted', payload: todoId}
