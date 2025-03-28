import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "He jots down information, notes, figma designs, tips, tips on his blog page to show the knowledge he has gained from experience and what he wants to tell.",
};

const AboutPage = () => {
  return (
    <div className="font-quicksandd text-black dark:text-white">
      <div>
        <h1 className="text-black dark:text-white text-2xl font-semibold  underline">
          <b>Education</b>
        </h1>
        {/* <h2 className="text-xl font-semibold">
            Dharmsinh Desai University (2022 - 2026)
        </h2>

        <p>
            B.Tech Computer Engineering  ( Current CPI : 8.76/10 )
        </p> */}
        <Education />
      </div>


      <div>
        <h1 className="text-black dark:text-black dark:text-white text-2xl font-semibold underline">
          <b>Experience</b>
        </h1>

        <Experience />


      </div>


    </div>
  );
};

export default AboutPage;
