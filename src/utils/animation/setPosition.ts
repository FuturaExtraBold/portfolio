import type { SetPositionOptions } from "utils/animation";
import { gsap } from "gsap";

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
