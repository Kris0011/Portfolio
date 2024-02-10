"use client";

import Image from "next/image";
import Link from "next/link";

import ProjectsCard from "./card/Projects";
import CustomLink from "./ui/CustomLink";
import Reveal from "./Reveal";

const projects: Project[] = [
  {
    title: "KisaanSathi",
    description:
      "Websocket based auction system for farmers and traders. Built at DotSlash 7.0 hackathon.",
    href: "https://github.com/Kris0011/KisaanSathi",
  },
  {
    title: "Connect - Fresh Start Guide",
    description:
      "Fostering student connections and collaborative learning. Built at TicTechToe'23 hackathon.",
    href: "https://github.com/Kris0011/Portfolio",
  },
  {
    title: "qUIck-react",
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
      <Reveal>
        <div>
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
              <span className="opacity-60 text-lg">Student / Developer</span>
              <b>Kris Patel</b>
            </h1>
          </div>
        </div>
      </Reveal>
      <div id="about" className="mt-10">
        <Reveal>
          <span className="text-black dark:text-white my-5">
            Hi, I&rsquo;m Kris
            <span className="line-through text-red-500">h</span> Patel
          </span>
        </Reveal>
        <div className="text-black dark:text-white text-base">
          <Reveal>
            <p>
              19-year-old from Ahmedabad, engineering student by day, accidental
              bug whisperer by night. Chaai is my secret sauce for coding – if
              only it could debug too! Let&rsquo;s be real, coding without
              laughs is like debugging in the dark ages.
            </p>
          </Reveal>
          <hr className="my-5 opacity-30" />
          <div className="flex flex-col gap-3">
            <Reveal>
              <p>
                Passionate about creating smooth software solutions. I play with
                code, dance with databases, and add a touch of magic.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Beyond coding, I find joy in singing, strumming my guitar, and
                dominating FPS games.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="my-4">
              <div className="grid gap-2 grid-cols-2 md:grid-cols-4 ">
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
          </Reveal>
        </div>
      </div>
      <section id="projects">
        <div className="my-10">
          <h3 className="font-semibold text-black dark:text-white text-xl">
            Projects
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal>
                <ProjectsCard key={index} project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
