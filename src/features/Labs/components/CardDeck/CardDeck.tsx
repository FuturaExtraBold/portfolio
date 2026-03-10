import type { LabProject } from "data/labs";
import gsap from "gsap";
import { useGsapContext } from "hooks/useGsapContext";
import { type JSX, useRef, useState } from "react";
import TarotCard from "../TarotCard/TarotCard";
import "./styles.scss";

interface CardDeckProps {
  projects: LabProject[];
}

const RADIUS = 1400;
const ARC_SPREAD_DEG = 34;
const JITTER_PX = 18;

function getArcPosition(
  index: number,
  total: number,
): { x: number; y: number; rotation: number } {
  const startAngle = -ARC_SPREAD_DEG / 2;
  const angle =
    total === 1 ? 0 : startAngle + (index / (total - 1)) * ARC_SPREAD_DEG;
  const θ = (angle * Math.PI) / 180;
  const x = Math.sin(θ) * RADIUS;
  const y = -Math.cos(θ) * RADIUS + RADIUS;
  // Dampen rotation so cards lie flat rather than fan like a hand
  return { x, y, rotation: angle * 0.35 };
}

function rand(range: number) {
  return (Math.random() - 0.5) * 2 * range;
}

export default function CardDeck({ projects }: CardDeckProps): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Arc positions with jitter baked in — generated once, stable across re-renders
  const arcPositions = useRef(
    projects.map((_, i) => {
      const { x, y, rotation } = getArcPosition(i, projects.length);
      return {
        x: x + rand(JITTER_PX),
        y: y + rand(JITTER_PX),
        rotation,
      };
    }),
  );

  // Cards increment left-to-right; hover always floats above all
  const getBaseZIndex = (i: number) => i + 1;

  useGsapContext(
    () => {
      if (!deckRef.current || projects.length === 0) return;
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      cards.forEach((el, i) => gsap.set(el, { zIndex: getBaseZIndex(i) }));
      gsap.set(cards, { xPercent: -50, x: 0, y: 600, rotation: 0, opacity: 0 });

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
          i * 0.12,
        );
      });
    },
    [projects.length],
    deckRef,
  );

  const handleCardEnter = (i: number) => {
    const el = cardRefs.current[i];
    const pos = arcPositions.current[i];
    if (el && pos) {
      gsap.set(el, { zIndex: projects.length + 1 });
      gsap.to(el, {
        xPercent: -50,
        x: pos.x,
        y: pos.y - 40,
        scale: 1.2,
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
        onComplete: () => gsap.set(el, { zIndex: getBaseZIndex(i) }),
      });
    }
    setActiveIndex(null);
  };

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;
  const isHovered = activeIndex !== null;

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
              project={project}
              index={i}
              onMouseEnter={() => handleCardEnter(i)}
              onMouseLeave={() => handleCardLeave(i)}
            />
          </div>
        ))}
      </div>

      <div className="card-deck__footer">
        <div
          className={`card-deck__prompt ${!isHovered ? "card-deck__prompt--visible" : ""}`}
        >
          Each card guards a secret. Lay your hand upon one to draw it forth.
        </div>
        <div
          className={`card-deck__info ${isHovered ? "card-deck__info--visible" : ""}`}
        >
          <h3 className="card-deck__info-name">{activeProject?.name ?? ""}</h3>
          <p className="card-deck__info-description">
            {activeProject?.description ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
}
