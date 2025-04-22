import { type JSX } from "react";
import { accentMoon, accentSun, board } from "./images";
import "./styles.scss";

export default function Board(): JSX.Element {
  return (
    <div className="board">
      <img alt="Board" className="board__image" src={board} />
      <div className="board__accent board__accent--sun">
        <img alt="Accent Sun" src={accentSun} />
      </div>
      <div className="board__accent board__accent--moon">
        <img alt="Accent Sun" src={accentMoon} />
      </div>
    </div>
  );
}
