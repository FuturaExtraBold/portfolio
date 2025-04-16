import { useEffect, useState, useMemo, useCallback } from "react";
import exportedBreakpoints from "../assets/stylesheets/base/_breakpoints.scss";

export const useWindowSizeWithBreakpoints = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mediaClass, setMediaClass] = useState("desktop");

  const breakpoints = useMemo(() => {
    const resolved = {};
    Object.keys(exportedBreakpoints).forEach((key) => {
      resolved[key] = parseInt(exportedBreakpoints[key], 10);
    });
    return resolved;
  }, []);

  const updateSize = useCallback(() => {
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
