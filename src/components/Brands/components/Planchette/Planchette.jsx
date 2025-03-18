import React from "react";
import "./planchette.scss";
import imagePlanchette from "../../../../assets/images/ouija/planchette.png";

export default function Planchette() {
  return (
    <div className="planchette">
      <img
        alt="Planchette"
        className="planchette__image"
        src={imagePlanchette}
      />
    </div>
  );
}
