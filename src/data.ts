export type Project = {
  id: string;
  created: string;
  name: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  engineering: string[];
  stack: string[];
  proof: string;
  github: string;
  live?: string;
  api?: string;
  featured?: boolean;
  tone: "lime" | "blue" | "coral" | "violet" | "amber";
};

export const profile = {
  name: "Guvvala Karthik",
  role: "Full-Stack AI Engineer",
  location: "Kurnool, Andhra Pradesh",
  email: "guvvalakarthik2004@gmail.com",
  phone: "+91 9121492606",
  github: "https://github.com/guvvalakarthik",
  linkedin: "https://www.linkedin.com/in/guvvala-karthik-967627289/",
  leetcode: "https://leetcode.com/u/guvvalakarthik/",
};

export const projects: Project[] = [
  {
    id: "careerpilot",
    created: "Jul 2026",
    name: "CareerPilot AI",
    eyebrow: "Flagship · Multi-tenant AI SaaS",
    summary:
      "A job-search operating system for candidates and coaches, combining pipeline management, documents, analytics, and grounded AI assistance.",
    challenge:
      "Make AI useful inside a real multi-tenant workflow without weakening authorization, data ownership, or operational reliability.",
    engineering: [
      "Tenant-scoped RAG with versioned sources and pgvector retrieval",
      "Role-aware workflows, signed object storage, rate limiting, and readiness checks",
      "Unit, PostgreSQL integration, and Playwright critical-flow testing",
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "tRPC",
      "PostgreSQL + pgvector",
      "Prisma",
      "Gemini API",
      "Auth.js",
      "Cloudflare R2",
    ],
    proof: "Security boundaries, observability, and CI are first-class parts of the product.",
    github: "https://github.com/guvvalakarthik/careerpilot-ai",
    live: "https://careerpilot-ai-henna-six.vercel.app/",
    featured: true,
    tone: "lime",
  },
  {
    id: "trackforge",
    created: "Jul 2026",
    name: "TrackForge",
    eyebrow: "Platform · Learning infrastructure",
    summary:
      "A self-hosted DSA progress system that unifies LeetCode, GeeksforGeeks, and ZeroTrac activity into one searchable roadmap.",
    challenge:
      "Normalize unreliable upstream data while keeping imports durable, progress state accurate, and platform credentials out of the backend.",
    engineering: [
      "Recoverable, deduplicated import jobs and server-side pagination",
      "PostgreSQL migrations, explicit authentication, CORS, and security headers",
      "Prometheus metrics, structured logs, load-smoke checks, and end-to-end CI",
    ],
    stack: [
      "React + TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy + Alembic",
      "Manifest V3",
      "Prometheus",
      "Docker",
    ],
    proof: "Deployed with a Vercel frontend/API and durable Neon PostgreSQL.",
    github: "https://github.com/guvvalakarthik/dsa-track-list",
    live: "https://trackforge-dsa-tracker.vercel.app",
    api: "https://trackforge-api.vercel.app/docs",
    featured: true,
    tone: "blue",
  },
  {
    id: "tomatoguard",
    created: "Feb 2026",
    name: "TomatoGuard",
    eyebrow: "ML system · Responsible inference",
    summary:
      "An uncertainty-aware tomato leaf screening system that can reject unusable or low-confidence inputs instead of forcing a diagnosis.",
    challenge:
      "Turn a classroom classifier into a reproducible ML system while being explicit about the limits of clean-dataset performance.",
    engineering: [
      "Deterministic data manifests, grouped splits, calibration, and OOD gates",
      "Validated uploads, versioned model artifacts, ONNX CPU inference, and CAM support",
      "Release checks for metrics, model parity, containers, and API contracts",
    ],
    stack: [
      "TensorFlow",
      "ONNX Runtime",
      "FastAPI",
      "React + Vite",
      "PostgreSQL",
      "Docker",
      "Pytest",
    ],
    proof: "Engineering rebuild is live; genuine field validation and a promoted 1.0 model remain open evidence gates.",
    github: "https://github.com/guvvalakarthik/tomato_disease_prediction_",
    live: "https://tomatoguard-lake.vercel.app",
    api: "https://tomatoguard-api.vercel.app/docs",
    tone: "coral",
  },
  {
    id: "sourcelens",
    created: "Dec 2025",
    name: "SourceLens",
    eyebrow: "NLP · Evidence-first similarity",
    summary:
      "A pairwise text-similarity service that reports inspectable matching passages and review signals without claiming to determine misconduct.",
    challenge:
      "Correct a train–serve mismatch and replace a misleading probability claim with transparent, reproducible evidence.",
    engineering: [
      "Symmetric word and character similarity over both documents",
      "Sentence-level evidence with exact source and candidate offsets",
      "Group-aware evaluation, typed API/CLI boundaries, tests, and containerization",
    ],
    stack: [
      "Python 3.11",
      "FastAPI",
      "Pydantic",
      "Sentence Transformers",
      "PostgreSQL + pgvector",
      "CLI",
      "Pytest",
      "Docker",
    ],
    proof: "The product communicates model limits directly in its API contract and interface.",
    github: "https://github.com/guvvalakarthik/plagarism_detection",
    live: "https://plagarismdetection.vercel.app/",
    tone: "violet",
  },
  {
    id: "vidhyavedha",
    created: "Oct 2025",
    name: "Vidhya Vedha",
    eyebrow: "Full stack · Civic services",
    summary:
      "A rural-services platform that turns broad service categories into task-specific journeys for healthcare, government guidance, bookings, and tracking.",
    challenge:
      "Design accessible, trustworthy workflows for users navigating fragmented local and government services.",
    engineering: [
      "Doctor availability, conflict-safe appointment booking, rescheduling, and cancellation",
      "Minimum-data assisted guidance with official-portal handoffs",
      "Opaque cookie sessions, CSRF protection, role authorization, and ownership checks",
    ],
    stack: [
      "React 19 + Vite",
      "Express 5",
      "MongoDB + Mongoose",
      "Zod",
      "Google OAuth",
      "OpenAI API",
      "Vitest",
    ],
    proof: "The rebuild prioritizes task completion, authorization, and clear service boundaries.",
    github: "https://github.com/guvvalakarthik/vidhyavedhaproject",
    live: "https://vidhyavedhaproject.vercel.app/",
    tone: "amber",
  },
];

export const skillGroups = [
  {
    title: "AI & LLM systems",
    items: [
      "Generative AI",
      "Machine Learning",
      "TensorFlow",
      "ONNX Runtime",
      "RAG + embeddings",
      "Model evaluation",
    ],
  },
  {
    title: "Frontend & product",
    items: ["TypeScript", "React", "Next.js", "Vite", "Tailwind CSS", "TanStack Query"],
  },
  {
    title: "Backend & data",
    items: [
      "FastAPI",
      "Node.js + Express",
      "tRPC",
      "PostgreSQL + pgvector",
      "MongoDB + Mongoose",
      "Prisma + Alembic",
    ],
  },
  {
    title: "Cloud & reliability",
    items: [
      "Docker",
      "GitHub Actions",
      "Vitest + Pytest",
      "Playwright",
      "Prometheus + Sentry",
      "Vercel + R2",
    ],
  },
];
