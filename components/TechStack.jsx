"use client";
import React from 'react'
import {Divider} from "@nextui-org/react";
import Image from 'next/image'
import cpp from '../public/cpp.png'
import html from '../public/HTML5.png'
import css from '../public/CSS3.png'
import js from '../public/JavaScript.png'
import react from '../public/React.png'
import tailwind from '../public/Tailwind CSS.png'
import next from '../public/Next.js.png'
import vite from '../public/Vite.js.png'
import node from '../public/Node.js.png'
import { title , subtitle} from "@/components/primitives";




export default function TechStack() {
  return (
    <div className="mt-10">
     
      <Divider className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-small mt-5">
        <h1 className={subtitle()}>Tech Stack</h1>
        <Divider orientation="vertical" className='h-10' />
 
        <Image src={html} alt="NextJS" className='w-12 ' />
        <Image src={css} alt="NextJS" className='w-12 ' />
        <Image src={js} alt="NextJS" className='w-12 ' />


        <Divider orientation="vertical" className='h-10'  />
        <Image src={react} alt="NextJS" className='w-12 ' />
        <Image src={next} alt="NextJS" className='bg-white rounded-full border-2' width={50} height={50} />
        <Image src={vite} alt="NextJS" className='w-12 ' />
        <Image src={node} alt="NextJS" className='w-12 ' />

        <Divider orientation="vertical" className='h-10'/>
        <Image src={tailwind}  alt="NextJS" className='w-12 ' />
      </div>
    </div>
  )
}
