import React, { Suspense, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { ScrollIndicator, ParticleBackground, MatrixBackground, FuturisticCursor } from "./components/FuturisticEffects";
// Performance optimization utilities
const preloadCriticalResources = () => {
  const criticalImages = [
    '/src/assest/img/banner-bg.png',
    '/src/assest/img/header-img.svg',
    '/src/assest/img/yk-2.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

const trackPerformanceMetrics = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
        console.log('Page Load Time:', loadTime);
      }, 0);
    });
  }
};

const inlineCriticalCSS = () => {
  const criticalCSS = `
    .navbar { position: fixed; top: 0; width: 100%; z-index: 9999; }
    .banner { min-height: 100vh; display: flex; align-items: center; }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Lazy load components for better performance
const ModernBanner = React.lazy(() => import("./components/ModernBanner").then(module => ({ default: module.ModernBanner })));
const ModernSkills = React.lazy(() => import("./components/ModernSkills").then(module => ({ default: module.ModernSkills })));
const ModernProjects = React.lazy(() => import("./components/ModernProjects").then(module => ({ default: module.ModernProjects })));
const Experience = React.lazy(() => import("./components/Experience").then(module => ({ default: module.Experience })));
const ModernContact = React.lazy(() => import("./components/ModernContact").then(module => ({ default: module.ModernContact })));
const BlogPage = React.lazy(() => import("./components/BlogPage").then(module => ({ default: module.BlogPage })));
const BlogPost = React.lazy(() => import("./components/BlogPost").then(module => ({ default: module.BlogPost })));

// Loading component with modern spinner
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    flexDirection: 'column',
    gap: '20px'
  }}>
    <div style={{
      width: '60px',
      height: '60px',
      border: '4px solid rgba(255, 107, 53, 0.2)',
      borderTop: '4px solid #ff6b35',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <p style={{
      color: '#b8b8b8',
      fontSize: '1.1rem',
      fontWeight: '500'
    }}>
      Loading amazing content...
    </p>
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
          flexDirection: 'column',
          gap: '20px',
          textAlign: 'center',
          padding: '40px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚠️</div>
          <h2 style={{ color: '#ffffff', marginBottom: '10px' }}>Oops! Something went wrong</h2>
          <p style={{ color: '#b8b8b8', fontSize: '1.1rem', maxWidth: '500px' }}>
            We're sorry for the inconvenience. Please refresh the page or try again later.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '25px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Home page component with lazy loading
const HomePage = () => (
  <ErrorBoundary>
    <Suspense fallback={<ModernBanner />}>
      <ModernBanner />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <ModernSkills />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <ModernProjects />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <Experience />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <ModernContact />
    </Suspense>
  </ErrorBoundary>
);

function App() {
  useEffect(() => {
    // Initialize performance optimizations
    inlineCriticalCSS();
    preloadCriticalResources();
    trackPerformanceMetrics();

    // Add meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Yasiru Nisal - Full-Stack Developer specializing in MERN stack, Next.js, and modern web technologies. Building innovative solutions with React, Node.js, and cloud platforms.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Yasiru Nisal",
      "jobTitle": "Full-Stack Developer",
      "description": "MERN Stack Expert and Cloud Engineer",
      "url": window.location.href,
      "sameAs": [
        "https://github.com/Yasirunk9612",
        "https://www.linkedin.com/in/yasiru-nisal/",
        "https://www.instagram.com/yasiru_nisal__/"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="App">
      <ScrollIndicator />
      <ParticleBackground />
      <MatrixBackground />
  <FuturisticCursor />
      <Router>
        <NavBar />
        <ErrorBoundary>
          <Routes>
            <Route 
              path="/" 
              element={<HomePage />} 
            />
            <Route 
              path="/blog" 
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <BlogPage />
                </Suspense>
              } 
            />
            <Route 
              path="/blog/:id" 
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <BlogPost />
                </Suspense>
              } 
            />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </Router>
    </div>
  );
}

export default App;