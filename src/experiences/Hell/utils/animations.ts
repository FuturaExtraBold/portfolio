import { gsap } from "gsap";

export const animateDisplacementMap = ({ displacementMapRef }: any) => {
  console.log("animateDisplacementMap");

  requestAnimationFrame(() => {
    const dmr = displacementMapRef.current;

    if (!dmr) return;

    gsap.to(dmr, {
      ease: "none",
      duration: 3,
      repeat: -1,
      x: -512,
    });
    gsap.to(dmr, {
      ease: "none",
      duration: 8,
      repeat: -1,
      y: -512,
    });
  });
};
