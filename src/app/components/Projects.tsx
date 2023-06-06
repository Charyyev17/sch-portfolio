import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      img: "https://user-images.githubusercontent.com/66562485/241756642-925f5d0b-db5e-4ec2-a15b-8855d7859933.png",
      name: "Travel Website",
      url: "https://basic-travel-website.netlify.app/",
      summary: "This Website developed by using Reactjs, TailwindCss & Fully Responsive",
    },
    {
      img: "https://user-images.githubusercontent.com/66562485/241718018-a24235dd-fefe-4763-84c4-ba8d86048635.png",
      name: "Gyzylburc - Youtube Clone",
      url: "https://gyzylburc.netlify.app/",
      summary: "Gyzylburc is a youtube clone that developed by using Reactjs, mui, RapidAPI.",
    },
    {
      img: "https://user-images.githubusercontent.com/66562485/241722411-6d726940-0a37-4ab9-a0a6-d3576de7468e.png",
      name: "Gatnashaly - Video Chat App",
      url: "https://gatnashaly.netlify.app/",
      summary: "Gatnashaly is a video chat app that developed by using Javascript, HTML/CSS, AgoraRTC.",
    },
    {
      img: "https://user-images.githubusercontent.com/66562485/241752674-a6124689-ea09-49e1-97d7-58ec265818b9.png",
      name: "Spotify - Clone",
      url: "https://spotify-clone-by-sch.netlify.app/",
      summary: "This Spotify clone developed by using Reactjs, TailwindCss JUST for Web versions, NOT recursive and doesn't work healthly on mobile versions.",
    },
    {
      img: "https://user-images.githubusercontent.com/66562485/241748528-a812d171-5fb9-402e-825d-1fe090826c5f.png",
      name: "Instagram - Clone",
      url: "https://github.com/Charyyev17/instagram-clone",
      summary: "This Instagram clone developed by using Reactjs, Redux, TailwindCss, Firebase JUST for Web versions, NOT recursive and doesn't work healthly on mobile versions.",
    },
    {
      img: "https://user-images.githubusercontent.com/66562485/242041233-f2a2284d-1b47-4ddf-9486-6bdbe0ee5dac.png",
      name: "Conference - Symposium",
      url: "https://conference-symposium.netlify.app/",
      summary: "This Website developed by using HTML & CSS",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] xl:tracking-[20px] text-[#808080] text-xl lg:text-2xl animate-pulse">
        Projects
      </h3>

      <div className="relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-6 lg:pt-12"
          >
            <a href={project.url}>
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                src={project.img}
                alt=""
                className="lg:w-[675px] lg:h-[350px] object-cover"
              />
            </a>

            <div className="space-y-6 px-0 md:px-10 max-w-5xl">
              <h4 className="text-2xl lg:text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>

              <p className="text-base lg:text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[350px] absolute top-[30%] bg-[#F7AB0A]/10 left-0 -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
