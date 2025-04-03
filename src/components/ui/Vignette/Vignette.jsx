import { useApp } from "AppProvider";
import { fluidProperty } from "assets/javascripts/layout/fluidElement";
import "./vignette.scss";

export default function Vignette() {
  const { breakpoints } = useApp();

  const opacity = fluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.lg,
    minValue: 0.1,
    maxValue: 0.5,
  });

  return <div className="vignette" style={{ opacity: opacity }}></div>;
}
