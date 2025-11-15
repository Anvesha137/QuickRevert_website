import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-container {
          width: 100%;
          background-color: #000000;
          color: #ffffff;
          padding: 48px 24px 24px;
        }

        .footer-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-top {
          text-align: center;
          margin-bottom: 48px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .footer-logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #5FD068 0%, #4EC057 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
        }

        .footer-logo-text {
          font-size: 24px;
          font-weight: 700;
        }

        .footer-logo-text-quick {
          color: #ffffff;
        }

        .footer-logo-text-reply {
          color: #9CA3AF;
        }

        .footer-tagline {
          font-size: 14px;
          color: #9CA3AF;
          margin-bottom: 24px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-bottom: 48px;
        }

        .footer-column {
          margin-bottom: 24px;
        }

        .footer-column-title {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .footer-column-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          color: #9CA3AF;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-link:hover {
          color: #5FD068;
        }

        .footer-badge-new {
          background-color: #5FD068;
          color: #ffffff;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 600;
        }

        .footer-bottom {
          border-top: 1px solid #1F2937;
          padding-top: 24px;
          margin-top: 24px;
        }

        .footer-bottom-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
          margin-bottom: 24px;
        }

        .footer-bottom-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          font-size: 12px;
          color: #9CA3AF;
        }

        .footer-bottom-link {
          color: #9CA3AF;
          text-decoration: none;
        }

        .footer-bottom-link:hover {
          color: #5FD068;
        }

        .footer-certifications {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .footer-cert-badge {
          background-color: #ffffff;
          padding: 8px 12px;
          border-radius: 8px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-copyright {
          font-size: 11px;
          color: #6B7280;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .footer-social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #5FD068;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .footer-social-icon:hover {
          background-color: #4EC057;
        }

        .footer-social-icon svg {
          width: 18px;
          height: 18px;
          fill: #ffffff;
        }

        @media (min-width: 768px) {
          .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-links {
            grid-template-columns: repeat(5, 1fr);
          }

          .footer-bottom-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      `}</style>

      <footer className="footer-container">
        <div className="footer-wrapper">
          {/* Top Section */}
          <div className="footer-top">
            <div className="footer-logo">
              <img src="/logo.png" alt="QuickRevert Logo" className="h-8" />
              <div className="footer-logo-text">
                <span className="footer-logo-text-quick">Quick</span>
                <span className="footer-logo-text-reply">Revert.tech</span>
              </div>
            </div>
            <p className="footer-tagline">
              We help online stores execute full funnel customer interactions so that they can focus on providing great products and services to their customers.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links">
            {/* Company */}
            <div className="footer-column">
              <h3 className="footer-column-title">Company</h3>
              <div className="footer-column-links">
                <a href="#" className="footer-link">About Us</a>
                <a href="#" className="footer-link">Contact Us</a>
                <Link to="/demo" className="footer-link">Book a Demo</Link>
                <a href="#" className="footer-link">Become a Partner</a>
                <a href="#" className="footer-link">Pricing</a>
                <a href="#" className="footer-link">Whitelabel</a>
                <a href="#" className="footer-link">Login</a>
              </div>
            </div>

            {/* Features */}
            <div className="footer-column">
              <h3 className="footer-column-title">Features</h3>
              <div className="footer-column-links">
                <a href="#" className="footer-link">WhatsApp Broadcast</a>
                <a href="#" className="footer-link">Product Retargeting</a>
                <a href="#" className="footer-link">Drip Campaigns</a>
                <a href="#" className="footer-link">E-Commerce Bots</a>
                <a href="#" className="footer-link">CRM for e-Commerce</a>
                <a href="#" className="footer-link">Multi-Agent Platform</a>
                <a href="#" className="footer-link">Abandoned Cart Recovery</a>
                <a href="#" className="footer-link">WhatsApp Analytics</a>
                <a href="#" className="footer-link">AI Chatbot</a>
                <a href="#" className="footer-link">Live Software</a>
                <a href="#" className="footer-link">Bulk Marketing</a>
              </div>
            </div>

            {/* Use Cases */}
            <div className="footer-column">
              <h3 className="footer-column-title">Use Cases</h3>
              <div className="footer-column-links">
                <a href="#" className="footer-link">WhatsApp Automation Tool</a>
                <a href="#" className="footer-link">WhatsApp WABA Salesforce</a>
                <a href="#" className="footer-link">Automated Marketing Flows</a>
                <a href="#" className="footer-link">Automate Real Estate Flows</a>
                <a href="#" className="footer-link">
                  Automate Restaurants Flows
                  <span className="footer-badge-new">NEW</span>
                </a>
                <a href="#" className="footer-link">Automate Appointment Booking</a>
                <a href="#" className="footer-link">WhatsApp Marketing Software</a>
                <a href="#" className="footer-link">WhatsApp Marketing Automation</a>
                <a href="#" className="footer-link">Zoho CRM WhatsApp Integration</a>
                <a href="#" className="footer-link">WhatsApp for Businesses</a>
                <a href="#" className="footer-link">WhatsApp Chatbot Automation</a>
              </div>
            </div>

            {/* Industries */}
            <div className="footer-column">
              <h3 className="footer-column-title">Industries</h3>
              <div className="footer-column-links">
                <a href="#" className="footer-link">Beauty and Cosmetics</a>
                <a href="#" className="footer-link">Electronics and Appliances</a>
                <a href="#" className="footer-link">Fashion & Apparel</a>
                <a href="#" className="footer-link">Food & Beverage</a>
                <a href="#" className="footer-link">Health & Wellness</a>
                <a href="#" className="footer-link">Education</a>
                <a href="#" className="footer-link">
                  Real Estate
                  <span className="footer-badge-new">NEW</span>
                </a>
                <a href="#" className="footer-link">
                  Automotive
                  <span className="footer-badge-new">NEW</span>
                </a>
                <a href="#" className="footer-link">Travel</a>
                <a href="#" className="footer-link">Training Service</a>
                <a href="#" className="footer-link">Eye Wear</a>
                <a href="#" className="footer-link">Stationery</a>
                <a href="#" className="footer-link">Interior</a>
                <a href="#" className="footer-link">Pharmacy</a>
                <a href="#" className="footer-link">Speciality Food</a>
                <a href="#" className="footer-link">Jewellery</a>
                <a href="#" className="footer-link">Gyms</a>
                <a href="#" className="footer-link">Coaching</a>
              </div>
            </div>

            {/* Compare & Resources & Integrations */}
            <div className="footer-column">
              <h3 className="footer-column-title">Compare</h3>
              <div className="footer-column-links">
                <a href="#" className="footer-link">with Interakt</a>
                <a href="#" className="footer-link">with Wati</a>
                <a href="#" className="footer-link">with DelightChat</a>
                <a href="#" className="footer-link">with SuperLemon</a>
                <a href="#" className="footer-link">with Limechat</a>
                <a href="#" className="footer-link">with Zoko</a>
                <a href="#" className="footer-link">with Centro</a>
                <a href="#" className="footer-link">with Birch</a>
              </div>

              <h3 className="footer-column-title" style={{marginTop: '32px'}}>Resources</h3>
              <div className="footer-column-links">
                <a href="#" className="footer-link">Case Studies</a>
                <a href="#" className="footer-link">Blogs</a>
                <a href="#" className="footer-link">Free WhatsApp Templates</a>
                <a href="#" className="footer-link">Product Updates</a>
                <a href="#" className="footer-link">E-books</a>
                <a href="#" className="footer-link">
                  FREE WhatsApp QR Code & Link
                  <span className="footer-badge-new">NEW</span>
                </a>
              </div>

              <h3 className="footer-column-title" style={{marginTop: '32px'}}>Integrations</h3>
              <div className="footer-column-links">
                <a href="#" className="footer-link">Shopify</a>
                <a href="#" className="footer-link">Zoho CRM</a>
                <a href="#" className="footer-link">Hubspot CRM</a>
                <a href="#" className="footer-link">LeadSquared CRM</a>
                <a href="#" className="footer-link">
                  Salesforce
                  <span className="footer-badge-new">NEW</span>
                </a>
                <a href="#" className="footer-link">Calendly</a>
                <a href="#" className="footer-link">All Integrations</a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-bottom-links">
                <span>© All rights reserved. 2025 - QuickRevert Private Limited</span>
                <a href="#" className="footer-bottom-link">QuickRevert Technologies India Private Limited</a>
                <a href="#" className="footer-bottom-link">EmirTech Technologies Private Limited</a>
                <a href="#" className="footer-bottom-link">Privacy Policy</a>
                <a href="#" className="footer-bottom-link">Terms of Service</a>
                <a href="#" className="footer-bottom-link">OSL</a>
              </div>
              <div className="footer-certifications">
                <div className="footer-cert-badge">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" fill="#003399"/>
                    <circle cx="20" cy="12" r="3" fill="#FFCC00"/>
                    <circle cx="16" cy="16" r="1.5" fill="#FFCC00"/>
                    <circle cx="24" cy="16" r="1.5" fill="#FFCC00"/>
                    <circle cx="13" cy="20" r="1.5" fill="#FFCC00"/>
                    <circle cx="20" cy="20" r="1.5" fill="#FFCC00"/>
                    <circle cx="27" cy="20" r="1.5" fill="#FFCC00"/>
                    <circle cx="16" cy="24" r="1.5" fill="#FFCC00"/>
                    <circle cx="24" cy="24" r="1.5" fill="#FFCC00"/>
                    <circle cx="20" cy="28" r="1.5" fill="#FFCC00"/>
                    <text x="20" y="35" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">GDPR</text>
                  </svg>
                </div>
                <div className="footer-cert-badge">
                  <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
                    <circle cx="25" cy="20" r="12" stroke="#0066CC" strokeWidth="2" fill="none"/>
                    <text x="25" y="24" textAnchor="middle" fill="#0066CC" fontSize="8" fontWeight="bold">SOC 2</text>
                  </svg>
                </div>
                <div className="footer-cert-badge">
                  <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
                    <rect x="10" y="5" width="30" height="30" stroke="#666666" strokeWidth="2" fill="none"/>
                    <text x="25" y="22" textAnchor="middle" fill="#666666" fontSize="10" fontWeight="bold">ISO</text>
                  </svg>
                </div>
              </div>
            </div>

            <div className="footer-copyright">
              FULL ADDR: QuickRevert operates through three entities: graded on geography and industry. QuickRevert Private Limited (parent company in Singapore), QuickRevert Technologies India Private Limited (a Public Limited Company incorporated and registered in state of Gujurat, India Private Limited, registered in state of Dubai, UAE). All the above entities are directly or indirectly owned by QuickRevert Private Limited, in state of Gujurat having CIN number U72900GJ2020PTC115524.
            </div>

            <div className="footer-social">
              <div className="footer-social-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM16.56 15.88C16.31 16.67 15.09 17.33 14.09 17.54C13.83 17.59 13.5 17.64 12.4 17.21C11.66 16.95 10.69 16.58 9.53 15.91C7.14 14.51 5.59 12.11 5.46 11.94C5.34 11.77 4.5 10.64 4.5 9.47C4.5 8.3 5.08 7.72 5.32 7.47C5.56 7.22 5.83 7.16 6 7.16C6.08 7.16 6.15 7.16 6.21 7.16C6.46 7.17 6.58 7.18 6.74 7.57C6.99 8.16 7.58 9.33 7.65 9.47C7.72 9.61 7.77 9.78 7.68 9.95C7.59 10.12 7.54 10.23 7.41 10.38C7.28 10.53 7.13 10.72 7.01 10.84C6.88 10.97 6.74 11.11 6.89 11.36C7.04 11.61 7.58 12.47 8.38 13.18C9.4 14.11 10.26 14.42 10.51 14.56C10.76 14.7 10.93 14.67 11.08 14.5C11.23 14.33 11.79 13.69 11.97 13.44C12.15 13.19 12.33 13.23 12.55 13.31C12.77 13.39 13.93 13.96 14.18 14.09C14.43 14.22 14.59 14.28 14.66 14.38C14.73 14.48 14.73 15.07 14.56 15.88Z"/>
                </svg>
              </div>
              <div className="footer-social-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.75 8.7C6.9 8.7 6.2 8 6.2 7.15C6.2 6.3 6.9 5.6 7.75 5.6C8.6 5.6 9.3 6.3 9.3 7.15C9.3 8 8.6 8.7 7.75 8.7ZM18 17H15.5V13.4C15.5 12.45 15.1 11.9 14.3 11.9C13.45 11.9 13 12.5 13 13.4V17H10.5V10H13V11.2C13 11.2 13.7 10 15.1 10C16.5 10 18 10.9 18 13V17Z"/>
                </svg>
              </div>
              <div className="footer-social-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
                </svg>
              </div>
              <div className="footer-social-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2ZM12 15.5C9.52 15.5 7.5 13.48 7.5 11C7.5 8.52 9.52 6.5 12 6.5C14.48 6.5 16.5 8.52 16.5 11C16.5 13.48 14.48 15.5 12 15.5ZM17.5 7C16.95 7 16.5 6.55 16.5 6C16.5 5.45 16.95 5 17.5 5C18.05 5 18.5 5.45 18.5 6C18.5 6.55 18.05 7 17.5 7Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}