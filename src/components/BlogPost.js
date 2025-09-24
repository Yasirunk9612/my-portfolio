import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Tag, User, Share2, BookOpen } from "lucide-react";
import { blogPosts as blogPostsData } from "../data/blogPosts";

export const BlogPost = () => {
  const { id } = useParams();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Memoized posts and derived selections
  const blogPosts = useMemo(() => blogPostsData, []);
  const post = useMemo(() => blogPosts.find((p) => p.id === id), [blogPosts, id]);
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.id !== id && p.category === post.category)
      .slice(0, 3);
  }, [blogPosts, id, post]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Inject SEO meta tags for the post
  useEffect(() => {
    if (!post) return;
    const title = post.seoTitle || post.title;
    const description = post.seoDescription || post.excerpt;
    const url = window.location.href;
    const image = post.image;

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content || '');
      return el;
    };

    const prevTitle = document.title;
    document.title = title;
    const metas = [
      setMeta('description', description),
      setMeta('og:title', title, 'property'),
      setMeta('og:description', description, 'property'),
      setMeta('og:type', 'article', 'property'),
      setMeta('og:url', url, 'property'),
      setMeta('og:image', image, 'property'),
      setMeta('twitter:card', 'summary_large_image'),
      setMeta('twitter:title', title),
      setMeta('twitter:description', description),
      setMeta('twitter:image', image)
    ];

    // JSON-LD Article schema
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.dataset.from = 'blogpost';
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description,
      image,
      datePublished: post.date,
      author: { '@type': 'Person', name: post.author },
    });
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      metas.forEach(m => m && m.remove());
      const existing = document.querySelectorAll('script[type="application/ld+json"][data-from="blogpost"]');
      existing.forEach(s => s.remove());
    };
  }, [post]);

  const copyLink = useCallback(() => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url);
  }, []);

  if (!post) {
    return (
      <section className="blog-post" style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '60vh' }}>
        <Container>
          <Row>
            <Col style={{ textAlign: 'center' }}>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Post not found</h2>
              <p style={{ color: '#b8b8b8', marginBottom: '2rem' }}>The article you're looking for doesn't exist or has moved.</p>
              <Link
                to="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#ff6b35',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  padding: '12px 24px',
                  background: 'rgba(255, 107, 53, 0.1)',
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 107, 53, 0.3)'
                }}
              >
                ← Back to Blog
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="blog-post" ref={ref} style={{ 
      paddingTop: '120px', 
      paddingBottom: '100px',
      minHeight: '100vh'
    }}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Back Button */}
          <Row className="mb-4">
            <Col>
              <motion.div variants={itemVariants}>
                <Link
                  to="/blog"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#ff6b35',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    padding: '12px 24px',
                    background: 'rgba(255, 107, 53, 0.1)',
                    borderRadius: '50px',
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 107, 53, 0.2)';
                    e.target.style.transform = 'translateX(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 107, 53, 0.1)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  <ArrowLeft size={20} />
                  Back to Blog
                </Link>
              </motion.div>
            </Col>
          </Row>

          {/* Article Header */}
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <motion.div variants={itemVariants}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <motion.span
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                      color: 'white',
                      padding: '8px 20px',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '1rem'
                    }}
                  >
                    {post.category}
                  </motion.span>

                  <motion.h1
                    style={{
                      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '1.5rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {post.title}
                  </motion.h1>

                  <motion.div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      gap: '30px',
                      color: '#b8b8b8',
                      fontSize: '1rem',
                      marginBottom: '2rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <User size={18} />
                      <span>{post.author}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={18} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={18} />
                      <span>{post.readTime}</span>
                    </div>
                  </motion.div>

                  {/* Tags */}
                  <motion.div style={{ marginBottom: '2rem' }}>
                    {post.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        style={{
                          display: 'inline-block',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          margin: '0 8px 8px 0',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      >
                        <Tag size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Featured Image */}
                  <motion.div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      marginBottom: '3rem'
                    }}
                  >
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '400px',
                          objectFit: 'cover'
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '300px',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)'
                      }} />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* TL;DR */}
          {post.tldr && post.tldr.length > 0 && (
            <Row className="mb-4">
              <Col lg={8} className="mx-auto">
                <motion.div variants={itemVariants}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '16px',
                    padding: '20px 24px'
                  }}>
                    <h3 style={{ color: '#fff', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>📌 TL;DR</h3>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                      {post.tldr.map((item, i) => (
                        <li key={i} style={{ color: '#d9d9d9', marginBottom: '6px' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Col>
            </Row>
          )}

          {/* Article Content */}
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <motion.div variants={itemVariants}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '50px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    lineHeight: '1.8'
                  }}
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </motion.div>
            </Col>
          </Row>

          {/* Share Section */}
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <motion.div variants={itemVariants}>
                <div
                  style={{
                    background: 'rgba(255, 107, 53, 0.1)',
                    borderRadius: '20px',
                    padding: '30px',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 107, 53, 0.3)'
                  }}
                >
                  <h3 style={{ 
                    color: '#ff6b35', 
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    <Share2 size={24} />
                    Enjoyed this article?
                  </h3>
                  <p style={{ color: '#b8b8b8', marginBottom: '20px' }}>
                    Share it with your network or follow me for more tech insights!
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        color: 'white',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Share on LinkedIn
                    </motion.button>
                    <motion.button
                      onClick={copyLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        color: 'white',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Copy Link
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <>
              <Row className="mb-4">
                <Col>
                  <motion.h2
                    variants={itemVariants}
                    style={{
                      color: '#ffffff',
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      textAlign: 'center',
                      marginBottom: '3rem'
                    }}
                  >
                    Related Articles
                  </motion.h2>
                </Col>
              </Row>

              <Row className="g-4">
                {relatedPosts.map((relatedPost) => (
                  <Col key={relatedPost.id} md={4}>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ y: -6, scale: 1.01 }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        cursor: 'pointer'
                      }}
                    >
                      <Link to={`/blog/${relatedPost.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <div style={{ marginBottom: '20px' }}>
                        <span
                          style={{
                            background: 'linear-gradient(45deg, #7209b7, #2d87f0)',
                            color: 'white',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}
                        >
                          {relatedPost.category}
                        </span>
                      </div>

                      <h3 style={{
                        color: '#ffffff',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '15px',
                        lineHeight: '1.3'
                      }}>
                        {relatedPost.title}
                      </h3>

                      <p style={{
                        color: '#b8b8b8',
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        marginBottom: '20px'
                      }}>
                        {relatedPost.excerpt}
                      </p>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: '#b8b8b8',
                        fontSize: '0.9rem'
                      }}>
                        <span>{relatedPost.date}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <BookOpen size={16} />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                      </Link>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </motion.div>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .blog-content h2 {
          color: #ff6b35 !important;
          font-size: 2rem !important;
          font-weight: 700 !important;
          margin: 2rem 0 1rem 0 !important;
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
        }

        .blog-content h3 {
          color: #f7931e !important;
          font-size: 1.5rem !important;
          font-weight: 600 !important;
          margin: 1.5rem 0 1rem 0 !important;
        }

        .blog-content p {
          margin-bottom: 1.5rem !important;
          color: #e0e0e0 !important;
        }

        .blog-content ul, .blog-content ol {
          margin-bottom: 1.5rem !important;
          padding-left: 2rem !important;
        }

        .blog-content li {
          margin-bottom: 0.5rem !important;
          color: #e0e0e0 !important;
        }

        .blog-content strong {
          color: #ffffff !important;
          font-weight: 600 !important;
        }

        .blog-content pre {
          background: rgba(0, 0, 0, 0.4) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 10px !important;
          padding: 1.5rem !important;
          overflow-x: auto !important;
          margin: 1.5rem 0 !important;
        }

        .blog-content code {
          background: rgba(0, 0, 0, 0.3) !important;
          color: #ff6b35 !important;
          padding: 4px 8px !important;
          border-radius: 4px !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          font-size: 0.9rem !important;
        }

        .blog-content pre code {
          background: transparent !important;
          padding: 0 !important;
          color: #e0e0e0 !important;
        }

        .blog-content blockquote {
          border-left: 4px solid #ff6b35 !important;
          margin: 2rem 0 !important;
          padding: 1rem 1.5rem !important;
          background: rgba(255, 107, 53, 0.1) !important;
          border-radius: 0 10px 10px 0 !important;
        }

        .blog-content blockquote p {
          color: #f7931e !important;
          font-style: italic !important;
          margin-bottom: 0 !important;
          font-size: 1.1rem !important;
        }

        .blog-content table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin: 1.5rem 0 !important;
          background: rgba(255, 255, 255, 0.05) !important;
          border-radius: 10px !important;
          overflow: hidden !important;
        }

        .blog-content th, .blog-content td {
          padding: 1rem !important;
          text-align: left !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
        }

        .blog-content th {
          background: rgba(255, 107, 53, 0.2) !important;
          color: #ff6b35 !important;
          font-weight: 600 !important;
        }

        .blog-content td {
          color: #e0e0e0 !important;
        }
      `}</style>
    </section>
  );
};