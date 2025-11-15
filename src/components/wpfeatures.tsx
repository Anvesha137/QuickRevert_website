import React, { useState } from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

const WPFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState("multi-agent");

  // Define image paths
  const featureImages: Record<string, string> = {
    "multi-agent": "/Multi Agent.png",
    "pop-up": "/Whatsapp Pop-up.png",
    "revenue": "/Revenue Tracking.png",
    "click-to-whatsapp": "/Click-to-WhatsApp Ads.png"
  };

  const features: Record<string, Feature> = {
    "multi-agent": {
      id: "multi-agent",
      title: "Multi Agent Inbox",
      description: "",
      bulletPoints: [
        "One single inbox for all campaigns and conversations",
        "Get all your customer interactions for better campaign management and consumer communication",
      ],
    },
    "pop-up": {
      id: "pop-up",
      title: "Whatsapp Pop-up",
      description: "",
      bulletPoints: [
        "Engage visitors instantly with WhatsApp pop-ups",
        "Increase conversion rates with direct messaging",
      ],
    },
    revenue: {
      id: "revenue",
      title: "Revenue Tracking",
      description: "",
      bulletPoints: [
        "Track revenue from WhatsApp campaigns",
        "Monitor ROI and optimize your marketing spend",
      ],
    },
    "click-to-whatsapp": {
      id: "click-to-whatsapp",
      title: "Click-to-WhatsApp Ads",
      description: "",
      bulletPoints: [
        "Drive traffic directly to WhatsApp conversations",
        "Seamless integration with your ad campaigns",
      ],
    },
  };

  const tabs = [
    { id: "multi-agent", label: "Multi-Agent Inbox" },
    { id: "pop-up", label: "Whatsapp Pop-up" },
    { id: "revenue", label: "Revenue Tracking" },
    { id: "click-to-whatsapp", label: "Click-to-WhatsApp Ads" },
  ];

  const activeFeature = features[activeTab];

  return (
    <>
      <style>{`
        .wp-features-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        }

        .wp-features-heading {
          text-align: center;
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 32px;
          line-height: 1.2;
        }

        .wp-features-highlight {
          color: #22c55e;
        }

        .wp-features-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .wp-features-tab {
          padding: 12px 24px;
          border-radius: 50px;
          border: none;
          background-color: transparent;
          color: #22c55e;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .wp-features-tab:hover {
          background-color: #f0fdf4;
        }

        .wp-features-tab.active {
          background-color: #22c55e;
          color: white;
        }

        .wp-features-content {
          background: linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%);
          border-radius: 24px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .wp-features-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e5e7eb;
          border-radius: 12px;
          min-height: 300px;
        }

        .wp-features-placeholder-text {
          color: #9ca3af;
          font-size: 18px;
          text-align: center;
        }

        .wp-features-info {
          padding: 20px 0;
        }

        .wp-features-title {
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 24px;
        }

        .wp-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .wp-features-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          color: #4b5563;
          font-size: 16px;
          line-height: 1.6;
        }

        .wp-features-checkmark {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #dcfce7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }

        .wp-features-checkmark svg {
          width: 14px;
          height: 14px;
          stroke: #22c55e;
          stroke-width: 3;
        }

        @media (max-width: 768px) {
          .wp-features-heading {
            font-size: 32px;
          }

          .wp-features-content {
            grid-template-columns: 1fr;
            padding: 24px;
            gap: 24px;
          }

          .wp-features-image-container {
            order: -1;
            min-height: 200px;
          }

          .wp-features-title {
            font-size: 24px;
          }

          .wp-features-tabs {
            gap: 8px;
          }

          .wp-features-tab {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="wp-features-container">
        <h1 className="wp-features-heading">
          Unlock{" "}
          <span className="wp-features-highlight">
            10x Marketing Impact
          </span>{" "}
          with WhatsApp
        </h1>

        <div className="wp-features-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`wp-features-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="wp-features-content">
          <div className="wp-features-image-container">
            <img 
              src={featureImages[activeTab]} 
              alt={activeFeature.title}
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                borderRadius: '12px',
                objectFit: 'cover'
              }}
            />
          </div>

          <div className="wp-features-info">
            <h2 className="wp-features-title">
              {activeFeature.title}
            </h2>
            <ul className="wp-features-list">
              {activeFeature.bulletPoints.map(
                (point, index) => (
                  <li
                    key={index}
                    className="wp-features-list-item"
                  >
                    <div className="wp-features-checkmark">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{point}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WPFeatures;