// Centralized blog posts data used by BlogPage and BlogPost

export const blogPosts = [
  {
    id: "1",
    title: "Building Modern Web Applications with React 18",
    excerpt:
      "Exploring React 18 features: concurrent rendering, automatic batching, and Suspense improvements for better UX.",
    category: "React",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/api/placeholder/800/400",
    tags: ["React", "JavaScript", "Frontend", "Performance"],
    featured: true,
    author: "Yasiru Nisal Kulasinghe",
    content: `
      <h2>🚀 Introduction to React 18</h2>
      <p>React 18 introduces concurrent rendering, automatic batching, and improved Suspense to build smoother, more responsive apps.</p>
      <h2>🎯 Concurrent Rendering: A Game Changer</h2>
      <pre><code>// Example of concurrent rendering with startTransition
import { startTransition, useState } from 'react';

function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value);
    startTransition(() => {
      setResults(performSearch(value));
    });
  };
}
      </code></pre>
      <h2>⚡ Automatic Batching</h2>
      <p>All updates (including promises and timeouts) are batched to reduce renders and improve performance.</p>
      <h2>📊 Performance Benefits</h2>
      <ul>
        <li>Reduced bundle and better tree-shaking</li>
        <li>Optimized reconciliation</li>
        <li>Smoother interactions via concurrency</li>
      </ul>
    `,
  },
  {
    id: "2",
    title: "The Future of Full-Stack Development: MERN vs Next.js",
    excerpt:
      "A practical comparison: traditional MERN vs modern Next.js—performance, scalability, and DX.",
    category: "Full-Stack",
    date: "2024-01-10",
    readTime: "12 min read",
    image: "/api/placeholder/800/400",
    tags: ["MERN", "Next.js", "Full-Stack", "JavaScript"],
    featured: false,
    author: "Yasiru Nisal Kulasinghe",
    content: `
      <h2>🏗️ MERN vs Next.js</h2>
      <p>Next.js brings SSR/SSG, image optimization, and API routes; MERN gives total control with separate services.</p>
      <pre><code>// Next.js API Route Example
// pages/api/users.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ users: [] });
  }
}
      </code></pre>
      <table>
        <thead><tr><th>Metric</th><th>MERN</th><th>Next.js</th></tr></thead>
        <tbody>
          <tr><td>Initial Load</td><td>CSR</td><td>SSR/SSG</td></tr>
          <tr><td>SEO</td><td>Custom</td><td>Built-in</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    id: "3",
    title: "Mastering AWS Cloud Architecture for Modern Applications",
    excerpt:
      "Deep dive into AWS services and architecture patterns to build scalable, resilient systems.",
    category: "Cloud",
    date: "2024-01-05",
    readTime: "15 min read",
    image: "/api/placeholder/800/400",
    tags: ["AWS", "Cloud", "Architecture", "DevOps"],
    featured: false,
    author: "Yasiru Nisal Kulasinghe",
    content: `
      <h2>☁️ AWS Cloud Architecture</h2>
      <p>Key services: EC2, Lambda, EKS, S3, RDS, DynamoDB, and more. Pick patterns based on workload.</p>
      <pre><code>CloudFront → S3 (Static)
API Gateway → Lambda → DynamoDB
      </code></pre>
      <blockquote><p>Choose services intentionally—design for failure and observability.</p></blockquote>
    `,
  },
  {
    id: "4",
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "Understand the strengths of CSS Grid and Flexbox with practical layout guidelines.",
    category: "CSS",
    date: "2023-12-28",
    readTime: "6 min read",
    image: "/api/placeholder/800/400",
    tags: ["CSS", "Layout", "Responsive"],
    featured: false,
    author: "Yasiru Nisal Kulasinghe",
    content: `
      <h2>📐 Grid vs Flexbox</h2>
      <p>Use Grid for two-dimensional layouts; Flexbox for one-dimensional alignment and distribution.</p>
      <pre><code>.grid { display: grid; grid-template-columns: repeat(3, 1fr); }
.flex { display: flex; gap: 1rem; }
      </code></pre>
    `,
  },
  {
    id: "5",
    title: "Deploying React Apps to AWS with CI/CD",
    excerpt:
      "Set up automated deployments to AWS using S3/CloudFront and GitHub Actions.",
    category: "DevOps",
    date: "2023-12-20",
    readTime: "15 min read",
    image: "/api/placeholder/800/400",
    tags: ["AWS", "DevOps", "CI/CD", "React"],
    featured: true,
    author: "Yasiru Nisal Kulasinghe",
    content: `
      <h2>🚀 CI/CD to AWS</h2>
      <p>Use GitHub Actions to build and deploy to S3 + CloudFront with cache invalidation.</p>
      <pre><code>jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      </code></pre>
    `,
  },
  {
    id: "6",
    title: "TypeScript Best Practices for Large Applications",
    excerpt:
      "Patterns to keep TypeScript codebases scalable and maintainable.",
    category: "TypeScript",
    date: "2023-12-15",
    readTime: "11 min read",
    image: "/api/placeholder/800/400",
    tags: ["TypeScript", "Best Practices", "Scalability"],
    featured: false,
    author: "Yasiru Nisal Kulasinghe",
    content: `
      <h2>✅ TS Best Practices</h2>
      <ul>
        <li>Strict mode on</li>
        <li>Leverage generics, utility types</li>
        <li>Keep DTOs and domain types separate</li>
      </ul>
    `,
  },
];

export default blogPosts;
