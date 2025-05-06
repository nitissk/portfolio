import { FiGithub, FiLinkedin, FiPhone, FiMail } from "react-icons/fi";

export const contactInfo = [
  {
    icon: <FiMail className="text-blue-400 text-xl" />,
    title: "Email",
    content: "nitishk2250@gmail.com",
    link: "mailto:nitishk2250@gmail.com",
  },
  {
    icon: <FiPhone className="text-blue-400 text-xl" />,
    title: "Phone",
    content: "+91 7808460352",
    link: "tel:+917808460352",
  },
  {
    icon: <FiGithub className="text-blue-400 text-xl" />,
    title: "GitHub",
    content: "github.com/nitissk",
    link: "https://github.com/nitissk",
    newTab: true,
  },
  {
    icon: <FiLinkedin className="text-blue-400 text-xl" />,
    title: "LinkedIn",
    content: "linkedin.com/in/nitish-kumar",
    link: "https://linkedin.com/in/nitish-kumar-593844231",
    newTab: true,
  },
];

export const technicalSkills = [
  "C/C++ , Java Programming",
  "Object-Oriented Programming (OOP)",
  "Data Structures & Algorithms (DSA)",
  "Operating Systems (OS)",
  "Computer Networks (CN)",
  "MySQL Database",
  "Software Engineering",
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Redux Toolkit",
  "Next.js",
  "Tailwind CSS",
];


export const softSkills = [
  { name: "Problem-Solving", icon: "🧩" },
  { name: "Team Collaboration", icon: "👥" },
  { name: "Adaptability", icon: "🔄" },
  { name: "Time Management", icon: "⏱️" },
  { name: "Communication", icon: "💬" },
  { name: "Critical Thinking", icon: "🧠" },
];

export const toolsTechnologies = [
  "VS Code",
  "IntelliJ IDEA ",
  "Git Version Control",
  "Firebase",
  "Linux",
  "Windows",
];

export const experiences = [
  {
    id: 1,
    role: "Software Trainee (React.js)",
    company: "Appinventiv",
    duration: "Feb 2025 - Present",
    responsibilities: [
      "Built responsive and accessible UIs using React.js and Tailwind CSS",
      "Managed complex application states efficiently with Redux Toolkit",
      "Worked closely with UX designers to deliver pixel-perfect components",
      "Boosted performance using techniques like lazy loading and code splitting",
      "Actively participated in agile sprints, daily stand-ups, and peer code reviews",
    ],
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Progressive Web Apps (PWA)",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
];


export const projects = [
  {
    id: 1,
    title: "Invoice Generator",
    icon: "🧾",
    description:
      "A multilingual invoice management system with PDF export capabilities.",
    features: [
      "Create professional invoices instantly",
      "Add store, customer, and item details ",
      "Generate PDF and print or download",
      "Save and manage all your invoices",
      "Secure access with Google Sign-In",
      "6 language support (English, Hindi, Arabic, etc.)",
      "PDF generation with QRCode & digital signatures",
      "Responsive UI with dynamic fonts",
    ],
    techStack: [
      "React.js",
      "Redux Toolkit",
      "Firebase",
      "i18next",
      "jsPDF Lib",
      "html2canvas",
      "CSS",
    ],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    icon: "🛒",
    description: "Modern online shopping platform with API integration.",
    features: [
      "Dynamic Product Catalog",
      "Real-time updates for item additions, removals, and total price calculations.",
      "Shopping cart functionality",
      "Product search & filters",
      "Responsive Tailwind design",
      "Implemented lazy loading for images and skeleton screens to optimize performance ",
      "Added toast notifications for user actions",
    ],
    techStack: ["React.js", "Tailwind CSS", " API", "TypeScript"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Digital E-Library",
    icon: "📚",
    description:
      "Developed a fully functional online book reading platform, Digital E-Library, designed to provide users with seamless access to a vast collection of digital books.",
    features: [
      "Book Search & Categorization",
      "User authentication system",
      "User Profile Management",
      "Personalized User Experience",
      "Team collaboration",
      "Agile development workflow",
      "Personalized Reading Lists",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "MySql"],
    demoLink: "#",
    codeLink: "#",
  },
];
