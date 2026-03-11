import "./styles.scss";

import type { LabProject } from "data/labs";
import gsap from "gsap";
import { forwardRef, type JSX, useImperativeHandle, useRef } from "react";

interface TarotCardProps {
  project: LabProject;
  index: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export interface TarotCardHandle {
  flip: () => void;
  unflip: () => void;
}

const TarotCard = forwardRef<TarotCardHandle, TarotCardProps>(
  function TarotCard(
    { project, index, onMouseEnter, onMouseLeave },
    ref,
  ): JSX.Element {
    const innerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      flip() {
        if (innerRef.current) {
          gsap.to(innerRef.current, {
            rotationY: 180,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      },
      unflip() {
        if (innerRef.current) {
          gsap.to(innerRef.current, {
            rotationY: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      },
    }));

    const handleMouseEnter = () => {
      if (innerRef.current) {
        gsap.to(innerRef.current, {
          rotationY: 180,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
      onMouseEnter();
    };

    const handleMouseLeave = () => {
      if (innerRef.current) {
        gsap.to(innerRef.current, {
          rotationY: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
      onMouseLeave();
    };

    const handleClick = () => {
      window.open(project.url, "_blank", "noopener,noreferrer");
    };

    return (
      <div
        className="tarot-card"
        style={{ animationDelay: `${index * 0.55}s` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        data-umami-event={`demo-${project.name.toLowerCase().replace(/\s+/g, "-")}-click`}
      >
        <div className="tarot-card__inner" ref={innerRef}>
          <div className="tarot-card__front">
            <img
              alt={`${project.name} tarot card`}
              src={project.tarotImage}
              srcSet={`${project.tarotImage1x} 220w, ${project.tarotImage} 440w`}
              sizes="clamp(150px, 13vw, 220px)"
              width={220}
              height={330}
            />
          </div>
          <div className="tarot-card__back">
            <video autoPlay muted loop playsInline src={project.protoVideo} />
          </div>
        </div>
      </div>
    );
  },
);

export default TarotCard;
