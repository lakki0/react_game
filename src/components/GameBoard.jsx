import React, { useState } from "react";
import GameCircles from "./GameCircles";
import "../Game.css";

const total_player = 16;

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;
const GameBoard = () => {
  const [gameBoard,setGameBoard] = useState(Array(16).fill(NO_PLAYER));
 const [currentPlayer,setCurrentPlayer] = useState(PLAYER_1);

 const initBoard = ()=>{
  const result =[];
   for(let i=0;i<total_player;i++){
    result.push(renderClass(i));
   }
   return result;
 }

  const clickedCircle = (id)=>{    
    setGameBoard(prev=>{
      return prev.map((circle,pos)=>{
        if(pos===id) return currentPlayer;
        return circle;
      })
    });

    setCurrentPlayer(currentPlayer===PLAYER_1?PLAYER_2:PLAYER_1);
 }

  const renderClass = (id)=>{
    return <GameCircles id={id} className={`player_${gameBoard[id]}`} onClickedCircle={clickedCircle}/>
  }
  return (
    <div className="gameBoard">
      {initBoard()}
    </div>
  );
};

export default GameBoard;
