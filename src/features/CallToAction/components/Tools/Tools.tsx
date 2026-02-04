import { gsap } from "gsap";
import { cloneElement, type JSX, useEffect, useRef } from "react";
import { AnimatedText } from "ui";

import { BsLayers } from "react-icons/bs";
import {
  FaChrome,
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaImage,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
  FaSketch,
  FaUniversalAccess,
} from "react-icons/fa";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAmazons3,
  SiEslint,
  SiExpress,
  SiFramer,
  SiGreensock,
  SiJest,
  SiJira,
  SiJquery,
  SiLighthouse,
  SiNetlify,
  SiNextdotjs,
  SiNotion,
  SiPostman,
  SiReactrouter,
  SiRuby,
  SiRubyonrails,
  SiShopify,
  SiSlack,
  SiStorybook,
  SiStylelint,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiZoom,
} from "react-icons/si";
import { VscTerminal, VscVscode } from "react-icons/vsc";

import "./styles.scss";

export const Tools = (): JSX.Element => {
  const elRef = useRef<HTMLDivElement | null>(null);

  const skills = [
    // Frameworks & Libraries
    { label: "React", icon: <FaReact /> },
    { label: "TypeScript", icon: <SiTypescript /> },
    { label: "JavaScript", icon: <FaJs /> },
    { label: "Vite", icon: <SiVite /> },
    { label: "Next.js", icon: <SiNextdotjs /> },
    { label: "Svelte", icon: <SiSvelte /> },
    { label: "Vue.js", icon: <SiVuedotjs /> },
    { label: "TanStack Router", icon: <SiReactrouter /> },
    { label: "Zustand", icon: <BsLayers /> },
    { label: "GSAP", icon: <SiGreensock /> },
    { label: "Pixi JS", icon: <FaJs /> },
    { label: "Framer Motion", icon: <SiFramer /> },
    { label: "Canvas", icon: <FaHtml5 /> },

    // Platforms
    { label: "Vercel", icon: <SiVercel /> },
    { label: "Netlify", icon: <SiNetlify /> },
    { label: "Amazon S3", icon: <SiAmazons3 /> },

    // UI / Styling
    { label: "Tailwind CSS", icon: <SiTailwindcss /> },
    { label: "HTML", icon: <FaHtml5 /> },
    { label: "CSS", icon: <FaCss3 /> },
    { label: "Sass, SCSS", icon: <FaSass /> },
    { label: "Stylelint", icon: <SiStylelint /> },
    { label: "ESLint", icon: <SiEslint /> },

    // Design Tools
    { label: "Figma", icon: <FaFigma /> },
    { label: "Sketch", icon: <FaSketch /> },
    { label: "Photoshop", icon: <SiAdobephotoshop /> },
    { label: "Illustrator", icon: <SiAdobeillustrator /> },

    // Testing & Optimization
    { label: "Jest", icon: <SiJest /> },
    { label: "Lighthouse", icon: <SiLighthouse /> },
    { label: "Axe / WAVE", icon: <FaUniversalAccess /> },
    { label: "ImageOptim", icon: <FaImage /> },

    // Dev Tools & Collaboration
    { label: "VSCode", icon: <VscVscode /> },
    { label: "DevTools", icon: <FaChrome /> },
    { label: "CLI", icon: <VscTerminal /> },
    { label: "GitHub", icon: <FaGithub /> },
    { label: "Postman", icon: <SiPostman /> },
    { label: "Storybook", icon: <SiStorybook /> },
    { label: "Jira", icon: <SiJira /> },
    { label: "Notion", icon: <SiNotion /> },
    { label: "Zoom", icon: <SiZoom /> },
    { label: "Slack", icon: <SiSlack /> },

    // Backend & Build
    { label: "Node", icon: <FaNodeJs /> },
    { label: "NPM", icon: <FaNpm /> },
    { label: "Express", icon: <SiExpress /> },
    { label: "Liquid", icon: <SiShopify /> },
    { label: "Ruby", icon: <SiRuby /> },
    { label: "Rails", icon: <SiRubyonrails /> },

    // Legacy / Misc
    { label: "jQuery", icon: <SiJquery /> },
    { label: "Litmus", icon: <MdOutlineMarkEmailRead /> },
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
