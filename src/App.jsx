import React, { useState } from "react";
import Game from "./components/Game";
import WinReport from "./components/WinReport";

export default function App() {
  const [winner, setWinner] = useState(null);
  return (
    <div className="app">
      <WinReport winner={winner} />
      <h1>Tic-tac-toe</h1>
      <Game
        onGameWin={(gameWinner) => {
          setWinner(gameWinner);
        }}
      />
    </div>
  );
}
