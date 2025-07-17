import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onFinish }) => {
  const liquidRef = useRef();
  const bubblesRef = useRef([]);
  const overlayRef = useRef();

  useEffect(() => {
    // Animate the liquid rising
    gsap.fromTo(
      liquidRef.current,
      { y: 80 },
      { y: 0, duration: 1.5, ease: 'power2.inOut' }
    );
    // Animate bubbles
    bubblesRef.current.forEach((bubble, i) => {
      gsap.fromTo(
        bubble,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: -10,
          duration: 1 + i * 0.2,
          delay: 0.7 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        }
      );
    });
    // Simulate loading complete after 2.5s
    const timer = setTimeout(() => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.7,
        onComplete: onFinish,
      });
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        zIndex: 9999,
        inset: 0,
        background: 'rgba(10,10,20,0.98)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.7s',
      }}
      aria-label="Loading site, please wait"
      role="status"
    >
      <svg width="180" height="220" viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Glass outline */}
        <rect x="60" y="40" width="60" height="120" rx="30" fill="#fff" fillOpacity="0.08" stroke="#fff" strokeWidth="3" />
        {/* Liquid */}
        <rect
          ref={liquidRef}
          x="63"
          y="120"
          width="54"
          height="40"
          rx="20"
          fill="#e94f37"
          style={{ filter: 'drop-shadow(0 0 10px #e94f37aa)' }}
        />
        {/* Straw */}
        <rect x="110" y="30" width="8" height="40" rx="4" fill="#f6cd61" />
        {/* Bubbles */}
        <circle ref={el => (bubblesRef.current[0] = el)} cx="90" cy="130" r="5" fill="#fff" fillOpacity="0.7" />
        <circle ref={el => (bubblesRef.current[1] = el)} cx="105" cy="140" r="3" fill="#fff" fillOpacity="0.5" />
        <circle ref={el => (bubblesRef.current[2] = el)} cx="95" cy="145" r="2.5" fill="#fff" fillOpacity="0.4" />
      </svg>
      <span style={{
        color: '#fff',
        fontFamily: 'Modern Negra, DM Serif Text, serif',
        fontSize: 28,
        marginLeft: 32,
        letterSpacing: 2,
        textShadow: '0 2px 8px #000',
      }}>
        Mixing your experience…
      </span>
    </div>
  );
};

export default Preloader; 