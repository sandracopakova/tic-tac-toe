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
  const [count, setCount] = useState(0);

  function handleClick([x, y]) {
    //console.log(x, y);
    if (props.gameField[y][x] !== "" || props.winner) {
      return;
    }
    const newGameField = [...props.gameField];
    newGameField[y][x] = props.player;
    props.setGameField(newGameField);
    if (checkWin(newGameField)) {
      props.onGameWin(props.player);
    }
    props.setPlayer(props.player === "X" ? "O" : "X");
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === 9) {
      props.onGameWin("T");
      setCount(0);
    }
    console.log(newCount);
  }

  return (
    <>
      <div className="game-container">
        {props.gameField.map((row, y) => {
          return row.map((cell, x) => {
            return <Square key={`${x}${y}`} coords={[x, y]} value={cell} onClick={handleClick} />;
          });
        })}
      </div>
    </>
  );
}
