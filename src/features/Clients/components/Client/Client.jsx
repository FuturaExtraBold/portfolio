import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import classnames from "classnames";
import "./styles.scss";

export default function Client({ LogoComponent, onClick, title }) {
  const classNames = classnames("client", {
    "client--available": title && title.length > 0,
  });

  const particleContainerRef = useRef(null);

  useEffect(() => {
    const particleContainer = particleContainerRef.current;

    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.position = "absolute";
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.borderRadius = "50%";
      particle.style.backgroundColor = `#ffffff`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
      particle.style.top = `50%`;
      particle.style.left = `${Math.random() * 80 + 10}%`;
      particleContainer.appendChild(particle);
      particles.push(particle);
    }

    particles.forEach((particle) => {
      const duration = Math.random() * 2 + 1;
      const delay = Math.random() * 2;
      gsap.to(particle, {
        x: Math.random() * 20 - 10,
        y: -Math.random() * 60 - 30,
        opacity: 0,
        duration,
        delay,
        repeat: -1,
        ease: "power1.in",
      });
    });
  }, []);

  return (
    <div className={classNames} onClick={onClick}>
      <div className="particle-container" ref={particleContainerRef}></div>
      <LogoComponent />
    </div>
  );
}
