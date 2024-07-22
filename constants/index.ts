export const links = [
  {
    name: "services",
    path: "#services",
  },
  {
    name: "about",
    path: "#about",
  },
  {
    name: "work",
    path: "#work",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

export const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Build robust and scalable websites tailored to your business needs. I specializes in creating responsive and dynamic web applications that engage users and drive growth. From concept to launch, I ensure your site is optimized for performance and built with the latest technologies.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Enhance user satisfaction with my intuitive and aesthetically pleasing UI/UX designs. I focus on creating user-friendly interfaces and seamless experiences that not only look great but also provide meaningful interactions. Transform your digital presence with my design expertise.",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Craft a unique and memorable logo that perfectly represents your brand. I works closely with you to develop a logo that captures your company's essence and leaves a lasting impression. Stand out in the market with a distinctive and professional brand identity.",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Improve your website’s visibility and ranking on search engines with our SEO services. I use proven strategies and techniques to drive organic traffic and enhance your online presence. Achieve higher search engine rankings and connect with your target audience effectively.",
  },
];

export const about = {
  title: "About me",
  description:
    "I am a dedicated front-end developer with a passion for creating seamless and engaging web experiences. With a keen eye for detail and a drive for continuous improvement, I blend design and technology to build intuitive user interfaces. Beyond coding, I enjoy exploring new technologies and pushing the boundaries of web development to deliver innovative solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Amine Elkhalidy",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+212) 611154307",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Discord",
      fieldValue: "Amine Elkhalidy",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Moroccan",
    },
    {
      fieldName: "Email",
      fieldValue: "a.amineelkhalidy@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, French and English",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Over the past few years, I've honed my skills in front-end development, creating visually appealing and user-friendly websites. With a passion for coding and a keen eye for design, I thrive on turning complex problems into simple, beautiful solutions. Dedicated to continuous learning and staying updated with the latest technologies, I strive to deliver exceptional digital experiences.",
  items: [
    {
      company: "Préfecture d'arrondissements de Ben M'sick",
      position: "Front End Developer",
      duration: "2021 (Internship)",
    },
    {
      company: "Upwork",
      position: "Front End Developer",
      duration: "2022 - Present",
    },
    {
      company: "LaunchEffect Agency",
      position: "Front End Developer",
      duration: "01/2023 - 06/2023",
    },

    {
      company: "Fiverr",
      position: "Front End Developer",
      duration: "01/2024 - Present",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have a solid educational foundation in software engineering, holding an associate degree and continuing my learning journey through online platforms. My studies have equipped me with the technical knowledge and practical skills needed to excel in the ever-evolving field of software development.",
  items: [
    {
      institution: "EST SAFI",
      degree: "Associate degree in Software Engineering",
      duration: "2018 - 2019",
    },
    {
      institution: "EST SB",
      degree: "Associate degree in Software Engineering",
      duration: "2019 - 2021",
    },
    {
      institution: "Udemy",
      degree: "Software Engineering",
      duration: "2021 - Present",
    },
    {
      institution: "Freecodecamp",
      degree: "Software Engineering",
      duration: "2021 - Present",
    },
    // {
    //   institution: "Codedamn",
    //   degree: "Software Engineering",
    //   duration: "2021 - Present",
    // },
  ],
};

export const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Learn about Islam",
    description:
      "Find a quick and comprehensive catalogue of answers to common questions that arise from misconceptions about Islam",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
      { name: "Sanity" },
      { name: "Algolia" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://www.learnaboutislam.com",
    github: "#",
  },
  {
    num: "02",
    category: "fullstack",
    title: "CourseHUB",
    description:
      "Modern learning management system for students to learn and teachers to create and publish knowledge.",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "MongoDB" },
      { name: "Prisma" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://coursehub-platform.vercel.app",
    github: "https://github.com/AmineElkhalidy/course-hub",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Genify",
    description:
      "Genify is an AI Tool for generating different types of content (Conversation, Code, Music, Video...).",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
      { name: "Prisma" },
      { name: "ChatGPT" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://genify.vercel.app",
    github: "https://github.com/AmineElkhalidy/genify",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Formify",
    description:
      "Formify is a web app powered by AI to help you generate forms in seconds.",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
      { name: "Drizzle" },
      { name: "Gemini" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://formify-ai-app.vercel.app",
    github: "https://github.com/AmineElkhalidy/formify",
  },
];

export const testimonials = [
  {
    name: "Jannetje Van Leeuwen",
    description:
      "I've hired Amine multiple times and every time he completed his work in record time. Amine is friendly and easy to communicate with and goes the extra mile. Will rehire and highly recommend",
  },
  {
    name: "Hi Ba",
    description:
      "Amine is a great developer who helped me greatly in a very short amount of time and done all the work I required, I would definitely hire him again!",
  },
  {
    name: "Sara F",
    description: "Amine is a skilled developer that deliver quality work.",
  },
  {
    name: "Brady Cargle",
    description:
      "Amine is an AMAZING freelancer. He's smart, dedicated, and gets the job done. Such a pleasure to work with. Amine understands the heart of the job, the client needs, and requires minimal instruction. Really a pleasure to work with, hope we get to work together in the future for more projects!",
  },
  {
    name: "Saswat Das",
    description:
      "Amine is dedicated to whatever he does. I would recommend him for any sort of front-end tasks.",
  },
  {
    name: "Production SD",
    description: "Great work by Amine, his enthusiasm is addictive!",
  },
];
