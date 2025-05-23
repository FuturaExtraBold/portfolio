import type { JSX } from "react";
import { useApp } from "providers/AppProvider";
import { useFluidProperty } from "hooks/useFluidProperty";
import "./styles.scss";

export default function Vignette(): JSX.Element {
  const { breakpoints } = useApp();

  const opacity: number = useFluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.lg,
    minValue: 0.1,
    maxValue: 0.5,
  });

  return (
    <div className="vignette" role="presentation" style={{ opacity }}></div>
  );
}
