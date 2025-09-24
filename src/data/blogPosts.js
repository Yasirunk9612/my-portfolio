// Centralized blog posts data used by BlogPage and BlogPost

const img = (name) => `${process.env.PUBLIC_URL}/img/${name}`;

export const blogPosts = [
  {
    id: "1",
    title: "React 18 in Practice: Concurrent UI, Suspense, and Real-World Patterns",
    seoTitle: "React 18: Concurrent UI and Suspense (Practical Guide)",
    excerpt:
      "A practical tour of React 18 features—what to adopt today, why it matters, and how to ship smoother UIs.",
    category: "React",
    date: "2024-01-15",
    readTime: "8 min read",
    image: img("project-img1.png"),
    tags: ["React", "JavaScript", "Suspense", "Performance"],
    keywords: ["React 18", "Concurrent UI", "Suspense", "startTransition", "Automatic batching"],
    featured: true,
    author: "Yasiru Nisal Kulasinghe",
    seoDescription: "Learn how to use React 18's concurrent UI, Suspense, and automatic batching to build responsive applications.",
    tldr: [
      "Use startTransition for non-urgent updates",
      "Lean on Suspense for async UI boundaries",
      "Automatic batching reduces re-renders by default"
    ],
    content: `
      <h2>🚀 Why React 18 matters</h2>
      <p>React 18 introduces concurrent rendering and better <strong>Suspense</strong> support, unlocking smoother UI without a rewrite.</p>
      <h2>🎯 startTransition for responsive inputs</h2>
      <pre><code>import { startTransition, useState } from 'react';

function Search({ performSearch }) {
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (value) => {
    setQ(value);
    startTransition(() => setResults(performSearch(value)));
  };
}
      </code></pre>
      <h2>⚡ Automatic batching everywhere</h2>
      <p>Updates inside timeouts, promises, and native events are batched by default—fewer renders, better FPS.</p>
    `,
  },
  {
    id: "2",
    title: "MERN vs Next.js 14: Picking the Right Stack in 2025",
    seoTitle: "MERN vs Next.js 14: Which stack to choose in 2025?",
    excerpt:
      "SSR, SSG, or CSR? We compare developer experience, performance, and scalability with pragmatic guidance.",
    category: "Full-Stack",
    date: "2024-01-10",
    readTime: "10 min read",
    image: img("project-img2.png"),
    tags: ["MERN", "Next.js", "Node.js", "React"],
    keywords: ["MERN vs Next.js", "SSR", "SSG", "CSR", "App Router"],
    featured: true,
    author: "Yasiru Nisal Kulasinghe",
    seoDescription: "Compare MERN and Next.js 14 with a practical lens on DX, performance, routing, and deployment in 2025.",
    tldr: [
      "Next.js accelerates DX with built-ins",
      "MERN offers maximum flexibility",
      "Pick based on SEO, edge, and team skillset"
    ],
    content: `
      <h2>🏗️ Trade-offs that matter</h2>
      <p><strong>MERN</strong> maximizes control and service isolation; <strong>Next.js</strong> offers batteries-included DX with routing, data fetching, and image optimization.</p>
      <table>
        <thead><tr><th>Area</th><th>MERN</th><th>Next.js</th></tr></thead>
        <tbody>
          <tr><td>SEO</td><td>Custom SSR</td><td>Built-in</td></tr>
          <tr><td>Edge</td><td>Custom</td><td>Native</td></tr>
          <tr><td>Routing</td><td>React Router</td><td>App Router</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "3",
    title: "DevOps Essentials: CI/CD That Scales from Side Projects to Production",
    seoTitle: "DevOps CI/CD for React Apps: A reusable template",
    excerpt:
      "A minimal but effective CI/CD template you can reuse across React apps—tests, builds, and safe deploys.",
    category: "DevOps",
    date: "2023-12-20",
    readTime: "12 min read",
    image: img("project-img3.png"),
    tags: ["CI/CD", "GitHub Actions", "Testing", "Deploy"],
    keywords: ["GitHub Actions", "CI pipeline", "CD", "React build", "Testing"],
    featured: false,
    author: "Yasiru Nisal Kulasinghe",
    seoDescription: "Set up a lightweight GitHub Actions CI/CD pipeline for React that runs tests, builds, and deploys safely.",
    tldr: [
      "Keep pipeline simple and fast",
      "Fail early with tests",
      "Cache dependencies and artifacts wisely"
    ],
    content: `
      <h2>🚦 Keep the pipeline simple</h2>
      <pre><code>jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 18 }
      - run: npm ci && npm test -- --watchAll=false && npm run build
      </code></pre>
      <p>Gate deployments with tests and keep artifacts reproducible.</p>
    `,
  },
  {
    id: "4",
    title: "CSS Grid vs Flexbox: A Mental Model That Finally Sticks",
    seoTitle: "CSS Grid vs Flexbox: When to use which (with patterns)",
    excerpt:
      "Grid for two-dimensional layouts, Flexbox for one-dimensional flow—plus patterns you can copy-paste.",
    category: "CSS",
    date: "2023-12-28",
    readTime: "7 min read",
    image: img("color-sharp2.png"),
    tags: ["CSS", "Grid", "Flexbox", "Responsive"],
    keywords: ["CSS Grid", "Flexbox", "Responsive layout", "Patterns"],
    featured: false,
    author: "Yasiru Nisal Kulasinghe",
    seoDescription: "Understand when to reach for CSS Grid vs Flexbox and grab practical layout snippets.",
    tldr: [
      "Use Grid for 2D layouts",
      "Use Flexbox for 1D alignment",
      "Compose both for best results"
    ],
    content: `
      <h2>📐 When to choose what</h2>
      <pre><code>.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.flex { display: flex; gap: 1rem; align-items: center; }
      </code></pre>
      <p>Mix them liberally: Grid for page sections, Flexbox for alignment inside each section.</p>
    `,
  },
  {
    id: "5",
    title: "TypeScript for React: 10 Patterns That Pay Off",
    seoTitle: "TypeScript + React: 10 patterns that scale",
    excerpt:
      "From discriminated unions to utility types—how to keep your components safe, readable, and scalable.",
    category: "TypeScript",
    date: "2023-12-15",
    readTime: "11 min read",
    image: img("yk.png"),
    tags: ["TypeScript", "React", "Patterns"],
    keywords: ["TypeScript patterns", "React types", "Generics", "Discriminated unions"],
    featured: false,
    author: "Yasiru Nisal Kulasinghe",
    seoDescription: "Ten proven TypeScript patterns for React apps to improve safety and readability without slowing you down.",
    tldr: [
      "Prefer readonly props",
      "Use discriminated unions for states",
      "Keep domain types separate from DTOs"
    ],
    content: `
      <h2>✅ Types that guide design</h2>
      <ul>
        <li>Prefer <strong>readonly</strong> props</li>
        <li>Use <strong>Discriminated Unions</strong> for component states</li>
        <li>Promote <strong>Domain Types</strong> to first-class citizens</li>
      </ul>
    `,
  },
];

export default blogPosts;
