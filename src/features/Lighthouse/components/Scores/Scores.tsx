import { type JSX } from "react";
import Score from "../Score/Score";
import "./styles.scss";

export default function Scores(): JSX.Element {
  return (
    <div className="scores">
      <div className="scores__section">
        <Score circleDelay={0} containerDelay={0} />
        <Score circleDelay={0.3} containerDelay={0.2} />
      </div>
      <div className="scores__section">
        <Score circleDelay={0.5} containerDelay={0.4} />
        <Score circleDelay={0.7} containerDelay={0.6} />
      </div>
    </div>
  );
}
