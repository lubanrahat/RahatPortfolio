export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  status: "operational" | "building" | "archived";
  liveUrl?: string;
  githubClientUrl?: string;
  githubServerUrl?: string;
  hasVideo?: boolean;
  features: ProjectFeature[];
  architecture: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "codearena",
    title: "CodeArena",
    tagline: "Master Algorithms. Ace Interviews. Ship Better Code.",
    description:
      "A full-featured, LeetCode-inspired competitive coding platform where developers solve algorithmic challenges, track their progress, and level up with AI-powered learning — built with Next.js 16, React 19, and TypeScript.",
    image: "/project1.png",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Express 5",
      "Prisma 7",
      "PostgreSQL",
      "Stripe",
      "Shadcn UI",
      "Framer Motion",
      "TanStack Query",
      "Monaco Editor",
      "Google Gemini AI",
      "Judge0 API",
      "Passport.js",
      "Bun",
      "Zod",
      "Winston",
      "Recharts",
      "Radix UI",
    ],
    status: "operational",
    liveUrl: "https://code-arena-client.vercel.app",
    githubClientUrl: "https://github.com/lubanrahat/code-arena-client",
    githubServerUrl: "https://github.com/lubanrahat/code-arena-server",
    hasVideo: true,
    features: [
      {
        icon: "💻",
        title: "Monaco Code Editor",
        description:
          "Full-featured VS Code-grade editor with syntax highlighting, IntelliSense, multi-language support, and persistent theme/font settings.",
      },
      {
        icon: "🧠",
        title: "AI-Powered Discussions",
        description:
          "Conversational AI powered by Google Gemini for code reviews, explanations, and optimization suggestions scoped to individual problems.",
      },
      {
        icon: "📝",
        title: "Problem Workspace",
        description:
          "Split-pane interface with problem description, code editor, and output panel with real-time submission feedback and confetti celebrations.",
      },
      {
        icon: "📊",
        title: "Performance Dashboard",
        description:
          "Visual progress tracking with Recharts — activity heatmaps, skill radar charts, and submission history for personalized analytics.",
      },
      {
        icon: "🛤️",
        title: "Learning Roadmaps",
        description:
          "Structured, topic-based learning paths guiding developers from fundamentals to advanced algorithms and data structures.",
      },
      {
        icon: "📋",
        title: "Curated Problem Sheets",
        description:
          "Pre-built problem sheets organized by topic and difficulty for focused, structured practice sessions.",
      },
      {
        icon: "🏆",
        title: "Global Leaderboard",
        description:
          "Real-time leaderboard tracking solve counts and performance across the entire community with score-based rankings.",
      },
      {
        icon: "🎓",
        title: "Premium Courses",
        description:
          "Structured courses with gated access via Stripe-integrated subscription billing with monthly and yearly plans.",
      },
      {
        icon: "🛡️",
        title: "Admin Management Suite",
        description:
          "Full admin dashboard for managing problems, users, community contributions, and premium subscriptions with role-based access.",
      },
      {
        icon: "🤝",
        title: "Community Contributions",
        description:
          "Submit and manage community-contributed problems with an admin review and acceptance workflow.",
      },
      {
        icon: "🔐",
        title: "Multi-Provider Auth",
        description:
          "Local JWT authentication plus GitHub and Google OAuth via Passport.js with secure cookie-based session handling.",
      },
      {
        icon: "⚡",
        title: "Real-Time Code Execution",
        description:
          "Multi-language code execution via Judge0 API with per-test-case validation and structured result feedback.",
      },
    ],
    architecture: `
┌──────────────────────────────────────────────────────────┐
│                     Next.js App Router                    │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────┐  │
│  │  Layouts    │  │   Pages    │  │  Server Actions    │  │
│  └─────┬──────┘  └─────┬──────┘  └────────┬───────────┘  │
│        │               │                   │              │
│  ┌─────▼───────────────▼───────────────────▼───────────┐  │
│  │              Context Providers                       │  │
│  │   ThemeProvider → AuthProvider → QueryProvider       │  │
│  └─────────────────────┬───────────────────────────────┘  │
│                        │                                  │
│  ┌─────────────────────▼───────────────────────────────┐  │
│  │              Component Modules                       │  │
│  │  Landing · Problem · Admin · Profile · Courses ···  │  │
│  └─────────────────────┬───────────────────────────────┘  │
│                        │                                  │
│  ┌──────────┐  ┌───────▼──────┐  ┌──────────────────┐    │
│  │  Hooks   │  │  Services    │  │  Validation (Zod)│    │
│  └──────────┘  └───────┬──────┘  └──────────────────┘    │
│                        │                                  │
│                  ┌─────▼──────┐                           │
│                  │ Axios HTTP │ ──▶  Backend API Server   │
│                  └────────────┘                           │
└──────────────────────────────────────────────────────────┘`,
    highlights: [
      "15-model PostgreSQL database schema on Neon serverless",
      "13 domain-driven backend modules with consistent architecture",
      "64+ reusable Shadcn/Radix UI component primitives",
      "Modular RESTful API with Zod-validated inputs",
      "Stripe checkout sessions, webhooks, and premium content gating",
      "Domain-driven modular architecture with route → controller → service → ORM patterns",
      "Structured logging with Winston and request-ID tracing",
      "Deployed as Vercel serverless functions with optimized cold-start",
    ],
  },
  {
    id: "2",
    slug: "skillbridge",
    title: "SkillBridge",
    tagline: "Connecting Passionate Learners with Expert Tutors.",
    description:
      "A modern, high-performance tutoring marketplace that connects students with verified experts for personalized learning. Features real-time search, interactive booking, and a comprehensive review system — built with Bun, Express.js, and Next.js.",
    image: "/skillbridge.png",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Bun",
      "Express.js",
      "Prisma 7",
      "PostgreSQL",
      "Radix UI",
      "Shadcn UI",
      "Lucide React",
      "React Hook Form",
      "Zod",
      "JWT",
      "Bcrypt",
    ],
    status: "operational",
    liveUrl: "https://skill-bridge-client-ten.vercel.app",
    githubClientUrl: "https://github.com/lubanrahat/SkillBridge",
    githubServerUrl: "https://github.com/lubanrahat/SkillBridge",
    hasVideo: false,
    features: [
      {
        icon: "🔍",
        title: "Advanced Tutor Discovery",
        description:
          "Effortlessly search and filter through hundreds of qualified tutors across 50+ subjects with real-time results.",
      },
      {
        icon: "📅",
        title: "Seamless Booking System",
        description:
          "Interactive scheduling interface with built-in conflict detection and instant session confirmations.",
      },
      {
        icon: "🔐",
        title: "Secure Authentication",
        description:
          "Robust user and tutor authentication using JWT and Bcrypt with role-based access control.",
      },
      {
        icon: "⭐",
        title: "Reviews & Ratings",
        description:
          "Transparent feedback system allowing students to rate and review tutors to ensure quality learning.",
      },
      {
        icon: "💼",
        title: "Admin Panel",
        description:
          "Comprehensive dashboard for platform administrators to manage users, bookings, and monitor activity.",
      },
      {
        icon: "📱",
        title: "Modern UI/UX",
        description:
          "Clean, responsive, and accessible interface built with Tailwind CSS v4 and Radix UI primitives.",
      },
    ],
    architecture: `
┌──────────────────────────────────────────────────────────┐
│                     Next.js Client (App Router)          │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────┐  │
│  │ Components  │  │   Hooks    │  │   API Utilities    │  │
│  └─────┬──────┘  └─────┬──────┘  └────────┬───────────┘  │
│        │               │                   │              │
│  ┌─────▼───────────────▼───────────────────▼───────────┐  │
│  │              State & Auth Management                 │  │
│  │     React Hook Form + Zod + JWT Handling             │  │
│  └─────────────────────┬───────────────────────────────┘  │
│                        │                                  │
│  ┌─────────────────────▼───────────────────────────────┐  │
│  │              Bun / Express Backend Server            │  │
│  │  Auth · Tutor Discovery · Booking · Reviews ···      │  │
│  └─────────────────────┬───────────────────────────────┘  │
│                        │                                  │
│  ┌──────────┐  ┌───────▼──────┐  ┌──────────────────┐    │
│  │ Middleware│  │  Controllers │  │   Prisma ORM     │    │
│  └──────────┘  └───────┬──────┘  └────────┬─────────┘    │
│                        │                   │              │
│                  ┌─────▼──────┐      ┌─────▼──────┐       │
│                  │ Express API│      │ PostgreSQL │       │
│                  └────────────┘      └────────────┘       │
└──────────────────────────────────────────────────────────┘`,
    highlights: [
      "Modular backend architecture powered by Bun and Express.js",
      "Type-safe database interactions with Prisma 7 and PostgreSQL",
      "Real-time booking conflict detection and schedule management",
      "Premium UI component library using Tailwind CSS 4 and Radix UI",
      "Secure role-based access control for Students, Tutors, and Admins",
      "Validated form handling with React Hook Form and Zod",
    ],
  },
];
