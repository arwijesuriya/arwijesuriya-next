"use client";

// IMPORT UI COMPONENTS
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

// IMPORT REACT ICONS
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// IMPORT FRAMER MOTION
import { motion } from "framer-motion";

// INFORMATION ARRAY
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "(+94) 715193003",
  },
  {
    icon: <FaEnvelope />,
    title: "E-mail",
    value: "arwijesuriya.7@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "200, Daraniyagala Lane, Pannipitiya"
  }
];


const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 2.4, ease: "easeIn" } }} className="py-1">
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row gap-[50px]">

          {/* FORM */}
          <div className="xl:h-[50%] order-2 xl:order-none">
            
            <form className="flex flex-col gap-2 p-8 bg-[#27272c] rounded-xl">
              <h3 className="text-2xl text-accent">Let's work together!</h3>
              <p className="text-white/50">
                If you're interested in working with me, please fill out the form below.
              </p>

              {/* INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="TP No." />
              </div>

              {/* SELECTOR */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">UI/UX Design</SelectItem>
                    <SelectItem value="cst">Logo Design</SelectItem>
                    <SelectItem value="mst">Article writing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* TEXTAREA */}
              <Textarea className="h-[120px]" placeholder="Type your message here.." />

              {/* BUTTON */}
              <Button size="md" className="max-w-40 mt-2">
                Send message
              </Button>
            </form>
          </div>

          {/* CONTACT */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-5">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[20px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60 text-sm">{item.title}</p>
                      <h3 className="text-sm">{item.value}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Contact