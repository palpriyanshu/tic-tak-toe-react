import React from 'react';
import Game from './Game';
import './App.css';

const App = (props) => (
  <Game
    player1={{ name: 'bar', symbol: '0' }}
    player2={{ name: 'foo', symbol: 'X' }}
  />
);

export default App;
