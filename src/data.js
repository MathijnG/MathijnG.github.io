import ApacheSpark from "../old/src/assets/Apache_Spark_logo.png";
import AIVO from "./assets/ai-vo-logo-white-300x80.png";
import AIVoorOnderwijs from "./assets/aivooronderwijs-white.png";
import MarketigerLogo from "./assets/marketiger-logo.webp";
import SchoolgenLogo from "./assets/schoolgen-logo.png";
import BasWorld from "../old/src/assets/basworld.jpg";
import Betawerk from "../old/src/assets/betawerk.png";
import ContainerVervoer from "../old/src/assets/containervervoer.png";
import CoolEvents from "../old/src/assets/CoolEventsLogo.png";
import Cyber from "../old/src/assets/cyber.jpg";
import DefaultImage from "../old/src/assets/default.jpg";
import Growbotic from "../old/src/assets/growbotic.png";
import InnoBeweegLab from "../old/src/assets/innobeweeglab.png";
import MediaanLogo from "../old/src/assets/mediaan_logo.jpeg";
import NieuwLerenParkstad from "../old/src/assets/logo-NLP.png";
import OneBlinq from "../old/src/assets/oneblinq.png";
import TowerDefence from "../old/src/assets/TowerDefenceGrid.png";
import Unlock from "../old/src/assets/unlock.png";
import WebfusionLogo from "./assets/webfusion-logo.png";
import Webstudio7Logo from "../old/src/assets/logo-webstudio7.png";

