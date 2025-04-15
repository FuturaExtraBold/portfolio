import Disney from "components/clients/Logos/Disney";
import DreamWorks from "components/clients/Logos/DreamWorks";
import FOX from "components/clients/Logos/FOX";
import Honda from "components/clients/Logos/Honda";
import Kajabi from "components/clients/Logos/Kajabi";
import KIA from "components/clients/Logos/KIA";
import KSwiss from "components/clients/Logos/KSwiss";
import Lexus from "components/clients/Logos/Lexus";
import Pixar from "components/clients/Logos/Pixar";
import Sony from "components/clients/Logos/Sony";
import SouthPark from "components/clients/Logos/SouthPark";
import TheSimpsons from "components/clients/Logos/TheSimpsons";
import U2 from "components/clients/Logos/U2";

export const caseStudies = [
  {
    id: "disney",
    logoComponent: Disney,
    title: "Disney",
    client: "Disney",
    projects: [
      {
        title: "Official Mickey Mouse Homepage",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: [
          "mickey_1.jpg",
          "mickey_2.jpg",
          "mickey_3.jpg",
          "mickey_4.jpg",
          "mickey_5.jpg",
          "mickey_6.jpg",
        ],
      },
      {
        title: "Winnie the Pooh",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: ["pooh_1.jpg", "pooh_2.jpg", "pooh_3.jpg", "pooh_4.jpg"],
      },
      {
        title: "The Muppets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: [
          "muppets_1.jpg",
          "muppets_2.jpg",
          "muppets_3.jpg",
          "muppets_4.jpg",
          "muppets_5.jpg",
          "muppets_6.jpg",
        ],
      },
      {
        title: "Disney Share Internal Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: ["disney_share_1.jpg", "disney_share_2.jpg"],
      },
    ],
  },
  { id: "dreamworks", logoComponent: DreamWorks },
  {
    id: "pixar",
    logoComponent: Pixar,
    title: "Pixar Animation Studios",
    client: "Disney, Pixar Animation Studios",
    projects: [
      {
        title: "Finding Nemo 3D Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    title: "The Simpsons",
    client: "Fox Broadcasting Company",
    projects: [
      {
        title: "25th Anniversary Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    title: "South Park Studios",
    client: "Comedy Central, South Park Studios",
    projects: [
      {
        title: "Avatar Creator",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: [
          "southpark_1.jpg",
          "southpark_2.jpg",
          "southpark_3.jpg",
          "southpark_4.jpg",
        ],
      },
      {
        title: "The Stick of Truth",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: ["southpark_5.jpg", "southpark_6.jpg"],
      },
    ],
  },
  {
    id: "fox",
    logoComponent: FOX,
    title: "Fox Broadcasting Company",
    client: "Fox Broadcasting Company",
    projects: [
      {
        title: "Glee Photo Booth",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: [
          "gleepb_1.jpg",
          "gleepb_2.jpg",
          "gleepb_3.jpg",
          "gleepb_4.jpg",
        ],
      },
      {
        title: "Test your Glee N A",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: [
          "gleena_1.jpg",
          "gleena_2.jpg",
          "gleena_3.jpg",
          "gleena_4.jpg",
        ],
      },
      {
        title: "Fox Holiday Snowball Fight",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: ["snow_1.jpg", "snow_2.jpg", "snow_3.jpg", "snow_4.jpg"],
      },
      {
        title: "Human Target Practice",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: ["ht_1.jpg", "ht_2.jpg", "ht_3.jpg", "ht_4.jpg"],
      },
    ],
  },
  {
    id: "kia",
    logoComponent: KIA,
    title: "KIA",
    client: "KIA",
    projects: [
      {
        title: "KIA Soul Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: [
          "kia_soul_1.jpg",
          "kia_soul_2.jpg",
          "kia_soul_3.jpg",
          "kia_soul_4.jpg",
        ],
      },
      {
        title: "KIA Soul Shuffle Slam",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: [
          "kia_slam_1.jpg",
          "kia_slam_2.jpg",
          "kia_slam_3.jpg",
          "kia_slam_4.jpg",
          "kia_slam_5.jpg",
        ],
      },
    ],
  },
  {
    id: "honda",
    logoComponent: Honda,
    title: "Honda",
    client: "Honda",
    projects: [
      {
        title: "Super Civic Quest",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: ["honda_1.jpg", "honda_2.jpg", "honda_3.jpg", "honda_4.jpg"],
      },
    ],
  },
  {
    id: "lexus",
    logoComponent: Lexus,
    title: "Lexus",
    client: "Lexus",
    projects: [
      {
        title: "Lexus Hybrids Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: ["lexus_1.jpg", "lexus_2.jpg", "lexus_3.jpg", "lexus_4.jpg"],
      },
    ],
  },
  { id: "kswiss", logoComponent: KSwiss },
  {
    id: "u2",
    logoComponent: U2,
    title: "U2",
    client: "U2",
    projects: [
      {
        title: "U2 360 Tour Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gallery: ["u2_1.jpg", "u2_2.jpg", "u2_3.jpg", "u2_4.jpg", "u2_5.jpg"],
      },
    ],
  },
  { id: "kajabi", logoComponent: Kajabi },
];
