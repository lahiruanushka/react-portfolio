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
  ranjuLakshan,
  arcclogo,
  sliatelogo,
  postvibe,
  byteThoughts,
  bookwhiz,
  estateEase,
  blogVerse,
  php,
  laravel,
  express,
  bootstrap,
  vue,
  mysql,
  sqlserver,
  sqlite,
  csharp,
  dotnet,
  angular,
  nextjs,
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
    title: "Tech Enthusiast",
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
    name: "Vue JS",
    icon: vue,
    category: "Frontend",
  },
  {
    name: "Next JS",
    icon: nextjs,
    category: "Frontend",
  },
  {
    name: "Angular JS",
    icon: angular,
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
    name: "Bootstrap",
    icon: bootstrap,
    category: "Frontend",
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "Backend",
  },
  {
    name: "PHP",
    icon: php,
    category: "Backend",
  },
  {
    name: "Laravel",
    icon: laravel,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: express,
    category: "Backend",
  },
  {
    name: "C#",
    icon: csharp,
    category: "Backend",
  },
  {
    name: ".NET",
    icon: dotnet,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Database",
  },
  {
    name: "MySql",
    icon: mysql,
    category: "Database",
  },
  {
    name: "Sql Server",
    icon: sqlserver,
    category: "Database",
  },
  {
    name: "Sqlite",
    icon: sqlite,
    category: "Database",
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
    company_name: "DSP Engineering Solutions Pvt Ltd",
    icon: dsp,
    iconBg: "#383E56",
    date: "November 2023 - June 2024",
    points: [
      "Gained hands-on experience in developing and improving software applications during the internship",
      "Worked with OPC UA servers and clients for secure and reliable machine-to-machine communication",
      "Contributed to quality assurance by testing and debugging web and software applications",
      "Developed and enhanced Windows Forms applications using C# .NET for better performance and usability"
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "DSP Engineering Solutions Pvt Ltd",
    icon: dsp,
    iconBg: "#383E56",
    date: "February 2024 - Present",
    points: [
      "Develop C# .NET Windows Forms applications with a focus on performance and intuitive UI design",
      "Contribute to frontend development using Next.js and Angular for responsive and user-friendly interfaces",
      "Work with Microsoft SQL Server and MongoDB for efficient data management",
      "Solve complex technical issues and enhance overall application functionality"
    ],
  },
  
];

