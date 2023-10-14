
import { title, subtitle } from "@/components/primitives";
import { GithubIcon , TwitterIcon } from "@/components/icons";
import WaterImage from "@/components/WaterImage";
import { Button } from "@nextui-org/button";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex md:flex-row space-x-5 justify-center items-center flex-col-reverse">
        <div className="inline-block max-w-lg text-center justify-center md:mr-24 mt-24 md:mt-4">
          <h1 className={title()}>Hello , I am &nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Kris Patel&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            A passionate developer based in Ahmedabad , India.
          </h2>
		  <div></div>
          <Button className="mt-4 m-2">
            <GithubIcon /> Kris0011
          </Button>
          <Button className="mt-4">
            <TwitterIcon/> kris_patel
          </Button>
        </div>

        <WaterImage />
      </div>

	  <TechStack/>
    </section>
  );
}
