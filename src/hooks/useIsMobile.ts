import { useEffect, useState } from "react";

export function useIsMobile(threshold = 768): boolean {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < threshold);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < threshold);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return isMobile;
}
