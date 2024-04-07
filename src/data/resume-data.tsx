import {
  Kennewell,
  Bubner,
  RoboRegistry,
  Serve,
  DosGames,
  FusionChess,
  Mind,
  Bellower,
  Bunyips,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { GlobeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Lucas Bubner",
  initials: "LB",
  location: "Greater Adelaide Area, South Australia, Australia",
  locationLink: "https://www.google.com/maps/place/Adelaide+Metropolitan+Area,+SA/@-34.9816918,138.6440441,10z/data=!3m1!4b1!4m6!3m5!1s0x6ab0ced5a8ad9dcb:0x2ee6722d74deb41e!8m2!3d-34.9536465!4d138.598804!16s%2Fg%2F11c1tb7m8s?entry=ttu",
  about:
    "A young self-driven academic student and software developer.",
  summary:
    "Distinguished at a national level at the 2023 AIIA iAwards, I am a software developer that takes strides into the unknown for personal growth and professional improvement. Passioniate in the fields of robotics, web development, and engineering, I develop software solutions to tackle real-world problems, advocating and promoting technical skills used in the workforce.",
  contact: {
    email: "bubner@proton.me",
    social: [
      {
        name: "Personal Website",
        url: "https://bubner.me",
        icon: GlobeIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/bubner",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bubner",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Highbury Primary School",  
      degree: "Primary School Education",
      start: "2012",
      end: "2020",
    },
    {
      school: "EdX - Harvard Online",  
      degree: "CS50's Introduction to Computer Science Certificate",
      start: "2022",
      end: "2022",
    },
    {
      school: "Murray Bridge High School",
      degree: "South Australian Certificate of Education (SACE) [in progress]",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Kennewell",
      link: "https://oldmatedesigns.com/",
      badges: ["Workplace Learning", "Onsite"],
      title: "Subsidiary Web Developer",
      logo: Kennewell,
      start: "2023",
      description:
        "Worked on backend and frontend implementations of a subsidiary Shopify store through upgrades with improved images, graphics, visual user experience, and Fusion360 CAD animations to boost sales. Performed as Student Work Experience as part of Murray Bridge High School.",
    },
  ],
  skills: [
    "Java",
    "OOP",
    "React",
    "Next.js",
    "TypeScript",
    "Robotics",
    "Web Development",
    "Python"
  ],
  projects: [
    {
      title: "BunyipsLib",
      techStack: [
        "Java",
        "Kotlin",
        "Library",
        "Robotics",
        "Computer Vision",
      ],
      description: "A free & open-source powerful FIRST Tech Challenge utility library",
      link: {
        label: "BunyipsLib",
        href: "https://github.com/Murray-Bridge-Bunyips/BunyipsLib",
      },
      logo: Bunyips
    },
    {
      title: "Bunyip Bellower",
      techStack: [
        "Realtime Chat",
        "iAwards Winner",
        "React",
        "Firebase",
        "TypeScript",
      ],
      description: "Web chat application designed for school-based social clubs",
      logo: Bellower
    },
    {
      title: "RoboRegistry",
      techStack: [
        "Robotics",
        "Web Development",
        "Python",
        "Firebase",
        "Flask",
      ],
      description: "An automated registry for recording FIRST scrimmage attendance",
      logo: RoboRegistry,
      link: {
        label: "RoboRegistry",
        href: "https://serve.bubner.me/roboregistry",
      },
    },
    {
      title: "bubner.me",
      techStack: [
        "Portfolio",
        "Personal Project",
        "TypeScript",
        "React",
        "Vercel",
      ],
      description: "My personal portfolio website", 
      logo: Bubner,
      link: {
        label: "bubner.me",
        href: "https://bubner.me/",
      },
    },
    {
      title: "Fusion Chess",
      techStack: [
        "Web Game",
        "React",
        "chess.js",
        "stockfish.js",
      ],
      description: "A custom chess variant which involves fusing pieces",
      logo: FusionChess,
      link: {
        label: "Fusion Chess",
        href: "https://serve.bubner.me/fusionchess",
      },
    },
    {
      title: "Serve",
      techStack: [
        "Next.js",
        "Personal Project",
        "React",
        "Vercel",
      ],
      description: "A collection of web pages for use in my personal projects",
      logo: Serve,
      link: {
        label: "Serve",
        href: "https://serve.bubner.me/",
      },
    },
    {
      title: "DosGames",
      techStack: [
        "HTML",
        "Emulation",
        "js-dos",
      ],
      description: "Replit award-winning DOS games emulator",
      logo: DosGames,
      link: {
        label: "DosGames",
        href: "https://github.com/bubner/DosGames",
      },
    },
    {
      title: "Mind",
      techStack: [
        "Web Game",
        "Python",
        "Flask",
        "JavaScript",
      ],
      description: "GUI-based autosave adventure game",
      logo: Mind,
    },
  ],
} as const;
