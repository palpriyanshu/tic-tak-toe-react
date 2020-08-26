import React from 'react';
import Tile from './Tile';

const Board = (props) => {
  const tiles = [...Array(9).keys()];
  return tiles.map((id) => (
    <Tile onClick={props.onClick} value={props.tiles[id]} key={id} id={id} />
  ));
};

export default Board;
