"use client";

// IMPORT MOTION
import { motion } from "framer-motion";

// IMPORT SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// IMPORT REACT ICONS
import { BsGithub, BsGlobe2 } from "react-icons/bs";

// IMPORT UI TOOLS
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// IMPORT OTHER COMPONENTS
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// PROJECTS ARRAY
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
    ],
    image: "/assets/work/thecoffeshop.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "webapp",
    title: "project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
    ],
    image: "/assets/work/theatlas.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [
      { name: "MongoDB" },
      { name: "ExpressJS" },
      { name: "ReactJS" },
      { name: "NodeJS" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/thebookstore.png",
    live: "",
    github: "",
  },
];

const Work = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // GET CURRENT SLIDE INDEX
    const currentIndex = swiper.activeIndex;

    // UPDATE PROJECT STATE BASED ON CURRENT SLIDE INDEX
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 2.4, ease: "easeIn" } }} className="min-h-[60vh] flex flex-col justify-center py-5 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          
          {/* TEXT SECTION */}
          <div className="w-full xl:w-[50%] xl:h-[300px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* NUMBER */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* CATEGORY */}
              <div className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </div>

              {/* DESCRIPTION */}
              <p className="text-white/40">
                {project.description}
              </p>

              {/* STACK */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}

                      {/* REMOVE LAST COMMA */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* BORDER */}
              <div className="border border-white/20">

              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-4">
                {/* LIVE PROJECT BUTTON */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGlobe2 className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GITHUB PROJECT BUTTON */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* SLIDER SECTION */}
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-[300px] mb-5">
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      
                      {/* OVERLAY */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                      </div>

                      {/* IMAGE */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>

                    </div>
                  </SwiperSlide>
                );
              })}

              {/* SLIDER BUTTON */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Work