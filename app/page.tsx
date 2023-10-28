"use client";
import { useState, useEffect } from "react";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, TwitterIcon } from "@/components/icons";
import WaterImage from "@/components/WaterImage";
import { Button } from "@nextui-org/button";
import TechStack from "@/components/TechStack";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";

export default function Home() {
  const resumeURL = "https://drive.google.com/file/d/1cFPOqgtDMIgT6vzSW1SVoyRXaLyg4G1R/view?usp=sharing"
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="flex md:flex-row space-x-5 justify-center items-center flex-col-reverse">
        <motion.div
          className="inline-block max-w-lg text-center justify-center md:mr-24 mt-24 md:mt-4"
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1.5 }}
        >
          <h1 className={title()}>Hello , I am </h1>
          <h1 className={title({ color: "violet" })}>Kris Patel</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            A passionate developer based in Ahmedabad , India.
          </h2>
          <div>
          <Button className="mt-4 m-2">
          <Link
              isExternal
              href={siteConfig.links.github}
              aria-label="Github"
              className="text-white"
            >
              <GithubIcon /> Kris0011
            </Link>
            
          </Button>
          <Button className="mt-4">
            <Link
              isExternal
              href={siteConfig.links.twitter}
              aria-label="Twitter"
              className="text-white"

            >
              <TwitterIcon /> kris__patel
            </Link>
          </Button>
          </div>
          <div>
          <Button className="mt-1">
            <Link
              isExternal
              href={resumeURL}
              aria-label="resume"
              className="text-white"
            >
              Resume
            </Link>
          </Button>
          </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 300 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
        >
          <WaterImage />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1.5 }}
      >
        <TechStack />
      </motion.div>

    </section>
  );
}
