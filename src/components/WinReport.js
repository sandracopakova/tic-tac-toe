import React from "react";

export default function WinReport(props) {
  return (
    <>
      {props.winner && (
        <div className="win-container">
          <div id="popup">{props.winner} is the winner!</div>
          <button
            className={`newgame-btn ${!props.winner ? "hidden" : ""}`}
            onClick={props.restartGame}
            /*{() => {
          setGameField([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]);
          setPlayer("X");
          props.onGameReset();
        }}*/
          >
            New Game
          </button>
        </div>
      )}
    </>
  );
}
