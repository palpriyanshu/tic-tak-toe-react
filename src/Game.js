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

const hasDrawn = function (tiles) {
  return tiles.every((element) => element === '0' || element === 'X');
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: false,
      isGameOver: false,
      tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getCurrentPlayer(turn) {
    return turn ? this.props.players[1] : this.props.players[0];
  }

  updateStatus(tiles, turn) {
    const status = { isGameOver: false };
    if (hasWon(tiles)) {
      status.isGameOver = true;
      status.msg = `${this.getCurrentPlayer(turn)} has won`;
    }

    if (hasDrawn(tiles)) {
      status.isGameOver = true;
      status.msg = 'Game has drawn';
    }
    return status;
  }

  updateState(id) {
    this.setState((state) => {
      const symbol = state.turn ? '0' : 'X';
      state.tiles[id] = symbol;
      let gameStatus = this.updateStatus(state.tiles, state.turn);
      if (gameStatus.isGameOver) {
        return { isGameOver: true, status: gameStatus.msg };
      }

      const turn = !state.turn;
      const status = `${this.getCurrentPlayer(turn)} has turn`;
      return { tiles: state.tiles, turn, status };
    });
  }

  handleClick(event) {
    const id = event.target.id;
    this.updateState(id);
  }

  componentDidMount() {
    this.setState((state) => ({
      status: `${this.getCurrentPlayer(state.turn)} has turn`,
    }));
  }

  render() {
    const className = this.state.isGameOver ? 'disabled board' : 'board';
    return (
      <div className="game">
        <h1>Tic-Tak-Toe</h1>
        <Message status={this.state.status} />
        <div className={className}>
          <Board onClick={this.handleClick} tiles={this.state.tiles} />
        </div>
      </div>
    );
  }
}

export default Game;
