import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import contactImg from "../assest/img/contact-img.svg";
import '../App.css';

export const ModernContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setButtonText("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "7ffb9733-4d1c-4093-a3eb-7fc774d322c9");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ success: true, message: '🎉 Message sent successfully! I\'ll get back to you soon.' });
        setFormDetails(formInitialDetails);
      } else {
        setStatus({ success: false, message: '❌ Something went wrong, please try again later.' });
      }
    } catch (error) {
      setStatus({ success: false, message: '❌ Network error occurred, please try again later.' });
    }

    setIsLoading(false);
    setButtonText("Send Message");
  };

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

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 30px rgba(255, 107, 53, 0.3)",
      borderColor: "#ff6b35"
    }
  };

  return (
    <section className="contact holographic-bg data-stream" id="connect" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <Row className="mb-5">
            <Col>
              <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
                <motion.h2
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  🚀 Let's Build Something Amazing Together
                </motion.h2>
                <motion.p
                  style={{
                    fontSize: '1.2rem',
                    color: '#b8b8b8',
                    maxWidth: '600px',
                    margin: '0 auto 2rem'
                  }}
                >
                  Ready to turn your ideas into reality? Drop me a message and let's start the conversation!
                </motion.p>
              </motion.div>
            </Col>
          </Row>

          <Row className="align-items-center">
            {/* Contact Image */}
            <Col md={6} className="mb-4 mb-md-0">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '30px',
                    padding: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.1), rgba(247, 147, 30, 0.1))',
                      borderRadius: '50%'
                    }}
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <img
                    src={contactImg}
                    alt="Contact"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      filter: 'drop-shadow(0 10px 30px rgba(255, 107, 53, 0.3))',
                      position: 'relative',
                      zIndex: 2
                    }}
                  />
                </div>
              </motion.div>
            </Col>

            {/* Contact Form */}
            <Col md={6}>
              <motion.div
                variants={itemVariants}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '25px',
                  padding: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
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
                    background: 'linear-gradient(90deg, #ff6b35, #f7931e, #7209b7)'
                  }}
                />

                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col sm={6} className="px-2 mb-3">
                      <motion.input
                        variants={inputVariants}
                        whileFocus="focus"
                        type="text"
                        name="firstName"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '15px',
                          color: '#ffffff',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        required
                      />
                    </Col>
                    <Col sm={6} className="px-2 mb-3">
                      <motion.input
                        variants={inputVariants}
                        whileFocus="focus"
                        type="text"
                        name="lastName"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '15px',
                          color: '#ffffff',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        required
                      />
                    </Col>
                    <Col sm={6} className="px-2 mb-3">
                      <motion.input
                        variants={inputVariants}
                        whileFocus="focus"
                        type="email"
                        name="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate('email', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '15px',
                          color: '#ffffff',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        required
                      />
                    </Col>
                    <Col sm={6} className="px-2 mb-3">
                      <motion.input
                        variants={inputVariants}
                        whileFocus="focus"
                        type="tel"
                        name="phone"
                        value={formDetails.phone}
                        placeholder="Phone Number"
                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '15px',
                          color: '#ffffff',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                      />
                    </Col>
                    <Col className="px-2 mb-4">
                      <motion.textarea
                        variants={inputVariants}
                        whileFocus="focus"
                        rows="6"
                        name="message"
                        value={formDetails.message}
                        placeholder="Tell me about your project idea..."
                        onChange={(e) => onFormUpdate('message', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '15px',
                          color: '#ffffff',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          outline: 'none',
                          resize: 'vertical',
                          minHeight: '120px'
                        }}
                        required
                      />
                    </Col>
                    <Col className="px-2">
                      <motion.button
                        className="futuristic-btn cyber-glow"
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          width: '100%',
                          padding: '15px 30px',
                          background: isLoading 
                            ? 'rgba(255, 255, 255, 0.1)' 
                            : 'linear-gradient(45deg, #ff6b35, #f7931e)',
                          border: 'none',
                          borderRadius: '15px',
                          color: '#ffffff',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          cursor: isLoading ? 'not-allowed' : 'pointer',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        {isLoading && (
                          <motion.div
                            style={{
                              position: 'absolute',
                              left: '20px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '20px',
                              height: '20px',
                              border: '2px solid rgba(255, 255, 255, 0.3)',
                              borderTop: '2px solid #ffffff',
                              borderRadius: '50%'
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        )}
                        <span style={{ marginLeft: isLoading ? '30px' : '0' }}>
                          {buttonText}
                        </span>
                      </motion.button>
                    </Col>
                    
                    {status.message && (
                      <Col className="px-2 mt-3">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          style={{
                            padding: '15px 20px',
                            borderRadius: '15px',
                            background: status.success 
                              ? 'linear-gradient(45deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))'
                              : 'linear-gradient(45deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.2))',
                            border: `1px solid ${status.success ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)'}`,
                            color: status.success ? '#10b981' : '#ef4444',
                            fontSize: '1rem',
                            fontWeight: '500',
                            textAlign: 'center'
                          }}
                        >
                          {status.message}
                        </motion.div>
                      </Col>
                    )}
                  </Row>
                </form>
              </motion.div>
            </Col>
          </Row>

          {/* Contact Info Cards */}
          <Row className="mt-5">
            <Col>
              <motion.div
                variants={itemVariants}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '30px',
                  flexWrap: 'wrap'
                }}
              >
                {[
                  { icon: '📧', title: 'Email', value: 'yasirunisal75@gmail.com', color: '#ff6b35' },
                  { icon: '📱', title: 'Phone', value: '+94 787905486', color: '#f7931e' },
                  { icon: '📍', title: 'Location', value: 'Colombo, Sri Lanka', color: '#7209b7' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10, scale: 1.05 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      padding: '25px 30px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      textAlign: 'center',
                      minWidth: '200px',
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
                        height: '3px',
                        background: item.color
                      }}
                    />
                    <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                      {item.icon}
                    </div>
                    <h4 style={{ 
                      color: '#ffffff', 
                      fontSize: '1.1rem', 
                      fontWeight: '600', 
                      marginBottom: '5px' 
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ 
                      color: '#b8b8b8', 
                      fontSize: '0.9rem', 
                      margin: 0 
                    }}>
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};