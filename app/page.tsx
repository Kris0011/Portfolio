"use client";
import { useState  , useEffect } from "react";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, TwitterIcon } from "@/components/icons";
import WaterImage from "@/components/WaterImage";
import { Button } from "@nextui-org/button";
import TechStack from "@/components/TechStack";
import { motion } from "framer-motion"
import { type } from "os";

export default function Home() {
  const [x, setX] = useState(600);
  const [y, setY] = useState(0); 
  const numChanges = 5; 
  const timeInterval = 1000; 

  // useEffect(() => {
  //   let changeCount = 0;

  //   const changeValues = () => {
  //     if (changeCount >= numChanges) {
  //       return; 
  //     }
  //     const newX = x+20 ;
  //     // const newY =  y+20;

  //     setX(newX);
  //     // setY(newY);

  //     changeCount++;
  //     setTimeout(changeValues, timeInterval);
  //   };
  //   changeValues();
  // }, []);


  
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex md:flex-row space-x-5 justify-center items-center flex-col-reverse">
        <motion.div className="inline-block max-w-lg text-center justify-center md:mr-24 mt-24 md:mt-4" initial={{ x: -500 , opacity :0  }}  animate={{ x : 0 , opacity :1 }} transition={{ type: "spring" , duration : 1.5 }}>
          <h1 className={title()}>Hello , I am </h1>
          <h1 className={title({ color: "violet" })}>Kris Patel</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            A passionate developer based in Ahmedabad , India.
          </h2>
          {/* <div></div> */}
          <Button className="mt-4 m-2">
            <GithubIcon /> Kris0011
          </Button>
          <Button className="mt-4">
            <TwitterIcon /> kris__patel
          </Button>
        </motion.div>

        <motion.div  initial={{opacity: 0 , rotate : 300 }} animate={{ opacity: 1  , rotate : 0}} transition={ {type: "spring"  , duration : 1.5}}>
          <WaterImage />
        </motion.div>
      </div>
      <motion.div  initial={{  y :  200 , opacity :0  }}  animate={{ y : 0 , opacity :1 }} transition={{ type: "spring" , duration : 1.5 }}>

      <TechStack />
        </motion.div>


   
    </section>
  );
}
