import React from 'react';

const Message = ({ winner, hasDrawn, currentPlayer }) => {
  let msg = `${currentPlayer.name} has turn`;
  if (winner) {
    msg = `${currentPlayer.name} has won`;
  }
  if (hasDrawn) {
    msg = 'Game has drawn';
  }
  return <h3 className="msgBox">{msg}</h3>;
};

export default Message;
