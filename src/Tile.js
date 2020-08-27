import React from 'react';

const Tile = function (props) {
  let disable = false;
  console.log(props);
  const { id, value, onClick } = props;
  if (value === '0' || value === 'X') {
    disable = true;
  }
  return (
    <button disabled={disable} onClick={() => onClick(id)} className="tile">
      {value}
    </button>
  );
};

export default Tile;
