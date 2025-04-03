import React from "react";
import "./separator.scss";
import separatorImage from "../../../assets/images/ui/separator.png"; // Adjust the path as needed

export default function Separator() {
  return (
    <div className="separator">
      <img className="separator__image" src={separatorImage} alt="Separator" />
    </div>
  );
}
