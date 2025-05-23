import { useEffect, useState, useMemo, useCallback } from "react";

export interface WindowSize {
  width: number;
  height: number;
}

interface Breakpoints {
  [key: string]: number;
}

interface UseWindowSizeWithBreakpointsResult {
  windowSize: WindowSize;
  mediaClass: string;
  breakpoints: Breakpoints;
}

export const useWindowSizeWithBreakpoints =
  (): UseWindowSizeWithBreakpointsResult => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
      width: 0,
      height: 0,
    });
    const [mediaClass, setMediaClass] = useState<string>("desktop");

    const breakpoints: Breakpoints = useMemo(
      () => ({
        xs: 375,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1440,
      }),
      []
    );

    const updateSize = useCallback((): void => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width < breakpoints.md) {
        setMediaClass("mobile");
      } else if (width < breakpoints.lg) {
        setMediaClass("tablet");
      } else if (width < breakpoints.xl) {
        setMediaClass("desktop");
      } else if (width < breakpoints.xxl) {
        setMediaClass("desktop-large");
      } else {
        setMediaClass("desktop-max");
      }

      setWindowSize({ width, height });
    }, [breakpoints]);

    useEffect(() => {
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, [updateSize]);

    return { windowSize, mediaClass, breakpoints };
  };
