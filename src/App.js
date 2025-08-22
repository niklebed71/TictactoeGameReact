// App.js
import React from 'react';
import Board from './components/Board';
import './components/CalculateWinner';

function App() {
  return (
    <div className="game" style = {{ display: 'block'}}>
       {/* The style.css is not working, so I set the style parameter directly in the div. */}
      <h1>Tic-tac-toe.</h1>
      <Board/>
    </div>
  );
}
export default App;


