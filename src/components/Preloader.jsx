import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onFinish }) => {
  const liquidRef = useRef();
  const bubblesRef = useRef([]);
  const overlayRef = useRef();
  const fruitRef = useRef();
  const iceRef = useRef();
  const mintRef = useRef();

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
    // Animate fruit slice dropping
    gsap.fromTo(
      fruitRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'bounce.out' }
    );
    // Animate ice cube dropping
    gsap.fromTo(
      iceRef.current,
      { y: -60, opacity: 0 },
      { y: 10, opacity: 1, duration: 1, delay: 0.8, ease: 'bounce.out' }
    );
    // Animate mint leaf dropping
    gsap.fromTo(
      mintRef.current,
      { y: -60, opacity: 0, rotate: -30 },
      { y: 20, opacity: 1, rotate: 0, duration: 1, delay: 1.1, ease: 'bounce.out' }
    );
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
        {/* Fruit slice (orange) */}
        <g ref={fruitRef} style={{ opacity: 0 }}>
          <circle cx="90" cy="120" r="10" fill="#ffb347" stroke="#e67e22" strokeWidth="2" />
          <path d="M90 110 v20" stroke="#e67e22" strokeWidth="1.5" />
          <path d="M80 120 h20" stroke="#e67e22" strokeWidth="1.5" />
          <path d="M83 113 l14 14" stroke="#e67e22" strokeWidth="1.5" />
          <path d="M97 113 l-14 14" stroke="#e67e22" strokeWidth="1.5" />
        </g>
        {/* Ice cube */}
        <rect ref={iceRef} x="105" y="135" width="12" height="12" rx="3" fill="#b3e0ff" stroke="#7fd6ff" strokeWidth="1.5" style={{ opacity: 0 }} />
        {/* Mint leaf */}
        <g ref={mintRef} style={{ opacity: 0 }}>
          <ellipse cx="75" cy="135" rx="7" ry="3.5" fill="#6fcf97" />
          <path d="M75 135 Q76 133, 77 135 Q76 137, 75 135" stroke="#388e3c" strokeWidth="1" fill="none" />
        </g>
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