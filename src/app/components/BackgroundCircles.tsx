import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.4, 0.1, 1.0]
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full lg:w-[150px] lg:h-[150px] w-[150px] h-[150px] mt-[250px] lg:animate-ping" />
      <div className="absolute border border-[#333333] rounded-full lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] mt-[250px] animate-ping" />
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 lg:w-[450px] lg:h-[450px] w-[350px] h-[350px] mt-[250px] animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full lg:w-[600px] lg:h-[600px] w-[450px] h-[450px] mt-[250px]" />
    </motion.div>
  );
}

export default BackgroundCircles;
