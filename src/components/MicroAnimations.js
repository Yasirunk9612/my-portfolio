import { useState, useEffect } from 'react';

export const MicroAnimations = () => {
  useEffect(() => {
    // Add interactive elements to buttons
    const buttons = document.querySelectorAll('button, .btn, a[role="button"]');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.filter = 'brightness(1.1)';
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.filter = 'brightness(1)';
      });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('[class*="card"], [class*="project"], [class*="skill"]');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 20px 40px rgba(255, 107, 53, 0.2)';
        card.style.transform = 'translateY(-5px) scale(1.02)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'initial';
        card.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Add parallax effect to background elements
    const parallaxElements = document.querySelectorAll('[class*="bg"], [class*="background"]');
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element, index) => {
        const rate = scrolled * -0.5 * (index + 1) * 0.1;
        element.style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
      
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return null; // This component doesn't render anything visible
};

// Enhanced button component
export const EnhancedButton = ({ children, className = '', style = {}, onClick, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const enhancedStyle = {
    ...style,
    transform: `
      translateY(${isPressed ? '1px' : isHovered ? '-2px' : '0'}) 
      scale(${isPressed ? '0.98' : isHovered ? '1.05' : '1'})
    `,
    filter: `brightness(${isHovered ? '1.1' : '1'}) saturate(${isHovered ? '1.2' : '1'})`,
    boxShadow: isHovered 
      ? '0 10px 25px rgba(255, 107, 53, 0.4), 0 0 20px rgba(255, 107, 53, 0.2)' 
      : '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  return (
    <button
      className={`enhanced-btn ${className}`}
      style={enhancedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Text reveal animation
export const TextReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      style={{
        display: 'inline-block',
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? '0' : '20px'})`,
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        filter: isVisible ? 'blur(0)' : 'blur(5px)'
      }}
    >
      {children}
    </span>
  );
};

// Magnetic hover effect for interactive elements
export const MagneticElement = ({ children, strength = 0.3, ...props }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isHovered ? 'none' : 'transform 0.3s ease-out',
        willChange: 'transform'
      }}
      {...props}
    >
      {children}
    </div>
  );
};