import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.css';

const Square = (props) => {
  return (
    <button
      className="square"
      onClick={() => {}}
    >
      {props.value}
    </button>
  );
};

const Board = () => {
  const initinalSquares = [
    null, null, null,
    null, null, null,
    null, null, null
  ];
  const [squares, setSquares] = useState(initinalSquares);

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]}/>
    );
  };

  return (
    <div style={{
      background: 'skyblue',
      margin: 10,
      padding: 5,
    }}>
      Board
      <div className="board-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
        </div>
      <div className="board-row">
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
        </div>
      <div className="board-row">
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
        </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      Game
      <Board/>
    </div>
  );
};


ReactDOM.render(
  <Game/>,
  document.getElementById('root')
)
