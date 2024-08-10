"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
import Heading from "@/components/Heading";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+212) 611154307",
    href: "tel:212611154307",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "a.amineelkhalidy@gmail.com",
    href: "mailto:a.amineelkhalidy@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Marrakech - Morocco",
    href: "https://www.google.com/maps/place/Marrakesh/@31.6348079,-8.1726689,11z/data=!3m1!4b1!4m6!3m5!1s0xdafee8d96179e51:0x5950b6534f87adb8!8m2!3d31.6225224!4d-7.9898258!16zL20vMDU0cnc?entry=ttu",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkrrwzj");

  if (state.succeeded) {
    toast.success("Your message has been sent successfully!");
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="pt-32 lg:pt-40"
      id="contact"
    >
      <Heading>Contact Me</Heading>
      <div className="container mx-auto pb-12">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          {/* xl:w-[54%] */}
          <div className="w-full order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-gray-50 rounded-md border"
            >
              <h3 className="text-3xl font-medium text-sky-700">
                Let&apos;s work together
              </h3>
              <p className="text-muted-foreground">
                Have a project in mind? Looking to partner or work together?
                <br />
                Reach out through the form and I&apos;ll be in touch with you.
              </p>

              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="First name" />
                <ValidationError
                  prefix="First Name"
                  field="firstname"
                  errors={state.errors}
                />
                <Input type="text" name="lastname" placeholder="Last name" />
                <ValidationError
                  prefix="Last Name"
                  field="lastname"
                  errors={state.errors}
                />
                <Input type="email" name="email" placeholder="Email address" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input type="phone" name="phone" placeholder="Phone number" />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>

              {/* Select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                    <SelectItem value="ost">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <ValidationError
                prefix="Service"
                field="service"
                errors={state.errors}
              />

              <Textarea
                className="h-[200px] resize-none"
                name="message"
                placeholder="Your message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <Button
                type="submit"
                size="lg"
                className="max-w-40 py-6 bg-sky-700 hover:bg-sky-900"
                disabled={state.submitting}
              >
                Send message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((info, index) => (
                <li key={index} className="flex items-center gap-6 group">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gray-50 text-sky-700 rounded-md flex items-center justify-center ">
                    <div className="text-[28px]">{info.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-muted-foreground">{info.title}</h3>
                    <Link
                      href={info.href}
                      className="font-medium duration-300 group-hover:text-sky-700"
                      target="_blank"
                    >
                      {info.description}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
