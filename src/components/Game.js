import React, { useState } from "react";
import Square from "./Square";

function checkSequence(seq) {
  return seq === "XXX" || seq === "OOO";
}

function checkColumns(field) {
  for (let x in field) {
    let col = "";
    for (let y in field) {
      col += field[y][x];
    }
    if (checkSequence(col)) {
      return true;
    }
  }
  return false;
}

function checkRows(field) {
  return field.some((row) => {
    return checkSequence(row.join(""));
  });
}

function checkDiagonals(field) {
  let sequence = "";
  for (let x in field) {
    sequence += field[x][x];
  }
  if (checkSequence(sequence)) {
    return true;
  }
  sequence = "";
  for (let x in field) {
    sequence += field[x][2 - x];
  }
  if (checkSequence(sequence)) {
    return true;
  }
  return false;
}

function checkWin(field) {
  if (checkRows(field)) {
    return true;
  }
  if (checkColumns(field)) {
    return true;
  }
  if (checkDiagonals(field)) {
    return true;
  }
  return false;
}

export default function Game(props) {
  const [gameField, setGameField] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = useState("X");

  function handleClick([x, y]) {
    //console.log(x, y);
    if (gameField[y][x] !== "" || props.winner) {
      return;
    }
    const newGameField = [...gameField];
    newGameField[y][x] = player;
    setGameField(newGameField);
    if (checkWin(newGameField)) {
      props.onGameWin(player);
    }
    setPlayer(player === "X" ? "O" : "X");
  }

  return (
    <>
      <div className="game-container">
        {gameField.map((row, y) => {
          return row.map((cell, x) => {
            return <Square key={`${x}${y}`} coords={[x, y]} value={cell} onClick={handleClick} />;
          });
        })}
      </div>
      <button
        className={`newgame-btn ${!props.winner ? "hidden" : ""}`}
        onClick={() => {
          setGameField([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]);
          setPlayer("X");
          props.onGameReset();
        }}
      >
        New Game
      </button>
    </>
  );
}
