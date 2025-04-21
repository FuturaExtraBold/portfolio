declare module "utils/layout" {
  export interface FluidPropertyOptions {
    minWidth: number;
    maxWidth: number;
    minValue: number;
    maxValue: number;
  }

  export function fluidProperty({
    minWidth,
    maxWidth,
    minValue,
    maxValue,
  }: FluidPropertyOptions): number;
}
