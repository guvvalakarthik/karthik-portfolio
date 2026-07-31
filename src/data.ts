export type Project = {
  id: string;
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
    stack: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Gemini", "Cloudflare R2"],
    proof: "Security boundaries, observability, and CI are first-class parts of the product.",
    github: "https://github.com/guvvalakarthik/careerpilot-ai",
    featured: true,
    tone: "lime",
  },
  {
    id: "trackforge",
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
    stack: ["React", "FastAPI", "PostgreSQL", "MV3 Extension", "Docker", "Prometheus"],
    proof: "Deployed with a Vercel frontend/API and durable Neon PostgreSQL.",
    github: "https://github.com/guvvalakarthik/dsa-track-list",
    live: "https://trackforge-dsa-tracker.vercel.app",
    api: "https://trackforge-api.vercel.app/docs",
    featured: true,
    tone: "blue",
  },
  {
    id: "tomatoguard",
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
    stack: ["TensorFlow", "ONNX", "FastAPI", "React", "Docker", "Pytest"],
    proof: "Engineering rebuild is live; genuine field validation and a promoted 1.0 model remain open evidence gates.",
    github: "https://github.com/guvvalakarthik/tomato_disease_prediction_",
    live: "https://tomatoguard-lake.vercel.app",
    api: "https://tomatoguard-api.vercel.app/docs",
    tone: "coral",
  },
  {
    id: "sourcelens",
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
    stack: ["Python", "NLP", "Scikit-learn", "FastAPI", "CLI", "Docker"],
    proof: "The product communicates model limits directly in its API contract and interface.",
    github: "https://github.com/guvvalakarthik/plagarism_detection",
    tone: "violet",
  },
  {
    id: "vidhyavedha",
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
    stack: ["React", "Node.js", "Express", "MongoDB", "Vitest", "REST APIs"],
    proof: "The rebuild prioritizes task completion, authorization, and clear service boundaries.",
    github: "https://github.com/guvvalakarthik/vidhyavedhaproject",
    tone: "amber",
  },
];

export const skillGroups = [
  {
    title: "AI systems",
    items: ["Gemini", "Vertex AI", "TensorFlow", "ONNX", "RAG", "Model evaluation"],
  },
  {
    title: "Product engineering",
    items: ["TypeScript", "React", "Next.js", "FastAPI", "Node.js", "Express"],
  },
  {
    title: "Data & platform",
    items: ["PostgreSQL", "pgvector", "MongoDB", "Redis", "S3 / R2", "Prisma"],
  },
  {
    title: "Quality & operations",
    items: ["Docker", "GitHub Actions", "Vitest", "Playwright", "Pytest", "Observability"],
  },
];
