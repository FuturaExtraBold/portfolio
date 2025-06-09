import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useIsMobile } from "hooks/useIsMobile";
import { ResponsiveImage } from "layout/index";
import planchetteImage1x from "./planchette@1x.webp";
import planchetteImage2x from "./planchette@2x.webp";
import "./styles.scss";

export default function Planchette(): JSX.Element {
  const refPlanchette = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const planchette = refPlanchette.current;

    if (!planchette) return;

    let parentElement: HTMLElement = planchette.parentElement as HTMLElement;
    let parentRect: DOMRect = parentElement.getBoundingClientRect();
    let parentWidth: number = parentElement.offsetWidth;
    let parentHeight: number = parentElement.offsetHeight;

    gsap.set(planchette, {
      x: parentWidth * 0.42,
      y: parentHeight * 0.42,
      rotation: 20,
    });

    const handleMove = (event: MouseEvent): void => {
      const mouseX: number = event.clientX;
      const mouseY: number = event.clientY;
      parentRect = parentElement.getBoundingClientRect();
      parentWidth = parentElement.offsetWidth;
      parentHeight = parentElement.offsetHeight;

      const rotation: number =
        -(parentRect.left + parentRect.width / 2 - mouseX) / 22.5;

      gsap.to(planchette, {
        x: mouseX - parentRect.left - parentWidth / 2,
        y: mouseY - parentRect.top - parentHeight / 2 + 50,
        rotation: rotation,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.head.removeChild(styleElement); // Restore cursor styles on cleanup
    };
  }, []);

  return (
    <div className="planchette" ref={refPlanchette}>
      <ResponsiveImage
        alt="Planchette"
        className="planchette__image"
        fallbackSrc={planchetteImage1x}
        height={534}
        sizes="(max-width: 768px) 100vw, (min-width: 769px) 1440px"
        srcSet={`${planchetteImage1x} 1x, ${planchetteImage2x} 2x`}
        width={385}
      />
    </div>
  );
}
