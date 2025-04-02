import React from "react";
import imageBoard from "../../../../../assets/images/ouija/board_new.jpg";
import imageAccentMoon from "../../../../../assets/images/ouija/ouija_moon.svg";
import imageAccentSun from "../../../../../assets/images/ouija/ouija_sun.svg";

import "./styles.scss";

export default function Board() {
  return (
    <div className="board">
      <img alt="Board" className="board__image" src={imageBoard} />
      <div className="board__accent board__accent--sun">
        <img alt="Accent Sun" src={imageAccentSun} />
      </div>
      <div className="board__accent board__accent--moon">
        <img alt="Accent Sun" src={imageAccentMoon} />
      </div>
    </div>
  );
}
