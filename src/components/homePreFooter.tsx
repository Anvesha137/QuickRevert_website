import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePreFooter() {
  return (
    <>
      <style>{`
        .pre-footer-container {
          width: 100%;
          background-color: #5FD068;
          padding: 64px 24px;
        }

        .pre-footer-wrapper {
          max-width: 1152px;
          margin: 0 auto;
        }

        .pre-footer-card {
          background-color: white;
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .pre-footer-heading {
          font-size: 36px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .pre-footer-text {
          font-size: 18px;
          color: #6B7280;
          margin-bottom: 32px;
          max-width: 672px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .pre-footer-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #5FD068;
          color: white;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .pre-footer-button:hover {
          background-color: #4EC057;
        }

        .pre-footer-arrow {
          width: 20px;
          height: 20px;
        }

        @media (min-width: 768px) {
          .pre-footer-container {
            padding: 80px 24px;
          }

          .pre-footer-card {
            padding: 64px 64px;
          }

          .pre-footer-heading {
            font-size: 42px;
          }

          .pre-footer-text {
            font-size: 20px;
          }
        }

        @media (min-width: 1024px) {
          .pre-footer-heading {
            font-size: 48px;
          }
        }
      `}</style>

      <div className="pre-footer-container">
        <div className="pre-footer-wrapper">
          <div className="pre-footer-card">
            <h2 className="pre-footer-heading">
              Turn first time visitors into repeat customers
              <br />
              with WhatsApp marketing
            </h2>
            
            <p className="pre-footer-text">
              Automate all your WhatsApp marketing efforts to acquire and retain customers.
            </p>
            
            <Link to="/demo" className="pre-footer-button">
              Book a Demo
              <svg 
                className="pre-footer-arrow" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
