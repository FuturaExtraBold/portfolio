import { gsap } from "gsap";

export const animateWindowGlow = (windowGlowRef: any): void => {
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

export const animateLighthouse = ({
  beamRef,
  overlayRef,
  parentSize,
}: any): void => {
  const repeat = -1;
  const tl = gsap.timeline({ repeat: repeat });
  const tlo = gsap.timeline({ repeat: repeat });
  const brc = beamRef.current;
  const orc = overlayRef.current;

  console.log("parentSize:", parentSize);

  tl.set(brc, {
    pixi: {
      scaleY: 0.5,
    },
  });
  tl.to(brc, {
    pixi: {
      scaleY: 0,
    },
    ease: "circ.out",
    duration: 3,
  });
  tl.set(brc, {
    pixi: {
      scaleX: -0.5,
      scaleY: 0.5,
    },
  });
  // tl.to(brc, {
  //   pixi: {
  //     alpha: 0.8,
  //     scaleY: 10,
  //   },
  //   ease: "circ.in",
  //   duration: 6,
  // });
  console.log(tl.totalDuration());

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
