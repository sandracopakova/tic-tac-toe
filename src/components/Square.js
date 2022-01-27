import React from "react";

export default function Square(props) {
  return (
    <>
      <div
        className="square"
        onClick={() => {
          props.onClick(props.coords);
        }}
        //style={
        //props.player === "X" ? {`${color: #0000FF}` } : {`${color: #FF0000}`}}
      >
        {props.value}
      </div>
    </>
  );
}
