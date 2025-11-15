import React from 'react';
import { Link } from 'react-router-dom';

const DemoPricing = () => {
  return (
    <div style={styles.container}>
      <style>{`
        .demo-button {
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .demo-button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
        }
        
        .pattern-icon {
          opacity: 0.15;
          position: absolute;
          color: #666;
          font-size: 20px;
        }
      `}</style>
      
      <div style={styles.backgroundPattern}>
        {/* Pattern symbols scattered across the background */}
        <span className="pattern-icon" style={{ top: '10%', left: '5%' }}>📊</span>
        <span className="pattern-icon" style={{ top: '15%', left: '15%' }}>?</span>
        <span className="pattern-icon" style={{ top: '20%', left: '25%' }}>~</span>
        <span className="pattern-icon" style={{ top: '12%', left: '35%' }}>○</span>
        <span className="pattern-icon" style={{ top: '18%', left: '45%' }}>↗</span>
        <span className="pattern-icon" style={{ top: '25%', left: '55%' }}>2</span>
        <span className="pattern-icon" style={{ top: '15%', left: '65%' }}>?</span>
        <span className="pattern-icon" style={{ top: '20%', left: '75%' }}>~</span>
        <span className="pattern-icon" style={{ top: '10%', left: '85%' }}>○</span>
        <span className="pattern-icon" style={{ top: '18%', left: '95%' }}>↗</span>
        
        <span className="pattern-icon" style={{ top: '40%', left: '8%' }}>~</span>
        <span className="pattern-icon" style={{ top: '45%', left: '18%' }}>○</span>
        <span className="pattern-icon" style={{ top: '50%', left: '28%' }}>2</span>
        <span className="pattern-icon" style={{ top: '42%', left: '38%' }}>?</span>
        <span className="pattern-icon" style={{ top: '48%', left: '48%' }}>📊</span>
        <span className="pattern-icon" style={{ top: '55%', left: '58%' }}>~</span>
        <span className="pattern-icon" style={{ top: '45%', left: '68%' }}>○</span>
        <span className="pattern-icon" style={{ top: '50%', left: '78%' }}>↗</span>
        <span className="pattern-icon" style={{ top: '40%', left: '88%' }}>?</span>
        
        <span className="pattern-icon" style={{ top: '70%', left: '10%' }}>○</span>
        <span className="pattern-icon" style={{ top: '75%', left: '20%' }}>↗</span>
        <span className="pattern-icon" style={{ top: '80%', left: '30%' }}>?</span>
        <span className="pattern-icon" style={{ top: '72%', left: '40%' }}>~</span>
        <span className="pattern-icon" style={{ top: '78%', left: '50%' }}>2</span>
        <span className="pattern-icon" style={{ top: '85%', left: '60%' }}>📊</span>
        <span className="pattern-icon" style={{ top: '75%', left: '70%' }}>?</span>
        <span className="pattern-icon" style={{ top: '80%', left: '80%' }}>~</span>
        <span className="pattern-icon" style={{ top: '70%', left: '90%' }}>○</span>
      </div>
      
      <div style={styles.content}>
        <h2 style={styles.title}>Can't find what you fit with?</h2>
        <p style={styles.subtitle}>
          Get a customized plan & price that tailored to your special needs
        </p>
        <Link to="/demo" 
          className="demo-button"
          style={styles.button}
        >
          Book a Demo
        </Link>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'relative' as const,
    backgroundColor: '#000000',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '300px',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  backgroundPattern: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none' as const,
  },
  content: {
    position: 'relative' as const,
    zIndex: 1,
    textAlign: 'center' as const,
    maxWidth: '700px',
  },
  title: {
    color: '#ffffff',
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  subtitle: {
    color: '#b0b0b0',
    fontSize: '16px',
    marginBottom: '32px',
    lineHeight: '1.5',
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#ffffff',
    padding: '16px 40px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '30px',
    boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
  },
};

export default DemoPricing;
