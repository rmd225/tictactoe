import React, { StrictMode } from "react";
import { useState } from 'react';


function Square( {value, onSquareClick}) {
  //const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue('X');
  //   console.log('clicked!');
  // }

  return <button className="square" onClick={onSquareClick}>{value}</button>;

}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); //declares a state variable named squares that defaults to an array of 9 nulls corresponding to the 9 squares

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return ;
    }
    const nextSquares = squares.slice(); //call .slice() to create a copy of the squares array instead of modifying the existing array
   if (xIsNext) {
    nextSquares[i] = "X";
   } else {
    nextSquares[i] = "O";
   }
    setSquares(nextSquares);
    setXIsNext (!xIsNext) ;
  }
  const winner = calculateWinner(squares);
 let status ;
 if (winner) {
  status = 'Winner is: ' + winner ;
 } else {
  status = 'Next Player is: ' + (xIsNext ? "X": "O") ;
 }

  //arrow function, which is a shorter way to define functions

  return (   
    <React.Fragment>  
      <div className ="status">{status}</div>
       <div className="board-row"> 
       <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>  
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]}onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]}onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    
    </React.Fragment>
  );
}


function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}