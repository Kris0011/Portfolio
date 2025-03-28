"use client";

import Image from "next/image";
import Link from "next/link";

import ProjectsCard from "./card/Projects";
import CustomLink from "./ui/CustomLink";
import Reveal from "./Reveal";

const projects: Project[] = [
  {
    title: "Classync",
    description:
      "An AI-powered platform designed to enhance classroom collaboration, automate evaluations, and streamline academic workflows, making learning more efficient and interactive.",
    href: "https://github.com/Kris0011/Classync",
  },
  {
    title: "XChange (Odoo x Charusat 2025)",
    description:
      "A mobile app reviving the barter system, allowing users to exchange goods and services directly. Features a barter points system convertible into Indian Rupees upon request.",
    href: "https://github.com/NaitikPatel-325/Xchange",
  },

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
    title: "AgroZenith (Hackout 2024)",
    description:
      "An online auction platform for farmers to list and sell produce, with crop-specific fertilizer recommendations and a real-time fire alert system. Built with React, Flask, Python, Express.js, Node.js, and MongoDB.",
    href: "https://github.com/Kris0011/Hackout2024",
  },
  {
    title: "GyaanGanga (AceHack 3.0)",
    description:
      "A platform that provides real-time lecture streaming with automatic captions, transforming captions into organized notes to enhance learning.",
    href: "https://devfolio.co/projects/gyaanganga-6157",
  },
  // {
  //   title: "KisaanSathi (DotSlash 7.0)",
  //   description:
  //     "A WebSocket-based auction system for farmers and traders to engage in live bidding. Built with WebSockets and Node.js.",
  //   href: "https://github.com/Kris0011/KisaanSathi",
  // },
  {
    title: "AroundYou",
    description:
      "A platform that connects users with local service providers, simplifying the discovery and access of essential services while fostering community engagement.",
    href: "https://github.com/Kris0011/AroundYou",
  },
  {
    title: "qUIck-react (Hacktoberfest 2023)",
    description:
      "An open source UI library for React. Part of Hacktoberfest 2023.",
    href: "https://github.com/developer-student-clubs/qUIck-react",
  },
  {
    title: "Connect - Fresh Start Guide (TicTechToe'23)",
    description:
      "Fostering student connections and collaborative learning. Built at TicTechToe'23 hackathon.",
    href: "https://github.com/Kris0011/Portfolio",
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
      <div className=" flex md:flex-row flex-col  justify-evenly items-center  md:space-x-2 b">
        <div>
          <div className="w-full  flex justify-center flex-col-reverse lg:flex-row items-center">
            <Image
              src="/krispatel.jpeg"
              alt="Kris Patel"
              width={180}
              height={130}
              className="rounded-[30%] mt-4 my-2 shadow-md border border-gray-700"
            />
          </div>
          {/* <div className="space-y-1">
            <h1 className="w-full flex justify-center items-center flex-col-reverse text-black dark:text-black dark:text-white text-xl sm:text-2xl">
              <b>Kris Patel</b>
            </h1>
          </div> */}
        </div>

        <div className="w-full md:max-w-md text-base  md:mt-1 mt-4">
          <span className="text-black dark:text-white my-5">
            Hi, I&rsquo;m Kris
            <span className="line-through text-red-500">h</span> Patel ,
          </span>

          <p className="text-black dark:text-white ">
            A 20-y/o computer engineering student from Ahmedabad, India. I love
            diving into the world of coding and finding creative solutions to
            challenges.
          </p>
        </div>
      </div>

      {/* </Reveal> */}
      <div id="about" className="mt-2">
        {/* <Reveal> */}

        {/* </Reveal> */}
        <div className="text-black dark:text-white text-base ">
          {/* <Reveal> */}

          {/* </Reveal> */}
          <hr className="my-5 opacity-100 border-gray-600 " />

          <div className="flex flex-col gap-3">
            <p>
              I love crafting software solutions and solving puzzles, but beyond
              coding, I enjoy exploring different interests. I like singing and
              playing the guitar, even if I’m still improving at it.
            </p>
            <p>
              I also enjoy video games, mimicry, swimming, and drawing—creating
              and experimenting with different things keeps me engaged. Reading
              books, especially on philosophy, helps me explore new ideas and
              perspectives. Above all, I love connecting with people, having
              meaningful conversations, and spreading positivity wherever I go.
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
              {/* <CustomLink
                text="Resume"
                url="https://drive.google.com/file/d/1xJSGaesb__qMyJ97_ouiL-8PTKOG-Yr-/view?usp=sharing"
                iconKey="resume"
              /> */}
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
              <CustomLink
                text="Youtube"
                url="https://www.youtube.com/@krisgenics4404"
                iconKey="youtube"
              />
            </div>
          </div>
          {/* </Reveal> */}
        </div>
      </div>
      <section id="projects">
        <div className="my-10">
          <h3 className="font-semibold text-black  dark:text-white text-xl">
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
