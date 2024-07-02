// src/components/Board.js
import React from 'react';
import Click from './click';

const Layout = ({ click, onClick }) => {
  const renderClick = (i) => {
    return <Click value={click[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      <h1 className="head" >Tic-TAC-TOE</h1>
      <div className="board-row">
        {renderClick(0)}
        {renderClick(1)}
        {renderClick(2)}
      </div>
      <div className="board-row">
        {renderClick(3)}
        {renderClick(4)}
        {renderClick(5)}
      </div>
      <div className="board-row">
        {renderClick(6)}
        {renderClick(7)}
        {renderClick(8)}
      </div>
    </div>
  );
};

export default Layout;
