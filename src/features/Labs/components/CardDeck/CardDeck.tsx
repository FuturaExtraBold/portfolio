import { type JSX, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapContext } from "hooks/useGsapContext";
import type { LabProject } from "data/labs";
import TarotCard from "../TarotCard/TarotCard";
import "./styles.scss";

interface CardDeckProps {
  projects: LabProject[];
}

const RADIUS = 900;
const ARC_SPREAD_DEG = 35;

function getArcPosition(
  index: number,
  total: number
): { x: number; y: number; rotation: number } {
  const spread = ARC_SPREAD_DEG;
  const startAngle = -spread / 2;
  const angle = total === 1 ? 0 : startAngle + (index / (total - 1)) * spread;
  const θ = (angle * Math.PI) / 180;
  const x = Math.sin(θ) * RADIUS;
  const y = -Math.cos(θ) * RADIUS + RADIUS;
  return { x, y, rotation: angle };
}

export default function CardDeck({ projects }: CardDeckProps): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arcPositions = useRef<{ x: number; y: number; rotation: number }[]>([]);

  arcPositions.current = projects.map((_, i) =>
    getArcPosition(i, projects.length)
  );

  useGsapContext(
    () => {
      if (!deckRef.current || projects.length === 0) return;
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      // All cards start stacked below, centered
      gsap.set(cards, { xPercent: -50, x: 0, y: 600, rotation: 0, opacity: 0 });

      // Single timeline with one ScrollTrigger, staggered per card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: deckRef.current,
          start: "top 70%",
          once: true,
        },
      });

      arcPositions.current.forEach(({ x, y, rotation }, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        tl.to(
          el,
          {
            xPercent: -50,
            x,
            y,
            rotation,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          i * 0.12
        );
      });
    },
    [projects.length],
    deckRef
  );

  const handleCardEnter = (i: number) => {
    const el = cardRefs.current[i];
    const pos = arcPositions.current[i];
    if (el && pos) {
      gsap.to(el, {
        xPercent: -50,
        x: pos.x,
        y: pos.y - 28,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    setActiveIndex(i);
  };

  const handleCardLeave = (i: number) => {
    const el = cardRefs.current[i];
    const pos = arcPositions.current[i];
    if (el && pos) {
      gsap.to(el, {
        xPercent: -50,
        x: pos.x,
        y: pos.y,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    setActiveIndex(null);
  };

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  // Center card(s) get highest z-index
  const center = (projects.length - 1) / 2;
  const getZIndex = (i: number) =>
    projects.length - Math.round(Math.abs(i - center));

  return (
    <div className="card-deck" ref={deckRef}>
      <div className="card-deck__stage">
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="card-deck__card-wrapper"
          >
            <TarotCard
              isActive={activeIndex === i}
              project={project}
              zIndex={getZIndex(i)}
              onMouseEnter={() => handleCardEnter(i)}
              onMouseLeave={() => handleCardLeave(i)}
            />
          </div>
        ))}
      </div>
      <div
        className={`card-deck__info ${activeProject ? "card-deck__info--visible" : ""}`}
      >
        {activeProject && (
          <>
            <h3 className="card-deck__info-name">{activeProject.name}</h3>
            <p className="card-deck__info-description">
              {activeProject.description}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
