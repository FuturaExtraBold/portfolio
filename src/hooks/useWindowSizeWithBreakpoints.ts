import { useViewport } from "providers/AppProvider";
import type { WindowSize } from "hooks/useViewport";

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
    const { windowSize, mediaClass, breakpoints } = useViewport();
    return { windowSize, mediaClass, breakpoints };
  };
