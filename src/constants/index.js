import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  express,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  mongo,
  next,
  node,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  postgres,
  protopie,
  python,
  raindrop,
  react,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  ts,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Me",
    url: "#how-to-use",
  },
  {
    id: "1",
    title: "Projects",
    url: "#features",
  },
  {
    id: "2",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = ['yourlogo', 'yourlogo'];

export const brainwaveServices = [
  "Web Development",
  "UI/UX Design",
  "Machine Learning",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Started software Development",
    text: "Began exploring newer technologies to build better products",
    date: "July 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Learned Next.js / MERN Stack",
    text: "Mastered MongoDB, Express.js, React, and Node.js to build full-stack applications.",
    date: "Sept 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: " Machine Learning ",
    text: "Started with Mathematical concepts like statistics, probablity, calculus and then machine learning algorightms like reagression, Naive Bayes etc",
    date: "Oct 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Explored Data Science",
    text: "Started learning data science concepts to better understand data analysis. Learning tools like Numpy, Pandas, Streamlit, Seaborne, Matplotlib",
    date: "Oct 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "I'm dedicated to creating impactful digital experiences through clean code, user-centered design, and continuous learning.";

export const collabContent = [
  {
    id: "0",
    title: "Production Grade Projects",
    text: "Crafting visually appealing and user-friendly interfaces.",
  },
  {
    id: "1",
    title: "Efficient Coding",
    text: "Writing optimized, clean, and maintainable code.",
  },
  {
    id: "2",
    title: "Continuous Learning",
    text: "Staying updated with the latest technology trends.",
  },
];
export const collabApps = [
  {
    id: "0",
    title: "React",
    icon: react,
    width: 64,
    height: 64,
  },
  {
    id: "1",
    title: "Next",
    icon: next,
    width: 64,
    height: 64,
  },
  {
    id: "2",
    title: "Express",
    icon: express,
    width: 64,
    height: 64,
  },
  {
    id: "3",
    title: "Mongo",
    icon: mongo,
    width: 64,
    height: 64,
  },
  {
    id: "4",
    title: "PostgreSQL",
    icon: postgres,
    width: 64,
    height: 64,
  },
  {
    id: "5",
    title: "TypeScript",
    icon: ts,
    width: 64,
    height: 64,
  },
  {
    id: "6",
    title: "Node",
    icon: node,
    width: 64,
    height: 64,
  },
  {
    id: "7",
    title: "Python",
    icon: python,
    width: 64,
    height: 64,
  },
];


export const pricing = [
  {
    id: "0",
    title: "Starter",
    description: "Simple website, 1-3 pages",
    price: "500",
    features: [
      "Responsive design",
      "Basic SEO optimization",
      "Basic contact form",
    ],
  },
  {
    id: "1",
    title: "Professional",
    description: "Multi-page website with CMS",
    price: "1000",
    features: [
      "Responsive design with animations",
      "SEO optimization",
      "Integration with CMS (e.g., WordPress)",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Full-stack application",
    price: "Contact for pricing",
    features: [
      "Full-stack web application",
      "Database integration",
      "Advanced user authentication",
    ],
  },
];

export const projects = [
  {
    id: "0",
    title: "City Care",
    text: "Integrates all hospitals of a city, availability of doctors/beds and easy queuing of OPDs. Symptom Checker based on Decision tree to suggest Specialities of Doctors/Diseases, ongoing machine learning integrations in Symptom checker",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    projectPath: 'https://city-care.vercel.app/'
  },
  {
    id: "1",
    title: "BU-Space",
    text: "A Blogging App - I started this platform to provide a safe space for individuals to express themselves freely and anonymously. Tech Stack - hosted on Cloudflare Workers, Prisma, Hono, React, PostgreSQL, Tailwind",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    projectPath: 'https://bu-space.netlify.app/'
  },
  {
    id: "2",
    title: "Penny Pay",
    text: "Paytm like application allows seamless money transfer to friends and unknowns, based on JS sessions for safe transacitons",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    projectPath: 'https://city-care.vercel.app/'
  },
  
];

export const socials = [
  {
    id: "0",
    title: "GitHub",
    iconUrl: "path/to/github/icon", 
    url: "https://github.com/your-username",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: "path/to/linkedin/icon",
    url: "https://linkedin.com/in/your-username",
  },
  {
    id: "2",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/your-username",
  },
];
