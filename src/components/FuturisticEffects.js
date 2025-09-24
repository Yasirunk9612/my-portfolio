import React, { useState, useEffect } from 'react';

export const ScrollIndicator = () => {
  const [width, setWidth] = useState(0);
  const rafRef = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        setWidth(scrolled);
        rafRef.current = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="scroll-indicator"
      style={{
        width: `${width}%`,
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #ff6b35, #f7931e, #7209b7, #2d87f0)',
        zIndex: 9999,
        transformOrigin: 'left',
        transition: 'width 0.12s ease'
      }}
    />
  );
};

export const ParticleBackground = () => {
  return (
    <div 
      className="particles-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -2,
        background: `
          radial-gradient(2px 2px at 20px 30px, rgba(255, 107, 53, 0.3), transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(247, 147, 30, 0.3), transparent),
          radial-gradient(1px 1px at 90px 40px, rgba(114, 9, 183, 0.3), transparent),
          radial-gradient(1px 1px at 130px 80px, rgba(45, 135, 240, 0.3), transparent),
          radial-gradient(2px 2px at 160px 30px, rgba(255, 107, 53, 0.2), transparent)
        `,
        backgroundSize: '200px 100px',
        animation: 'particle-float 20s linear infinite'
      }}
    >
      <style jsx>{`
        @keyframes particle-float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-50px) translateX(10px); }
          50% { transform: translateY(-100px) translateX(-5px); }
          75% { transform: translateY(-50px) translateX(15px); }
        }
      `}</style>
    </div>
  );
};

export const MatrixBackground = () => {
  return (
    <div
      className="matrix-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        background: `
          radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(114, 9, 183, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(45, 135, 240, 0.02) 0%, transparent 50%)
        `
      }}
    />
  );
};

export const FuturisticCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      setIsPointer(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.type === 'submit' ||
        target.role === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: position.x - 20,
          top: position.y - 20,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 107, 53, 0.5)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'all 0.1s ease',
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
          background: isPointer ? 'rgba(255, 107, 53, 0.1)' : 'transparent'
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: position.x - 3,
          top: position.y - 3,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#ff6b35',
          pointerEvents: 'none',
          zIndex: 10000,
          boxShadow: '0 0 10px rgba(255, 107, 53, 0.8)'
        }}
      />
    </>
  );
};