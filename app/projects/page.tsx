"use client";
import { title } from "@/components/primitives";
import ProjectCard from "@/components/ProjectCard";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

import Image from "next/image";
import connect from "../../public/connect.png";
import news88 from "../../public/news88.png";
import namegenius from "../../public/namegenius.png";

export default function BlogPage() {
  return (
    <div>
      <Accordion variant="splitted" className="mt-10">
        <AccordionItem
          className="dark"
          key="1"
          aria-label="Accordion 1"
          title={
            <div className="text-center">
              <Image
                alt="Album cover"
                className="object-cover"
                src={connect}
                width={800}
              />
              <p className="mt-5 ">
                Connect - Fresh Start Guide (MERN Full Stack)
              </p>
            </div>
          }
        >
          <div className="text-left p-3 text-white">
            <p>
              Students can connect through chat, audio, and video calls for
              real-time interaction.
            </p>
            <p>
              Enables seeking help, discussing topics, and effective
              collaboration.
            </p>
            <p> Features like Notes Sharing and Blogging .</p>
            <a
              href="https://github.com/its-mahi/connect_FreshStartGuide/tree/main"
              target="_blank"
              className="text-blue-600"
            >
              <Button color="primary" variant="ghost" size="sm" className="mt-3">
                Github
              </Button>
            </a>
          </div>
        </AccordionItem>

        <AccordionItem
          className="dark"
          key="2"
          aria-label="Accordion 2"
          title={
            <div className="text-center">
              <Image
                alt="Album cover"
                className="object-cover"
                src={news88}
                width={800}
              />
              <p className="mt-5">News88 - The News App (Reactjs)</p>
            </div>
          }
        >
          <div className="text-left p-3 text-white">
            <p>
              Simple React-WebApp to show to the current news from different
              categories.
            </p>
            <p>
              React concepts like Router-DOM , Infinte Scroll , Top-Loading-bar
              etc.
            </p>
            <a
              href="https://github.com/Kris0011/LearnReact/tree/main/newsapp"
              target="_blank"
              className="text-blue-600"
            >
              <Button color="primary" variant="ghost" size="sm" className="mt-3">
                Github
              </Button>
            </a>
          </div>
        </AccordionItem>

        <AccordionItem
          className="dark"
          key="3"
          aria-label="Accordion 3"
          title={
            <div className="text-center">
              <Image
                alt="Album cover"
                className="object-cover"
                src={connect}
                width={800}
              />
              <p className="mt-5">Attendence System (PHP + MySQL)</p>
            </div>
          }
        >
          <div className="text-left p-3 text-white">
            <p>
              Login system for Admin , Teachers and students . Admin can add
              teachers and students . Students can login anytime anywhere and
              check their attedence graph . Teachers have features to add
              lectures and taking attedence.
            </p>
            <a
              href="https://github.com/Kris0011/Attendence_System"
              target="_blank"
              className="text-blue-600"
            >
              <Button color="primary" variant="ghost" size="sm" className="mt-3">
                Github
              </Button>
            </a>
          </div>
        </AccordionItem>

        <AccordionItem
          className="dark"
          key="4"
          aria-label="Accordion 4"
          title={
            <div className="text-center">
              <Image
                alt="Album cover"
                className="object-cover"
                src={namegenius}
                width={800}
              />
              <p className="mt-5">NameGenius (Reactjs)</p>
            </div>
          }
        >
          <div className="text-left p-3 text-white">
            <p>Predict the Age , Gender and Country based on name .</p>
            <div className="mt-3 space-x-2">
              <a
                href="https://github.com/Kris0011/LearnReact/tree/main/namegenius"
                target="_blank"
                className="text-blue-600"
              >
                <Button color="primary" variant="ghost" size="sm">
                  Github
                </Button>
              </a>
              <a
                href="https://namegenius.netlify.app/"
                target="_blank"
                className="text-blue-600"
              >
                <Button color="primary" variant="ghost" size="sm">
                  Demo
                </Button>
              </a>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
