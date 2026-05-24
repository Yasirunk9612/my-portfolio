const img = (name) => `/img/${name}`;

// Reader pages import the full articles; card views only need compact metadata.
export const blogPosts = [
  {
    id: "1",
    title: "React 18 in Practice: Building Smooth Interfaces That Feel Fast",
    excerpt:
      "A practical guide to React 18 patterns for loading states, responsive interactions, component boundaries, and portfolio-quality frontends.",
    category: "React",
    date: "2026-01-15",
    readTime: "18 min read",
    image: img("blog-react.svg"),
    tags: ["React", "JavaScript", "Suspense", "Performance", "UI"],
    author: "Yasiru Nisal",
  },
  {
    id: "2",
    title: "MERN vs Next.js: Choosing the Right Stack for Real Projects",
    excerpt:
      "A practical comparison of MERN and Next.js for client sites, dashboards, content platforms, SEO, deployments, and long-term maintainability.",
    category: "Web Development",
    date: "2026-01-10",
    readTime: "20 min read",
    image: img("blog-architecture.svg"),
    tags: ["MERN", "Next.js", "Node.js", "Architecture"],
    author: "Yasiru Nisal",
  },
  {
    id: "3",
    title: "CI/CD Basics for Modern Web Apps: From Git Push to Reliable Deploy",
    excerpt:
      "A builder-friendly explanation of automated tests, builds, deployment workflows, environment checks, and safer release habits.",
    category: "Projects",
    date: "2026-01-05",
    readTime: "19 min read",
    image: img("blog-cicd.svg"),
    tags: ["CI/CD", "GitHub Actions", "DevOps", "Deployment"],
    author: "Yasiru Nisal",
  },
  {
    id: "4",
    title: "Clean API Design for Scalable Products",
    excerpt:
      "How to design REST APIs with predictable routes, validation, status codes, error messages, and frontend-friendly responses.",
    category: "Backend",
    date: "2025-12-28",
    readTime: "17 min read",
    image: img("blog-api.svg"),
    tags: ["REST", "Express", "Architecture", "Backend"],
    author: "Yasiru Nisal",
  },
  {
    id: "5",
    title: "Learning AI Integration in Web Apps Without Overcomplicating It",
    excerpt:
      "A practical path for adding AI features to products through clear use cases, safe workflows, useful prompts, and simple automation.",
    category: "AI",
    date: "2025-12-15",
    readTime: "18 min read",
    image: img("blog-ai.svg"),
    tags: ["AI", "Python", "Automation", "Product"],
    author: "Yasiru Nisal",
  },
];
