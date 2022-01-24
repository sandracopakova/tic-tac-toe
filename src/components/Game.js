import React from "react";
import Square from "./Square";

export default function Game() {
  const gameField = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  return (
    <>
      {gameField.map((row, y) => {
        return row.map((cell, x) => {
          return <Square key={`${x}${y}`} value={cell} />;
        });
      })}
    </>
  );
}
