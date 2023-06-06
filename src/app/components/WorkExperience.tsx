import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className="h-screen relative flex items-center justify-center max-w-7xl mx-auto min-h-screen">
      <h3 className="absolute top-24 ml-4 uppercase tracking-[15px] xl:tracking-[20px] text-[#808080] text-xl lg:text-2xl animate-pulse">
        Experience
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="h-screen flex flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <div className="flex w-full h-full space-x-10 overflow-x-scroll pt-32 py-5 lg:pt-40 lg:py-16 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          <ExperienceCard />
        </div>
      </motion.div>
    </div>
  );
}

export default WorkExperience;
