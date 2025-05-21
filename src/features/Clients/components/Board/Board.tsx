import { type JSX } from "react";
import { accentMoon, accentSun, board1x, board2x } from "./images";
import "./styles.scss";

export default function Board(): JSX.Element {
  return (
    <div className="board">
      <img
        alt="Board"
        className="board__image"
        src={board1x}
        srcSet={`${board1x} 1536w, ${board2x} 2880w`}
        sizes="(max-width: 767px) 100vw, 1536px"
      />
      <div className="board__accent board__accent--sun">
        <img alt="Accent Sun" src={accentSun} />
      </div>
      <div className="board__accent board__accent--moon">
        <img alt="Accent Sun" src={accentMoon} />
      </div>
    </div>
  );
}
