import React from "react";
import "../Game.css";

const onClick = (style) => {
  // debugger;
  // alert("Clicked "+style)
};
const GameCircles = ({ color, children }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <div className="gameCircles" style={style} onClick={() => onClick(color)}>
      {children}
    </div>
  );
};

export default GameCircles;
