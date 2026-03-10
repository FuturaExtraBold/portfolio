import { gsap } from "gsap";
import { ResponsiveImage } from "layout/index";
import { memo, useEffect, useRef, type JSX } from "react";
import planchetteImage1x from "./planchette@1x.webp";
import planchetteImage2x from "./planchette@2x.webp";
import "./styles.scss";

function Planchette(): JSX.Element {
  const refPlanchette = useRef<HTMLDivElement>(null);

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

    let rafId = 0;
    let pendingEvent: MouseEvent | null = null;

    const handleMove = (event: MouseEvent): void => {
      pendingEvent = event;
      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        if (!pendingEvent) return;
        const mouseX: number = pendingEvent.clientX;
        const mouseY: number = pendingEvent.clientY;
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
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafId) window.cancelAnimationFrame(rafId);
      pendingEvent = null;
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

export default memo(Planchette);
