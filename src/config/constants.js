import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  dsp,
  jobfinder,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Tech Enthusialst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    category: "Frontend",
  },
  {
    name: "CSS 3",
    icon: css,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Frontend",
  },
  {
    name: "React JS",
    icon: reactjs,
    category: "Frontend",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Frontend",
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Database",
  },
  {
    name: "Three JS",
    icon: threejs,
    category: "Frontend",
  },
  {
    name: "git",
    icon: git,
    category: "Tools",
  },
  {
    name: "figma",
    icon: figma,
    category: "Tools",
  },
];

const experiences = [
  {
    title: "Trainee Software Engineer",
    company_name: "DSP Engineering Solutions",
    icon: dsp,
    iconBg: "#383E56",
    date: "November 2023 - June 2024",
    points: [
      "Gained hands-on experience in software application development and improvement",
      "Worked on OPC UA servers and clients, gaining knowledge of secure and reliable machine-to-machine communication",
      "Contributed to quality assurance for web and software applications, performing testing and debugging tasks",
      "Played a key role in enhancing the Meter Configuration Tool by developing a new version using C# .NET",
      "Updated the Windows Forms application with improved functionality and performance, resolving issues in the previous version",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Job Finder",
    description:
      "JobFinder is a powerful Laravel-based web application tailored for job seekers and employers. With a modern interface and user-friendly features, JobFinder offers an intuitive experience for posting and searching for jobs, while giving administrators comprehensive tools to manage platform content and users.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: jobfinder,
    source_code_link:
      "https://github.com/lahiruanushka/laravel-job-posting-app.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
