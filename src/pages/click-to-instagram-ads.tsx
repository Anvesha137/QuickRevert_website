import React, { useEffect } from 'react';
import ProblemInsta from './problemInsta';
import WorkingInsta from './WorkingInsta';
import ProspectsInsta from './ProspectsInsta';
import UseCaseInsta from './useCaseInsta';
import Footer from '../components/footer';

export default function ClickToInstagramAdsRoute() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('.instagram-ads-navbar-link');
      if (target && target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
          
          // Update active link
          document.querySelectorAll('.instagram-ads-navbar-link').forEach(link => {
            link.classList.remove('active');
          });
          target.classList.add('active');
        }
      }
    };

    const handleScroll = () => {
      const sections = [
        { id: 'how-it-works', link: 'a[href="#how-it-works"]' },
        { id: 'working-insta', link: 'a[href="#working-insta"]' },
        { id: 'use-case-insta', link: 'a[href="#use-case-insta"]' }
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          document.querySelectorAll('.instagram-ads-navbar-link').forEach(link => {
            link.classList.remove('active');
          });
          const activeLink = document.querySelector(sections[i].link);
          if (activeLink) {
            activeLink.classList.add('active');
          }
          break;
        }
      }
    };

    const navbarMenu = document.querySelector('.instagram-ads-navbar-menu');
    if (navbarMenu) {
      navbarMenu.addEventListener('click', handleSmoothScroll);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (navbarMenu) {
        navbarMenu.removeEventListener('click', handleSmoothScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .instagram-ads-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2.5rem;
          background-color: white;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .instagram-ads-navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .instagram-ads-navbar-logo {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
        }

        .instagram-ads-navbar-logo-text {
          font-size: 1.25rem;
          color: #1a202c;
        }

        .instagram-ads-navbar-logo-quick {
          font-weight: 700;
        }

        .instagram-ads-navbar-logo-reply {
          font-weight: 400;
        }

        .instagram-ads-navbar-logo-ai {
          font-weight: 400;
          color: #10b981;
        }

        .instagram-ads-navbar-menu {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
        }

        .instagram-ads-navbar-link {
          color: #4a5568;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .instagram-ads-navbar-link:hover {
          color: #10b981;
        }

        .instagram-ads-navbar-link.active {
          color: #10b981;
          font-weight: 600;
        }

        .instagram-ads-navbar-cta {
          padding: 0.625rem 1.5rem;
          background-color: #10b981;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .instagram-ads-navbar-cta:hover {
          background-color: #059669;
        }

        .instagram-ads-navbar-mobile-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #1a202c;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .instagram-ads-navbar {
            padding: 1rem 1.5rem;
          }

          .instagram-ads-navbar-menu {
            display: none;
          }

          .instagram-ads-navbar-mobile-toggle {
            display: block;
          }
        }

        .instagram-ads-container {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          padding: 3rem 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .instagram-ads-content {
          max-width: 900px;
          text-align: center;
          animation: fadeIn 0.8s ease-out;
        }

        .instagram-ads-badges {
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .instagram-ads-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .instagram-ads-badge-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .instagram-ads-badge-dot.blue {
          background-color: #3b82f6;
        }

        .instagram-ads-badge-dot.green {
          background-color: #10b981;
        }

        .instagram-ads-heading {
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.2;
          margin-bottom: 2.5rem;
          color: #1a202c;
        }

        .instagram-ads-heading-normal {
          font-weight: 700;
        }

        .instagram-ads-heading-instagram {
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .instagram-ads-heading-ads {
          font-weight: 700;
          color: #f97316;
        }

        .instagram-ads-heading-conversations {
          font-weight: 700;
          color: #10b981;
        }

        .instagram-ads-transformation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .instagram-ads-pill {
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-size: 0.95rem;
        }

        .instagram-ads-pill.before {
          background-color: #e5e7eb;
          color: #6b7280;
        }

        .instagram-ads-pill.after {
          background-color: #dbeafe;
          color: #2563eb;
        }

        .instagram-ads-arrow {
          color: #9ca3af;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .instagram-ads-cta {
          display: inline-block;
          padding: 1rem 2rem;
          background-color: #10b981;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .instagram-ads-cta:hover {
          background-color: #059669;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .instagram-ads-cta:active {
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .instagram-ads-badges {
            gap: 1rem;
          }

          .instagram-ads-badge {
            font-size: 0.8rem;
          }

          .instagram-ads-transformation {
            flex-direction: column;
            gap: 0.75rem;
          }

          .instagram-ads-arrow {
            transform: rotate(90deg);
          }

          .instagram-ads-pill {
            font-size: 0.85rem;
            padding: 0.6rem 1.2rem;
          }

          .instagram-ads-cta {
            font-size: 0.9rem;
            padding: 0.875rem 1.75rem;
          }
        }
      `}</style>

      <nav className="instagram-ads-navbar">
        <a href="/" className="instagram-ads-navbar-brand">
          <img src="/logo.png" alt="QuickRevert Logo" className="instagram-ads-navbar-logo" />
          <span className="instagram-ads-navbar-logo-text">
            <span className="instagram-ads-navbar-logo-quick">Quick</span>
            <span className="instagram-ads-navbar-logo-reply">Revert</span>
            <span className="instagram-ads-navbar-logo-ai">.tech</span>
          </span>
        </a>

        <ul className="instagram-ads-navbar-menu">
          <li>
            <a href="#how-it-works" className="instagram-ads-navbar-link active">
              Problem Being Solved
            </a>
          </li>
          <li>
            <a href="#working-insta" className="instagram-ads-navbar-link">
              How It Works
            </a>
          </li>
          <li>
            <a href="#use-case-insta" className="instagram-ads-navbar-link">
              Industries
            </a>
          </li>
        </ul>

        <button className="instagram-ads-navbar-cta" onClick={() => window.open('https://calendar.app.google/orpwRaFJTA89LfbG6', '_blank')}>
          Enroll for Program
        </button>

        <button className="instagram-ads-navbar-mobile-toggle" onClick={() => alert('Mobile menu')}>
          ☰
        </button>
      </nav>

      <div className="instagram-ads-container">
        <div className="instagram-ads-content">
          <div className="instagram-ads-badges">
            <div className="instagram-ads-badge">
              <div className="instagram-ads-badge-dot blue"></div>
              <span>Meta Business Partner</span>
            </div>
            <div className="instagram-ads-badge">
              <div className="instagram-ads-badge-dot green"></div>
              <span>Works with any CRM</span>
            </div>
          </div>

          <h1 className="instagram-ads-heading">
            <span className="instagram-ads-heading-normal">Your </span>
            <span className="instagram-ads-heading-instagram">Instagram</span>{' '}
            <span className="instagram-ads-heading-ads">Ads</span>{' '}
            <span className="instagram-ads-heading-normal">Are Getting Clicks.</span>
            <br />
            <span className="instagram-ads-heading-normal">Now Get </span>
            <span className="instagram-ads-heading-conversations">Conversations</span>
          </h1>

          <div className="instagram-ads-transformation">
            <div className="instagram-ads-pill before">
              Hoping prospects will convert
            </div>
            <div className="instagram-ads-arrow">→</div>
            <div className="instagram-ads-pill after">
              Actively nurturing through Instagram conversations
            </div>
          </div>

          <button 
            className="instagram-ads-cta"
            onClick={() => window.open('https://calendar.app.google/orpwRaFJTA89LfbG6', '_blank')}
          >
            Show me how this works for my business
          </button>
        </div>
      </div>
      <div style={{ marginTop: '4rem' }}>
        <ProblemInsta />
      </div>
      <div style={{ marginTop: '4rem' }}>
        <WorkingInsta />
      </div>
      <div style={{ marginTop: '4rem' }}>
        <ProspectsInsta />
      </div>
      <div style={{ marginTop: '4rem' }}>
        <UseCaseInsta />
      </div>
      <div style={{ marginTop: '4rem' }}>
        <Footer />
      </div>
    </>
  );
}