import React from 'react';
import Game from './Game';
import './App.css';

const App = (props) => (
  <Game
    player1={{ name: 'Tom', symbol: '0' }}
    player2={{ name: 'Jerry', symbol: 'X' }}
  />
);

export default App;
