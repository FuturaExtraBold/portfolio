import { gsap } from "gsap";

export const animateWindowGlow = (windowGlowRef: any): void => {
  console.log("animate window glow");

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
  console.log("animate beams");

  const beamAlphaMin = 0.1;
  const beamAlphaMax = 0.8;
  const beamDuration = 6;
  const beamScale = 3;

  requestAnimationFrame(() => {
    const rbl = beamLeftRef.current;
    const rbr = beamRightRef.current;

    if (!rbl || !rbr) return;

    const tl = gsap.timeline({ repeat: -1 });

    tl.set(rbl, { pixi: { scaleY: beamScale, alpha: beamAlphaMax } });
    tl.set(rbr, { pixi: { scaleY: 0, alpha: 0 } });
    tl.to(rbl, {
      pixi: { scaleY: 0, alpha: beamAlphaMin },
      ease: "circ.out",
      duration: beamDuration,
    });
    tl.set(rbl, { pixi: { alpha: 0 } });
    tl.set(rbr, { pixi: { alpha: 0.1 } });
    tl.to(rbr, {
      pixi: { scaleY: beamScale, alpha: beamAlphaMax },
      ease: "circ.in",
      duration: beamDuration,
    });
  });
};

export const animateFlash = ({ overlayRef }: any): void => {
  console.log("animate flash");
  // tlo.to(orc, {
  //   pixi: {
  //     alpha: 0,
  //   },
  //   duration: 0.4,
  // });
  // tlo.to(orc, {
  //   pixi: {
  //     alpha: 0.7,
  //   },
  //   delay: 11.2,
  //   duration: 0.4,
  // });
  // console.log(tlo.totalDuration());
};
