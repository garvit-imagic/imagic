export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  frontImage?: string;
  backImage?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    number: "01",
    title: "Indian Space Research Organisation.",
    description:
      "Crafted visual identity for 140+ launches over 60 years, on mission-critical timelines.",
    frontImage: "/assets/Images/project1.jpg",
    backImage: "/assets/Images/project1-flip.jpg",
  },
  {
    id: "2",
    number: "02",
    title: "Wipro",
    description:
      "Executed design-to-deployment marketing campaigns across India.",
    frontImage: "/assets/Images/project2.jpg",
    backImage: "/assets/Images/project2-flip.jpg",
  },
  {
    id: "3",
    number: "03",
    title: "Defense Research and Development Organisation.",
    description:
      "Designed mission branding and defence event collaterals across multiple secure zones.",
    frontImage: "/assets/Images/project3.jpg",
    backImage: "/assets/Images/project3-flip.jpg",
  },
  {
    id: "4",
    number: "04",
    title: "Aeronautical Development Agency",
    description:
      "Delivered 1000+ high-impact defence expo displays and installations.",
    frontImage: "/assets/Images/project4.jpg",
    backImage: "/assets/Images/project4-flip.jpg",
  },
  {
    id: "5",
    number: "05",
    title: "Hitachi",
    description:
      "Designed communication and display assets for 10+ exhibitions and activations.",
    frontImage: "/assets/Images/project5.jpg",
    backImage: "/assets/Images/project5-flip.jpg",
  },
  {
    id: "6",
    number: "06",
    title: "Bharat Electronics",
    description: "Provided end-to-end design and installation for defence expos and product demos.",
    frontImage: "/assets/Images/project6.jpg",
    backImage: "/assets/Images/project6-flip.jpg",
  },
];
