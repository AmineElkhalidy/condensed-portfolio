"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiSanity,
  SiPrisma,
  SiMongodb,
  SiJest,
} from "react-icons/si";
import { about, education, experience } from "@/constants";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";

const skills = {
  title: "My skills",
  description:
    "I excel in front-end development with expertise in HTML, CSS, and JavaScript. I am proficient in frameworks like React and Next and have a solid grasp of responsive design principles. Additionally, I am experienced with version control systems and tools like Git, ensuring smooth and efficient project workflows.",
  skillList: [
    {
      icon: <FaHtml5 />,
      title: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      title: "CSS 3",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
    },
    {
      icon: <FaReact />,
      title: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      title: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      title: "TailwindCSS",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
    },
    {
      icon: <SiTypescript />,
      title: "TypeScript",
    },
    {
      icon: <SiPrisma />,
      title: "Prisma",
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB",
    },
    {
      icon: <SiSanity />,
      title: "Sanity",
    },
    {
      icon: <SiJest />,
      title: "Jest",
    },
  ],
};

const About = () => {
  return (
    <section className="pt-32 lg:pt-40" id="about">
      <Heading>Get to know me</Heading>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="flex items-center justify-center"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* Content */}
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-3xl font-semibold font-secondary">
                    {experience?.title}
                  </h3>
                  <p className="max-w-[600px] text-muted-foreground mx-auto xl:mx-0">
                    {experience?.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-gray-100 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-sky-700">{item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-sky-700"></span>
                            <p className="">{item.company}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-3xl font-semibold font-secondary">
                    {education?.title}
                  </h3>
                  <p className="max-w-[600px] text-muted-foreground mx-auto xl:mx-0">
                    {education?.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-gray-100 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-sky-700">{item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-sky-700"></span>
                            <p className="">{item.institution}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-3xl font-semibold font-secondary">
                    {skills?.title}
                  </h3>
                  <p className="max-w-[600px] text-muted-foreground mx-auto xl:mx-0">
                    {skills?.description}
                  </p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-gray-100 rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-sky-700 transition-all duration-300">
                                  {skill.icon}
                                </div>
                                <TooltipContent>
                                  <p className="capitalize">{skill.title}</p>
                                </TooltipContent>
                              </TooltipTrigger>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-3xl font-semibold font-secondary">
                    {about.title}
                  </h3>
                  <p className="max-w-[600px] text-muted-foreground mx-auto xl:mx-0">
                    {about.description}
                  </p>

                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-x-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-muted-foreground">
                          {item.fieldName}
                        </span>
                        <span className="font-medium">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
