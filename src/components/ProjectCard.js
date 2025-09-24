import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, technologies, githubUrl, liveUrl, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const hasValidImage = imgUrl && imgUrl.trim() !== "" && !imageError;

  const getCategoryColor = (cat) => {
    const colors = {
      fullstack: 'linear-gradient(45deg, #ff6b35, #f7931e)',
      frontend: 'linear-gradient(45deg, #7209b7, #2d87f0)',
      backend: 'linear-gradient(45deg, #1e3c72, #2a5298)',
      devops: 'linear-gradient(45deg, #134e5e, #71b280)',
      desktop: 'linear-gradient(45deg, #8e2de2, #4a00e0)',
      mobile: 'linear-gradient(45deg, #ff9a9e, #fecfef)'
    };
    return colors[cat] || 'linear-gradient(45deg, #333, #666)';
  };

  return (
    <motion.div
      className="proj-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '0',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {hasValidImage ? (
          <>
            <motion.img 
              src={imgUrl} 
              alt={title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              onError={() => setImageError(true)}
            />
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: getCategoryColor(category),
                opacity: isHovered ? 0.8 : 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
              }}
              animate={{ opacity: isHovered ? 0.8 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#333',
                  padding: '10px 15px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span>📂</span> Code
              </motion.a>
              {liveUrl && liveUrl !== '#' && liveUrl !== '' && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#333',
                    padding: '10px 15px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <span>🚀</span> Live
                </motion.a>
              )}
            </motion.div>
          </>
        ) : (
          <motion.div
            style={{
              width: '100%',
              height: '200px',
              background: getCategoryColor(category),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              style={{
                fontSize: '3rem',
                marginBottom: '10px',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}
              animate={{ 
                rotate: isHovered ? [0, -5, 5, 0] : 0,
                scale: isHovered ? 1.1 : 1 
              }}
              transition={{ duration: 0.5 }}
            >
              {category === 'fullstack' && '⚡'}
              {category === 'frontend' && '🎨'}
              {category === 'backend' && '⚙️'}
              {category === 'devops' && '🔧'}
              {category === 'desktop' && '💻'}
              {category === 'mobile' && '📱'}
              {!['fullstack', 'frontend', 'backend', 'devops', 'desktop', 'mobile'].includes(category) && '🚀'}
            </motion.div>
            <motion.div
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.1rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {category} Project
            </motion.div>
            
            <motion.div
              style={{
                position: 'absolute',
                bottom: '20px',
                display: 'flex',
                gap: '15px',
                opacity: isHovered ? 1 : 0
              }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#333',
                  padding: '8px 12px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span>📂</span> Code
              </motion.a>
              {liveUrl && liveUrl !== '#' && liveUrl !== '' && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#333',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <span>🚀</span> Live
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
      
      <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <motion.h4
          style={{
            color: '#ffffff',
            fontSize: '1.3rem',
            fontWeight: '700',
            marginBottom: '12px',
            background: getCategoryColor(category),
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {title}
        </motion.h4>
        
        <p style={{
          color: '#b8b8b8',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          marginBottom: '20px',
          flex: 1
        }}>
          {description}
        </p>
        
        <div style={{ marginTop: 'auto' }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '8px',
            marginBottom: '15px'
          }}>
            {technologies?.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{
              background: getCategoryColor(category),
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'capitalize'
            }}>
              {category}
            </span>
            
            <motion.div
              style={{ display: 'flex', gap: '10px' }}
            >
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  textDecoration: 'none'
                }}
              >
                📂
              </motion.a>
              {liveUrl && liveUrl !== '#' && liveUrl !== '' && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    color: '#ffffff',
                    fontSize: '1.2rem',
                    textDecoration: 'none'
                  }}
                >
                  🚀
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};