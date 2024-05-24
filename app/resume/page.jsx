"use client";

// REACT ICONS
import { FaHtml5, FaCss3, FaJs,  FaReact, FaNodeJs, FaGlobe, FaJava, FaGithub, FaChrome } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiMongodb, SiCanva, SiVercel, SiCplusplus, SiVite, SiExpress, SiTailwindcss, SiGooglecloud, SiMysql, SiPhp, SiPostman, SiGit } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { RiNextjsLine } from 'react-icons/ri';
import { BiLogoNetlify } from 'react-icons/bi';

// IMPORT COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {  motion } from 'framer-motion';
import AboutSocial from '@/components/AboutSocial';
import ProjectSocial from '@/components/ProjectSocial';
import Link from 'next/link';
import { useState } from 'react';

// ABOUT DATA
const about = {
  title: "About me",
  descriptioon: "I'm a confident and ambitious individual passionate about Information Technology. I aim to become a skilled IT professional, contributing significantly to the industry. I'm eager to tackle new challenges and make a meaningful impact in the evolving world of technology.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Achira Wijesuriya"
    },
    {
      fieldName: "Location",
      fieldValue: "Colombo, Sri Lanka"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan"
    },
    {
      fieldName: "Mobile",
      fieldValue: "+94715193003"
    },
    {
      fieldName: "Languages",
      fieldValue: "Sinhala, English"
    },
    {
      fieldName: "Email",
      fieldValue: "arwijesuriya.7@gmail.com"
    },
  ],
};

// EDUCATION DATA
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My education",
  descriptioon: "Currently, I'm pursuing a BSc in Information Technology, driven by a strong interest in IT and analytical skills. I'm seeking challenging IT internships to enhance my skills and foster personal and professional growth.",
  items: [
    {
      institution: "Dharmapala Vidyalaya, Pannipitiya",
      degree: "School",
      duration: "2006 - 2019",
    },
    {
      institution: "University of Colombo",
      degree: "Diploma in Information Technology",
      duration: "2021 - 2022",
    },
    {
      institution: "Esoft Metro Campus, Nugegoda",
      degree: "Diploma in English",
      duration: "2022 - 2023",
    },
    {
      institution: "University of Vavuniya",
      degree: "BSc. Information Technology",
      duration: "2022 - Present",
    },
  ],
};

// EXPERIENCE DATA
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  descriptioon: "After pursuing Advanced level studies in Physical Science, I interned in two times. And my experiences have taught me a lot and I'm happy with my learnings, if not with what I went through to learn.",
  items: [
    {
      company: "Bank of Ceylon",
      position: "School Leaver Intern",
      duration: "2021 - 2022",
    },
    {
      company: "Codsoft",
      position: "Front-End Developer Intern",
      duration: "2023 March - April",
    },
  ],
};

// TECHSTACK DATA
const techStack = {
  title: "My technologies",
  descriptioon: "The future belongs to those who learn more skills and combine them in creative ways. For the past years, I've been working with latest technologies, including programming languages, frameworks, databases, front-end and back-end tools, and APIs.",
  techList: [
    {
      icon: <FaHtml5/>,
      name: "html5",
    },
    {
      icon: <FaCss3/>,
      name: "css3",
    },
    {
      icon: <FaJs/>,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss/>,
      name: "TailwindCSS",
    },
    {
      icon: <SiMongodb/>,
      name: "MongoDB",
    },
    {
      icon: <SiExpress/>,
      name: "ExpressJS",
    },
    {
      icon: <FaReact/>,
      name: "ReactJS",
    },
    {
      icon: <FaNodeJs/>,
      name: "NodeJS",
    },
    {
      icon: <SiVite/>,
      name: "ViteJS",
    },
    {
      icon: <RiNextjsLine/>,
      name: "NextJS",
    },
    {
      icon: <SiMysql/>,
      name: "MySQL",
    },
    {
      icon: <SiPhp/>,
      name: "PHP",
    },
    {
      icon: <SiCplusplus/>,
      name: "C++",
    },
    {
      icon: <FaJava/>,
      name: "Java",
    },
    {
      icon: <SiGit/>,
      name: "git",
    },
    {
      icon: <FaGithub/>,
      name: "GitHub",
    },
    {
      icon: <SiPostman/>,
      name: "Postman",
    },
    {
      icon: <VscVscode/>,
      name: "VSCode",
    },
    {
      icon: <FiFigma/>,
      name: "Figma",
    },
    {
      icon: <SiCanva/>,
      name: "Canva",
    },
    {
      icon: <SiGooglecloud/>,
      name: "GoogleCloud",
    },
    {
      icon: <FaChrome/>,
      name: "Chrome",
    },
    {
      icon: <BiLogoNetlify/>,
      name: "Netlify",
    },
    {
      icon: <SiVercel/>,
      name: "Vercel",
    },
  ],
};

