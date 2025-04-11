import React from "react";

function Score() {
  return (
    <div className="score">
      <div className="score__title">Performance</div>
      <div className="score__value">90</div>
      <div className="score__unit">%</div>
    </div>
  );
}

export default function Scores() {
  return (
    <div className="scores">
      <Score />
      <Score />
      <Score />
      <Score />
    </div>
  );
}
