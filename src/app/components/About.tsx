import React from "react";
import { motion } from "framer-motion";
import about_img from "../assets/images/about-img.jpeg";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-0 xl:pt-14"
    >
      <h3 className="absolute top-28 ml-4 uppercase tracking-[20px] text-[#808080] text-xl lg:text-2xl animate-pulse">
        About
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
        className="-mb-20 mt-16 md:mt-0 xl:mt-0 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg w-56 h-56 md:w-64 md:h-95 xl:w-[450px] xl:h-[520px]"
      >
        <Image
          alt=""
          src={about_img}
          className="w-full h-full rounded-full object-cover md:rounded-lg"
        />
      </motion.div>

      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-4xl lg:text-5xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{" "}
          background
        </h4>
        <p className="text-md lg:text-lg">
          Junior Web Developer specializing in front end development.
          Well-versed in numerous programming languages including HTML, React,
          Javascript. Hard worker, team player.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
