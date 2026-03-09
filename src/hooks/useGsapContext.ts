import { DependencyList, useEffect } from "react";
import { gsap } from "gsap";

export const useGsapContext = (
  callback: () => void,
  deps: DependencyList,
  scope?: gsap.ContextScope
): void => {
  useEffect(() => {
    const ctx = gsap.context(callback, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
