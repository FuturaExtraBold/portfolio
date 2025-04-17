declare module "utils/layout" {
  export function fluidProperty({
    minWidth,
    maxWidth,
    minValue,
    maxValue,
  }: {
    minWidth: number;
    maxWidth: number;
    minValue: number;
    maxValue: number;
  }): number;
}
