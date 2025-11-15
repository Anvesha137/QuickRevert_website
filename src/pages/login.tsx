import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/image.png',
      text: 'Gain actionable insights with real-time analytics to improve your campaigns and maximize ROI.',
    },
    {
      image: '/image.png',
      text: 'Gain actionable insights with real-time analytics to improve your campaigns and maximize ROI.',
    },
    {
      image: '/image.png',
      text: 'Gain actionable insights with real-time analytics to improve your campaigns and maximize ROI.',
    },
    {
      image: '/image.png',
      text: 'Gain actionable insights with real-time analytics to improve your campaigns and maximize ROI.',
    },
    {
      image: '/image.png',
      text: 'Gain actionable insights with real-time analytics to improve your campaigns and maximize ROI.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div style={styles.container}>
      <style>{`
        .nav-button {
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
        }
        
        .nav-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .login-button {
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .login-button:hover {
          background-color: #45a049;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }
        
        .input-field {
          transition: all 0.2s ease;
        }
        
        .input-field:focus {
          outline: none;
          border-color: #4caf50;
        }
        
        .forgot-link {
          transition: color 0.2s ease;
          text-decoration: none;
        }
        
        .forgot-link:hover {
          color: #45a049;
        }
        
        .eye-icon {
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        
        .eye-icon:hover {
          opacity: 0.7;
        }
        
        .dot {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .dot:hover {
          transform: scale(1.2);
        }
      `}</style>

      {/* Left Side - Carousel */}
      <div style={styles.leftSide}>
        <div style={styles.carouselContainer}>
          <button
            className="nav-button"
            style={styles.navButton}
            onClick={prevSlide}
          >
            ‹
          </button>

          <div style={styles.slideContent}>
            <div style={styles.imageContainer}>
              <img
                src={slides[currentSlide].image}
                alt="Dashboard Analytics"
                style={styles.dashboardImage}
              />
            </div>
            <p style={styles.slideText}>{slides[currentSlide].text}</p>
            
            <div style={styles.dotsContainer}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  className="dot"
                  style={{
                    ...styles.dot,
                    ...(index === currentSlide ? styles.dotActive : {}),
                  }}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          <button
            className="nav-button"
            style={styles.navButton}
            onClick={nextSlide}
          >
            ›
          </button>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={styles.rightSide}>
        <div style={styles.formContainer}>
          {/* Logo */}
          <div style={styles.logoContainer}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#4caf50" opacity="0.2"/>
                  <path
                    d="M20 8C13.4 8 8 13.4 8 20C8 26.6 13.4 32 20 32C26.6 32 32 26.6 32 20C32 13.4 26.6 8 20 8ZM24 22L18 26V14L24 18V22Z"
                    fill="#4caf50"
                  />
                </svg>
              </div>
              <span style={styles.logoText}>
                <span style={styles.logoTextBold}>Quick</span>Revert.tech
              </span>
            </div>
          </div>

          {/* Welcome Text */}
          <h1 style={styles.welcomeText}>Welcome back!</h1>

          {/* Login Form */}
          <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                className="input-field"
                style={styles.input}
                placeholder="e.g. your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <div style={styles.passwordContainer}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input-field"
                  style={styles.input}
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="eye-icon"
                  style={styles.eyeIcon}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </span>
              </div>
            </div>

            <div style={styles.forgotPasswordContainer}>
              <a
                href="#"
                className="forgot-link"
                style={styles.forgotLink}
                onClick={(e) => e.preventDefault()}
              >
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              className="login-button"
              style={styles.loginButton}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  leftSide: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '40px',
  },
  navButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  slideContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    maxWidth: '600px',
    padding: '0 40px',
  },
  imageContainer: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  dashboardImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  slideText: {
    color: '#b0b0b0',
    fontSize: '16px',
    textAlign: 'center' as const,
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  dotsContainer: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  dotActive: {
    backgroundColor: '#4caf50',
    width: '24px',
    borderRadius: '4px',
  },
  rightSide: {
    flex: 1,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
  },
  logoContainer: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logoIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '24px',
    color: '#000000',
    fontWeight: '400',
  },
  logoTextBold: {
    fontWeight: '700',
  },
  welcomeText: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '32px',
    textAlign: 'center' as const,
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333333',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    boxSizing: 'border-box' as const,
  },
  passwordContainer: {
    position: 'relative' as const,
  },
  eyeIcon: {
    position: 'absolute' as const,
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '18px',
  },
  forgotPasswordContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '-8px',
  },
  forgotLink: {
    color: '#4caf50',
    fontSize: '14px',
    fontWeight: '500',
  },
  loginButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#4caf50',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    marginTop: '8px',
  },
};

export default Login;