import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaGithub,
  FaFigma,
  // FaAdobe,
  FaVimeoV,
  FaSketch,
  FaNpm,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGatsby,
  SiVite,
  SiShopify,
  // SiGsap,
  // SiPixijs,
  SiNetlify,
  // SiVisualstudiocode,
  SiExpress,
  SiLighthouse,
  SiAdobephotoshop,
  SiAdobeillustrator,
  // SiActionscript,
  // SiObjectivec,
} from "react-icons/si";
import "./styles.scss";

export const Tools = () => {
  const skills = [
    { label: "React", icon: <FaReact /> },
    { label: "Typescript", icon: <SiTypescript /> },
    { label: "Javascript", icon: <FaJs /> },
    { label: "HTML", icon: <FaHtml5 /> },
    { label: "SCSS", icon: <FaSass /> },
    { label: "Photoshop", icon: <SiAdobephotoshop /> },
    { label: "Illustrator", icon: <SiAdobeillustrator /> },
    { label: "Figma", icon: <FaFigma /> },
    { label: "Sketch", icon: <FaSketch /> },
    // { label: "VSCode", icon: <SiVisualstudiocode /> },
    { label: "Liquid", icon: <SiShopify /> },
    { label: "Lighthouse", icon: <SiLighthouse /> },
    { label: "ImageOptim", icon: <FaVimeoV /> }, // Placeholder icon
    { label: "Clop", icon: <FaVimeoV /> }, // Placeholder icon
    // { label: "Litmus", icon: <SiEmail /> }, // Placeholder icon
    // { label: "Shopify", icon: <SiShopify /> },
    { label: "Github", icon: <FaGithub /> },
    { label: "Netlify", icon: <SiNetlify /> },
    // { label: "GSAP", icon: <SiGsap /> },
    { label: "HTML Canvas", icon: <FaHtml5 /> },
    // { label: "Pixi JS", icon: <SiPixijs /> },
    { label: "Developer Tools", icon: <FaVimeoV /> }, // Placeholder icon
    { label: "Express", icon: <SiExpress /> },
    { label: "Node", icon: <FaNodeJs /> },
    { label: "NPM", icon: <FaNpm /> },
    { label: "Vite", icon: <SiVite /> },
    // { label: "ActionScript", icon: <SiActionscript /> },
    // { label: "Objective-C", icon: <SiObjectivec /> },
  ];

  return (
    <section className="tools">
      <span className="heading--3 tools__title">Tools of the Trade</span>
      <div className="tools__grid">
        {skills.map(({ label, icon }) => (
          <div key={label} className="text-light tools__item">
            <div className="tools__icon">{icon}</div>
            <span className="tools__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
