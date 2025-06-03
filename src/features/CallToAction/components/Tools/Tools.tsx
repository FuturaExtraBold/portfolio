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
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAngular,
  SiBootstrap,
  SiContentful,
  SiExpress,
  SiGreensock,
  SiLighthouse,
  SiNetlify,
  SiRuby,
  SiRubyonrails,
  SiShopify,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";
import { VscTerminal, VscVscode } from "react-icons/vsc";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import "./styles.scss";

export const Tools = () => {
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

    // Testing & Optimization
    { label: "Lighthouse", icon: <SiLighthouse /> },
    { label: "Litmus", icon: <MdOutlineMarkEmailRead /> },
    { label: "ImageOptim", icon: <FaImage /> },
    { label: "Clop", icon: <FaImage /> },

    // Dev Tools & Platforms
    { label: "VSCode", icon: <VscVscode /> },
    { label: "DevTools", icon: <FaChrome /> },
    { label: "CLI, Terminal", icon: <VscTerminal /> },
    { label: "Github", icon: <FaGithub /> },
    { label: "Netlify", icon: <SiNetlify /> },
    { label: "Contentful", icon: <SiContentful /> },

    // Backend & Build
    { label: "Node", icon: <FaNodeJs /> },
    { label: "Express", icon: <SiExpress /> },
    { label: "NPM", icon: <FaNpm /> },
    { label: "Liquid", icon: <SiShopify /> },
    { label: "Ruby", icon: <SiRuby /> },
    { label: "Rails", icon: <SiRubyonrails /> },
  ];

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