export const projects = [
  {
    id: "webfusion",
    title: "Webfusion",
    kind: "Agency",
    year: "2026",
    blurb:
      "Built and delivered multiple client websites and custom software projects through my own company.",
    tags: ["Software", "Webdesign", "Marketing", "AI"],
    accent: "blue",
    preview: "halo",
    image: WebfusionLogo,
    mediaType: "logo",
    logoTone: "light",
    href: "https://web-fusion.nl",
  },
  {
    id: "ai-voor-onderwijs",
    title: "AI voor Onderwijs",
    kind: "Platform",
    year: "2026",
    blurb:
      "Developed an AI platform focused on safe and practical classroom usage, plus the public website.",
    tags: ["Software", "Webdesign", "Marketing", "AI"],
    accent: "emerald",
    preview: "atlas",
    image: AIVoorOnderwijs,
    mediaType: "logo",
    logoTone: "dark",
    href: "https://aivooronderwijs.nl",
  },
  {
    id: "ai-vo",
    title: "AI-VO",
    kind: "Education",
    year: "2026",
    blurb:
      "Created the website, supported marketing, and delivered practical AI workshops for professionals.",
    tags: ["Webdesign", "Marketing", "AI"],
    accent: "violet",
    preview: "ritual",
    image: AIVO,
    mediaType: "logo",
    logoTone: "dark",
    imagePadding: "52px",
    href: "https://ai-vo.nl",
  },
  {
    id: "schoolgen",
    title: "Schoolgen",
    kind: "AI Platform",
    year: "2024-2026",
    blurb:
      "Schoolgen is an AI platform for education that helps schools and teachers create and improve learning materials faster. I built the full platform end-to-end, from product and interface to the public website.",
    tags: ["Software", "Webdesign", "AI"],
    accent: "cyan",
    preview: "prism",
    image: SchoolgenLogo,
    mediaType: "logo",
    logoTone: "light",
    logoBackground: "white",
    imagePadding: "22px",
    href: "https://schoolgen.ai",
  },
  {
    id: "marketiger",
    title: "Marketiger",
    kind: "Frontend & Systems",
    year: "2025-2026",
    blurb:
      "Worked at Marketiger for around 1.5 years, delivering all frontend work and building a 3D model portal, checkout system, AI vision projects, MES system, and shipping labeling system.",
    tags: ["Software", "Frontend", "AI"],
    accent: "amber",
    preview: "fold",
    imagePadding: "32px",
    image: MarketigerLogo,
    mediaType: "logo",
    logoTone: "light",
    href: "https://marketiger3d.com",
  },
  {
    id: "betawerk-gen-ai",
    title: "Betawerk GenAI Search (RAG)",
    kind: "AI Search",
    year: "2024",
    blurb:
      "Designed and validated a proof of concept for a generative search interface over knowledge bases.",
    tags: ["Software", "AI"],
    accent: "cyan",
    preview: "prism",
    image: Betawerk,
    mediaType: "logo",
    logoTone: "light",
  },
  {
    id: "innobeweeglab",
    title: "InnoBeweegLab Survey Platform",
    kind: "Research App",
    year: "2023",
    blurb:
      "Built a gamified web survey concept to collect local insights and support healthier neighborhoods.",
    tags: ["Software", "School project"],
    accent: "amber",
    preview: "fold",
    image: InnoBeweegLab,
    mediaType: "logo",
    logoTone: "light",
    logoBackground: "white",
  },
  {
    id: "nocode-automation",
    title: "No-code Automation Tool",
    kind: "Workflow Tool",
    year: "2023",
    blurb:
      "Created a personal workflow tool with action chains and conditional logic for automating recurring tasks.",
    tags: ["Software"],
    accent: "rose",
    preview: "tide",
    image: DefaultImage,
  },
  {
    id: "mediaan-ev-charging",
    title: "Mediaan EV Charging Dashboard",
    kind: "Dashboard",
    year: "2023",
    blurb:
      "Built charger management software with reservations, session tracking, notifications, and OCPP simulation.",
    tags: ["Software"],
    accent: "blue",
    preview: "halo",
    image: MediaanLogo,
    mediaType: "logo",
    logoTone: "light",
  },
  {
    id: "oneblinq",
    title: "OneBlinq License Management",
    kind: "SaaS",
    year: "2022",
    blurb:
      "Developed a license management system for Figma plugins in a team project for Stuurmen.",
    tags: ["Software", "School project"],
    accent: "emerald",
    preview: "atlas",
    image: OneBlinq,
    mediaType: "logo",
    logoTone: "light",
  },
  {
    id: "basworld-ticketing",
    title: "BAS World Ticket System",
    kind: "Internal Tool",
    year: "2021",
    blurb:
      "Implemented an internal ticket platform for BAS World using Laravel during my internship period.",
    tags: ["Software", "School project"],
    accent: "violet",
    preview: "ritual",
    image: BasWorld,
  },
  {
    id: "cool-events",
    title: "Cool Events",
    kind: "Event Platform",
    year: "2022",
    blurb:
      "Built an event listing and review platform with React and Spring Boot as part of my study projects.",
    tags: ["Software", "School project"],
    accent: "cyan",
    preview: "prism",
    image: CoolEvents,
    mediaType: "logo",
    logoTone: "light",
  },
  {
    id: "webstudio7",
    title: "Webstudio 7 Client Websites",
    kind: "Webdesign",
    year: "2020",
    blurb:
      "Contributed to a wide set of WordPress and design projects for business clients.",
    tags: ["Webdesign"],
    accent: "amber",
    preview: "fold",
    image: Webstudio7Logo,
    mediaType: "logo",
    logoTone: "light",
    href: "https://popontop.nl",
  },
  {
    id: "medical-pentest",
    title: "Medical Company Pentest",
    kind: "Cyber Security",
    year: "2022",
    blurb:
      "Performed network, wireless, web, and social engineering assessments in a full pentest assignment.",
    tags: ["School project", "Cyber security"],
    accent: "rose",
    preview: "tide",
    image: Cyber,
  },
  {
    id: "unlock-serious-game",
    title: "Unlock Serious Game",
    kind: "Game",
    year: "2020",
    blurb:
      "Built a math-focused maze game for primary school students in Unity.",
    tags: ["Software", "School project"],
    accent: "blue",
    preview: "halo",
    image: Unlock,
    href: "https://simmer.io/@MathijnG/unlock",
  },
  {
    id: "growbotic",
    title: "Growbotic",
    kind: "Robotics",
    year: "2021",
    blurb:
      "Created a seed-planting robot prototype and mobile controls over Bluetooth.",
    tags: ["Software", "School project"],
    accent: "emerald",
    preview: "atlas",
    image: Growbotic,
    mediaType: "logo",
    logoTone: "light",
  },
  {
    id: "towerdefence",
    title: "TowerDefence + Leaderboard",
    kind: "Game Platform",
    year: "2021",
    blurb:
      "Developed a tower defense game paired with account-based website features and ranking systems.",
    tags: ["Software", "School project"],
    accent: "violet",
    preview: "ritual",
    image: TowerDefence,
  },
  {
    id: "distributed-computing",
    title: "Distributed Computing Project",
    kind: "Data Engineering",
    year: "2022",
    blurb:
      "Built a distributed execution setup using Apache Spark and Hadoop to speed up heavy workloads.",
    tags: ["School project", "Software", "Cyber security"],
    accent: "cyan",
    preview: "prism",
    image: ApacheSpark,
    mediaType: "logo",
    logoTone: "light",
    logoBackground: "white",
  },
  {
    id: "survival-game-3d",
    title: "3D Survival Game",
    kind: "Game",
    year: "2021",
    blurb:
      "Personal Unity project featuring inventory, building, crafting, and survival systems.",
    tags: ["Software"],
    accent: "amber",
    preview: "fold",
    image: DefaultImage,
  },
  {
    id: "nieuw-leren-parkstad",
    title: "Nieuw Leren Parkstad",
    kind: "Website",
    year: "2019",
    blurb:
      "Designed and built a WordPress website for an educational initiative in Parkstad.",
    tags: ["Webdesign"],
    accent: "rose",
    preview: "tide",
    image: NieuwLerenParkstad,
    mediaType: "logo",
    logoTone: "light",
    href: "https://nieuwlerenparkstad.nl",
  },
  {
    id: "container-vervoer",
    title: "Container Vervoer Challenge",
    kind: "Algorithm",
    year: "2020",
    blurb:
      "Solved a ship-loading algorithm challenge and built a 3D Unity visualization of container placement.",
    tags: ["School project", "Software"],
    accent: "blue",
    preview: "halo",
    image: ContainerVervoer,
  },
];

export const ACCENT = {
  violet: ["#a78bfa", "#7c3aed"],
  amber: ["#fbbf24", "#d97706"],
  rose: ["#fb7185", "#be123c"],
  cyan: ["#67e8f9", "#0891b2"],
  emerald: ["#6ee7b7", "#047857"],
  blue: ["#93c5fd", "#1d4ed8"],
};
