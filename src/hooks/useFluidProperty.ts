import { useMemo } from "react";
import { FluidPropertyOptions } from "utils/layout";
import { useViewport } from "providers/AppProvider";

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

export const useFluidProperty = (options: FluidPropertyOptions): number => {
  const { windowSize } = useViewport();
  const width = windowSize.width || 1024;

  return useMemo(
    () => calculateFluidValue(options, width),
    [options, width]
  );
};
