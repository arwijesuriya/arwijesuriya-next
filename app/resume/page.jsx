"use client";

// REACT ICONS
import { FaHtml5, FaCss3, FaJs, FaFigma, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiMongodb, SiExpress, SiTailwindcss, SiGooglecloud, SiMysql, SiPhp, SiPostman, SiGit } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc'

// IMPORT COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {  motion } from 'framer-motion';

// ABOUT DATA
const about = {
  title: "About me",
  descriptioon: "I don't want other people to decide who I am. I want to decide that for myself.",
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

// EXPERIENCE DATA
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  descriptioon: "My experiences have taught me a lot and I'm happy with my learnings, if not with what I went through to learn.",
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

// EDUCATION DATA
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My education",
  descriptioon: "Education's purpose is to replace an empty mind with an open one.",
  items: [
    {
      institution: "Dharmapala Vidyalaya, Pannipitiya",
      degree: "First education",
      duration: "2006 - 2019",
    },
    {
      institution: "University of Colombo School of Computing",
      degree: "Diploma in Information Technology",
      duration: "2021 - 2022",
    },
    {
      institution: "Esoft Metro Campus, Nugegoda",
      degree: "Diploma in English",
      duration: "2022 - 2023",
    },
    {
      institution: "Vavuniya Campus of the University of Jaffna",
      degree: "BSc. Information Technology",
      duration: "2022 - Present",
    },
  ],
};

// SKILLS DATA
const skills = {
  title: "My skills",
  descriptioon: "The future belongs to those who learn more skills and combine them in creative ways.",
  skillList: [
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
      icon: <SiMysql/>,
      name: "MySQL",
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
      icon: <FaJava/>,
      name: "Java",
    },
    {
      icon: <SiTailwindcss/>,
      name: "TailwindCSS",
    },
    {
      icon: <SiPhp/>,
      name: "PHP",
    },
    {
      icon: <SiGit/>,
      name: "git",
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
      icon: <SiGooglecloud/>,
      name: "GoogleCloud",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }} className="min-h-[60vh] flex items-center justify-center py-10 xl:py-0" >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[50px]" >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6" >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* CONTENT */}
          <div className="min-h-[70vh] w-full" >
            
            {/* EXPERIENCE */}
            <TabsContent value="experience" className="w-full" >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {experience.descriptioon}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
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

            {/* EDUCATION */}
            <TabsContent value="education" className="w-full" >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {education.descriptioon}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
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

            {/* SKILLS */}
            <TabsContent value="skills" className="w-full h-full" >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                    {skills.descriptioon}
                  </p>
                </div>

                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 xl:gap-[10px] gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[90px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">
                                  {skill.name}
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

            {/* ABOUT ME */}
            <TabsContent value="about" className="w-full text-center xl:text-left" >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {about.descriptioon}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume