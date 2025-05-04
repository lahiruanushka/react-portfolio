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
    name: "Vue JS",
    icon: vue,
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
  {
    title: "Associate Software Engineer",
    company_name: "DSP Engineering Solutions",
    icon: dsp,
    iconBg: "#383E56",
    date: "February 2024 - Present",
    points: [
      "Developed C# .NET Windows Forms applications, focusing on building responsive and functional desktop solutions",
      "Designed user interfaces using Angular and Figma, ensuring modern and user-friendly UI/UX",
      "Built and maintained backend services with .NET APIs, enabling secure and efficient data communication",
      "Worked with Microsoft SQL Server and MongoDB for structured and unstructured data management",
      "Improved application performance through problem-solving, debugging, and backend optimization",
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
    company: "DSP Engineering Solutions",
    image: ranjuLakshan,
  },
];

const projects = [
  {
    name: "JobFinder",
    description:
      "A comprehensive job search platform built with Laravel, designed to bridge the gap between job seekers and employers. The application features robust user authentication, advanced job filtering, and an intuitive admin dashboard for managing job listings, user profiles, and platform interactions.",
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
      "An innovative social media platform leveraging Laravel's powerful ecosystem. PostVibe offers a rich user experience with features like real-time post sharing, dynamic user profiles, advanced search functionality, and secure authentication. The platform demonstrates modern web development practices with a focus on user engagement and interaction.",
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
      "A cutting-edge blogging platform built with the MERN stack, offering a seamless content creation and discovery experience. Features include user authentication with JWT, rich text editing, categorized blog posts, and an admin panel for content moderation. The application showcases modern web development techniques and responsive design principles.",
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
      "A sophisticated e-commerce bookstore application developed using the MERN stack. BookWhiz provides a comprehensive shopping experience with features like advanced book browsing, intelligent cart management, wishlist functionality, and secure user authentication. The platform demonstrates a clean, modern design with robust backend infrastructure.",
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
      "A modern real estate application that revolutionizes property exploration and management. Built with React and Appwrite, EstateEase offers interactive property listings, geospatial mapping with Leaflet, comprehensive user authentication, and a responsive design. The application leverages cutting-edge technologies to create an intuitive real estate browsing experience.",
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
      "BlogVerse is a modern blogging platform built with React and Appwrite, featuring rich text editing, secure user authentication, and a responsive design powered by Tailwind CSS. The app enables users to easily create and manage posts, while leveraging Appwrite for backend services. With state management handled by Redux Toolkit and dynamic routing via React Router, this project offers a seamless and interactive user experience for bloggers and content creators.",
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
