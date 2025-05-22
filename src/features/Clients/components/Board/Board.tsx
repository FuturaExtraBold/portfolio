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
        srcSet={`${board1x} 1440w, ${board2x} 2880w`}
        sizes="(min-width: 1440px) 1440px, 100vw"
        width={2880}
        height={600}
      />
      <div className="board__accent board__accent--sun">
        <img alt="Accent Sun" src={accentSun} width={580} height={600} />
      </div>
      <div className="board__accent board__accent--moon">
        <img alt="Accent Sun" src={accentMoon} width={600} height={600} />
      </div>
    </div>
  );
}
