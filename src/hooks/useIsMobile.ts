import { useViewport } from "providers/AppProvider";

export function useIsMobile(threshold = 768): boolean {
  const { isMobile, windowSize } = useViewport();

  if (threshold === 768) {
    return isMobile;
  }

  return windowSize.width < threshold;
}
