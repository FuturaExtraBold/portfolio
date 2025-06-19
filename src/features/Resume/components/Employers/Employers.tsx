import { type JSX, useEffect } from "react";
import { gsap } from "gsap";
import Employer from "../Employer/Employer";
import HookyGrand from "ui/Logos/HookyGrand";
import Kajabi from "ui/Logos/Kajabi";
import Studio318 from "ui/Logos/Studio318";
import "./styles.scss";

export default function Employers(): JSX.Element {
  useEffect(() => {
    const items = document.querySelectorAll(".employer");
    const logos = document.querySelectorAll(".employer__logo");
    const tenures = document.querySelectorAll(".employer__tenure");
    const descriptions = document.querySelectorAll(".employer__description");
    if (
      !items.length ||
      !logos.length ||
      !tenures.length ||
      !descriptions.length
    )
      return;

    let hasAnimated = false;

    const animate = () => {
      gsap.fromTo(
        logos,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0,
          duration: 0.5,
          ease: "expo.out(4)",
        }
      );
      gsap.fromTo(
        tenures,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.02,
          duration: 0.5,
          ease: "expo.out(4)",
        }
      );
      gsap.fromTo(
        descriptions,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.04,
          duration: 0.5,
          ease: "expo.out(4)",
        }
      );
    };

    const handleScroll = () => {
      if (hasAnimated) return;
      const grid = document.querySelector(".employers");
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
    <div className="employers">
      <Employer
        logo={<Kajabi />}
        name="Kajabi"
        tenure="2013 &ndash; 2024"
        description="At Kajabi, our teams crafted intuitive tools that let creators share and sell what they know. From dynamic websites to seamless marketing, every element worked to fuel growth for our customer's business."
      />
      <Employer
        logo={<HookyGrand />}
        name="Hooky"
        tenure="2008 &ndash; 2013"
        description="At Hooky, our main philosophy was to play. By combining bold creative vision with unparalleled technical initiative, the small nimble project teams produced fresh and imaginative work for our clients, and their users."
      />
      <Employer
        logo={<Studio318 />}
        name="Studio318"
        tenure="2007 &ndash; 2008"
        description="At Studio 318, an award-winning, woman and minority-owned graphic design agency, we collaborated with industry leaders. Our passion for design and strategy turned concepts into lasting, compelling visuals."
      />
    </div>
  );
}
