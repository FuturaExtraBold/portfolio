// src/declarations.d.ts or src/types/images.d.ts
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

declare module "providers/AppProvider" {
  export function useApp(): {
    activeCaseStudy: string | null;
    breakpoints: Record<string, number>;
    isModalActive: boolean;
    currentSection: string | null;
    mediaClass: string;
    setActiveCaseStudy: (id: string | null) => void;
    setIsModalActive: (isActive: boolean) => void;
    userDevice: Record<string, any>;
    windowSize: { width: number; height: number };
  };
}

declare namespace JSX {
  interface IntrinsicElements {
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
      texture?: any;
      width?: number;
      height?: number;
      x?: number;
      y?: number;
    };
  }
}

console.log(
  "This is a custom module declaration file for images and JSX elements."
);
