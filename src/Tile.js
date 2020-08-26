import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let disable = false;
    const { id, value, onClick } = this.props;
    if (value === '0' || value === 'X') {
      disable = true;
    }
    return (
      <button disabled={disable} onClick={onClick} className="tile" id={id}>
        {value}
      </button>
    );
  }
}

export default Tile;
