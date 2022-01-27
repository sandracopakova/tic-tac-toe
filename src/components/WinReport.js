import React from "react";

export default function WinReport(props) {
  return <>{props.winner && <div id="popup">{props.winner} is the winner!</div>}</>;
}
