import React from "react";
import Employer from "./Employer/Employer";
import HookyGrand from "../../Brands/components/Logos/Logos/HookyGrand";
import Kajabi from "../../Brands/components/Logos/Logos/Kajabi";
import Studio318 from "../../Brands/components/Logos/Logos/Studio318";
import "./styles.scss";

export default function Employers() {
  return (
    <div className="employers">
      <Employer
        logo={<Kajabi />}
        name="Kajabi"
        tenure="Twelve"
        description="At Kajabi, our teams crafted intuitive tools that let creators share and sell what they know. From dynamic websites to seamless marketing, every element worked to fuel growth for our customer's business."
      />
      <Employer
        logo={<HookyGrand />}
        name="Hooky"
        tenure="Six"
        description="At Hooky, our main philosophy was to play. By combining bold creative vision with unparalleled technical initiative, the small nimble project teams produce fresh and imaginative work for our clients, and their users."
      />
      <Employer
        logo={<Studio318 />}
        name="Studio318"
        tenure="Two"
        description="At Studio 318, an award-winning, woman and minority-owned graphic design agency, we collaborated with industry leaders. Our passion for design and strategy turned concepts into lasting, compelling visuals."
      />
    </div>
  );
}
