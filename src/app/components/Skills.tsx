import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative justify-center items-center text-center max-w-[2000px] min-h-screen mx-auto md:text-left xl:flex-row xl:px-10 xl:space-y-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] xl:tracking-[20px] text-[#808080] text-xl lg:text-2xl animate-pulse">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#808080] text-sm">
        Hover over a skill for currency profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
