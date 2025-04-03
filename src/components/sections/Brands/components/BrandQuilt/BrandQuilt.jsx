import { useCallback, useEffect, useRef, useState } from "react";
import { useApp } from "AppProvider.jsx";
import gsap from "gsap";
import clients from "./data/clients.js";
import "./styles.scss";

export default function BrandQuilt() {
  const { breakpoints, windowSize } = useApp();
  const { width } = windowSize;

  const quiltRef = useRef(null);
  const thirdAmount = Math.ceil(clients.length / 3);

  const [animationHasRun, setAnimationHasRun] = useState(false);

  const setRowStyles = useCallback(
    ({ radius, startingIndex, spacingOffset }) => {
      const clientElements = quiltRef.current.children;
      const arcAngle = Math.PI / 8;
      const angleStep = arcAngle / (thirdAmount - 1);

      for (
        let i = startingIndex;
        i < Math.min(startingIndex + thirdAmount, clients.length);
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
    [animationHasRun, thirdAmount]
  );

  useEffect(() => {
    const minWidth = breakpoints.md;
    const maxWidth = breakpoints.lg;
    const minValue = 400;
    const maxValue = 500;

    const resolvedBaseRadius = Math.min(
      maxValue,
      Math.max(
        minValue,
        ((width - minWidth) / (maxWidth - minWidth)) * (maxValue - minValue) +
          minValue
      )
    );

    setRowStyles({
      radius: resolvedBaseRadius,
      startingIndex: 0,
      spacingOffset: 100,
    });
    setRowStyles({
      radius: resolvedBaseRadius,
      startingIndex: thirdAmount,
      spacingOffset: 0,
    });
    setRowStyles({
      radius: resolvedBaseRadius,
      startingIndex: thirdAmount * 2,
      spacingOffset: -100,
    });
  }, [breakpoints, setRowStyles, thirdAmount, width]);

  return (
    <div className="brand-quilt" ref={quiltRef}>
      {clients
        .sort((a, b) => a.order - b.order)
        .map(({ component: LogoComponent, id }) => (
          <LogoComponent key={id} />
        ))}
      <div className="layout-line"></div>
      <div className="layout-line layout-line--horizontal"></div>
    </div>
  );
}
