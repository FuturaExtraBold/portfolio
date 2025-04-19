import type { RefObject } from "react";
import type { DisplayObject } from "@pixi/display";
import { gsap } from "gsap";

interface SetPositionOptions {
  ref: RefObject<DisplayObject>;
  usePixi?: boolean;
  x: number;
  y: number;
}

export const setPosition = ({
  ref,
  usePixi = false,
  x,
  y,
}: SetPositionOptions): void => {
  if (!ref.current) {
    console.warn("setPosition ref.current is not defined");
    return;
  }

  let resolvedParams: any = {
    x: x,
    y: y,
  };

  if (usePixi) {
    resolvedParams = {
      pixi: {
        x: x,
        y: y,
      },
    };
  }

  gsap.set(ref.current, resolvedParams);
};
