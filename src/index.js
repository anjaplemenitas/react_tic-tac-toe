import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const Square = () => {
  return (
    <div style={{
      background: 'gold',
      margin: 10,
      padding: 5,
    }}>
      Square
    </div>
  );
};

const Board = () => {
  return (
    <div style={{
      background: 'skyblue',
      margin: 10,
      padding: 5,
    }}>
      Board
      <Square/>
    </div>
  );
};

const Game = () => {
  return (
    <div style={{
      background: 'salmon',
      margin: 10,
      padding: 20,
    }}>
      Game
      <Board/>
    </div>
  );
};


ReactDOM.render(
  <Game/>,
  document.getElementById('root')
)
