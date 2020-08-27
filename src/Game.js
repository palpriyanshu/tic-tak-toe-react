import React from 'react';
import Message from './Message';
import Board from './Board';

const hasWon = function (tiles, value) {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningConditions.some((tilesCombination) =>
    tilesCombination.every((tileIndex) => tiles[tileIndex] === value)
  );
};

const hasDrawn = function (tiles, player1Symbol, player2Symbol) {
  return tiles.every(
    (tileValue) => tileValue === player1Symbol || tileValue === player2Symbol
  );
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: this.props.player1,
      nextPlayer: this.props.player2,
      tiles: ['', '', '', '', '', '', '', '', ''],
      winner: '',
      hasDrawn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState((state) => {
      const tiles = state.tiles.slice();
      const { currentPlayer, nextPlayer } = state;
      tiles[id] = currentPlayer.symbol;

      if (hasWon(tiles, currentPlayer.symbol)) {
        return { winner: currentPlayer.name, tiles };
      }

      if (hasDrawn(tiles, currentPlayer.symbol, nextPlayer.symbol)) {
        return { hasDrawn: true, tiles };
      }
      return { tiles, currentPlayer: nextPlayer, nextPlayer: currentPlayer };
    });
  }

  render() {
    const { winner, hasDrawn, currentPlayer } = this.state;
    return (
      <div className="game">
        <h1>Tic-Tac-Toe</h1>
        <Message
          winner={winner}
          hasDrawn={hasDrawn}
          currentPlayer={currentPlayer}
        />
        <Board
          isGameOver={winner || hasDrawn}
          onClick={this.handleClick}
          tiles={this.state.tiles}
        />
      </div>
    );
  }
}

export default Game;
