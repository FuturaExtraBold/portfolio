import { useCallback, useEffect, useMemo, useState } from "react";

export interface WindowSize {
  width: number;
  height: number;
}

export interface Breakpoints {
  [key: string]: number;
}

export type AssetSize = "mobile" | "desktop";

const DEFAULT_BREAKPOINTS: Breakpoints = {
  sm: 375,
  md: 768,
  lg: 1200,
  xl: 1440,
};

const resolveMediaClass = (width: number, breakpoints: Breakpoints): string => {
  if (width < breakpoints.md) return "mobile";
  if (width < breakpoints.lg) return "tablet";
  if (width < breakpoints.xl) return "desktop";
  return "desktop-max";
};

const getInitialWindowSize = (): WindowSize => {
  if (typeof window !== "undefined") {
    return { width: window.innerWidth, height: window.innerHeight };
  }
  return { width: 0, height: 0 };
};

const getInitialWidth = (): number => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
  return 0;
};

interface ViewportState {
  assetSize: AssetSize;
  isMobile: boolean;
  mediaClass: string;
  windowSize: WindowSize;
}

export const useViewport = () => {
  const breakpoints = useMemo(() => DEFAULT_BREAKPOINTS, []);

  const initialWidth = getInitialWidth();
  const [state, setState] = useState<ViewportState>(() => ({
    assetSize: initialWidth <= 768 ? "mobile" : "desktop",
    isMobile: initialWidth < breakpoints.md,
    mediaClass: resolveMediaClass(initialWidth, breakpoints),
    windowSize: getInitialWindowSize(),
  }));

  const update = useCallback(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const mediaClass = resolveMediaClass(width, breakpoints);
    const isMobile = width < breakpoints.md;
    const assetSize: AssetSize = width <= 768 ? "mobile" : "desktop";

    setState((prev) => {
      if (
        prev.windowSize.width === width &&
        prev.windowSize.height === height &&
        prev.mediaClass === mediaClass &&
        prev.isMobile === isMobile &&
        prev.assetSize === assetSize
      ) {
        return prev;
      }

      return {
        assetSize,
        isMobile,
        mediaClass,
        windowSize: { width, height },
      };
    });
  }, [breakpoints]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, [update]);

  return { ...state, breakpoints };
};
