import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./brands.scss";
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
import Hooky from "./Logos/Hooky";
import Sony from "./Logos/Sony";

export default function Brands() {
  const quiltRef = useRef(null);

  useEffect(() => {
    const logos = quiltRef.current.children;
    gsap.fromTo(
      logos,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, ease: "power2.in", stagger: 0.05, duration: 0.2 }
    );
  }, []);

  return (
    <div className="brands">
      <div className="container">
        <div className="brand-quilt" ref={quiltRef}>
          <Disney />
          <Mickey />
          <DreamWorks />
          <Pixar />
          <FindingNemo />
          <Sony />
          <SouthPark />
          <TheSimpsons />
          <FOX />
          <KIA />
          <Honda />
          <Lexus />
          <KSwiss />
          <U2 />
          <Hooky />
          <Kajabi />
        </div>
      </div>
    </div>
  );
}
