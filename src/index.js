import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import CounterSlice from './components/CounterSlice';


const store = configureStore({
  reducer: {
    number: CounterSlice
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter  />
    </Provider>
  </React.StrictMode>
);
