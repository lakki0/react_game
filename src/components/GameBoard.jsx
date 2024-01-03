import React, { useEffect, useState } from "react";
import GameCircles from "./GameCircles";
import "../Game.css";
import Footer from "./Footer";
import Header from "./Header";
import { isDraw, isWinner } from "../helper";
import { NO_PLAYER,PLAYER_1,PLAYER_2,GAME_STATE_PLAYING, GAME_STATE_WIN, GAME_STATE_DRAW } from "../constants";

const total_player = 16;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState,setGameState] = useState(GAME_STATE_PLAYING)
  const [winPlayer, setWinPlayer] = useState();

  useEffect(()=>{
   initGame();
  },[]);

  const initGame  = ()=>{
    setGameBoard(Array(16).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_1);
  }

  const initBoard = () => {
    const result = [];
    for (let i = 0; i < total_player; i++) {
      result.push(renderClass(i));
    }
    return result;
  };

  const clickedCircle = (id) => {
    if(gameBoard[id]!==0) return;
    if(gameState!==GAME_STATE_PLAYING)return;
    if (isWinner(gameBoard,id,currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }
    if (isDraw(gameBoard,id,currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(NO_PLAYER);
    }
    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  };

  const renderClass = (id) => {
    return (
      <GameCircles
      key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onClickedCircle={clickedCircle}
      />
    );
  };
  return (
    <>
      <Header gameState={gameState} player={currentPlayer} winPlayer={winPlayer}/>
      <Footer onClickEvent={initGame}/>
      <div className="gameBoard">{initBoard()}</div>
    </>
  );
};

export default GameBoard;
