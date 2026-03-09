import { type JSX } from "react";
import { useBenzoLoad } from "providers/AppProvider";
import "./styles.scss";

export default function Progress(): JSX.Element {
  const { benzoLoadProgress } = useBenzoLoad();

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
