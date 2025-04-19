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

declare namespace JSX {
  interface IntrinsicElements {
    pixiSprite: {
      alpha?: number;
      texture?: import("pixi.js").Texture;
      width?: number;
      height?: number;
      [key: string]: any;
    };
    pixiContainer: {
      alpha?: number;
      filters?: any[];
      width?: number;
      height?: number;
      children?: React.ReactNode;
    };
    pixiTilingSprite: {
      alpha?: number;
      ref?: React.Ref<any>;
      texture?: import("pixi.js").Texture;
      width?: number;
      height?: number;
      x?: number;
      y?: number;
    };
  }
}
