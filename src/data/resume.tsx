import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Aman Tiwari",
  initials: "AT",
  url: "https://github.com/amantiwari57",
  location: "Ghaziabad, UP",
  locationLink: "https://www.google.com/maps/place/ghaziabad",
  description:
    "Agentic AI Developer skilled in building multi-architecture agents, retrieval-augmented pipelines, and autonomous orchestration systems.",
  summary:
    "Agentic AI Developer skilled in building multi-architecture agents, retrieval-augmented pipelines, and autonomous orchestration systems. Experienced with context management, reasoning agents, and scalable backend platforms. Strong problem solver with expertise in integrating LLMs, tool-use, and memory-driven workflows into production-ready applications.",
  avatarUrl: "/me.png",
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "GraphQL",
    "REST APIs",
    "Socket.io",
    "MongoDB",
    "MySQL",
    "Redis",
    "Prisma ORM",
    "Drizzle ORM",
    "LangChain",
    "LangGraph",
    "LlamaIndex",
    "RAG",
    "Cloudflare Workers",
    "AWS",
    "Docker",
    "GitHub Actions",
    "CI/CD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/Anon_Resume%20(3).pdf", icon: FileText, label: "Resume" },
  ],
  contact: {
    email: "amandevs618@gmail.com",
    tel: "+919953831259",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amantiwari57",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amantiwari57",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/amantiwari57",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amandevs618@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Easemyexpo",
      href: "https://easemyexpo.com",
      badges: [],
      location: "Bangalore",
      title: "Agentic AI / Full Stack Developer",
      logoUrl: "/easemyexpo.png",
      start: "Mar 2025",
      end: "July 2025",
      description:
        "Built an AI-powered lead generation platform with autonomous enrichment agents using LLMs, context-aware pipelines, and multi-step planning. Orchestrated distributed agents on Node.js + Redis, enabling adaptive decision-making and reducing manual tasks by 50%. Deployed edge agents via Cloudflare Workers for real-time responses, improving latency by 25%.",
    },
    {
      company: "Golden Rich Finance Pvt. Ltd.",
      badges: [],
      href: "https://goldenrichfinance.com",
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/goldenrich.png",
      start: "Oct 2024",
      end: "Jan 2025",
      description:
        "Developed 25+ responsive pages with Next.js 13 and TypeScript, increasing mobile engagement by 22%. Resolved 30+ frontend bugs and improved error handling to reduce bug reports by 45%. Improved load speed by 35% via optimized data fetching with React Query. Built advanced filtering & pagination features, improving session time by 18%. Contributed to cross-platform UI system and standardized 15+ reusable components.",
    },
    {
      company: "Talecto Pvt. Ltd.",
      href: "https://talecto.com",
      badges: [],
      location: "Remote",
      title: "Backend Developer Intern",
      logoUrl: "/talecto.png",
      start: "Apr 2024",
      end: "May 2024",
      description:
        "Built REST APIs with Redis caching and MongoDB indexing, achieving sub-200ms response times. Designed robust error-handling & guardrails—later repurposed in autonomous pipelines for safety and reliability.",
    },
  ],
  education: [
    {
      school: "Indraprastha Engineering College",
      href: "https://ipec.org.in",
      degree: "B.Tech in Information Technology",
      logoUrl: "/ipec.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Breadcrumb-MCP – Context Management Server",
      href: "https://github.com/amantiwari57/breadcrumb-mcp",
      dates: "2025",
      active: true,
      description:
        "Developed an MCP (Model Context Protocol) server for managing conversation breadcrumbs with semantic search powered by LlamaIndex. Implemented local JSON-based persistence to reliably store and retrieve context across sessions. Engineered multi-modal retrieval, including recent, semantic, and global search over session histories. Added user preference management and analytics for personalized context handling and usage insights.",
      technologies: [
        "LlamaIndex",
        "Model Context Protocol",
        "TypeScript",
        "Semantic Search",
        "JSON",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/amantiwari57/breadcrumb-mcp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Convex-121Chats – Multi-Agent Orchestration",
      href: "https://github.com/amantiwari57/convex-121chats",
      dates: "2025",
      active: true,
      description:
        "Designed a real-time chat platform where multiple AI agents collaborate with users for dynamic problem solving. Integrated Convex backend, React, and Socket.io to enable low-latency multi-agent communication. Implemented agent orchestration logic to ensure context sharing, turn-taking, and consensus-driven responses. Enhanced scalability by optimizing message streams and session state management for concurrent users.",
      technologies: [
        "Convex",
        "React",
        "Socket.io",
        "TypeScript",
        "Multi-Agent Systems",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/amantiwari57/convex-121chats",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "E-Commerce AI Recommendations",
      href: "https://github.com/amantiwari57/ecommerce-ai-recommendations",
      dates: "2025",
      active: true,
      description:
        "Built an intelligent recommendation engine using embeddings + similarity search for personalized product ranking. Implemented retrieval-augmented pipelines to dynamically recommend products based on historical and behavioral data. Improved recommendation accuracy by integrating semantic similarity and hybrid scoring techniques. Deployed as a modular service that can integrate with existing e-commerce backends via API.",
      technologies: [
        "RAG",
        "Embeddings",
        "Similarity Search",
        "Python",
        "REST API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/amantiwari57/ecommerce-ai-recommendations",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Cryptonium – Agent Utility Library",
      href: "https://www.npmjs.com/package/cryptonium",
      dates: "2025",
      active: true,
      description:
        "Published a secure TypeScript hashing utility (100+ weekly downloads) for agent data integrity and pipeline verification. Implemented SHA-256, HMAC, and salting mechanisms to prevent tampering and ensure cryptographic security. Designed the package with developer-first ergonomics: lightweight, tree-shakable, and framework-agnostic. Released as an open-source NPM library with CI/CD pipelines for automated testing and versioned publishing.",
      technologies: [
        "TypeScript",
        "SHA-256",
        "HMAC",
        "NPM",
        "CI/CD",
      ],
      links: [
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/cryptonium",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amantiwari57/cryptonium",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
  activities: [
    {
      title: "Content Creation",
      description: "Creating technical content, tutorials, and educational material about AI, agentic systems, and modern web development.",
    },
    {
      title: "Technical Blogging",
      description: "Writing in-depth articles about AI development, multi-agent systems, and software engineering best practices.",
    },
    {
      title: "Reading Fiction",
      description: "Exploring science fiction and fantasy novels to fuel creativity and gain new perspectives on technology and humanity.",
    },
    {
      title: "Learning Languages",
      description: "Continuously expanding linguistic knowledge to enhance communication and understand diverse perspectives.",
    },
    {
      title: "Building AGI",
      description: "Working towards the goal of contributing to Artificial General Intelligence development through research, experimentation, and building autonomous AI systems.",
    },
  ],
} as const;
