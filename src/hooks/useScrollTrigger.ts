import { useEffect } from "react";

type ScrollTriggerOptions = {
  element: HTMLElement | null;
  offsetRatio?: number;
  callback: () => void;
};

export function useScrollTrigger({
  element,
  offsetRatio = 0.9,
  callback,
}: ScrollTriggerOptions) {
  useEffect(() => {
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const triggerPoint = window.innerHeight * offsetRatio;

      if (rect.top <= triggerPoint) {
        callback();
        document.body.removeEventListener("scroll", handleScroll);
      }
    };

    document.body.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, [element, offsetRatio, callback]);
}
