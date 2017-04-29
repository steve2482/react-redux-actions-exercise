import React from 'react';

function Header(props) {
  return (
      <div className='header'>
        <a href='#' className='new-game-button' onClick={props.newGame}>New Game</a>
      </div>
  );
}

export default Header;