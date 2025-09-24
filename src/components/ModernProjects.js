import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assest/img/color-sharp2.png";

export const ModernProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Anime Book Selling Platform",
      description: "Full-stack e-commerce platform with user-friendly interface, admin panel, and robust backend powered by PHP and MySQL. Features user authentication, book catalog, shopping cart, and order management.",
      imgUrl: `${process.env.PUBLIC_URL}/img/anime.png`,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/Yasirunk9612/Anime-Book-Selling-website",
      liveUrl: "#",
      category: "fullstack"
    },
    {
      title: "PS Portfolio - University Project",
      description: "Professional portfolio website developed as university project. Features responsive design, modern CSS animations, and clean user interface showcasing academic and personal projects.",
      imgUrl: `${process.env.PUBLIC_URL}/img/ps.png`,
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Yasirunk9612/PS_Portfolio",
      liveUrl: "https://ps-portfolio-uni.vercel.app",
      category: "frontend"
    },
        {
      title: "Pizza Shop",
      description: "Modern pizza shop website built with Next.js showcasing menu items, online ordering, and delivery functionality. First Next.js project demonstrating server-side rendering and modern React patterns.",
      imgUrl: `${process.env.PUBLIC_URL}/img/pizza.png`,
      technologies: ["Next.js", "React", "JavaScript", "Tailwind", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "#",
      liveUrl: "https://pazz-pizza.vercel.app",
      category: "fullstack"
    },
        {
      title: "CYPEX-TECH Website",
      description: "Modern travel website built with Next.js showcasing destinations, travel packages, and booking functionality. First Next.js project demonstrating server-side rendering and modern React patterns.",
      imgUrl: `${process.env.PUBLIC_URL}/img/cypex.png`,
      technologies: ["Next.js", "React", "JavaScript", "CSS"],
      githubUrl: "#",
      liveUrl: "https://cypex-website.vercel.app",
      category: "frontend"
    },
    {
      title: "Travel Website - Next.js",
      description: "Modern travel website built with Next.js showcasing destinations, travel packages, and booking functionality. First Next.js project demonstrating server-side rendering and modern React patterns.",
      imgUrl: `${process.env.PUBLIC_URL}/img/T1.png`,
      technologies: ["Next.js", "React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/Yasirunk9612/Travel-Website",
      liveUrl: "#",
      category: "frontend"
    },
    {
  title: "TechRepair Shop - Desktop Management System",
  description: "A desktop-based management system developed using Java Swing for a tech repair shop. The application allows managing customer orders, suppliers, inventory, employees, and generating reports. It provides an easy-to-use interface for handling day-to-day repair shop operations efficiently.",
  imgUrl: `${process.env.PUBLIC_URL}/img/techRep.png`,
  technologies: ["Java", "Swing", "MySQL"],
  githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/TechRepairShop",
  liveUrl: "",
  category: "desktop"
},
{
  title: "Travel Companion App - Android Project",
  description: "Your personal travel assistant, designed to simplify trip planning. It combines itinerary management, live weather updates, and curated local recommendations into a user-friendly mobile app experience, ensuring stress-free adventures.",
  imgUrl: `${process.env.PUBLIC_URL}/img/travelapp.jpeg`,
  technologies: ["Java", "Firebase"],
  githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/TravelCompanionApp",
  liveUrl: "",
  category: "mobile"
},
    {
      title: "CI/CD Application",
      description: "Comprehensive CI/CD pipeline implementation showcasing modern DevOps practices. Automated testing, building, and deployment workflows for efficient software development lifecycle.",
      imgUrl: "",
      technologies: ["JavaScript", "Docker", "GitHub Actions", "Node.js"],
      githubUrl: "https://github.com/Yasirunk9612/ci-cd-app",
      liveUrl: "#",
      category: "devops"
    },
    {
      title: "Event Management System",
      description: "Dynamic event management application with real-time updates, user registration, and administrative features. Built with modern JavaScript and responsive design principles.",
      imgUrl: "",
      technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
      githubUrl: "https://github.com/Yasirunk9612/event",
      liveUrl: "#",
      category: "frontend"
    },
    {
      title: "Todo App - C# .NET",
      description: "Simple yet effective todo application built with C# and .NET framework. Features terminal-based interface, task management, and persistent data storage capabilities.",
      imgUrl: "",
      technologies: ["C#", ".NET", "Terminal", "File I/O"],
      githubUrl: "https://github.com/Yasirunk9612/ToDoApp-c-",
      liveUrl: "#",
      category: "backend"
    },
    {
      title: "Payment Processing System",
      description: "Secure payment processing application with modern payment gateway integration. Features transaction handling, user authentication, and financial data management.",
      imgUrl: "",
      technologies: ["JavaScript", "Node.js", "Payment APIs"],
      githubUrl: "https://github.com/Yasirunk9612/pay",
      liveUrl: "#",
      category: "fullstack"
    },
    {
      title: "Interactive Todo App",
      description: "Modern web-based todo application with intuitive user interface, drag-and-drop functionality, and local storage integration for persistent task management.",
      imgUrl: "",
      technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
      githubUrl: "https://github.com/Yasirunk9612/to-do-app",
      liveUrl: "#",
      category: "frontend"
    },
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

  const categories = [
    { key: "all", label: "All Projects", icon: "🚀" },
    { key: "fullstack", label: "Full Stack", icon: "⚡" },
    { key: "frontend", label: "Frontend", icon: "🎨" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "devops", label: "DevOps", icon: "🔧" },
    { key: "desktop", label: "Desktop", icon: "💻" },
    { key: "mobile", label: "Mobile", icon: "📱" }
  ];

  return (
    <section className="project cosmic-bg neural-lines" id="projects" ref={ref}>
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
                  🛠️ My Projects Portfolio
                </motion.h2>
                <motion.p
                  style={{
                    textAlign: 'center',
                    fontSize: '1.2rem',
                    color: '#b8b8b8',
                    marginBottom: '3rem'
                  }}
                >
                  Explore my journey through innovative solutions, from full-stack applications to DevOps implementations
                </motion.p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="all">
                  <motion.div variants={itemVariants}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {categories.map((category) => (
                        <Nav.Item key={category.key}>
                          <Nav.Link 
                            eventKey={category.key}
                            style={{
                              background: 'transparent',
                              border: '2px solid #333',
                              color: '#ffffff',
                              borderRadius: '50px',
                              padding: '12px 25px',
                              margin: '0 10px 10px 0',
                              fontWeight: '600',
                              transition: 'all 0.3s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                            className="custom-nav-link"
                          >
                            <span>{category.icon}</span>
                            {category.label}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </motion.div>
                  
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="all">
                      <motion.div variants={itemVariants}>
                        <Row className="g-4">
                          {projects.map((project, index) => (
                            <Col key={index} sm={6} md={4}>
                              <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <ProjectCard {...project} />
                              </motion.div>
                            </Col>
                          ))}
                        </Row>
                      </motion.div>
                    </Tab.Pane>
                    
                    {categories.slice(1).map((category) => (
                      <Tab.Pane key={category.key} eventKey={category.key}>
                        <motion.div variants={itemVariants}>
                          <Row className="g-4">
                            {projects
                              .filter(project => project.category === category.key)
                              .map((project, index) => (
                                <Col key={index} sm={6} md={4}>
                                  <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    <ProjectCard {...project} />
                                  </motion.div>
                                </Col>
                              ))}
                          </Row>
                        </motion.div>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" style={{ opacity: 0.1 }} />
    </section>
  );
};