"use client";

// REACT ICONS
import { FaLink } from 'react-icons/fa';

// IMPORT COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
//import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {  motion } from 'framer-motion';
import Link from 'next/link';

// WEB DATA
const web = {
  title: "Web development projects",
  description: "For the past years, I've been working with various projects and getting the chance to get my hands on the latest technologies and approaches. Check out my projects to see what I've been up to!",
  webItems: [
    {
      webName: "THE COFFEE SHOP",
      webDescription: "This is a beginner friendly eCommerce responsive Coffee Shop Website frontend Using ReactJS and Tailwind CSS.",
      webLink: "https://thecoffeeshop-arw.netlify.app/",
    },
    {
      webName: "arwijesuriya.me",
      webDescription: "My personal website built with Next.js (app router), TailwindCSS, @shadcn/ui and hosted on Vercel.",
      webLink: "https://arwijesuriya.me/",
    },
    {
      webName: "THE ATLAS",
      webDescription: "This is a beginner friendly JavaScript project Using HTML5 and CSS3.",
      webLink: "https://theatlas.netlify.app/",
    },
    {
      webName: "THE BOOKSTORE",
      webDescription: "This is a fullstack online bookstore project made with MERN stack and TailwindCSS. (In progress)",
      webLink: "",
    },
  ],
};

// UI/UX DATA
const uix = {
  title: "UI/UX development projects",
  description: "For the past years, I've been working on various UI/UX development projects. Before starting each project, I conduct thorough research and gather inspiration to ensure innovative and user-friendly designs. Check out my portfolio to see what I've been up to!",
  uixItems: [
    {
      uixName: "THE BOOKSTORE",
      uixDescription: "This is a fullstack online bookstore project made with MERN stack and TailwindCSS. In this case I made the Figma design of project.",
      uixLink: "",
    },
  ],
};

// LOGO DATA
const logo = {
  title: "Logo designs",
  description: "For the past years, I've been working on various logo design projects. Before starting each project, I conduct thorough research and gather inspiration to ensure unique and impactful designs. Check out my portfolio to see what I've been up to!",
  logoItems: [
    {
      logoName: "THE COFFEE SHOP",
      logoDescription: "This is a beginner friendly eCommerce responsive Coffee Shop Website logo design through the Canva website.",
      logoLink: "https://drive.google.com/file/d/1YU2ZT-0N7jVJAdcYlcKtdG6IaJ8fg_2S/view?usp=sharing",
    },
  ],
};

// ARTICLE DATA
const article = {
  title: "Logo designs",
  description: "For the past years, I've been working on various article writing projects in my leisure time. Only some articles are written. Check out my portfolio to see what I've been up to!",
  articleItems: [
    {
      articleName: "How to Save Money on Your Energy Bill",
      articleDescription: "In this article, we'll explore practical tips and strategies to help you lower your energy expenses and keep more money in your pocket.",
      articleLink: "https://arwijesuriya58.blogspot.com/2023/07/how-to-save-money-on-your-energy-bill_29.html",
    },
  ],
};

const projects = () => {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }} className="min-h-[60vh] flex items-center justify-center py-10 xl:py-0" >
      <div className="container mx-auto">
        <Tabs defaultValue="web" className="flex flex-col xl:flex-row gap-[50px]" >
          
          {/* TAB LIST */}
          <TabsList className="flex flex-col w-full max-w-[250px] mx-auto xl:mx-0 gap-2" >
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="uix">UI/UX Development</TabsTrigger>
            <TabsTrigger value="logo">Logo Design</TabsTrigger>
            <TabsTrigger value="article">Article Writing</TabsTrigger>
          </TabsList>

          {/* CONTENT */}
          <div className="min-h-[70vh] w-full" >
            
            {/* WEB */}
            <TabsContent value="web" className="w-full" >
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {web.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {web.description}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {web.webItems.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <div className="w-full flex justify-between items-center">
                            <span className="text-xl text-accent">{item.webName}</span>
                            <Link href={item.webLink} target="_blank" >
                              <FaLink className="" />
                            </Link>
                          </div>
                          <h3 className="text-sm max-w-full min-h-[100px] text-white/40 text-center lg:text-left">{item.webDescription}</h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* UI/UX */}
            <TabsContent value="uix" className="w-full" >
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {uix.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {uix.description}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {uix.uixItems.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <div className="w-full flex justify-between items-center">
                            <span className="text-xl text-accent">{item.uixName}</span>
                            <Link href={item.uixLink} target="_blank" >
                              <FaLink className="" />
                            </Link>
                          </div>
                          <h3 className="text-sm max-w-full min-h-[100px] text-white/40 text-center lg:text-left">{item.uixDescription}</h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* LOGO */}
            <TabsContent value="logo" className="w-full" >
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {logo.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {logo.description}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {logo.logoItems.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <div className="w-full flex justify-between items-center">
                            <span className="text-xl text-accent">{item.logoName}</span>
                            <Link href={item.logoLink} target="_blank" >
                              <FaLink className="" />
                            </Link>
                          </div>
                          <h3 className="text-sm max-w-full min-h-[100px] text-white/40 text-center lg:text-left">{item.logoDescription}</h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* ARTICLE */}
            <TabsContent value="article" className="w-full" >
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {article.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {article.description}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {article.articleItems.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <div className="w-full flex justify-between items-center">
                            <span className="text-xl text-accent">{item.articleName}</span>
                            <Link href={item.articleLink} target="_blank" >
                              <FaLink className="" />
                            </Link>
                          </div>
                          <h3 className="text-sm max-w-full min-h-[100px] text-white/40 text-center lg:text-left">{item.articleDescription}</h3>
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

export default projects