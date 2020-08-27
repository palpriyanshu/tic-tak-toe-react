import React from 'react';
import Tile from './Tile';

const Board = (props) => {
  const className = props.isGameOver ? 'disabled board' : 'board';

  return (
    <div className={className}>
      {props.tiles.map((value, index) => (
        <Tile onClick={props.onClick} value={value} key={index} id={index} />
      ))}
    </div>
  );
};

export default Board;
