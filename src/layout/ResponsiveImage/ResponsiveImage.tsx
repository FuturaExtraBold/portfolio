import { type JSX } from "react";
import { useIsMobile } from "hooks/useIsMobile";

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
