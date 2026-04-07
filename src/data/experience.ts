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
    company: "CodeArena",
    role: "Full Stack Developer",
    startDate: "2024",
    endDate: "Present",
    location: "Global",
    locationType: "Remote",
    status: "Working",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Express 5",
      "Prisma 7",
      "PostgreSQL",
      "Stripe",
    ],
    description: [
      "Architected and shipped a full-stack, LeetCode-inspired competitive coding platform end-to-end — from database design to deployment on Vercel — serving a live user base.",
      "Built a modular RESTful API with Express 5 and Prisma ORM across 13 domain modules (auth, problems, submissions, payments, leaderboard, AI discussions) with Zod-validated inputs and JWT + OAuth authentication.",
      "Implemented real-time code execution via Judge0 API integration, supporting multi-language compilation with per-test-case validation and structured result feedback.",
      "Integrated Stripe for subscription billing with checkout sessions, webhook handling, and premium content gating across courses and problem sets.",
      "Designed and normalized a 15-model PostgreSQL schema on Neon serverless, covering users, problems, submissions, playlists, solutions with voting/comments, and AI discussion threads.",
    ],
    website: "https://code-arena-client.vercel.app",
  },
  {
    id: "2",
    company: "CodeArena",
    role: "Frontend Engineer",
    startDate: "2024",
    endDate: "Present",
    location: "Global",
    locationType: "Remote",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Shadcn UI",
      "Framer Motion",
      "TanStack Query",
      "Monaco Editor",
    ],
    description: [
      "Developed a premium, dark-mode-first UI with 64+ reusable Shadcn/Radix components, Framer Motion animations, and fully responsive layouts across all breakpoints.",
      "Built the problem-solving workspace featuring a Monaco-powered code editor with split-pane resizable panels, real-time submission feedback, and canvas confetti celebrations.",
      "Engineered an AI-powered discussion interface using Google Gemini SDK, enabling conversational code reviews, explanations, and optimization suggestions scoped to individual problems.",
      "Implemented interactive dashboards with Recharts — including activity heatmaps, skill radar charts, and submission history — for personalized performance analytics.",
      "Built an admin management suite with CRUD operations for problems, users, community contributions, and premium subscription management.",
    ],
    website: "https://code-arena-client.vercel.app",
  },
  {
    id: "3",
    company: "CodeArena",
    role: "Backend Engineer",
    startDate: "2024",
    endDate: "2025",
    location: "Global",
    locationType: "Remote",
    technologies: [
      "Express 5",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "Passport.js",
      "Stripe",
      "Judge0 API",
      "Bun",
    ],
    description: [
      "Designed a domain-driven modular backend architecture with consistent route → controller → service → ORM patterns, structured logging with Winston, and request-ID tracing.",
      "Implemented multi-provider authentication (local JWT, GitHub OAuth, Google OAuth) using Passport.js with secure cookie-based session handling and role-based access control.",
      "Built the community solutions module supporting user-submitted code, threaded comments, and like/dislike voting — with proper authorization and pagination.",
      "Engineered the leaderboard system with score-based global rankings, and a community contribution portal with admin review and acceptance workflows.",
      "Deployed the server as a Vercel serverless function with custom Prisma adapter configuration, environment validation via Zod, and optimized cold-start performance.",
    ],
    website: "https://code-arena-server.vercel.app",
  },
];
