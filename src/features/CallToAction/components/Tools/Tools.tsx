import { gsap } from "gsap";
import { cloneElement, type JSX, useEffect, useRef } from "react";
import { AnimatedText } from "ui";

import { BsLayers } from "react-icons/bs";
import {
  FaCss3,
  FaCube,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaSketch,
  FaUniversalAccess,
} from "react-icons/fa";

import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBlender,
  SiExpress,
  SiFramer,
  SiGreensock,
  SiJest,
  SiLighthouse,
  SiNetlify,
  SiNextdotjs,
  SiOpengl,
  SiReactrouter,
  SiShopify,
  SiSocketdotio,
  SiStorybook,
  SiSvelte,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";

import "./styles.scss";

export const Tools = (): JSX.Element => {
  const elRef = useRef<HTMLDivElement | null>(null);

  const skills = [
    // --- CORE TECH ---
    { label: "React", icon: <FaReact /> },
    { label: "TypeScript", icon: <SiTypescript /> },
    { label: "JavaScript", icon: <FaJs /> },
    { label: "Next.js", icon: <SiNextdotjs /> },
    { label: "Vite", icon: <SiVite /> },
    { label: "Node", icon: <FaNodeJs /> },

    // --- THE CREATIVE ARSENAL ---
    { label: "Three.js", icon: <SiThreedotjs /> },
    { label: "React Three Fiber", icon: <FaReact /> },
    { label: "PixiJS", icon: <FaJs /> },
    { label: "WebGL", icon: <SiOpengl /> },
    { label: "GSAP", icon: <SiGreensock /> },
    { label: "Blender", icon: <SiBlender /> },
    { label: "Shaders (GLSL)", icon: <FaCube /> },

    // --- MOTION & INTERACTION ---
    { label: "Framer Motion", icon: <SiFramer /> },
    { label: "WebSockets", icon: <SiSocketdotio /> }, // NEW: Essential for "Apple-quality" motion
    { label: "Svelte", icon: <SiSvelte /> },
    { label: "Vue.js", icon: <SiVuedotjs /> },
    { label: "TanStack Router", icon: <SiReactrouter /> },

    // --- UI & STYLING ---
    { label: "Tailwind CSS", icon: <SiTailwindcss /> },
    { label: "HTML", icon: <FaHtml5 /> },
    { label: "CSS", icon: <FaCss3 /> },
    { label: "Sass, SCSS", icon: <FaSass /> },
    { label: "Figma", icon: <FaFigma /> },
    { label: "Photoshop", icon: <SiAdobephotoshop /> },
    { label: "Illustrator", icon: <SiAdobeillustrator /> },
    { label: "Sketch", icon: <FaSketch /> },
    { label: "Storybook", icon: <SiStorybook /> },

    // --- PLATFORMS & DEPLOY ---
    { label: "Vercel", icon: <SiVercel /> },
    { label: "Netlify", icon: <SiNetlify /> },
    { label: "GitHub", icon: <FaGithub /> },
    { label: "Express", icon: <SiExpress /> },
    { label: "Liquid", icon: <SiShopify /> },
    { label: "Zustand", icon: <BsLayers /> },

    // --- TESTING ---
    { label: "Jest", icon: <SiJest /> },
    { label: "Lighthouse", icon: <SiLighthouse /> },
    { label: "Axe / WAVE", icon: <FaUniversalAccess /> },
  ];

  useEffect(() => {
    if (!elRef.current) return;

    const ctx = gsap.context(() => {
      const items = elRef.current!.querySelectorAll(".tools__item");

      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.015,
          delay: 0.05,
          duration: 0.5,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: elRef.current,
            start: "top bottom-=100px",
            once: true,
          },
        },
      );
    }, elRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="tools">
      <span className="heading--3 tools__title">
        <AnimatedText text="Tools of the Trade" />
      </span>
      <div className="tools__grid" ref={elRef}>
        {skills.map(({ label, icon }) => (
          <div key={label} className="text-light tools__item">
            <div className="tools__icon">
              {cloneElement(icon, {
                "aria-label": `${label} Icon`,
                role: "img",
                focusable: false,
              })}
            </div>
            <span className="body tools__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
