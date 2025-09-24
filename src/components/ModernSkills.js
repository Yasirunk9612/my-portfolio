import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import colorSharp from "../assest/img/color-sharp.png";

export const ModernSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "linear-gradient(45deg, #ff6b35, #f7931e)",
      skills: [
        { name: "Java", level: 90, icon: "☕" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "JavaScript", level: 90, icon: "⚡" },
        { name: "C", level: 80, icon: "🔧" },
        { name: "C++", level: 80, icon: "⚙️" },
        { name: "PHP", level: 75, icon: "�" }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      color: "linear-gradient(45deg, #7209b7, #2d87f0)",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "HTML5/CSS3", level: 95, icon: "🎨" },
        { name: "Next.js", level: 80, icon: "▲" },
        { name: "Flutter", level: 75, icon: "🦋" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "linear-gradient(45deg, #134e5e, #71b280)",
      skills: [
        { name: "AWS (S3, EC2, IAM, Lambda)", level: 80, icon: "🔧" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Kubernetes", level: 70, icon: "⚓" },
        { name: "CI/CD (GitHub Actions)", level: 80, icon: "�" },
        { name: "Linux & Shell Scripting", level: 85, icon: "🐧" },
        { name: "Git/GitHub", level: 95, icon: "�" }
      ]
    },
    {
      title: "Database & Tools",
      icon: "🗄️",
      color: "linear-gradient(45deg, #667eea, #764ba2)",
      skills: [
        { name: "MySQL", level: 85, icon: "🗄️" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Firebase", level: 75, icon: "�" },
        { name: "Stripe Integration", level: 70, icon: "💳" },
        { name: "Figma", level: 75, icon: "�" },
        { name: "Postman", level: 80, icon: "�" },
        { name: "Agile/Scrum", level: 75, icon: "🏃" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const SkillBar = ({ skill, index, categoryColor }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setHoveredSkill(skill.name)}
      onHoverEnd={() => setHoveredSkill(null)}
      style={{
        marginBottom: '20px',
        position: 'relative'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.2rem' }}>{skill.icon}</span>
          <span style={{ 
            color: '#ffffff', 
            fontWeight: '600',
            fontSize: '1rem'
          }}>
            {skill.name}
          </span>
        </div>
        <motion.span
          animate={hoveredSkill === skill.name ? { scale: 1.1 } : { scale: 1 }}
          style={{
            color: '#ff6b35',
            fontWeight: '700',
            fontSize: '0.9rem'
          }}
        >
          {skill.level}%
        </motion.span>
      </div>
      
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          style={{
            height: '100%',
            background: categoryColor,
            borderRadius: '10px',
            position: 'relative'
          }}
        >
          <motion.div
            animate={hoveredSkill === skill.name ? { opacity: 1 } : { opacity: 0 }}
            style={{
              position: 'absolute',
              right: '5px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '4px',
              height: '4px',
              background: '#ffffff',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="skill holographic-bg data-stream" id="skills" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Row>
            <Col size={12}>
              <motion.div variants={itemVariants}>
                <motion.h2
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: '700',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  💡 Technical Skills & Expertise
                </motion.h2>
                <motion.p
                  style={{
                    textAlign: 'center',
                    fontSize: '1.2rem',
                    color: '#b8b8b8',
                    marginBottom: '4rem',
                    maxWidth: '600px',
                    margin: '0 auto 4rem'
                  }}
                >
                  Comprehensive skill set spanning modern web technologies, cloud platforms, and development tools
                </motion.p>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4">
            {skillCategories.map((category, categoryIndex) => (
              <Col key={categoryIndex} md={6} lg={3}>
                <motion.div
                  className="neon-border advanced-blur"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '30px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Background gradient */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: category.color
                    }}
                  />
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '25px'
                  }}>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        fontSize: '2rem',
                        padding: '15px',
                        background: category.color,
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 style={{
                      color: '#ffffff',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      margin: 0
                    }}>
                      {category.title}
                    </h3>
                  </div>

                  <div>
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skillIndex}
                        skill={skill}
                        index={skillIndex}
                        categoryColor={category.color}
                      />
                    ))}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Tech Stack Overview */}
          <motion.div variants={itemVariants} style={{ marginTop: '4rem' }}>
            <Row>
              <Col>
                <motion.div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.h3
                    style={{
                      color: '#ffffff',
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      marginBottom: '20px',
                      background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    🚀 Current Focus & Learning
                  </motion.h3>
                  <p style={{
                    color: '#b8b8b8',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}>
                    Currently pursuing <strong style={{ color: '#ff6b35' }}>AWS Certified Cloud Practitioner</strong> certification, 
                    specializing in <strong style={{ color: '#f7931e' }}>containerization with Docker & Kubernetes</strong>, and 
                    building <strong style={{ color: '#7209b7' }}>AI-powered web applications</strong> with modern cloud-native architectures. 
                    Always staying at the forefront of technology to deliver scalable, innovative solutions.
                  </p>
                  
                  <motion.div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '30px',
                      marginTop: '30px',
                      flexWrap: 'wrap'
                    }}
                  >
                    {['AWS Cloud', 'DevOps', 'AI Integration', 'Containerization', 'Automation'].map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{
                          background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                          padding: '10px 20px',
                          borderRadius: '25px',
                          color: 'white',
                          fontWeight: '600',
                          fontSize: '0.9rem'
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </motion.div>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" style={{ opacity: 0.1 }} />
    </section>
  );
};