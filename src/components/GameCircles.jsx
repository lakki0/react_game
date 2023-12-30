import React from "react";
import "../Game.css";

const GameCircles = ({ id,className,onClickedCircle }) => {
  // console.log(onClickedCircle);
  return (
    <div className={`gameCircles ${className}`} onClick={() => onClickedCircle(id)}>
    </div>
  );
};

export default GameCircles;
