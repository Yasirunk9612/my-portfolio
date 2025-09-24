import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { blogPosts as blogPostsData } from "../data/blogPosts";

export const BlogPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Use centralized blog posts data
  const blogPosts = useMemo(() => blogPostsData, []);

  const categories = ['all', 'React', 'Full-Stack', 'Database', 'CSS', 'DevOps', 'TypeScript'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const BlogCard = ({ post, isFeatured = false }) => (
    <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6, scale: 1.01 }}
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          height: '100%',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        {isFeatured && (
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: '600',
            zIndex: 2
          }}>
            ⭐ Featured
          </div>
        )}

        {/* Blog Image */}
        <div style={{
          height: '200px',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src={post.image} alt={post.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #ff6b35, #f7931e, #7209b7)'
          }} />
        </div>

        {/* Blog Content */}
        <div style={{ padding: '30px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '15px'
          }}>
            <span style={{
              background: 'rgba(255, 107, 53, 0.2)',
              color: '#ff6b35',
              padding: '6px 12px',
              borderRadius: '15px',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              {post.category}
            </span>
            <span style={{ color: '#b8b8b8', fontSize: '0.9rem' }}>
              {new Date(post.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
            <span style={{ color: '#b8b8b8', fontSize: '0.9rem' }}>
              {post.readTime}
            </span>
          </div>

          <h3 style={{
            color: '#ffffff',
            fontSize: '1.4rem',
            fontWeight: '700',
            marginBottom: '15px',
            lineHeight: '1.4'
          }}>
            {post.title}
          </h3>

          <p style={{
            color: '#b8b8b8',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            {post.excerpt}
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px'
          }}>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          <motion.div
            whileHover={{ x: 10 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#ff6b35',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            Read More
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );

  return (
    <section className="blog holographic-bg data-stream" id="blog" ref={ref} style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <Row className="mb-5">
            <Col>
              <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
                <motion.h1
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  📚 Tech Blog & Insights
                </motion.h1>
                <motion.p
                  style={{
                    fontSize: '1.2rem',
                    color: '#b8b8b8',
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                    lineHeight: '1.6'
                  }}
                >
                  Sharing knowledge about modern web development, best practices, and emerging technologies
                </motion.p>
              </motion.div>
            </Col>
          </Row>

          {/* Featured Posts Section */}
          {featuredPosts.length > 0 && (
            <>
              <Row className="mb-4">
                <Col>
                  <motion.h2
                    variants={itemVariants}
                    style={{
                      color: '#ffffff',
                      fontSize: '2rem',
                      fontWeight: '700',
                      marginBottom: '2rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px'
                    }}
                  >
                    ⭐ Featured Posts
                  </motion.h2>
                </Col>
              </Row>
              <Row className="mb-5 g-4">
                {featuredPosts.map((post) => (
                  <Col key={post.id} lg={6}>
                    <BlogCard post={post} isFeatured={true} />
                  </Col>
                ))}
              </Row>
            </>
          )}

          {/* Category Filter */}
          <Row className="mb-4">
            <Col>
              <motion.div
                variants={itemVariants}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px',
                  flexWrap: 'wrap',
                  marginBottom: '3rem'
                }}
              >
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      background: selectedCategory === category 
                        ? 'linear-gradient(45deg, #ff6b35, #f7931e)'
                        : 'rgba(255, 255, 255, 0.1)',
                      border: selectedCategory === category
                        ? 'none'
                        : '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      padding: '12px 24px',
                      borderRadius: '25px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'capitalize'
                    }}
                  >
                    {category === 'all' ? 'All Posts' : category}
                  </motion.button>
                ))}
              </motion.div>
            </Col>
          </Row>

          {/* All Posts Grid */}
          <Row className="mb-4">
            <Col>
              <motion.h2
                variants={itemVariants}
                style={{
                  color: '#ffffff',
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '2rem'
                }}
              >
                📖 All Posts ({filteredPosts.length})
              </motion.h2>
            </Col>
          </Row>

          <Row className="g-4">
            {filteredPosts.map((post) => (
              <Col key={post.id} md={6} lg={4}>
                <BlogCard post={post} />
              </Col>
            ))}
          </Row>

          {/* Newsletter Signup */}
          <Row className="mt-5">
            <Col>
              <motion.div
                variants={itemVariants}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '25px',
                  padding: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #ff6b35, #f7931e, #7209b7)'
                  }}
                />
                
                <h3 style={{
                  color: '#ffffff',
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '15px'
                }}>
                  📬 Stay Updated
                </h3>
                <p style={{
                  color: '#b8b8b8',
                  fontSize: '1.1rem',
                  marginBottom: '30px',
                  maxWidth: '500px',
                  margin: '0 auto 30px'
                }}>
                  Get notified when I publish new articles about web development, programming tips, and tech insights.
                </p>
                
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  maxWidth: '400px',
                  margin: '0 auto',
                  flexWrap: 'wrap'
                }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      flex: 1,
                      minWidth: '250px',
                      padding: '15px 20px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '15px',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '15px 30px',
                      background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                      border: 'none',
                      borderRadius: '15px',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};