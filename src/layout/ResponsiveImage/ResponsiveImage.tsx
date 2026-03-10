import { useViewport } from "providers/AppProvider";
import { type JSX } from "react";

type ResponsiveImageProps = {
  alt: string;
  className?: string;
  fallbackSrc: string;
  height?: number;
  hideOnMobile?: boolean;
  lazy?: boolean;
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
  lazy = true,
  ref,
  sizes,
  srcSet,
  width,
}: ResponsiveImageProps): JSX.Element | null {
  const { isMobile, assetSize } = useViewport();

  if (assetSize === "mobile" && hideOnMobile && !isMobile) {
    return null;
  }

  return (
    <img
      alt={alt}
      className={className}
      decoding="async"
      height={height}
      loading={lazy ? "lazy" : "eager"}
      ref={ref}
      sizes={sizes}
      src={fallbackSrc}
      srcSet={srcSet}
      style={{ display: isMobile && hideOnMobile ? "none" : "block" }}
      width={width}
    />
  );
}
