import React from 'react';

const Tile = function (props) {
  let disable = false;
  const { id, value, onClick } = props;
  if (value === '0' || value === 'X') {
    disable = true;
  }
  return (
    <button disabled={disable} onClick={onClick} className="tile" id={id}>
      {value}
    </button>
  );
};

export default Tile;
