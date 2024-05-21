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
    description: "'THE COFFEE SHOP' Responsive Coffee Shop Website Design (Frontend only).",
    stack: [
      { name: "ReactJS" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/thecoffeshop.png",
    live: "https://thecoffeeshop-arw.netlify.app/",
    github: "https://github.com/arwijesuriya/the-coffee-shop.git",
  },
  {
    num: "02",
    category: "webapp",
    title: "project 2",
    description: "'THE ATLAS' is the web app where we can get details of any country using Rest API.",
    stack: [
      { name: "html5" },
      { name: "css3" },
      { name: "javascript" },
    ],
    image: "/assets/work/theatlas.png",
    live: "https://66475ed556a651cdbc08f8cb--theatlas.netlify.app/",
    github: "https://github.com/arwijesuriya/the-atlas.git",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description: "'THE BOOKSTORE' is a Responsive E-commerce Platform for Bookstores with Builtin Inventory Control. (In Progress)",
    stack: [
      { name: "MERN stack" },
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
          <div className="w-full xl:w-[60%] xl:h-[250px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* NUMBER */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* CATEGORY */}
              <div className="text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </div>

              {/* DESCRIPTION */}
              <p className="text-white/40">
                {project.description}
              </p>

              {/* STACK */}
              <ul className="flex gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-accent">
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
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGlobe2 className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GITHUB PROJECT BUTTON */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
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
          <div className="w-full xl:w-[40%]">
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-[350px] xl:w-[350px] mb-2">
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[315px] relative group flex justify-center items-center bg-pink-50/20">
                      
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
              <WorkSliderBtns containerStyles="flex gap-1 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] w-[30px] h-[30px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Work