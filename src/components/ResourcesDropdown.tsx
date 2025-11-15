import React, { useState } from 'react';

export default function ResourcesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        .resources-dropdown-container {
          position: relative;
          display: inline-block;
        }

        .resources-trigger {
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
          padding: 12px 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: opacity 0.2s ease;
        }

        .resources-trigger:hover {
          opacity: 0.8;
        }

        .resources-chevron {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }

        .resources-chevron.open {
          transform: rotate(180deg);
        }

        .resources-panel {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 8px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          padding: 0;
          min-width: 800px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease;
          z-index: 1000;
          overflow: hidden;
        }

        .resources-panel.open {
          opacity: 1;
          visibility: visible;
        }

        .resources-header {
          padding: 24px 32px;
          border-bottom: 1px solid #E5E7EB;
          background: #F9FAFB;
        }

        .resources-header-title {
          font-size: 14px;
          font-weight: 700;
          color: #374151;
          letter-spacing: 1px;
          margin: 0;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          padding: 16px;
        }

        .resources-item {
          display: flex;
          gap: 16px;
          padding: 20px 16px;
          text-decoration: none;
          color: inherit;
          transition: background-color 0.2s ease;
          cursor: pointer;
          border-radius: 8px;
        }

        .resources-item:hover {
          background-color: #F9FAFB;
        }

        .resources-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .resources-icon svg {
          width: 28px;
          height: 28px;
          stroke: #5FD068;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .resources-content {
          flex: 1;
        }

        .resources-item-title {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 6px;
        }

        .resources-item-description {
          font-size: 13px;
          color: #6B7280;
          line-height: 1.5;
        }
      `}</style>

      <div className="resources-dropdown-container">
        <button 
          className="resources-trigger"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          Resources
          <svg 
            className={`resources-chevron ${isOpen ? 'open' : ''}`}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div 
          className={`resources-panel ${isOpen ? 'open' : ''}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="resources-header">
            <h3 className="resources-header-title">RESOURCES</h3>
          </div>

          <div className="resources-grid">
            {/* Blogs */}
            <a href="#" className="resources-item">
              <div className="resources-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="resources-content">
                <div className="resources-item-title">Blogs</div>
                <div className="resources-item-description">
                  Checkout our extensive library of pre-designed WhatsApp Templates tailored for D2C brand...
                </div>
              </div>
            </a>

            {/* Documentation */}
            <a href="#" className="resources-item">
              <div className="resources-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
              </div>
              <div className="resources-content">
                <div className="resources-item-title">Documentation</div>
                <div className="resources-item-description">
                  Comprehensive guides and resources detailing the functionalities, best practices, and integratio...
                </div>
              </div>
            </a>

            {/* E-books */}
            <a href="#" className="resources-item">
              <div className="resources-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
              </div>
              <div className="resources-content">
                <div className="resources-item-title">E-books</div>
                <div className="resources-item-description">
                  Start transforming your WhatsApp marketing approach today — download our essential reads...
                </div>
              </div>
            </a>

            {/* WhatsApp Templates */}
            <a href="#" className="resources-item">
              <div className="resources-icon">
                <svg viewBox="0 0 24 24">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </div>
              <div className="resources-content">
                <div className="resources-item-title">WhatsApp Templates</div>
                <div className="resources-item-description">
                  Checkout our extensive library of pre-designed WhatsApp Templates tailored for D2C brand...
                </div>
              </div>
            </a>

            {/* Events */}
            <a href="#" className="resources-item">
              <div className="resources-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="resources-content">
                <div className="resources-item-title">Events</div>
                <div className="resources-item-description">
                  Join industry leaders and experts at the forefront of WhatsApp marketing. Empower your business...
                </div>
              </div>
            </a>

            {/* Contact Us */}
            <a href="#" className="resources-item">
              <div className="resources-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="resources-content">
                <div className="resources-item-title">Contact Us</div>
                <div className="resources-item-description">
                  Your queries and concerns matter to us. Reach out and discover how our team can make your...
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}