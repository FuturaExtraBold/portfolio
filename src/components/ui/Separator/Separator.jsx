import React from "react";
import "./separator.scss";
import separatorImage from "../../../assets/images/ui/separator.png"; // Adjust the path as needed

export default function Separator() {
  return (
    <aside className="separator">
      <img className="separator__image" src={separatorImage} alt="Separator" />
    </aside>
  );
}
