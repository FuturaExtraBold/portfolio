import { type JSX } from "react";
import { useApp } from "providers/AppProvider";
import "./styles.scss";

export default function Progress(): JSX.Element {
  const { benzoLoadProgress } = useApp();

  return (
    <div className="progress-bar">
      <span className="progress-bar__title">Loading</span>
      <div className="progress-bar__container">
        <div
          className="progress-bar__guts"
          style={{
            left: `${benzoLoadProgress * 100 - 90}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
