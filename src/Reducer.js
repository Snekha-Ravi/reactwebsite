import React from 'react';
import './Reducer.css';
import { useReducer } from 'react';

const emojiReducer = (state, action) => {
  switch (action.type) {
    case 'LOVE':
      return { emoji: '❤️' };
    case 'HATE':
      return { emoji: '💔' };
    default:
      return state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(emojiReducer, { emoji: 'LOVE OR HATE' });

  return (
    <div>
      <p>{state.emoji}</p>

      <button onClick={() => dispatch({ type: 'LOVE' })}>LOVE</button>
      <p>vs</p>
      <button onClick={() => dispatch({ type: 'HATE' })}>HATE</button>
    </div>
  );
}
