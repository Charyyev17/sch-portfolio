import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  const experiences = [
    {
      logo: "https://gadom.klu.edu.tr/yonetim/dosyalar/birimler/gadom/resimler/gadom_sr_4-04-2023_822f8.jpg",
      role: "Web Developer (*Internship)",
      company: "Kırklareli University GADOM",
      tools: [
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
        "https://dmsservicesgoa.com/dms/wp-content/uploads/2018/09/codeigniter-logo.png",
        "https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png",
      ],
      date: "2022 - 2022",
      summaries: [
        "Existing website was debugged and optimized as a group",
        "Added new pages and panels to the website",
        "Work with senior developer to manage large, complex design project",
      ],
    },
    {
      logo: "https://ww1.freelogovectors.net/wp-content/uploads/2020/07/kirklareli-universitesi-logo.png",
      role: "Front-End Developer",
      company: "Kırklareli University Graduation Project",
      tools: [
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        "https://play-lh.googleusercontent.com/eof_QbMfhJxAiqbE2ESWwb1-qJ7Zu6yKbESiUaEs9CfuUA1oxDW0374FVYP6cnZLmw=w600-h300-pc0xffffff-pd",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMmKizToVaPxNP8BoxhRfIAmMbkFcMQC8kotbXCJN3MP92c9P-qEcM0ZQstE9iHzQF-8&usqp=CAU",
        "https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png",
      ],
      date: "2021 - 2022",
      summaries: [
        "Kırklareli conference and symposium organization website was designed from scratch as a group",
        "I did the front-end side of the project",
      ],
    },
  ];

  return (
    <>
      {experiences.map((experience, id) => (
        <article
          key={id}
          className="flex flex-col rounded-lg items-center justify-center space-y-5 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="mt-3 xl:mt-0 w-28 h-28 rounded-full object-cover object-center xl:w-[180px] xl:h-[180px]"
            src={experience.logo}
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-xl xl:text-3xl font-light">
              {experience.role}
            </h4>
            <p className="mt-1 text-base xl:text-xl font-bold">
              {experience.company}
            </p>

            <div className="flex space-x-2 mt-2">
              {experience.tools.map((tool, id) => (
                <img
                  key={id}
                  className="h-8 w-8 rounded-full object-cover"
                  src={tool}
                  alt=""
                />
              ))}
            </div>

            <p className="text-sm uppercase py-5 text-gray-300">
              {experience.date}
            </p>

            <ul className="list-disc space-y-4 ml-5 text-md">
              {experience.summaries.map((summary, id) => (
                <li key={id}>
                  {summary}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
}

export default ExperienceCard;
