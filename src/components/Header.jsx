import React from "react";
import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN } from "../constants";

const Header = ({ gameState, player, winPlayer }) => {
  const playerState = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>Player {player} Turn</div>;
      case GAME_STATE_WIN:
        return <div>Player {winPlayer} Wins</div>;
      case GAME_STATE_DRAW:
        return <div>!!! Draw !!!</div>;
      default:
    }
  };
  return (
    <div className="panel header">
      <div className="header-text">{playerState()}</div>
    </div>
  );
};

export default Header;