const educationDetails = [
  {
    institute:
      "Sri Lanka Institute of Advanced Technological Education (SLIATE) - Kandy",
    course: "Higher National Diploma in Information Technology (HNDIT)",
    duration: "2021 - 2024",
    icon: sliatelogo,
    achievements: [
      "Gained strong foundational knowledge in software development and IT technologies.",
      "Completed hands-on projects in web and software development.",
    ],
  },
  {
    institute: "Walala A. Rathnayake Central College",
    course: "Advanced Level (Engineering Technology Stream)",
    duration: "2011 - 2019",
    icon: arcclogo,
    achievements: [
      "Excelled in Engineering Technology and related subjects.",
      "Member of National Cadet Corps",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working alongside Lahiru, who consistently demonstrated his passion for software development and problem solving. As a Trainee Software Engineer, Lahiru showcased exceptional dedication to learning and building innovative solutions. I am confident Lahiru's commitment to excellence and growth will continue to shine in his career. I strongly recommend him to any team or organization looking for a motivated and skilled software engineer.",
    name: "Ranju Laksahan Gamage",
    designation: "Software Engineer",
    company: "DSP Engineering Solutions Pvt Ltd",
    image: ranjuLakshan,
  },
];

const projects = [
  {
    name: "JobFinder",
    description:
      "A job search platform built with Laravel to connect job seekers and employers. It features secure user authentication, advanced job filtering, and a user-friendly admin dashboard for managing listings and users.",
    tags: [
      {
        name: "Laravel",
        color: "bg-gradient-to-r from-pink-500 to-pink-700",
      },
      {
        name: "MySQL",
        color: "bg-gradient-to-r from-blue-500 to-blue-700",
      },
      {
        name: "Tailwind CSS",
        color: "bg-gradient-to-r from-green-500 to-green-700",
      },
      {
        name: "Full-Stack",
        color: "bg-gradient-to-r from-purple-500 to-purple-700",
      },
    ],
    image: jobfinder,
    source_code_link:
      "https://github.com/lahiruanushka/laravel-job-posting-app.git",
  },
  {
    name: "PostVibe",
    description:
      "An interactive social media platform built with Laravel, enabling real-time post sharing, dynamic user profiles, secure login, and advanced search features for a modern user experience.",
    tags: [
      {
        name: "Laravel",
        color: "bg-gradient-to-r from-pink-500 to-pink-700",
      },
      {
        name: "SQLite",
        color: "bg-gradient-to-r from-yellow-500 to-yellow-700",
      },
      {
        name: "Bootstrap 5",
        color: "bg-gradient-to-r from-blue-500 to-blue-700",
      },
      {
        name: "Social Media",
        color: "bg-gradient-to-r from-indigo-500 to-indigo-700",
      },
    ],
    image: postvibe,
    source_code_link:
      "https://github.com/lahiruanushka/laravel-social-media-platform.git",
  },
  {
    name: "ByteThoughts",
    description:
      "A full-featured blogging platform developed using the MERN stack. It includes secure JWT-based authentication, rich text editing, blog post categorization, and an admin panel for managing content.",
    tags: [
      {
        name: "MongoDB",
        color: "bg-gradient-to-r from-green-500 to-green-700",
      },
      {
        name: "Express.js",
        color: "bg-gradient-to-r from-gray-500 to-gray-700",
      },
      {
        name: "React",
        color: "bg-gradient-to-r from-blue-500 to-blue-700",
      },
      {
        name: "Node.js",
        color: "bg-gradient-to-r from-green-600 to-green-800",
      },
    ],
    image: byteThoughts,
    source_code_link: "https://github.com/lahiruanushka/mern-blog.git",
  },
  {
    name: "BookWhiz",
    description:
      "An e-commerce bookstore application built with the MERN stack. It offers a seamless shopping experience with advanced browsing, cart and wishlist functionality, and secure user authentication.",
    tags: [
      {
        name: "MongoDB",
        color: "bg-gradient-to-r from-green-500 to-green-700",
      },
      {
        name: "React",
        color: "bg-gradient-to-r from-blue-500 to-blue-700",
      },
      {
        name: "Node.js",
        color: "bg-gradient-to-r from-green-600 to-green-800",
      },
      {
        name: "E-Commerce",
        color: "bg-gradient-to-r from-purple-500 to-purple-700",
      },
    ],
    image: bookwhiz,
    source_code_link:
      "https://github.com/lahiruanushka/mern-book-store-app.git",
  },
  {
    name: "EstateEase",
    description:
      "A modern real estate web app built using React and Appwrite. It features interactive property listings, geolocation integration via Leaflet, secure authentication, and a responsive interface for optimal user experience.",
    tags: [
      {
        name: "Appwrite",
        color: "bg-gradient-to-r from-pink-500 to-pink-700",
      },
      {
        name: "Tailwind CSS",
        color: "bg-gradient-to-r from-green-500 to-green-700",
      },
      {
        name: "React",
        color: "bg-gradient-to-r from-blue-500 to-blue-700",
      },
      {
        name: "Geolocation",
        color: "bg-gradient-to-r from-indigo-500 to-indigo-700",
      },
    ],
    image: estateEase,
    source_code_link:
      "https://github.com/lahiruanushka/react-appwrite-estate-app.git",
  },
  {
    name: "BlogVerse",
    description:
      "A sleek blogging platform developed with React and Appwrite. It supports rich text post creation, secure user login, dynamic routing via React Router, and responsive design styled with Tailwind CSS. Redux Toolkit handles state management for a seamless experience.",
    tags: [
      {
        name: "Appwrite",
        color: "bg-gradient-to-r from-pink-500 to-pink-700",
      },
      {
        name: "Tailwind CSS",
        color: "bg-gradient-to-r from-green-500 to-green-700",
      },
      {
        name: "React",
        color: "bg-gradient-to-r from-blue-500 to-blue-700",
      },
      {
        name: "Redux",
        color: "bg-gradient-to-r from-purple-500 to-purple-700",
      },
    ],
    image: blogVerse,
    source_code_link:
      "https://github.com/lahiruanushka/react-appwrite-blog-app.git",
  },
];


export default projects;

export {
  services,
  technologies,
  experiences,
  educationDetails,
  testimonials,
  projects,
};
