import { type JSX, useRef } from "react";
import gsap from "gsap";
import type { LabProject } from "data/labs";
import "./styles.scss";

interface TarotCardProps {
  project: LabProject;
  zIndex: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isActive: boolean;
}

export default function TarotCard({
  project,
  zIndex,
  onMouseEnter,
  onMouseLeave,
  isActive,
}: TarotCardProps): JSX.Element {
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (innerRef.current) {
      gsap.to(innerRef.current, {
        rotationY: 180,
        duration: 0.55,
        ease: "power2.inOut",
      });
    }
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    if (innerRef.current) {
      gsap.to(innerRef.current, {
        rotationY: 0,
        duration: 0.55,
        ease: "power2.inOut",
      });
    }
    onMouseLeave();
  };

  return (
    <div
      className={`tarot-card ${isActive ? "tarot-card--active" : ""}`}
      style={{ zIndex: isActive ? 100 : zIndex }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tarot-card__inner" ref={innerRef}>
        <div className="tarot-card__front">
          <img
            alt={`${project.name} tarot card`}
            src={project.tarotImage}
          />
        </div>
        <div className="tarot-card__back">
          <img
            alt={`${project.name} prototype preview`}
            src={project.protoGif}
          />
        </div>
      </div>
    </div>
  );
}
