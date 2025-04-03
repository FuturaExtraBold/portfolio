import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Guide } from "components/layout";
import { useApp } from "AppProvider.jsx";
import { fluidProperty } from "assets/javascripts/layout/fluidElement.js";
import clients from "./data/clients.js";
import "./styles.scss";

export default function BrandQuilt() {
  const { breakpoints, windowSize } = useApp();
  const { width } = windowSize;

  const quiltRef = useRef(null);

  const [animationHasRun, setAnimationHasRun] = useState(false);

  const setRowStyles = useCallback(
    ({ thingy, radius, startingIndex, spacingOffset }) => {
      const clientElements = quiltRef.current.children;
      const arcAngle = Math.PI / 8;
      const angleStep = arcAngle / (thingy - 1);

      for (
        let i = startingIndex;
        i < Math.min(startingIndex + thingy, clients.length);
        i++
      ) {
        const angle = -arcAngle + (i - startingIndex) * angleStep * 2;
        const x = radius * Math.sin(angle) * 2;
        const y = radius * (1 - Math.cos(angle)) * 2 - spacingOffset;
        clientElements[
          i
        ].style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad) scale(0.8)`;
      }

      if (!animationHasRun)
        gsap.fromTo(
          clientElements,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "power2.in",
            stagger: 0.05,
            duration: 0.2,
            onComplete: () => setAnimationHasRun(true),
          }
        );
    },
    [animationHasRun]
  );

  useEffect(() => {
    const numRows = 3;
    const thingy = Math.ceil(clients.length / numRows);

    const resolvedBaseRadius = fluidProperty({
      minWidth: breakpoints.md,
      maxWidth: breakpoints.lg,
      minValue: 340,
      maxValue: 500,
    });

    setRowStyles({
      thingy,
      radius: resolvedBaseRadius,
      startingIndex: 0,
      spacingOffset: 100,
    });
    setRowStyles({
      thingy,
      radius: resolvedBaseRadius,
      startingIndex: thingy,
      spacingOffset: 0,
    });
    setRowStyles({
      thingy,
      radius: resolvedBaseRadius,
      startingIndex: thingy * (numRows - 1),
      spacingOffset: -100,
    });
  }, [breakpoints, setRowStyles, width]);

  return (
    <div className="brand-quilt" ref={quiltRef}>
      {clients
        .sort((a, b) => a.order - b.order)
        .map(({ component: LogoComponent, id }) => (
          <LogoComponent key={id} />
        ))}
      <Guide />
    </div>
  );
}
