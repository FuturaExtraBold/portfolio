import { type JSX, useEffect, useRef } from "react";
import { gsap } from "gsap";
import imagePlanchette from "./planchette.webp";
import "./styles.scss";
import { ResponsiveImage } from "layout/index";

export default function Planchette(): JSX.Element {
  const refPlanchette = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const planchette = refPlanchette.current;

    const handleMove = (event: MouseEvent): void => {
      if (!planchette) return;
      const mouseX: number = event.clientX;
      const mouseY: number = event.clientY;
      const parentElement: HTMLElement =
        planchette.parentElement as HTMLElement;
      const parentRect: DOMRect = parentElement.getBoundingClientRect();
      const parentWidth: number = parentElement.offsetWidth;
      const parentHeight: number = parentElement.offsetHeight;

      const rotation: number =
        -(parentRect.left + parentRect.width / 2 - mouseX) / 22.5;

      gsap.to(planchette, {
        x: mouseX - parentRect.left - parentWidth / 2,
        y: mouseY - parentRect.top - parentHeight / 2 + 50,
        rotation: rotation,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const styleElement = document.createElement("style");
    // styleElement.innerHTML = "* { cursor: none !important; }";
    document.head.appendChild(styleElement);

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.head.removeChild(styleElement); // Restore cursor styles on cleanup
    };
  }, []);

  return (
    <div
      className="planchette"
      ref={refPlanchette}
      style={{
        position: "absolute",
        width: "192px",
        height: "auto",
        pointerEvents: "none",
      }}
    >
      <ResponsiveImage
        alt="Planchette"
        className="planchette__image"
        fallbackSrc={imagePlanchette}
        width={385}
        height={534}
        hideOnMobile={true}
      />
    </div>
  );
}
