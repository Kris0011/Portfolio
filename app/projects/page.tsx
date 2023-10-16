"use client";
import { title } from "@/components/primitives";
import ProjectCard from "@/components/ProjectCard";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import connect from "../../public/connect.png";

export default function BlogPage() {
  const temp =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A similique magni vitae beatae dolorem quo rerum aperiam. Dicta, ex error!";

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
              <p className="mt-5 ">Connect - Fresh Start Guide (MERN Full Stack)</p>
            </div>
          }
        >
			<div className="text-left p-3 text-white">
				<p>Students can connect through chat, audio, and video calls for real-time interaction.</p>
				<p>Enables seeking help, discussing topics, and effective collaboration.</p>
				<p> Features like Notes Sharing and Blogging .</p>
				<a href="https://github.com/its-mahi/connect_FreshStartGuide/tree/main" target="_blank" className="text-blue-600">Github Link</a>
			</div>
        </AccordionItem>



        <AccordionItem  className="dark" key="2" aria-label="Accordion 2" title={
            <div className="text-center">
              <Image
                alt="Album cover"
                className="object-cover"
                src={connect}
                width={800}
              />
              <p className="mt-5">News88 - The News App (Reactjs)</p>
            </div>
          }>
			<div className="text-left p-3 text-white">
				<p>Simple React-WebApp to show to the current news from different categories.</p>
				<p>React concepts like Router-DOM , Infinte Scroll , Top-Loading-bar etc.</p>
				<a href="https://github.com/its-mahi/connect_FreshStartGuide/tree/main" target="_blank" className="text-blue-600">Github Link</a>
			</div>
		   
        </AccordionItem>
        <AccordionItem className="dark" key="3" aria-label="Accordion 3" title={
            <div className="text-center">
              <Image
                alt="Album cover"
                className="object-cover"
                src={connect}
                width={800}
              />
              <p className="mt-5">Attendence System (PHP + MySQL)</p>
            </div>
          }>
			<div className="text-left p-3 text-white">
				<p>Login system for Admin , Teachers and students . Admin can add teachers and students . Students can login anytime anywhere and check their attedence graph . Teachers have features to add lectures and taking attedence.</p>
				<a href="https://github.com/its-mahi/connect_FreshStartGuide/tree/main" target="_blank" className="text-blue-600">Github Link</a>
			</div>
		   
        </AccordionItem>

        
      </Accordion>
    </div>
  );
}
