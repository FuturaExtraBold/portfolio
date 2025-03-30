import React, { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import clients from "../../../../../data/clients.js";

export default function Logos() {
  const quiltRef = useRef(null);
  const halfAmount = Math.ceil(clients.length / 2);

  const setRowStyles = useCallback(
    ({ radius, startingIndex, spacingOffset }) => {
      const clients = quiltRef.current.children;
      const arcAngle = Math.PI / 4;
      const angleStep = arcAngle / (clients.length - 1);

      for (let i = startingIndex; i < clients.length; i++) {
        const angle = -arcAngle / 2 + (i - startingIndex) * angleStep * 2;
        const x = radius * Math.sin(angle) * 2;
        const y = radius * (1 - Math.cos(angle)) * 2 - spacingOffset;
        clients[
          i
        ].style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad) scale(0.8)`;
      }

      gsap.fromTo(
        clients,
        { opacity: 0 },
        { opacity: 1, ease: "power2.in", stagger: 0.05, duration: 0.2 }
      );
    },
    []
  );

  useEffect(() => {
    setRowStyles({
      radius: 600,
      startingIndex: 0,
      spacingOffset: 70,
    });
    setRowStyles({
      radius: 650,
      startingIndex: halfAmount,
      spacingOffset: -70,
    });
  }, [setRowStyles, halfAmount]);

  return (
    <div className="brand-quilt" ref={quiltRef}>
      {clients
        .sort((a, b) => a.order - b.order)
        .map(({ component: LogoComponent, id }) => (
          <LogoComponent key={id} />
        ))}
    </div>
  );
}
