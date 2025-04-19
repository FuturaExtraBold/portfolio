interface FluidPropertyOptions {
  minWidth: number;
  maxWidth: number;
  minValue: number;
  maxValue: number;
}

export const fluidProperty = ({
  minWidth,
  maxWidth,
  minValue,
  maxValue,
}: FluidPropertyOptions): number => {
  const windowWidth = window.innerWidth;

  return Math.min(
    maxValue,
    Math.max(
      minValue,
      ((windowWidth - minWidth) / (maxWidth - minWidth)) *
        (maxValue - minValue) +
        minValue
    )
  );
};

export default fluidProperty;
