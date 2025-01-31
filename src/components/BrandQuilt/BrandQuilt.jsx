import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./brand-quilt.scss";
import Disney from "./Logos/Disney";
import DreamWorks from "./Logos/DreamWorks";
import FindingNemo from "./Logos/FindingNemo";
import FOX from "./Logos/FOX";
import Honda from "./Logos/Honda";
import Kajabi from "./Logos/Kajabi";
import KIA from "./Logos/KIA";
import KSwiss from "./Logos/KSwiss";
import Lexus from "./Logos/Lexus";
import Mickey from "./Logos/Mickey";
import Pixar from "./Logos/Pixar";
import SouthPark from "./Logos/SouthPark";
import TheSimpsons from "./Logos/TheSimpsons";
import U2 from "./Logos/U2";

function BrandQuilt() {
  const quiltRef = useRef(null);

  useEffect(() => {
    const logos = quiltRef.current.children;
    gsap.fromTo(
      logos,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, ease: "power2.in", stagger: 0.05, duration: 0.2 }
    );
  }, []);

  return (
    <div className="container">
      <div className="brand-quilt" ref={quiltRef}>
        <Disney />
        <Mickey />
        <DreamWorks />
        <Pixar />
        <FindingNemo />
        <SouthPark />
        <TheSimpsons />
        <FOX />
        <KIA />
        <Honda />
        <Lexus />
        <Kajabi />
        <KSwiss />
        <U2 />
      </div>
    </div>
  );
}

export default BrandQuilt;
