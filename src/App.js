// App.js
import React from 'react';
import Board from './components/Board';
import './components/CalculateWinner';

function App() {
  return (
    <div className="game" style = {{ display: 'block'}}>
      <h1>Крестики-нолики</h1>
      <Board/>
    </div>
  );
}
export default App;


