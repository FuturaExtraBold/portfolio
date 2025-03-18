import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logos from "../logos.js";

export default function Logos() {
  const quiltRef = useRef(null);
  const halfAmount = Math.ceil(logos.length / 2);

  useEffect(() => {
    const logos = quiltRef.current.children;
    const radius = 600; // Arc radius
    const arcAngle = Math.PI / 4; // Angle of the arc (180° = Math.PI, 120° = Math.PI / 1.5, etc.)
    const angleStep = arcAngle / (logos.length - 1);

    for (let i = 0; i < halfAmount; i++) {
      const angle = -arcAngle / 2 + i * angleStep * 2; // Center the arc
      const x = radius * Math.sin(angle) * 2; // Horizontal position
      const y = radius * (1 - Math.cos(angle)) * 2 - 70; // Vertical position to simulate an arc

      logos[
        i
      ].style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad) scale(0.8)`;
    }

    gsap.fromTo(
      logos,
      { opacity: 0 },
      { opacity: 1, ease: "power2.in", stagger: 0.05, duration: 0.2 }
    );
  }, [halfAmount]);

  useEffect(() => {
    const logos = quiltRef.current.children;
    const radius = 650; // Arc radius
    const arcAngle = Math.PI / 4; // Angle of the arc (180° = Math.PI, 120° = Math.PI / 1.5, etc.)
    const angleStep = arcAngle / (logos.length - 1);

    for (let i = halfAmount; i < logos.length; i++) {
      const angle = -arcAngle / 2 + (i - halfAmount) * angleStep * 2; // Center the arc
      const x = radius * Math.sin(angle) * 2; // Horizontal position
      const y = radius * (1 - Math.cos(angle)) * 2 + 70; // Vertical position to simulate an arc

      logos[
        i
      ].style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad) scale(0.8)`;
    }

    gsap.fromTo(
      logos,
      { opacity: 0 },
      { opacity: 1, ease: "power2.in", stagger: 0.05, duration: 0.2 }
    );
  }, [halfAmount]);

  return (
    <div className="brand-quilt" ref={quiltRef}>
      {logos
        .sort((a, b) => a.order - b.order)
        .map(({ component: LogoComponent, order }) => (
          <LogoComponent key={order} />
        ))}
    </div>
  );
}
