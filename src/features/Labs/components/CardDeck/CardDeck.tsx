import "./styles.scss";

import type { LabProject } from "data/labs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapContext } from "hooks/useGsapContext";
import { type JSX, useCallback, useRef, useState } from "react";

import TarotCard, { type TarotCardHandle } from "../TarotCard/TarotCard";

interface CardDeckProps {
  projects: LabProject[];
}

const RADIUS = 1400;
const ARC_SPREAD_DEG = 34;
const JITTER_PX = 6;

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
  const [displayedIndex, setDisplayedIndex] = useState<number | null>(null);
  const [textVisible, setTextVisible] = useState(false);
  const switchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tarotCardRefs = useRef<(TarotCardHandle | null)[]>([]);
  const isMobile = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches,
  );

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

      if (isMobile.current) {
        cards.forEach((el) => {
          gsap.set(el, { rotation: rand(5), y: rand(10), opacity: 1 });
        });
        ScrollTrigger.create({
          trigger: deckRef.current,
          start: "top 70%",
          once: true,
          onEnter: () => {
            gsap.delayedCall(3, () => {
              projects.forEach((_, i) => {
                gsap.delayedCall(i * 0.2, () =>
                  tarotCardRefs.current[i]?.flip(),
                );
              });
            });
          },
        });
        return;
      }

      gsap.set(cards, { xPercent: -50, x: 0, y: 600, rotation: 0, opacity: 0 });

      const startPeek = () => {
        const count = projects.length;
        // Flip each card to back, staggered 0.2s apart
        for (let i = 0; i < count; i++) {
          gsap.delayedCall(i * 0.2, () => {
            tarotCardRefs.current[i]?.flip();
          });
        }
        // After last flip (+ flip duration 0.3s) + 3s hold, start unflipping
        const unflipStart = (count - 1) * 0.2 + 0.3 + 3.0;
        for (let i = 0; i < count; i++) {
          gsap.delayedCall(unflipStart + i * 0.2, () => {
            tarotCardRefs.current[i]?.unflip();
          });
        }
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: deckRef.current,
          start: "top 70%",
          once: true,
        },
        onComplete: () => gsap.delayedCall(2, startPeek),
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

  const handleCardEnter = useCallback(
    (i: number) => {
      if (isMobile.current) return;
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

      if (switchTimer.current) clearTimeout(switchTimer.current);

      if (displayedIndex !== null) {
        // Switching between cards — fade out, swap, fade in
        setTextVisible(false);
        switchTimer.current = setTimeout(() => {
          setDisplayedIndex(i);
          setTextVisible(true);
        }, 140);
      } else {
        // Fresh hover
        setDisplayedIndex(i);
        setTextVisible(true);
      }
    },
    [displayedIndex, projects.length],
  );

  const handleCardLeave = useCallback((i: number) => {
    if (isMobile.current) return;
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

    if (switchTimer.current) clearTimeout(switchTimer.current);
    setTextVisible(false);
    switchTimer.current = setTimeout(() => setDisplayedIndex(null), 350);
  }, []);

  const displayedProject =
    displayedIndex !== null ? projects[displayedIndex] : null;
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
              ref={(el) => {
                tarotCardRefs.current[i] = el;
              }}
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
          <p
            className={`card-deck__info-name ${textVisible ? "card-deck__info-name--visible" : ""}`}
          >
            {displayedProject?.name ?? ""}
          </p>
          <p
            className={`card-deck__info-description ${textVisible ? "card-deck__info-description--visible" : ""}`}
          >
            {displayedProject?.description ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
}
