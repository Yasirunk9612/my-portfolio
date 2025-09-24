import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      id: 1,
      title: "Freelance Partner",
      company: "Cypex Tech IT Solutions",
      location: "Remote",
      period: "Present",
      type: "Freelance",
      description: "Collaborating in a small team to deliver end-to-end IT solutions, including web, mobile, and cloud applications for diverse clients. Focus on scalable e-commerce platforms, mobile health applications, and cloud-based ERP systems.",
      technologies: ["Next.js", "Stripe", "AWS", "Flutter", "Firebase", "React", "Node.js", "Docker", "CI/CD"],
      achievements: [
        "Developed and deployed a scalable E-Commerce Platform using Next.js, Stripe, and AWS",
        "Built a cross-platform Mobile Health Application with Flutter and Firebase",
        "Implemented cloud-based ERP System streamlining client business operations",
        "Enhanced project efficiency through CI/CD automation and Docker containerization",
        "Maintained quality standards and ensured client satisfaction through agile collaboration"
      ],
      color: "linear-gradient(45deg, #ff6b35, #f7931e)"
    },
    {
      id: 2,
      title: "University Project Developer",
      company: "Self-Initiated Project",
      location: "Sri Lanka",
      period: "2023 - 2024",
      type: "Academic",
      description: "Developed and deployed a responsive anime book-selling e-commerce platform as a comprehensive university project, showcasing full-stack development capabilities with modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      achievements: [
        "Built a fully responsive e-commerce platform from scratch",
        "Developed comprehensive admin dashboard for inventory and order management",
        "Implemented secure payment processing and user authentication",
        "Project pinned on GitHub as portfolio highlight",
        "Applied database optimization techniques for better performance"
      ],
      color: "linear-gradient(45deg, #7209b7, #2d87f0)"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "B.Sc. (Hons) Computer Science and Software Engineering",
      institution: "SLIIT City Uni Sri Lanka — University of Bedfordshire",
      location: "Sri Lanka",
      period: "Expected 2026",
      grade: "Currently pursuing",
      description: "Pursuing a comprehensive degree program focusing on Software Engineering, Cloud Computing, and modern development practices. Active involvement in practical projects and industry-relevant learning.",
      subjects: [
        "Software Engineering",
        "Cloud Computing",
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management Systems",
        "DevOps & Automation",
        "AI & Machine Learning Fundamentals",
        "Mobile Application Development"
      ],
      achievements: [
        "Actively participating in open-source contributions",
        "Building industry-relevant projects with modern tech stacks",
        "Focusing on cloud-native application development",
        "Pursuing AWS certifications alongside academic studies"
      ],
      color: "linear-gradient(45deg, #ff6b35, #f7931e)"
    },
    {
      id: 2,
      degree: "Advanced Level (A/L)",
      institution: "S. Thomas' College Bandarawela",
      location: "Bandarawela, Sri Lanka",
      period: "Completed",
      grade: "Successfully completed",
      description: "Completed Advanced Level education with a strong foundation in analytical and problem-solving skills, preparing for higher education in Computer Science.",
      subjects: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "Information Technology",
        "General English"
      ],
      achievements: [
        "Strong foundation in mathematical and scientific principles",
        "Developed analytical and problem-solving capabilities",
        "Early exposure to Information Technology concepts",
        "Prepared for university-level computer science studies"
      ],
      color: "linear-gradient(45deg, #7209b7, #2d87f0)"
    }
  ];

  const keyProjects = [
    {
      id: 1,
      title: "AI-Powered Web Application",
      status: "Ongoing",
      description: "Designing an intelligent web application with chatbot integration and personalized recommendations using React.js and Node.js. Deployed on AWS with Docker for scalability.",
      technologies: ["React.js", "Node.js", "AI Integration", "AWS", "Docker", "Chatbot API"],
      features: [
        "Intelligent chatbot with natural language processing",
        "Personalized user recommendations system",
        "Scalable cloud-native architecture",
        "Real-time data processing and analytics"
      ],
      color: "linear-gradient(45deg, #ff6b35, #f7931e)",
      icon: "🤖"
    },
    {
      id: 2,
      title: "Tech Repair Shop Management System",
      status: "Completed 2023",
      description: "Developed a comprehensive Java Swing desktop application to optimize workflow management for repair shops. Applied OOP principles and file-based persistence mechanisms.",
      technologies: ["Java", "Swing", "OOP", "File Systems", "Database Management"],
      features: [
        "Complete workflow management for repair operations",
        "Customer and inventory tracking system",
        "Automated billing and invoicing",
        "Data persistence with file-based storage"
      ],
      color: "linear-gradient(45deg, #7209b7, #2d87f0)",
      icon: "🔧"
    },
    {
      id: 3,
      title: "Anime Book-Selling E-Commerce Platform",
      status: "GitHub Pinned",
      description: "University project featuring a responsive e-commerce platform with complete admin dashboard for managing inventory, orders, and analytics.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Responsive Design"],
      features: [
        "Full-featured e-commerce functionality",
        "Comprehensive admin dashboard",
        "Inventory and order management system",
        "Analytics and reporting features"
      ],
      color: "linear-gradient(45deg, #134e5e, #71b280)",
      icon: "📚"
    }
  ];


  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services", 
      date: "Ongoing",
      credentialId: "In Progress",
      color: "#ff9900"
    },
    {
      name: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      date: "2023",
      credentialId: "UOM-WD-2023",
      color: "#47A248"
    },
    {
      name: "Introduction to Cloud Computing",
      issuer: "Simplilearn",
      date: "2023",
      credentialId: "SL-CC-2023",
      color: "#61DAFB"
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

  const ExperienceCard = ({ experience, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(15px)',
        borderRadius: '25px',
        padding: '40px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '30px'
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: experience.color
        }}
      />

      {/* Experience Type Badge */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '30px',
          background: experience.color,
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600'
        }}
      >
        {experience.type}
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h3 style={{
          color: '#ffffff',
          fontSize: '1.6rem',
          fontWeight: '700',
          marginBottom: '10px'
        }}>
          {experience.title}
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '15px',
          flexWrap: 'wrap'
        }}>
          <span style={{
            color: '#ff6b35',
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            {experience.company}
          </span>
          <span style={{ color: '#b8b8b8', fontSize: '1rem' }}>
            📍 {experience.location}
          </span>
          <span style={{ color: '#b8b8b8', fontSize: '1rem' }}>
            📅 {experience.period}
          </span>
        </div>
        <p style={{
          color: '#b8b8b8',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '25px'
        }}>
          {experience.description}
        </p>
      </div>

      {/* Technologies */}
      <div style={{ marginBottom: '25px' }}>
        <h4 style={{
          color: '#ffffff',
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBottom: '15px'
        }}>
          🛠️ Technologies & Tools
        </h4>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                padding: '8px 15px',
                borderRadius: '15px',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h4 style={{
          color: '#ffffff',
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBottom: '15px'
        }}>
          🏆 Key Achievements
        </h4>
        <ul style={{
          color: '#b8b8b8',
          fontSize: '1rem',
          lineHeight: '1.6',
          paddingLeft: '20px'
        }}>
          {experience.achievements.map((achievement, achievementIndex) => (
            <li key={achievementIndex} style={{ marginBottom: '8px' }}>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  const EducationCard = ({ education, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(15px)',
        borderRadius: '25px',
        padding: '40px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: education.color
        }}
      />

      <div style={{ marginBottom: '25px' }}>
        <h3 style={{
          color: '#ffffff',
          fontSize: '1.4rem',
          fontWeight: '700',
          marginBottom: '10px',
          lineHeight: '1.3'
        }}>
          {education.degree}
        </h3>
        <div style={{ marginBottom: '15px' }}>
          <div style={{
            color: '#ff6b35',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '5px'
          }}>
            {education.institution}
          </div>
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            color: '#b8b8b8',
            fontSize: '1rem'
          }}>
            <span>📍 {education.location}</span>
            <span>📅 {education.period}</span>
          </div>
        </div>
        <div style={{
          background: 'rgba(255, 107, 53, 0.2)',
          color: '#ff6b35',
          padding: '10px 20px',
          borderRadius: '15px',
          fontSize: '1rem',
          fontWeight: '600',
          marginBottom: '20px',
          display: 'inline-block'
        }}>
          🎓 {education.grade}
        </div>
        <p style={{
          color: '#b8b8b8',
          fontSize: '1rem',
          lineHeight: '1.6',
          marginBottom: '25px'
        }}>
          {education.description}
        </p>
      </div>

      {/* Subjects */}
      <div style={{ marginBottom: '25px' }}>
        <h4 style={{
          color: '#ffffff',
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBottom: '15px'
        }}>
          📚 Key Subjects
        </h4>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          {education.subjects.map((subject, subjectIndex) => (
            <span
              key={subjectIndex}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '12px',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}
            >
              {subject}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h4 style={{
          color: '#ffffff',
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBottom: '15px'
        }}>
          🏆 Achievements
        </h4>
        <ul style={{
          color: '#b8b8b8',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          paddingLeft: '20px',
          margin: 0
        }}>
          {education.achievements.map((achievement, achievementIndex) => (
            <li key={achievementIndex} style={{ marginBottom: '8px' }}>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <section className="experience" id="experience" ref={ref} style={{ paddingTop: '100px', paddingBottom: '100px' }}>
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
                  💼 Experience & Education
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
                  My professional journey and academic background in software development
                </motion.p>
              </motion.div>
            </Col>
          </Row>

          {/* Experience Section */}
          <Row className="mb-5">
            <Col>
              <motion.h2
                variants={itemVariants}
                style={{
                  color: '#ffffff',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                💼 Professional Experience
              </motion.h2>
            </Col>
          </Row>

          {experiences.map((experience, index) => (
            <Row key={experience.id} className="mb-4">
              <Col>
                <ExperienceCard experience={experience} index={index} />
              </Col>
            </Row>
          ))}

          {/* Key Projects Section */}
          <Row className="mb-5 mt-5">
            <Col>
              <motion.h2
                variants={itemVariants}
                style={{
                  color: '#ffffff',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                🚀 Key Projects
              </motion.h2>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            {keyProjects.map((project, index) => (
              <Col key={project.id} lg={4}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: '25px',
                    padding: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%'
                  }}
                >
                  {/* Top gradient line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: project.color
                    }}
                  />

                  {/* Status Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '30px',
                      background: project.color,
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}
                  >
                    {project.status}
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                      <div style={{
                        fontSize: '2.5rem',
                        padding: '15px',
                        background: project.color,
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {project.icon}
                      </div>
                      <h3 style={{
                        color: '#ffffff',
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        margin: 0,
                        lineHeight: '1.2'
                      }}>
                        {project.title}
                      </h3>
                    </div>
                    
                    <p style={{
                      color: '#b8b8b8',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      marginBottom: '25px'
                    }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div style={{ marginBottom: '25px' }}>
                    <h4 style={{
                      color: '#ffffff',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '15px'
                    }}>
                      🛠️ Technologies Used
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            padding: '6px 12px',
                            borderRadius: '12px',
                            fontSize: '0.85rem',
                            fontWeight: '500'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 style={{
                      color: '#ffffff',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '15px'
                    }}>
                      ✨ Key Features
                    </h4>
                    <ul style={{
                      color: '#b8b8b8',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      paddingLeft: '20px',
                      margin: 0
                    }}>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} style={{ marginBottom: '6px' }}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Education Section */}
          <Row className="mb-5 mt-5">
            <Col>
              <motion.h2
                variants={itemVariants}
                style={{
                  color: '#ffffff',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                🎓 Education
              </motion.h2>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            {education.map((edu, index) => (
              <Col key={edu.id} lg={6}>
                <EducationCard education={edu} index={index} />
              </Col>
            ))}
          </Row>

          {/* Certifications Section */}
          <Row className="mb-4">
            <Col>
              <motion.h2
                variants={itemVariants}
                style={{
                  color: '#ffffff',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                📜 Certifications
              </motion.h2>
            </Col>
          </Row>

          <Row className="g-4">
            {certifications.map((cert, index) => (
              <Col key={index} md={6} lg={3}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: '20px',
                    padding: '30px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '100%',
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
                      background: cert.color
                    }}
                  />
                  
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      background: cert.color,
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      fontSize: '1.5rem'
                    }}
                  >
                    🏆
                  </div>
                  
                  <h4 style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    marginBottom: '10px',
                    lineHeight: '1.3'
                  }}>
                    {cert.name}
                  </h4>
                  
                  <p style={{
                    color: '#b8b8b8',
                    fontSize: '0.9rem',
                    marginBottom: '10px'
                  }}>
                    {cert.issuer}
                  </p>
                  
                  <div style={{
                    color: cert.color,
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    {cert.date}
                  </div>
                  
                  <div style={{
                    color: '#b8b8b8',
                    fontSize: '0.8rem',
                    fontFamily: 'monospace'
                  }}>
                    ID: {cert.credentialId}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};