// ABILITIES DATA
const abilities = {
  title: "My abilities",
  descriptioon: "",
  items: [
    {
      abName: "Web Development",
      abDescription: "Develop and maintain web services. Contribute to frontend and backend development processes.",
    },
    {
      abName: "UI/UX Development",
      abDescription: "create a positive user experience that encourages customers to stick with a brand or product.",
    },
    {
      abName: "Logo Design",
      abDescription: "Focuses on creating unique and visually compelling symbols or designs that represent a product.",
    },
    {
      abName: "Articles Writing",
      abDescription: "content with the purpose of informing, educating, or persuading readers on a particular topic.",
    },
  ],
};

// PROJECTS DATA
const projects = {
  icon: '/assets/resume/badge.svg',
  title: "My Projects",
  descriptioon: "For the past years, I've been working with various projects and getting the chance to get my hands on the latest technologies and approaches. Check out my projects to see what I've been up to!",
  myProjects: [
    {
      projectName: "THE COFFEE SHOP",
      projectDescription: "This is a beginner friendly eCommerce responsive Coffee Shop Website frontend Using ReactJS and Tailwind CSS.",
      live: "https://thecoffeeshop-arw.netlify.app/",
      github: "https://github.com/arwijesuriya/the-coffee-shop.git",
    },
    {
      projectName: "arwijesuriya.me",
      projectDescription: "My personal website built with Next.js (app router), TailwindCSS, @shadcn/ui and hosted on Vercel.",
      live: "https://arwijesuriya.me/",
      github: "",
    },
    {
      projectName: "THE ATLAS",
      projectDescription: "This is a beginner friendly JavaScript project Using HTML5 and CSS3.",
      live: "https://theatlas.netlify.app/",
      github: "https://github.com/arwijesuriya/the-atlas.git",
    },
    {
      projectName: "THE BOOKSTORE",
      projectDescription: "This is a fullstack online bookstore project made with MERN stack and TailwindCSS. (In progress)",
      live: "",
      github: "",
    },
  ],
};

const Resume = () => {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }} className="min-h-[60vh] flex items-center justify-center py-10 xl:py-0" >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[50px]" >
          
          {/* TAB LIST */}
          <TabsList className="flex flex-col w-full max-w-[250px] mx-auto xl:mx-0 gap-2" >
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="techStack">Tech stack</TabsTrigger>
            <TabsTrigger value="abilities">Abilities</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {/* CONTENT */}
          <div className="min-h-[70vh] w-full" >
            
            {/* ABOUT ME */}
            <TabsContent value="about" className="w-full text-center xl:text-left" >
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {about.descriptioon}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 max-w-full mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="justify-start mb-6 xl:mb-0">
                  <AboutSocial mySocialsStyles="flex gap-4" myIconStyles="bg-[#232329] w-8 h-8 rounded-xl flex justify-center items-center text-base hover:text-accent hover:transition-all duration-300" />
                </div>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education" className="w-full" >
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {education.descriptioon}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[400px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-2">
                            {/* GREEN DOT */}
                            <span className="w-[7px] h-[7px] rounded-full bg-accent"></span>
                            <p className="text-white/40">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EXPERIENCE */}
            <TabsContent value="experience" className="w-full" >
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {experience.descriptioon}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[400px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-2">
                            {/* GREEN DOT */}
                            <span className="w-[7px] h-[7px] rounded-full bg-accent"></span>
                            <p className="text-white/40">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* TECH STACK */}
            <TabsContent value="techStack" className="w-full h-full" >
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {techStack.title}
                  </h3>
                  <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                    {techStack.descriptioon}
                  </p>
                </div>

                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 xl:gap-[10px] gap-4">
                    {techStack.techList.map((tech, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[90px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                  {tech.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">
                                  {tech.name}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* ABILITIES */}
            <TabsContent value="abilities" className="w-full" >
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {abilities.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {abilities.descriptioon}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {abilities.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-xl text-accent">{item.abName}</span>
                          <h3 className="text-sm max-w-full min-h-[100px] text-white/40 text-center lg:text-left">{item.abDescription}</h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* PROJECTS */}
            <TabsContent value="projects" className="w-full" >
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {projects.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {projects.descriptioon}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {projects.myProjects.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-xl text-accent">{item.projectName}</span>
                          <h3 className="text-sm max-w-full min-h-[80px] text-white/40 text-center lg:text-left">{item.projectDescription}</h3>
                          
                          {/* ICONS */}
                          {/*<div className="flex items-center gap-2">
                            <ProjectSocial projectStyles="flex gap-1" proIconStyles="bg-primary w-8 h-8 rounded-xl flex justify-center items-center text-base hover:text-accent hover:transition-all duration-300" />
                      </div>*/}

                          <ul className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 xl:gap-[10px] gap-4">
                            {projects.myProjects.map((proj, index) => {
                              return (
                                <li key={index}>
                                  <Link href={proj.live}>
                                    <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                          <FaGlobe className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>

                                        <TooltipContent>
                                          <p>Live project</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </Link>

                                  <Link href={proj.github}>
                                    <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                          <FaGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>

                                        <TooltipContent>
                                          <p>GitHub Repository</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume