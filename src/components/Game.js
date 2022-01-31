import React, { useState } from "react";
import Square from "./Square";
import { checkWin } from "../helpers/check-win";

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
