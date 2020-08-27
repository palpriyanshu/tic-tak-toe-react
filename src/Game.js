import React from 'react';
import Board from './Board';

const Message = (props) => <p className="msgBox">{props.status}</p>;

const hasWon = function (tiles) {
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
  return winningConditions.some(
    ([id1, id2, id3]) => tiles[id1] === tiles[id2] && tiles[id2] === tiles[id3]
  );
};

const hasDrawn = function (tiles, player1Symbol, player2Symbol) {
  return tiles.every(
    (element) => element === player1Symbol || element === player2Symbol
  );
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: this.props.player1,
      nextPlayer: this.props.player2,
      isGameOver: false,
      tiles: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      status: `${this.props.player1.name} has turn`,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  updateStatus(tiles, currentPlayer, nextPlayer) {
    const status = { isGameOver: false };
    if (hasWon(tiles)) {
      status.isGameOver = true;
      status.msg = `${currentPlayer.name} has won`;
    }

    if (hasDrawn(tiles, currentPlayer.symbol, nextPlayer.symbol)) {
      status.isGameOver = true;
      status.msg = 'Game has drawn';
    }
    return status;
  }

  handleClick(id) {
    this.setState((state) => {
      const tiles = state.tiles.slice();
      tiles[id] = state.currentPlayer.symbol;
      let gameStatus = this.updateStatus(
        tiles,
        state.currentPlayer,
        state.nextPlayer
      );

      if (gameStatus.isGameOver) {
        return { isGameOver: true, status: gameStatus.msg, tiles };
      }

      return {
        tiles,
        currentPlayer: state.nextPlayer,
        nextPlayer: state.currentPlayer,
        status: `${state.nextPlayer.name} has turn`,
      };
    });
  }

  render() {
    const className = this.state.isGameOver ? 'disabled board' : 'board';
    return (
      <div className="game">
        <h1>Tic-Tac-Toe</h1>
        <Message status={this.state.status} />
        <div className={className}>
          <Board onClick={this.handleClick} tiles={this.state.tiles} />
        </div>
      </div>
    );
  }
}

export default Game;
