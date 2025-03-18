import React from "react";
import "./board.scss";
import imageBoard from "../../../../assets/images/ouija/board.jpg";

export default function Board() {
  return (
    <div className="board">
      <img alt="Board" className="board__image" src={imageBoard} />
    </div>
  );
}
