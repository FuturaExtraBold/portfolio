import { useEffect, useState, useMemo, useCallback } from "react";
import exportedBreakpoints from "assets/stylesheets/base/_breakpoints.scss";

interface WindowSize {
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

    const breakpoints: Breakpoints = useMemo(() => {
      const resolved: Breakpoints = {};
      Object.keys(exportedBreakpoints).forEach((key) => {
        resolved[key] = parseInt(exportedBreakpoints[key], 10);
      });
      return resolved;
    }, []);

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
