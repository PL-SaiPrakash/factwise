// src/components/Game.js
import React, { useState } from 'react';
import Layout from './Layout';

const Game = () => {
  const [click, setclick] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleclick = (i) => {
    const newclick = click.slice();
    if (calculateWinner(newclick) || newclick[i]) {
      return;
    }
    newclick[i] = xIsNext ? 'X' : '✔';
    setclick(newclick);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setclick(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(click);
  let status;
  if (winner) {
    if (winner ==='✔'){
        status = 'Winner is player 2';
    }
       else{
        status = 'Winner is player 1';
       }

  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : '✔');
  }

  return (
    <div className="game">
      <div className="game-board">
      <div>{status}</div>
        <Layout click={click} onClick={handleclick} />
      </div>
      <div className="game-info">
       
        <button className="reset" onclick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

const calculateWinner = (click) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (click[a] && click[a] === click[b] && click[a] === click[c]) {
      return click[a];
    }
  }
  return null;
};

export default Game;
