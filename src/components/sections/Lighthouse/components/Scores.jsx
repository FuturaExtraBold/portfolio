import React from "react";
import "./styles.scss";

function Score() {
  return (
    <div className="score">
      {/* <div className="score__title">Performance</div> */}
      <div className="score__value">100</div>
    </div>
  );
}

export default function Scores() {
  return (
    <div className="scores">
      <div className="scores__section">
        <Score />
        <Score />
      </div>
      <div className="scores__section">
        <Score />
        <Score />
      </div>
    </div>
  );
}
