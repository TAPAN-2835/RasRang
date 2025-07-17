import { useEffect, useRef, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const taglineRef = useRef();
  const [typed, setTyped] = useState("");
  const tagline = "Sip the Tastes of India";

  // Typewriter effect for tagline
  useEffect(() => {
    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      setTyped((prev) => prev + tagline[i]);
      i++;
      if (i === tagline.length) clearInterval(interval);
    }, 70);
    // Simulate loading complete after 2.5s
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2500);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div
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
      <div
        style={{
          background: 'url(/images/noise.png) repeat',
          padding: '3.5rem 6vw',
          borderRadius: '3rem',
          boxShadow: '0 4px 32px #000b',
          maxWidth: '95vw',
          width: 'auto',
        }}
      >
        <span
          ref={taglineRef}
          className="text-gradient"
          style={{
            fontFamily: 'Modern Negra, DM Serif Text, serif',
            fontSize: 'clamp(2.5rem, 7vw, 7rem)',
            letterSpacing: 2,
            whiteSpace: 'pre',
            textAlign: 'center',
            userSelect: 'none',
            display: 'block',
            lineHeight: 1.1,
          }}
        >
          {typed}
          <span style={{
            display: 'inline-block',
            width: '1ch',
            background: 'linear-gradient(to bottom, #fff, #898989)',
            marginLeft: '2px',
            animation: 'blink 1s steps(1) infinite',
            height: '1em',
            verticalAlign: 'bottom',
          }}>
            {typed.length !== tagline.length ? '|' : ''}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Preloader;