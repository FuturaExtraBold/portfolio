import { type JSX, useEffect, useState } from "react";

type ResponsiveImageProps = {
  alt: string;
  className?: string;
  fallbackSrc: string;
  height?: number;
  hideOnMobile?: boolean;
  ref?: React.RefObject<HTMLImageElement | null>;
  sizes?: string;
  srcSet?: string;
  width?: number;
};

function useIsMobile(threshold = 768): boolean {
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

export default function ResponsiveImage({
  alt,
  className,
  fallbackSrc,
  height,
  hideOnMobile = false,
  ref,
  sizes,
  srcSet,
  width,
}: ResponsiveImageProps): JSX.Element | null {
  const isMobile = useIsMobile();
  const assetSize = window.innerWidth < 768 ? "mobile" : "desktop";

  if (assetSize === "mobile" && hideOnMobile && !isMobile) {
    return null;
  }

  return (
    <img
      alt={alt}
      className={className}
      decoding="async"
      height={height}
      loading="lazy"
      ref={ref}
      sizes={sizes}
      src={fallbackSrc}
      srcSet={srcSet}
      style={{ display: isMobile && hideOnMobile ? "none" : "block" }}
      width={width}
    />
  );
}
