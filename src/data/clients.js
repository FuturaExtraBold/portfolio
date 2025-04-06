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
    projects: [
      {
        title: "Official Mickey Mouse Homepage",
        description:
          "I contributed to the development of the official Mickey Mouse homepage, creating a fun and interactive online experience that celebrates the iconic character. The site features engaging animations, character spotlights, and activities for fans of all ages, all designed to capture the magic of Mickey Mouse.",
        gallery: [
          "mickey_1.jpg",
          "mickey_2.jpg",
          "mickey_3.jpg",
          "mickey_4.jpg",
          "mickey_5.jpg",
          "mickey_6.jpg",
        ],
      },
    ],
  },
  { id: "dreamworks", logoComponent: DreamWorks },
  { id: "pixar", logoComponent: Pixar },
  {
    id: "nemo",
    logoComponent: FindingNemo,
    title: "Finding Nemo",
    client: "Disney, Pixar Animation Studios",
    projects: [
      {
        title: "Finding Nemo 3D Website",
        description:
          "I developed the official Finding Nemo 3D website, creating a vibrant and interactive online experience that captured the film's underwater magic. Using JavaScript, I designed engaging features like character spotlights, a colorful gallery, and fun activities for kids, all to support the movie's theatrical release.",
        gallery: [
          "nemo_1.jpg",
          "nemo_2.jpg",
          "nemo_3.jpg",
          "nemo_4.jpg",
          "nemo_5.jpg",
        ],
      },
    ],
  },
  { id: "sony", logoComponent: Sony },
  {
    id: "simpsons",
    logoComponent: TheSimpsons,
    title: "The Simpsons 25th Anniversary",
    client: "Fox Broadcasting Company",
    projects: [
      {
        title: "25th Anniversary Website",
        description:
          "I was part of the team that developed the 25th Anniversary website for The Simpsons, a fun and interactive experience celebrating the show's legacy. I helped build a platform where fans could explore iconic moments, characters, and episodes, all while enjoying the show's signature humor and style.",
        gallery: [
          "simpsons_1.jpg",
          "simpsons_2.jpg",
          "simpsons_3.jpg",
          "simpsons_4.jpg",
        ],
      },
    ],
  },
  {
    id: "southpark",
    logoComponent: SouthPark,
    title: "South Park",
    client: "Comedy Central, South Park Studios",
    projects: [
      {
        title: "Avatar Creator",
        description:
          "I developed the South Park Avatar Creator, a fun and interactive tool that lets fans design their own South Park characters. Released on iOS and as a web app, I built a platform where users could customize their avatars with various outfits, hairstyles, and accessories, bringing the show's unique style to life.",
        gallery: [
          "southpark_1.jpg",
          "southpark_2.jpg",
          "southpark_3.jpg",
          "southpark_4.jpg",
        ],
      },
      {
        title: "The Stick of Truth",
        description:
          "A role-playing video game based on the South Park series, featuring an epic quest.",
        gallery: ["southpark_5.jpg", "southpark_6.jpg"],
      },
    ],
  },
  { id: "fox", logoComponent: FOX },
  { id: "kia", logoComponent: KIA },
  { id: "honda", logoComponent: Honda },
  { id: "lexus", logoComponent: Lexus },
  { id: "kswiss", logoComponent: KSwiss },
  { id: "u2", logoComponent: U2 },
  { id: "kajabi", logoComponent: Kajabi },
];
