import React from 'react';

const HomeIntegration: React.FC = () => {
  const column1 = [
    { name: 'Shopify', icon: '🛍️', color: '#95BF47' },
    { name: 'Razorpay', icon: '💳', color: '#0C2654' },
    { name: 'Zoho CRM', icon: '🔗', color: '#E42527' },
    { name: 'Google Drive', icon: '📁', color: '#4285F4' },
    { name: 'Stripe', icon: '💰', color: '#635BFF' },
    { name: 'HubSpot', icon: '🎯', color: '#FF7A59' },
  ];

  const column2 = [
    { name: 'Mailchimp', icon: '📨', color: '#FFE01B' },
    { name: 'Zapier', icon: '⚡', color: '#FF4A00' },
    { name: 'Slack', icon: '💬', color: '#4A154B' },
    { name: 'Google Sheets', icon: '📈', color: '#0F9D58' },
    { name: 'Dropbox', icon: '📦', color: '#0061FF' },
    { name: 'Salesforce', icon: '☁️', color: '#00A1E0' },
  ];

  const column3 = [
    { name: 'Notion', icon: '📝', color: '#000000' },
    { name: 'Airtable', icon: '🗂️', color: '#FCB400' },
    { name: 'Asana', icon: '✓', color: '#F06A6A' },
    { name: 'Trello', icon: '📋', color: '#0079BF' },
    { name: 'ClickUp', icon: '✅', color: '#7B68EE' },
    { name: 'Monday', icon: '📅', color: '#FF6D00' },
  ];

  return (
    <>
      <style>{`
        .home-integration-wrapper {
          background: linear-gradient(135deg, #1e4620 0%, #2d5a2e 100%);
          padding: 60px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        }

        .home-integration-container {
          max-width: 1200px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .home-integration-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
        }

        .home-integration-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .home-integration-heading {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.2;
        }

        .home-integration-description {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        .home-integration-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background-color: #22c55e;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .home-integration-button:hover {
          background-color: #16a34a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        }

        .home-integration-button svg {
          width: 16px;
          height: 16px;
          stroke: white;
          stroke-width: 2;
        }

        .home-integration-right {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .integration-columns {
          display: flex;
          gap: 15px;
          height: 100%;
        }

        .integration-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
          animation: scrollUp 20s linear infinite;
        }

        .integration-column:nth-child(1) {
          animation-duration: 20s;
          margin-top: 0;
        }

        .integration-column:nth-child(2) {
          animation: scrollDown 25s linear infinite;
          animation-delay: -5s;
          margin-top: 0;
        }

        .integration-column:nth-child(3) {
          animation-duration: 30s;
          animation-delay: -10s;
          margin-top: 0;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .integration-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.7;
          filter: grayscale(100%);
        }

        .integration-logo:hover {
          opacity: 1;
          filter: grayscale(0%);
          transform: scale(1.1);
        }

        .integration-logo-icon {
          font-size: 24px;
        }

        .integration-logo-text {
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
        }

        @media (max-width: 968px) {
          .home-integration-container {
            padding: 30px;
          }

          .home-integration-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .home-integration-heading {
            font-size: 36px;
          }

          .home-integration-description {
            font-size: 16px;
          }

          .home-integration-right {
            height: 250px;
          }

          .integration-columns {
            gap: 10px;
          }
        }

        @media (max-width: 640px) {
          .home-integration-wrapper {
            padding: 40px 16px;
          }

          .home-integration-container {
            padding: 24px;
          }

          .home-integration-heading {
            font-size: 32px;
          }

          .home-integration-button {
            width: 100%;
            justify-content: center;
          }

          .integration-columns {
            gap: 6px;
          }

          .integration-logo-icon {
            font-size: 20px;
          }

          .integration-logo-text {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="home-integration-wrapper">
        <div className="home-integration-container">
          <div className="home-integration-content">
            <div className="home-integration-left">
              <h2 className="home-integration-heading">Integrations</h2>
              <p className="home-integration-description">
                Link your existing apps, handle more processes for seamless marketing flow
              </p>
              <button className="home-integration-button">
                View All
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="home-integration-right">
              <div className="integration-columns">
                <div className="integration-column">
                  {column1.map((integration, index) => (
                    <div key={index} className="integration-logo">
                      <span className="integration-logo-icon">{integration.icon}</span>
                      <span className="integration-logo-text" style={{ color: integration.color }}>
                        {integration.name}
                      </span>
                    </div>
                  ))}
                  {/* Duplicate for seamless looping */}
                  {column1.map((integration, index) => (
                    <div key={'duplicate-' + index} className="integration-logo">
                      <span className="integration-logo-icon">{integration.icon}</span>
                      <span className="integration-logo-text" style={{ color: integration.color }}>
                        {integration.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="integration-column">
                  {column2.map((integration, index) => (
                    <div key={index} className="integration-logo">
                      <span className="integration-logo-icon">{integration.icon}</span>
                      <span className="integration-logo-text" style={{ color: integration.color }}>
                        {integration.name}
                      </span>
                    </div>
                  ))}
                  {/* Duplicate for seamless looping */}
                  {column2.map((integration, index) => (
                    <div key={'duplicate-' + index} className="integration-logo">
                      <span className="integration-logo-icon">{integration.icon}</span>
                      <span className="integration-logo-text" style={{ color: integration.color }}>
                        {integration.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="integration-column">
                  {column3.map((integration, index) => (
                    <div key={index} className="integration-logo">
                      <span className="integration-logo-icon">{integration.icon}</span>
                      <span className="integration-logo-text" style={{ color: integration.color }}>
                        {integration.name}
                      </span>
                    </div>
                  ))}
                  {/* Duplicate for seamless looping */}
                  {column3.map((integration, index) => (
                    <div key={'duplicate-' + index} className="integration-logo">
                      <span className="integration-logo-icon">{integration.icon}</span>
                      <span className="integration-logo-text" style={{ color: integration.color }}>
                        {integration.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIntegration;