export const fluidProperty = ({ minWidth, maxWidth, minValue, maxValue }) => {
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
