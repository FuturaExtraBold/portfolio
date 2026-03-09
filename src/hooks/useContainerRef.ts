import { useCallback, useRef, useState } from "react";

export function useContainerRef<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [hasRef, setHasRef] = useState(false);
  const setRef = useCallback((node: T | null) => {
    ref.current = node;
    setHasRef(!!node);
  }, []);
  return [ref, setRef, hasRef] as const;
}
