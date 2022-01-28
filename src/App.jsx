import React, { useState } from "react";
import Game from "./components/Game";
import WinReport from "./components/WinReport";

export default function App() {
  const [winner, setWinner] = useState(null);
  const [gameField, setGameField] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = useState("X");

  function restartGame() {
    setGameField([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setPlayer("X");
    setWinner(null);
  }

  return (
    <div className="app">
      <WinReport winner={winner} restartGame={restartGame} />
      <h1>Tic-tac-toe</h1>
      <Game
        onGameWin={(gameWinner) => {
          setWinner(gameWinner);
        }}
        winner={winner}
        gameField={gameField}
        player={player}
        setGameField={setGameField}
        setPlayer={setPlayer}
      />
    </div>
  );
}
