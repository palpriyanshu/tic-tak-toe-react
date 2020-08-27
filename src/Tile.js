import React from 'react';

const Tile = function (props) {
  const { id, value, onClick: handleClick } = props;
  const disable = value ? true : false;
  return (
    <button disabled={disable} onClick={() => handleClick(id)} className="tile">
      {value}
    </button>
  );
};

export default Tile;
