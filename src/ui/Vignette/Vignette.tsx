import "./styles.scss";

import { useFluidProperty } from "hooks/useFluidProperty";
import { useViewport } from "providers/AppProvider";
import type { JSX } from "react";

export default function Vignette(): JSX.Element {
  const { breakpoints } = useViewport();

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
