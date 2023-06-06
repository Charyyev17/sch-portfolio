import React from "react";
import { motion } from "framer-motion";

type Props = {
};

function Skill({}: Props) {
  const skills = [
    "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
    "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    "https://media.licdn.com/dms/image/C5622AQEaSzZNrNFgUQ/feedshare-shrink_800/0/1678383920919?e=1688601600&v=beta&t=Stb7cwyyjDZ8THySA7a5fonoRlylNDhuRv2NVBFxFg0",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    "https://play-lh.googleusercontent.com/eof_QbMfhJxAiqbE2ESWwb1-qJ7Zu6yKbESiUaEs9CfuUA1oxDW0374FVYP6cnZLmw=w600-h300-pc0xffffff-pd",
    "https://dmsservicesgoa.com/dms/wp-content/uploads/2018/09/codeigniter-logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMmKizToVaPxNP8BoxhRfIAmMbkFcMQC8kotbXCJN3MP92c9P-qEcM0ZQstE9iHzQF-8&usqp=CAU",
  ];

  return (
    <>
      {skills.map((skill, id) => (
        <div key={id} className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              y: 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            src={skill}
            className="rounded-full border border-[#808080] object-contain w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out hover:animate-spin"
          />
        </div>
      ))}
    </>
  );
}

export default Skill;
