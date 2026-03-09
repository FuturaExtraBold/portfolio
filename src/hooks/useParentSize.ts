import { RefObject, useCallback, useEffect, useRef, useState } from "react";

export function useParentSize(parentRef: RefObject<HTMLElement | null>) {
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const parentSizeRef = useRef({ width: 0, height: 0 });

  const updateParentSize = useCallback(() => {
    if (!parentRef.current) return;
    const width = parentRef.current.clientWidth;
    const height = parentRef.current.clientHeight;
    setParentSize({ width, height });
    parentSizeRef.current = { width, height };
  }, [parentRef]);

  useEffect(() => {
    if (!parentRef.current) return;
    const observer = new ResizeObserver(updateParentSize);
    observer.observe(parentRef.current);
    updateParentSize();
    return () => observer.disconnect();
  }, [parentRef, updateParentSize]);

  return { parentSize, parentSizeRef, updateParentSize };
}
