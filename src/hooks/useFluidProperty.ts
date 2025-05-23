import { useEffect, useState } from "react";
import { FluidPropertyOptions } from "utils/layout";

const calculateFluidValue = (
  { minWidth, maxWidth, minValue, maxValue }: FluidPropertyOptions,
  width: number
): number => {
  return Math.min(
    maxValue,
    Math.max(
      minValue,
      ((width - minWidth) / (maxWidth - minWidth)) * (maxValue - minValue) +
        minValue
    )
  );
};

const getWindowWidth = (): number => {
  if (typeof window !== "undefined" && typeof window.innerWidth === "number") {
    return window.innerWidth;
  }
  return 1024;
};

export const useFluidProperty = (options: FluidPropertyOptions): number => {
  const [value, setValue] = useState(() =>
    calculateFluidValue(options, getWindowWidth())
  );

  useEffect(() => {
    const handleResize = () => {
      setValue(calculateFluidValue(options, getWindowWidth()));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [options]);

  return value;
};
