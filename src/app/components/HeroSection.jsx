"use client"

import React from "react";
import Image from "next/image";

import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I&apos;m{" "}</span>
            <br></br>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Gia',
        2000, 
        "Web Developer",
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          {/* <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> */}
          <div>
            <button className="px-6 py-3 rounded-full  w-full sm:w-fit mr-4 bg-white hover:bg-slate-200 text-black">Hire Me</button>
            <button className="px-6 py-3 rounded-full w-full  sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-4"><a href="./Gia-Resume.pdf" download>
              Download CV
            </a></button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full   w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image  
            src="/images/bao.jpg"
            width={300}
            height={300}
            alt= "Hero Image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
