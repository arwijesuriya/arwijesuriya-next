"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Develop and maintain web services. Contribute to frontend and backend development processes.',
    href: "https://www.w3schools.com/java/"
  },
  {
    num: '02',
    title: 'UI/UX Development',
    description: 'create a positive user experience that encourages customers to stick with a brand or product.',
    href: "https://www.w3schools.com/python/"
  },
  {
    num: '03',
    title: 'Logo Design',
    description: 'focuses on creating unique and visually compelling symbols or designs that represent a product.',
    href: "https://www.w3schools.com/cpp/"
  },
  {
    num: '04',
    title: 'Articles Writing',
    description: 'content with the purpose of informing, educating, or persuading readers on a particular topic.',
    href: "https://www.w3schools.com/php/"
  }
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center py-10 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {services.map((service, index) => {
            return (
              <div key={index} className="bg-[#27272c] rounded-xl p-8 gap-2 flex-1 flex flex-col justify-center group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45" >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>

                {/* TITLE */}
                <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500" >
                  {service.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-white/50">
                  {service.description}
                </p>

                {/* BORDER 
                <div className="border-b border-white/20 w-full"></div>*/}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services