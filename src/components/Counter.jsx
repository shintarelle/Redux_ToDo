import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './CounterSlice';

export default function Counter() {

  const value = useSelector((state) => state.number.value);
  const dispatch = useDispatch()

  // console.log('value', value);
  // console.log(increment());

  return (
    <>
      <p>hello this is a counter</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        value: { value }
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}
