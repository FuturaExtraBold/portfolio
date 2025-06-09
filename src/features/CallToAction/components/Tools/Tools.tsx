import { type JSX, useEffect } from "react";
import { gsap } from "gsap";

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
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAngular,
  SiBabel,
  SiBootstrap,
  SiContentful,
  SiEslint,
  SiExpress,
  SiGreensock,
  SiJest,
  SiJira,
  SiLighthouse,
  SiNetlify,
  SiNotion,
  SiPostman,
  SiRuby,
  SiRubyonrails,
  SiShopify,
  SiSlack,
  SiStorybook,
  SiStylelint,
  SiSvelte,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
  SiZoom,
} from "react-icons/si";
import { VscTerminal, VscVscode } from "react-icons/vsc";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import "./styles.scss";

export const Tools = (): JSX.Element => {
  const skills = [
    // Frameworks & Libraries
    { label: "React", icon: <FaReact /> },
    { label: "Typescript", icon: <SiTypescript /> },
    { label: "Javascript", icon: <FaJs /> },
    { label: "Vite", icon: <SiVite /> },
    { label: "Angular", icon: <SiAngular /> },
    { label: "Svelte", icon: <SiSvelte /> },
    { label: "Vue", icon: <SiVuedotjs /> },
    { label: "GSAP", icon: <SiGreensock /> },
    { label: "Pixi JS", icon: <FaJs /> },
    { label: "Canvas", icon: <FaHtml5 /> },

    // Design & UI Tools
    { label: "Photoshop", icon: <SiAdobephotoshop /> },
    { label: "Illustrator", icon: <SiAdobeillustrator /> },
    { label: "Figma", icon: <FaFigma /> },
    { label: "Sketch", icon: <FaSketch /> },
    { label: "Bootstrap", icon: <SiBootstrap /> },
    { label: "Tailwind", icon: <SiTailwindcss /> },
    { label: "HTML", icon: <FaHtml5 /> },
    { label: "CSS", icon: <FaCss3 /> },
    { label: "Sass, SCSS", icon: <FaSass /> },
    { label: "Stylelint", icon: <SiStylelint /> },
    { label: "ESLint", icon: <SiEslint /> },

    // Testing & Optimization
    { label: "Lighthouse", icon: <SiLighthouse /> },
    { label: "Litmus", icon: <MdOutlineMarkEmailRead /> },
    { label: "ImageOptim", icon: <FaImage /> },
    { label: "Clop", icon: <FaImage /> },
    { label: "Jest", icon: <SiJest /> },
    { label: "Axe / WAVE", icon: <FaUniversalAccess /> },

    // Dev Tools & Platforms
    { label: "VSCode", icon: <VscVscode /> },
    { label: "DevTools", icon: <FaChrome /> },
    { label: "CLI", icon: <VscTerminal /> },
    { label: "Github", icon: <FaGithub /> },
    { label: "Netlify", icon: <SiNetlify /> },
    { label: "Contentful", icon: <SiContentful /> },
    { label: "Storybook", icon: <SiStorybook /> },
    { label: "Postman", icon: <SiPostman /> },
    { label: "Jira", icon: <SiJira /> },
    { label: "Notion", icon: <SiNotion /> },
    { label: "Trello", icon: <SiTrello /> },
    { label: "Zoom", icon: <SiZoom /> },
    { label: "Slack", icon: <SiSlack /> },

    // Backend & Build
    { label: "Node", icon: <FaNodeJs /> },
    { label: "Express", icon: <SiExpress /> },
    { label: "NPM", icon: <FaNpm /> },
    { label: "Liquid", icon: <SiShopify /> },
    { label: "Ruby", icon: <SiRuby /> },
    { label: "Rails", icon: <SiRubyonrails /> },
    { label: "Webpack", icon: <SiWebpack /> },
    { label: "Babel", icon: <SiBabel /> },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".tools__item");
    let hasAnimated = false;

    const animate = () => {
      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          delay: 0.008,
          duration: 0.15,
          ease: "back.out(1.2)",
        }
      );
    };

    const handleScroll = () => {
      if (hasAnimated) return;
      const grid = document.querySelector(".tools__grid");
      if (!grid) return;
      const rect = grid.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        animate();
        hasAnimated = true;
        document.body.removeEventListener("scroll", handleScroll);
      }
    };

    document.body.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="tools">
      <span className="heading--3 tools__title">Tools of the Trade</span>
      <div className="tools__grid">
        {skills.map(({ label, icon }) => (
          <div key={label} className="text-light tools__item">
            <div className="tools__icon">{icon}</div>
            <span className="body tools__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
