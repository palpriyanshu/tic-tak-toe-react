import React from 'react';
import Tile from './Tile';

const Board = (props) => {
  return props.tiles.map((value, index) => (
    <Tile onClick={props.onClick} value={value} key={index} id={index} />
  ));
};

export default Board;
