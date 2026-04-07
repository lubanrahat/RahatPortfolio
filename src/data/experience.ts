export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  locationType: string;
  status?: string;
  technologies: string[];
  description: string[];
  website?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechVista Labs",
    role: "Founding Frontend Engineer",
    startDate: "August 2025",
    endDate: "Present",
    location: "United States",
    locationType: "Remote",
    status: "Working",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Figma",
      "Vercel",
      "AWS",
      "Postman",
      "Bun",
    ],
    description: [
      "Architected and developed the complete frontend infrastructure for the platform, a comprehensive solution for creating and managing promotional campaigns.",
      "Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.",
      "Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.",
      "Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.",
    ],
    website: "https://techvistalabs.com",
  },
  {
    id: "2",
    company: "Upsurge Labs",
    role: "Backend Developer Intern",
    startDate: "June 2025",
    endDate: "July 2025",
    location: "Bangalore, India",
    locationType: "On-Site",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Docker",
      "Redis",
    ],
    description: [
      "Developed RESTful APIs for the platform's core features, handling user authentication, data management, and third-party integrations.",
      "Implemented caching strategies using Redis, reducing API response times by 40%.",
    ],
    website: "https://upsurgelabs.com",
  },
  {
    id: "3",
    company: "Prepeasy",
    role: "Founding Engineer",
    startDate: "April 2025",
    endDate: "June 2025",
    location: "Remote",
    locationType: "Remote",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    description: [
      "Built the entire frontend and backend architecture from scratch for an interview preparation platform.",
      "Implemented real-time collaboration features and automated code evaluation systems.",
    ],
    website: "https://prepeasy.com",
  },
  {
    id: "4",
    company: "Expelee",
    role: "SDE-1 (Full Stack) Intern",
    startDate: "Aug 2023",
    endDate: "April 2025",
    location: "Dubai, UAE",
    locationType: "Remote",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "AWS",
      "GraphQL",
    ],
    description: [
      "Developed and maintained full-stack features for the company's main product, serving thousands of users globally.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines.",
    ],
    website: "https://expelee.com",
  },
];
