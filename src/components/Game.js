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
  //doplnit
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

export default function Game() {
  const [gameField, setGameField] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = useState("X");

  function handleClick([x, y]) {
    console.log(x, y);
    const newGameField = [...gameField];
    newGameField[y][x] = player;
    setGameField(newGameField);
    console.log(checkWin(newGameField));
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
    </>
  );
}
