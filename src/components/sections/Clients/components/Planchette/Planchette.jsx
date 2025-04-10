import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import imagePlanchette from "./planchette.png";
import "./styles.scss";

export default function Planchette({ enable }) {
  const refPlanchette = useRef(null);

  const enabled = enable || true;

  useEffect(() => {
    if (!enabled) return;
    const planchette = refPlanchette.current;

    const handleMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const parentElement = planchette.parentElement;
      const parentRect = parentElement.getBoundingClientRect();
      const parentWidth = parentElement.offsetWidth;
      const parentHeight = parentElement.offsetHeight;

      const rotation =
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
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      document.head.removeChild(styleElement); // Restore cursor styles on cleanup
    };
  }, [enabled]);

  if (!enabled) return null;

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
      <img
        alt="Planchette"
        className="planchette__image"
        src={imagePlanchette}
      />
    </div>
  );
}
