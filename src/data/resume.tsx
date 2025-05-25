import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Trophy, Code2, Play } from "lucide-react";
import { describe } from "node:test";

export const DATA = {
  name: "Kris Patel",
  initials: "KP",
  url: "https://krispate.me",
  location: "Ahemdabad , Gujarat",
  description:
    "A 20-year-old computer engineering student from Ahmedabad, India, passionate about coding and solving problems creatively.",

  summary:
    "I love building software and exploring new ideas. Outside of coding, I enjoy singing, playing the guitar, gaming, mimicry, swimming, and drawing. Reading books, especially philosophy, inspires me to think differently. I value deep conversations and spreading positivity wherever I go.",

  avatarUrl: "/kris.png",
  skills: [
    "React",
    "Spring Boot",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "DevOps",
    "Kafka",
    "Flask",
    "TensorFlow",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: Code2, label: "Projects" },
    { href: "#hackathons", icon: Trophy, label: "Hackathons" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "krishp759@gmail.com",
    tel: "+91 6353879412",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Kris0011",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kris-patel-985158250/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kris__patel",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@krisgenics4404",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "IGNOSIS",
      href: "https://ignosis.ai",
      badges: [],
      location: "Ahmedabad, India",
      title: "Software Engineer Intern",
      logoUrl: "/ignosi_logo.jpeg",
      start: "June 2025",
      end: "Present",
      description: ""
      // end: "Oct 2022",
    },
    {
      company: "Google Developer Student Clubs - DDU",
      location: "Nadiad, India",
      title: "Core Team Member",
      href: "https://gdg.community.dev/gdg-on-campus-dharmsinh-desai-university-nadiad-india/",
      logoUrl: "/gdg.svg",
      start: "Sep 2023",
      end: "Present",
      description: "As a core team member of GDSC DDU, I am involved in organizing workshops, hackathons, and events to foster a community of developers and tech enthusiasts at Dharmsinh Desai University.",
      // end: "Oct 2022",
    },

  ],
  education: [
    {
      school: "Dharmsinh Desai University",
      href: "https://www.ddu.ac.in",
      degree: "Bachelor of Technology in Computer Engineering",
      logoUrl: "/ddu.jpeg",
      start: "2022",
      end: "2026",
      location: "Nadiad, India",
    },

  ],
  projects: [
    {
      title: "Autonance",
      href: "https://autonance.com", // Replace with your actual link
      active: true,
      dates: "",
      description:
        "Autonance is an e-mandate automation system with microservices, integrating OCR based KYC Verification, AI-driven mandate approvals, and real-time loan repayment processing. It enhances financial workflows, boosts security, and reduces manual errors.",
      technologies: [
        "Spring Boot",
        "React",
        "PostgreSQL",
        "Kafka",
        "WebSockets",
        "Docker",
        "Kubernetes",
        "Flask",
        "OAuth2",
        "AWS",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/Autonance",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "",
      video: "https://res.cloudinary.com/dte1f5c5z/video/upload/v1748178173/c6bmnmihkvgvcwffyk5f.mp4",
    },
    {
      title: "Kaiken",
      href: "https://kaiken.krispatel.me",
      active: true,
      dates: "",

      description:
        "Kaiken is a prediction-based trading platform offering dynamic market pricing and real-time event updates. With a sleek UI, robust trade management, and fair payout algorithms, it transforms user engagement and provides a seamless trading experience for events of all kinds.",
      technologies: [
        "Node.js",
        "React",
        "MongoDB",
        "WebSockets",
        "Acternity UI",
        "Docker",
        "AWS",
        "Vercel"
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://kaiken.krispatel.me",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/Kris0011/kaiken",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Optional: Add a relevant cover image here
      video: "https://res.cloudinary.com/dte1f5c5z/video/upload/v1748177558/aqcyb8r6ots6en5sed4j.mp4", // Optional: Full demo video
    },




  ],
  hackathons: [
    {
      title: "IGNOSIS x DDU Hackathon",
      dates: "May 6th - 9th, 2025",
      description:
        "Designed a microservice architecture for banking appllcation with some layers of AI for loan approval and mandate approval processes.",
      location: "Dharmsinh Desai University, Gujarat",
      image:
        "/ignosi_logo.jpeg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Autonance",
        }],
    },
    {
      title: "Odoo x Charusat Hackathon",
      dates: "March 1st - 2nd, 2025",
      location: "Charusat University, Gujarat",
      description:
        "Developed a mobile application to bring back the concept of barter pay, where users can exchange goods and services directly.",
      image:
        "/odoo.avif",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/NaitikPatel-325/xchange",
        }],
    },
    {
      title: "DUHacks 4.0 (Lead Organizer)",
      dates: "Feb 22rd - 23rd, 2025",
      location: "Dharmsinh Desai University, Gujarat",
      description:
        "Being a Lead Oraganizer, I was responsible for managing the event, coordinating with sponsors, and ensuring a smooth experience for participants.",
      icon: "public",
      image:
        "/duhacks4.webp",
      links: [],
    },
    {
      title: "Hackout 2024",
      dates: "Aug 9th - 11th, 2024",
      location: "DAIICT, Gandhinagar, Gujarat",
      description:
        "Developed a appliacation for farmers to track their crops and get real-time updates on weather conditions, soil health, and pest control.Features like fertilizer recommendations, irrigation management, and crop rotation suggestions.",
      image:
        "/daiict.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Kris0011/Hackout2024/",
        }],

    },
    {
      title: "Acehack 3.0",
      dates: "April 6th - 7th, 2024",
      location: "UEM Jaipur, Rajasthan",
      description:
        "Developed an innovative student learning platform with real-time lecture streaming, auto-generated captions, and instant note generation to simplify studying and enhance engagement for students like Sarah.",
      image:
        "/acehack3.webp",
      links: [

        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/gyaanganga-6157",
        },

      ],
    },
    {
      title: "DUHacks 3.0 (Tech Team)",
      dates: "Feb 22rd - 23rd, 2025",
      location: "Dharmsinh Desai University, Gujarat",
      description:
        "Being a Tech Team member, I was responsible for setting up the infrastructure, managing the event website, and ensuring a smooth experience for participants.",
      icon: "public",
      image:
        "/duhacks4.webp",
      links: [],
    },
    {
      title: "Dotslash 7.0",
      dates: "Jan 27th - 28th, 2024",
      location: "SVNIT, Surat, Gujarat",
      description:
        "Developed a marketplace for farmer to connect with consumers directly, having live auctions for crops, where farmers can list their produce and consumers can bid on them. Automating the entire process of crop management, from planting to deasease detection, using machine learning algorithms.",
      image:
        "/dotslash.png",
      win: "Top 2 in Automation and AI track , Top 8 overall",
      links: [

        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Kris0011/KisaanSathi",
        },

      ],
    },
    {
      title: "Tic-Tech-Toe 2023",
      dates: "Sep 22nd - 24th, 2023",
      location: "DAIICT, Gandhinagar, Gujarat",
      win: "Top 5 overall",
      description:
        "Built a student platform enabling real-time chat, audio/video calls with screen sharing, collaborative note sharing, and blogging to help newcomers connect and share resources.",
      image:
        "/daiict.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/its-mahi/connect_FreshStartGuide",
        },
      ],
    },
    {
      title: "DUHacks 2.0",
      dates: "Feb 18th-19th, 2023",
      location: "Dharmsinh Desai University, Gujarat",
      description:
        "First ever hackathon I attended, built a basic terminal game of tic-tac-toe which was smart enough to play against the user and win almost every time.",
      image: "/duhacks4.webp",
      links: []

    },


  ],
} as const;
