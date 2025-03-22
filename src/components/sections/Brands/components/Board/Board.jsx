import React from "react";
import imageBoard from "../../../../../assets/images/ouija/board.jpg";
import "./styles.scss";

export default function Board() {
  return (
    <div className="board">
      <img alt="Board" className="board__image" src={imageBoard} />
    </div>
  );
}
