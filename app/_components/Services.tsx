"use client";

import Heading from "@/components/Heading";
import { services } from "@/constants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      className="flex flex-col justify-center pt-32 lg:pt-40"
      id="services"
    >
      <Heading>My Services</Heading>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
              </div>

              <h2 className="text-[42px] font-bold leading-none group-hover:text-sky-700 transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-muted-foreground">{service.description}</p>
              <div className="border-b border-gray-300 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
