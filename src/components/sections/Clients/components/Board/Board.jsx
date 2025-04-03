import {
  imageAccentMoon,
  imageAccentSun,
  imageBoard,
} from "../../../../../assets/images";

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
