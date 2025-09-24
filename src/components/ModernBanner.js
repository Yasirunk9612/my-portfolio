import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assest/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import '../App.css';
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export const ModernBanner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    
    const toRotate = useMemo(() => [ 
        "Software Engineering Undergraduate", 
        "DevOps Cloud Enthusiast", 
        "Open-Source Contributor", 
        "Full-Stack Developer",
        "AWS Cloud Practitioner",
        "AI-Driven Solutions Builder",
        "Automation Expert"
    ], []);
    
    const period = 2000;

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } else {
            setDelta(prevDelta => prevDelta + 1);
        }
    }, [loopNum, isDeleting, text, toRotate, period]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); };
    }, [delta, tick]);

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="banner cosmic-bg neural-lines" id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#ff6b35", "#f7931e", "#7209b7", "#2d87f0"],
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1
                }}
            />
            <Container style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Row className="align-items-center min-vh-100">
                        <Col xs={12} md={6} xl={7}>
                            <motion.div variants={itemVariants}>
                                <motion.span 
                                    className="tagline"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    style={{
                                        background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontSize: '1.2rem',
                                        fontWeight: '600',
                                        letterSpacing: '2px',
                                        display: 'block',
                                        marginBottom: '1rem'
                                    }}
                                >
                                    🚀 Software Engineering Undergraduate — DevOps Cloud Enthusiast
                                </motion.span>
                                
                                <motion.h1 
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                    style={{
                                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                        fontWeight: '700',
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        marginBottom: '1rem'
                                    }}
                                >
                                    Hi! I'm <span className="hologram-text" data-text="Yasiru Nisal Kulasinghe">Yasiru Nisal Kulasinghe</span>
                                </motion.h1>

                                <motion.h2 
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    style={{
                                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                        fontWeight: '500',
                                        color: '#ffffff',
                                        marginBottom: '2rem'
                                    }}
                                >
                                    <span className="txt-rotate">
                                        <span className="wrap" style={{
                                            background: 'linear-gradient(45deg, #f7931e, #ff6b35)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            {text}
                                        </span>
                                    </span>
                                </motion.h2>

                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    style={{
                                        fontSize: '1.1rem',
                                        lineHeight: '1.8',
                                        color: '#b8b8b8',
                                        marginBottom: '2.5rem'
                                    }}
                                >
                                    🎯 Innovative and results-oriented Software Engineering undergraduate with a passion for 
                                    <strong style={{ color: '#ff6b35' }}> Cloud Computing</strong>, 
                                    <strong style={{ color: '#f7931e' }}> DevOps automation</strong>, and 
                                    <strong style={{ color: '#7209b7' }}> AI-driven applications</strong>. 
                                    Experienced in building and deploying scalable applications using 
                                    <strong style={{ color: '#2d87f0' }}> AWS, Docker, and CI/CD pipelines</strong>. 
                                    Strong contributor to open-source projects with hands-on expertise in full-stack development and cloud infrastructure.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                >
                                    <motion.button 
                                        className="futuristic-btn cyber-glow"
                                        whileHover={{ 
                                            scale: 1.05,
                                            boxShadow: '0 10px 25px rgba(255, 107, 53, 0.3)'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            const connectElement = document.getElementById('connect');
                                            if (connectElement) {
                                                connectElement.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        style={{
                                            background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                                            border: 'none',
                                            padding: '15px 30px',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            borderRadius: '50px',
                                            color: 'white',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Let's Build the Future 
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                        >
                                            <ArrowRightCircle size={25} />
                                        </motion.div>
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </Col>
                        
                        <Col xs={12} md={6} xl={5}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 1.2, delay: 0.5 }}
                                style={{ position: 'relative' }}
                            >
                                <motion.div
                                    className="floating quantum-dots"
                                    animate={{ 
                                        rotateY: [0, 360],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ 
                                        rotateY: { repeat: Infinity, duration: 20, ease: "linear" },
                                        scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                                    }}
                                    style={{
                                        filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.3))',
                                        borderRadius: '20px'
                                    }}
                                >
                                    <img 
                                        src={headerImg} 
                                        alt="Yasiru Nisal - Full Stack Developer"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '20px'
                                        }}
                                    />
                                </motion.div>
                                
                                {/* Floating elements */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    style={{
                                        position: 'absolute',
                                        top: '20%',
                                        right: '-10%',
                                        background: 'linear-gradient(45deg, #7209b7, #2d87f0)',
                                        borderRadius: '50%',
                                        padding: '15px',
                                        fontSize: '1.5rem',
                                        zIndex: 3
                                    }}
                                >
                                    ⚡
                                </motion.div>
                                
                                <motion.div
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '20%',
                                        left: '-10%',
                                        background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                                        borderRadius: '50%',
                                        padding: '15px',
                                        fontSize: '1.5rem',
                                        zIndex: 3
                                    }}
                                >
                                    🚀
                                </motion.div>
                            </motion.div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};