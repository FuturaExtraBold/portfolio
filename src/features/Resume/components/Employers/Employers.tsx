import { type JSX } from "react";
import Employer from "../Employer/Employer";
import HookyGrand from "ui/Logos/HookyGrand";
import Kajabi from "ui/Logos/Kajabi";
import Studio318 from "ui/Logos/Studio318";
import { FadeIn } from "ui";
import "./styles.scss";

export default function Employers(): JSX.Element {
  return (
    <div className="employers">
      <FadeIn>
        <Employer
          logo={<Kajabi />}
          name="Kajabi"
          tenure="2013 &ndash; 2024"
          description="At Kajabi, our teams crafted intuitive tools that let creators share and sell what they know. From dynamic websites to seamless marketing, every element worked to fuel growth for our customer's business."
        />
      </FadeIn>
      <FadeIn>
        <Employer
          logo={<HookyGrand />}
          name="Hooky"
          tenure="2008 &ndash; 2013"
          description="At Hooky, our main philosophy was to play. By combining bold creative vision with unparalleled technical initiative, the small nimble project teams produced fresh and imaginative work for our clients, and their users."
        />
      </FadeIn>
      <FadeIn>
        <Employer
          logo={<Studio318 />}
          name="Studio318"
          tenure="2007 &ndash; 2008"
          description="At Studio 318, an award-winning, woman and minority-owned graphic design agency, we collaborated with industry leaders. Our passion for design and strategy turned concepts into lasting, compelling visuals."
        />
      </FadeIn>
    </div>
  );
}
