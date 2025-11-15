import React, { useState } from 'react';

export default function SolutionDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        .solutions-dropdown-container {
          position: relative;
          display: inline-block;
        }

        .solutions-trigger {
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

        .solutions-trigger:hover {
          opacity: 0.8;
        }

        .solutions-chevron {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }

        .solutions-chevron.open {
          transform: rotate(180deg);
        }

        .solutions-panel {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 8px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          padding: 24px;
          min-width: 800px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease;
          z-index: 1000;
        }

        .solutions-panel.open {
          opacity: 1;
          visibility: visible;
        }

        .solutions-section {
          margin-bottom: 24px;
        }

        .solutions-section:last-child {
          margin-bottom: 0;
        }

        .solutions-section-title {
          font-size: 14px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 32px;
        }

        .solutions-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 0;
          text-decoration: none;
          color: #4B5563;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .solutions-item:hover {
          color: #5FD068;
        }

        .solutions-item:hover .solutions-icon {
          background-color: #E8F8EA;
        }

        .solutions-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background-color: #F3F4F6;
          transition: background-color 0.2s ease;
          flex-shrink: 0;
        }

        .solutions-icon svg {
          width: 18px;
          height: 18px;
          stroke: #5FD068;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .solutions-item-text {
          font-size: 14px;
          font-weight: 400;
        }

        .solutions-divider {
          height: 1px;
          background-color: #E5E7EB;
          margin: 20px 0;
        }
      `}</style>

      <div className="solutions-dropdown-container">
        <button 
          className="solutions-trigger"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          Solutions
          <svg 
            className={`solutions-chevron ${isOpen ? 'open' : ''}`}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div 
          className={`solutions-panel ${isOpen ? 'open' : ''}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* BY USECASE */}
          <div className="solutions-section">
            <h3 className="solutions-section-title">BY USECASE</h3>
            <div className="solutions-grid">
              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Abandoned Cart Recovery</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                </div>
                <span className="solutions-item-text">COD Orders to Prepaid</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                </div>
                <span className="solutions-item-text">Customer service and support</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Order alerts & notifications</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Product Launch</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Upselling Campaigns Whatsapp</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </div>
                <span className="solutions-item-text">WhatsApp broadcast marketing</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Whatsapp Chatbot</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Repeat Purchase & Win Back Customers</span>
              </a>
            </div>
          </div>

          <div className="solutions-divider"></div>

          {/* BY INDUSTRY */}
          <div className="solutions-section">
            <h3 className="solutions-section-title">BY INDUSTRY</h3>
            <div className="solutions-grid">
              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Beauty and cosmetics</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Electronics</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 3L4 9l6 6 4-4 6 6 2-6-6-6-4 4-6-6z"></path>
                    <path d="M14 17l-4 4H4"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Fashion and apparel</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                    <path d="M7 2v20"></path>
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Food and beverage</span>
              </a>

              <a href="#" className="solutions-item">
                <div className="solutions-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <span className="solutions-item-text">Health and Wellness</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}