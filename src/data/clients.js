import Disney from "components/clients/Logos/Disney";
import DreamWorks from "components/clients/Logos/DreamWorks";
import FindingNemo from "components/clients/Logos/FindingNemo";
import FOX from "components/clients/Logos/FOX";
import Honda from "components/clients/Logos/Honda";
import Kajabi from "components/clients/Logos/Kajabi";
import KIA from "components/clients/Logos/KIA";
import KSwiss from "components/clients/Logos/KSwiss";
import Lexus from "components/clients/Logos/Lexus";
import Mickey from "components/clients/Logos/Mickey";
import Pixar from "components/clients/Logos/Pixar";
import Sony from "components/clients/Logos/Sony";
import SouthPark from "components/clients/Logos/SouthPark";
import TheSimpsons from "components/clients/Logos/TheSimpsons";
import U2 from "components/clients/Logos/U2";

export const caseStudies = [
  { id: "disney", logoComponent: Disney },
  {
    id: "mickey",
    logoComponent: Mickey,
    title: "Mickey Mouse",
    client: "Disney",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    gallery: [
      "mickey_1.jpg",
      "mickey_2.jpg",
      "mickey_3.jpg",
      "mickey_4.jpg",
      "mickey_5.jpg",
      "mickey_6.jpg",
    ],
  },
  { id: "dreamworks", logoComponent: DreamWorks },
  { id: "pixar", logoComponent: Pixar },
  {
    id: "nemo",
    logoComponent: FindingNemo,
    title: "Finding Nemo",
    client: "Disney, Pixar Animation Studios",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    gallery: [
      "nemo_1.jpg",
      "nemo_2.jpg",
      "nemo_3.jpg",
      "nemo_4.jpg",
      "nemo_5.jpg",
    ],
  },
  { id: "sony", logoComponent: Sony },
  { id: "simpsons", logoComponent: TheSimpsons },
  { id: "southpark", logoComponent: SouthPark },
  { id: "fox", logoComponent: FOX },
  { id: "kia", logoComponent: KIA },
  { id: "honda", logoComponent: Honda },
  { id: "lexus", logoComponent: Lexus },
  { id: "kswiss", logoComponent: KSwiss },
  { id: "u2", logoComponent: U2 },
  { id: "kajabi", logoComponent: Kajabi },
];
