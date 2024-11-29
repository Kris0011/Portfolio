"use client";

import Image from "next/image";
import Link from "next/link";

import ProjectsCard from "./card/Projects";
import CustomLink from "./ui/CustomLink";
import Reveal from "./Reveal";

const projects: Project[] = [
  {
    title: "ParkEZ",
    description:
      "A platform for locating, reserving, and adding local parking spots, featuring real-time parking availability updates. Built with React, Express.js, Node.js, Firebase, MapBox, and MongoDB.",
    href: "https://github.com/Kris0011/ParkEZ",
  },
  {
    title: "CricketAdda",
    description:
      "A platform for managing cricket tournaments, including tournament creation, match tracking, and team management. Built with Spring Boot, React.js, and MySQL.",
    href: "https://github.com/Kris0011/CricketAdda",
  },
  {
    title: "AgroZenith (Built at Hackout 2024 hackathon)",
    description:
      "An online auction platform for farmers to list and sell produce, with crop-specific fertilizer recommendations and a real-time fire alert system. Built with React, Flask, Python, Express.js, Node.js, and MongoDB.",
    href: "https://github.com/Kris0011/Hackout2024",
  },
  {
    title: "GyaanGanga (Built at AceHack 3.0)",
    description:
      "A platform that provides real-time lecture streaming with automatic captions, transforming captions into organized notes to enhance learning.",
    href: "https://devfolio.co/projects/gyaanganga-6157",
  },
  {
    title: "Connect - Fresh Start Guide (Built at TicTechToe'23)",
    description:
      "Fostering student connections and collaborative learning. Built at TicTechToe'23 hackathon.",
    href: "https://github.com/Kris0011/Portfolio",
  },
  {
    title: "qUIck-react (Part of Hacktoberfest 2023)",
    description:
      "An open source UI library for React. Part of Hacktoberfest 2023.",
    href: "https://github.com/developer-student-clubs/qUIck-react",
  },
];

type Project = {
  title: string;
  description: string;
  href: string;
};

const Hero = () => {
  return (
    <section id="home">
      {/* <Reveal> */}
      <div className="font-poppins">
        <div className="w-full  flex justify-center flex-col-reverse lg:flex-row items-center">
          <Image
            src="/krispatel.jpeg"
            alt="Kris Patel"
            width={200}
            height={150}
            className="rounded-[30%] m-4 shadow-md border border-gray-700"
          />
        </div>
        <div className="space-y-6">
          <h1 className="w-full flex justify-center items-center flex-col-reverse text-black dark:text-white text-xl sm:text-2xl">
            <span className="opacity-60 text-lg">Student & Developer</span>
            <b>Kris Patel</b>
          </h1>
        </div>
      </div>
      {/* </Reveal> */}
      <div id="about" className="mt-10">
        {/* <Reveal> */}
        <span className="text-black dark:text-white my-5">
          Hi, I&rsquo;m Kris
          <span className="line-through text-red-500">h</span> Patel
        </span>

        {/* </Reveal> */}
        <div className="text-black dark:text-white text-base ">
          {/* <Reveal> */}
          <p>
            A 19-y/o computer engineering student from Ahmedabad, India . I love
            diving into the world of coding and finding creative solutions to
            challenges.
          </p>
          {/* </Reveal> */}
          <hr className="my-5 opacity-30" />
          <div className="flex flex-col gap-3">
            <p>
              I craft software solutions with precision, enjoy solving puzzles,
              and when I&rsquo;m not coding, you&rsquo;ll find me singing,
              strumming my guitar, or exploring the latest tech trends.
            </p>
            <p>
              Outside of coding, I enjoy connecting with people and spreading
              positivity with my sweet personality.
            </p>
            {/* <p>
              Life's too short for boring code and mundane routines. I'm always
              up for a new challenge and eager to collaborate on exciting
              projects. Let's create something amazing together!
            </p> */}
          </div>
          {/* <Reveal> */}
          <div className="my-4">
            <div className="grid gap-2 grid-cols-2 md:grid-cols-4 ">
              <CustomLink
                text="Resume"
                url="https://drive.google.com/file/d/1xJSGaesb__qMyJ97_ouiL-8PTKOG-Yr-/view?usp=sharing"
                iconKey="resume"
              />
              <CustomLink
                text="Twitter"
                url="https://twitter.com/kris__patel"
                iconKey="twitter"
              />
              <CustomLink
                text="GitHub"
                url="https://github.com/Kris0011"
                iconKey="github"
              />
            </div>
          </div>
          {/* </Reveal> */}
        </div>
      </div>
      <section id="projects">
        <div className="my-10">
          <h3 className="font-semibold text-black dark:text-white text-xl">
            Projects
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              //    <Reveal key={index}>
              <ProjectsCard key={index} project={project} />
              //    </Reveal>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
