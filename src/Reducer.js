import React from 'react';
import './Reducer.css';
import { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, emoji: '💕' };
    case 'DECREMENT':
      return { count: state.count - 1, emoji: '❤️' };
    default:
      return state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0, emoji: '💕' });

  return (
    <div>
      <p>
        COUNT : {state.count} {state.emoji}
      </p>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>💕</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>❤️</button>
    </div>
  );
}
