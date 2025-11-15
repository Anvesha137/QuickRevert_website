import React from 'react';

export default function ProblemInsta() {
  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .problem-insta-wrapper {
          background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
          padding: 5rem 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .problem-insta-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .problem-insta-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: slideUp 0.6s ease-out;
        }

        .problem-insta-header h2 {
          font-size: clamp(2rem, 4vw, 2.75rem);
          margin-bottom: 1rem;
          color: #1a202c;
        }

        .problem-insta-header-highlight {
          color: #10b981;
          font-weight: 700;
        }

        .problem-insta-header p {
          font-size: 1.15rem;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
        }

        .problem-insta-comparison {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 3rem;
          align-items: stretch;
          margin-bottom: 3rem;
        }

        .problem-insta-card {
          background: white;
          border-radius: 1.25rem;
          padding: 2.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: slideUp 0.8s ease-out;
        }

        .problem-insta-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .problem-insta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .problem-insta-card.current::before {
          background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);
        }

        .problem-insta-card.withqr::before {
          background: linear-gradient(90deg, #10b981 0%, #059669 100%);
        }

        .problem-insta-card-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 2rem;
        }

        .problem-insta-card-badge.current {
          background-color: #fef2f2;
          color: #dc2626;
        }

        .problem-insta-card-badge.withqr {
          background-color: #d1fae5;
          color: #059669;
        }

        .problem-insta-card-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .problem-insta-card-badge-dot.red {
          background-color: #dc2626;
        }

        .problem-insta-card-badge-dot.green {
          background-color: #059669;
        }

        .problem-insta-flow {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 2rem;
        }

        .problem-insta-step {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1rem 0;
        }

        .problem-insta-icon-wrapper {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .problem-insta-card.current .problem-insta-icon-wrapper {
          background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
        }

        .problem-insta-card.withqr .problem-insta-icon-wrapper {
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        }

        .problem-insta-step:hover .problem-insta-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .problem-insta-step-content {
          flex: 1;
        }

        .problem-insta-step-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 0.25rem;
        }

        .problem-insta-step-desc {
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.5;
        }

        .problem-insta-connector {
          width: 2px;
          height: 30px;
          margin-left: 30px;
          background: linear-gradient(180deg, #d1d5db 0%, #e5e7eb 100%);
          opacity: 0.5;
        }

        .problem-insta-result-box {
          margin-top: 1rem;
          padding: 1.5rem;
          border-radius: 1rem;
          text-align: center;
          position: relative;
        }

        .problem-insta-result-box.current {
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          border: 2px solid #fecaca;
        }

        .problem-insta-result-box.withqr {
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          border: 2px solid #a7f3d0;
        }

        .problem-insta-result-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .problem-insta-result-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .problem-insta-result-title.fail {
          color: #dc2626;
        }

        .problem-insta-result-title.success {
          color: #059669;
        }

        .problem-insta-result-stat {
          font-size: 0.9rem;
          color: #4b5563;
          font-weight: 500;
        }

        .problem-insta-vs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
        }

        .problem-insta-vs-badge {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: white;
          font-size: 1.1rem;
          box-shadow: 0 10px 15px -3px rgba(102, 126, 234, 0.3);
          border: 4px solid white;
        }

        .problem-insta-vs-line {
          width: 2px;
          height: 100px;
          background: linear-gradient(180deg, transparent 0%, #e5e7eb 50%, transparent 100%);
        }

        .problem-insta-bottom-cta {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 1.5rem;
          color: white;
          animation: slideUp 1s ease-out;
        }

        .problem-insta-bottom-cta h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }

        .problem-insta-bottom-cta p {
          font-size: 1.05rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .problem-insta-cta-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          background-color: white;
          color: #667eea;
          border: none;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .problem-insta-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 968px) {
          .problem-insta-wrapper {
            padding: 4rem 1.5rem;
          }

          .problem-insta-comparison {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .problem-insta-vs {
            flex-direction: row;
          }

          .problem-insta-vs-line {
            width: 100px;
            height: 2px;
          }

          .problem-insta-card {
            padding: 2rem;
          }

          .problem-insta-bottom-cta {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .problem-insta-step {
            gap: 1rem;
          }

          .problem-insta-icon-wrapper {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }

          .problem-insta-connector {
            margin-left: 25px;
          }

          .problem-insta-step-title {
            font-size: 1rem;
          }

          .problem-insta-step-desc {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <div className="problem-insta-wrapper">
        <div className="problem-insta-container">
          {/* Header */}
          <div id="how-it-works" className="problem-insta-header">
            <h2>
              The <span className="problem-insta-header-highlight">Problem</span> with Traditional Instagram Ads
            </h2>
            <p>
              Most businesses lose 97% of their ad clicks. Here's why, and how QuickRevert solves it.
            </p>
          </div>

          {/* Comparison Section */}
          <div className="problem-insta-comparison">
            {/* Current Flow */}
            <div className="problem-insta-card current">
              <div className="problem-insta-card-badge current">
                <div className="problem-insta-card-badge-dot red"></div>
                <span>TRADITIONAL APPROACH</span>
              </div>

              <div className="problem-insta-flow">
                <div className="problem-insta-step">
                  <div className="problem-insta-icon-wrapper">
                    📱
                  </div>
                  <div className="problem-insta-step-content">
                    <div className="problem-insta-step-title">Ad Click</div>
                    <div className="problem-insta-step-desc">User sees your ad and clicks</div>
                  </div>
                </div>

                <div className="problem-insta-connector"></div>

                <div className="problem-insta-step">
                  <div className="problem-insta-icon-wrapper">
                    🌐
                  </div>
                  <div className="problem-insta-step-content">
                    <div className="problem-insta-step-title">Redirected to Website</div>
                    <div className="problem-insta-step-desc">Takes them away from Instagram</div>
                  </div>
                </div>

                <div className="problem-insta-connector"></div>

                <div className="problem-insta-step">
                  <div className="problem-insta-icon-wrapper">
                    ⏳
                  </div>
                  <div className="problem-insta-step-content">
                    <div className="problem-insta-step-title">Browsing & Confusion</div>
                    <div className="problem-insta-step-desc">Gets lost, distracted, or leaves</div>
                  </div>
                </div>
              </div>

              <div className="problem-insta-result-box current">
                <div className="problem-insta-result-icon">😞</div>
                <div className="problem-insta-result-title fail">97% Lost Forever</div>
                <div className="problem-insta-result-stat">Only 2-3% convert into customers</div>
              </div>
            </div>

            {/* VS Badge */}
            <div className="problem-insta-vs">
              <div className="problem-insta-vs-line"></div>
              <div className="problem-insta-vs-badge">VS</div>
              <div className="problem-insta-vs-line"></div>
            </div>

            {/* With QuickRevert Flow */}
            <div className="problem-insta-card withqr">
              <div className="problem-insta-card-badge withqr">
                <div className="problem-insta-card-badge-dot green"></div>
                <span>WITH QUICKREPLY.AI</span>
              </div>

              <div className="problem-insta-flow">
                <div className="problem-insta-step">
                  <div className="problem-insta-icon-wrapper">
                    📱
                  </div>
                  <div className="problem-insta-step-content">
                    <div className="problem-insta-step-title">Ad Click</div>
                    <div className="problem-insta-step-desc">User sees your ad and clicks</div>
                  </div>
                </div>

                <div className="problem-insta-connector"></div>

                <div className="problem-insta-step">
                  <div className="problem-insta-icon-wrapper">
                    💬
                  </div>
                  <div className="problem-insta-step-content">
                    <div className="problem-insta-step-title">Instant DM Conversation</div>
                    <div className="problem-insta-step-desc">Stays in their comfort zone</div>
                  </div>
                </div>

                <div className="problem-insta-connector"></div>

                <div className="problem-insta-step">
                  <div className="problem-insta-icon-wrapper">
                    🤖
                  </div>
                  <div className="problem-insta-step-content">
                    <div className="problem-insta-step-title">AI Qualification</div>
                    <div className="problem-insta-step-desc">Answers questions & qualifies leads</div>
                  </div>
                </div>
              </div>

              <div className="problem-insta-result-box withqr">
                <div className="problem-insta-result-icon">🎉</div>
                <div className="problem-insta-result-title success">10x Better Results</div>
                <div className="problem-insta-result-stat">15-25% convert into qualified leads</div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="problem-insta-bottom-cta">
            <h3>Ready to Transform Your Instagram Ads?</h3>
            <p>Join hundreds of businesses already turning clicks into conversations</p>
            <button 
              className="problem-insta-cta-button"
              onClick={() => window.open('https://calendar.app.google/orpwRaFJTA89LfbG6', '_blank')}
            >
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
