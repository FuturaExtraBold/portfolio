declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare namespace JSX {
  interface IntrinsicElements {
    pixiSprite: {
      alpha?: number;
      texture?: import("pixi.js").Texture;
      width?: number;
      height?: number;
      [key: string]: unknown;
    };
    pixiContainer: {
      alpha?: number;
      filters?: object[];
      width?: number;
      height?: number;
      children?: React.ReactNode;
    };
    pixiTilingSprite: {
      alpha?: number;
      ref?: React.Ref<object>;
      texture?: import("pixi.js").Texture;
      width?: number;
      height?: number;
      x?: number;
      y?: number;
    };
  }
}
