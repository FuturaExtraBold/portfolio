import { gsap } from "gsap";

const beamDuration = 6;
const flashDuration = 0.4;
let beamTimeline: gsap.core.Timeline | null = null;
let flashTimeline: gsap.core.Timeline | null = null;

export const animateWindowGlow = ({ windowGlowRef }: any): void => {
  console.log("Lighthouse - Window - animateWindowGlow");

  const flicker = () => {
    if (windowGlowRef.current) {
      gsap.to(windowGlowRef.current, {
        alpha: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 0.1 + 0.2,
        repeat: 0,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: flicker,
      });
    }
  };
  flicker();
};

export const animateBeams = ({ beamLeftRef, beamRightRef }: any): void => {
  console.log("Lighthouse - Beam - animateBeams");
  const beamAlphaMin = 0.1;
  const beamAlphaMax = 0.8;
  const beamScale = 3;

  requestAnimationFrame(() => {
    if (beamTimeline) return;
    const rbl = beamLeftRef.current;
    const rbr = beamRightRef.current;

    if (!rbl || !rbr) return;

    beamTimeline = gsap.timeline({ repeat: -1 });

    beamTimeline.set(rbl, { pixi: { scaleY: beamScale, alpha: beamAlphaMax } });
    beamTimeline.set(rbr, { pixi: { scaleY: 0, alpha: 0 } });
    beamTimeline.to(rbl, {
      pixi: { scaleY: 0, alpha: beamAlphaMin },
      ease: "circ.out",
      duration: beamDuration,
    });
    beamTimeline.set(rbl, { pixi: { alpha: 0, scaleY: 0 } });
    beamTimeline.set(rbr, { pixi: { alpha: 0, scaleY: 0 } });
    beamTimeline.to(rbr, {
      pixi: { scaleY: beamScale, alpha: beamAlphaMax },
      ease: "circ.in",
      delay: beamDuration,
      duration: beamDuration,
    });
  });
};

export const animateFlash = ({ overlayRef }: any): void => {
  console.log("Lighthouse - Flash - animateFlash");

  requestAnimationFrame(() => {
    if (flashTimeline) return;
    const or = overlayRef.current;

    if (!or) return;

    flashTimeline = gsap.timeline({ repeat: -1 });

    flashTimeline.to(or, {
      pixi: {
        alpha: 0,
      },
      duration: flashDuration,
    });
    flashTimeline.to(or, {
      pixi: {
        alpha: 0.7,
      },
      delay: beamDuration * 3 - flashDuration * 2,
      duration: flashDuration,
    });
  });
};
