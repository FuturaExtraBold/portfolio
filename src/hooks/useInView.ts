import { RefObject, useEffect, useState } from "react";

interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

export const useInView = <T extends Element>(
  ref: RefObject<T | null>,
  { rootMargin = "200px", threshold = 0, once = true }: UseInViewOptions = {},
): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    let observer: IntersectionObserver | null = null;
    let rafId = 0;

    const tryObserve = () => {
      const element = ref.current;
      if (!element) {
        rafId = window.requestAnimationFrame(tryObserve);
        return;
      }

      if (once) {
        setIsInView(true);
      }

      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) observer?.disconnect();
          } else if (!once) {
            setIsInView(false);
          }
        },
        { rootMargin, threshold },
      );

      observer.observe(element);
    };

    tryObserve();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [ref, rootMargin, threshold, once]);

  return isInView;
};
