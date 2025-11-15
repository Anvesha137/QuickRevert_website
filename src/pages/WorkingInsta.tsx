export default function WorkingInsta() {
  return (
    <>
      <style>{`
        .working-insta-container {
          width: 100%;
          min-height: 100vh;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .working-insta-content {
          max-width: 72rem;
          width: 100%;
        }

        .working-insta-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .working-insta-title {
          font-size: 3rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .working-insta-title-highlight {
          color: #10b981;
        }

        .working-insta-subtitle {
          color: #6b7280;
          font-size: 1.125rem;
        }

        .working-insta-steps {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .working-insta-steps {
            flex-direction: row;
            gap: 1rem;
          }
        }

        .working-insta-step {
          flex: 1;
          max-width: 20rem;
        }

        .working-insta-card {
          background-color: white;
          border-radius: 1rem;
          border: 2px solid #f3f4f6;
          padding: 2rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s;
        }

        .working-insta-card:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .working-insta-step-number-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .working-insta-step-number {
          width: 2.5rem;
          height: 2.5rem;
          background-color: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .working-insta-step-number-text {
          color: white;
          font-weight: bold;
          font-size: 1.125rem;
        }

        .working-insta-icons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .working-insta-icon-phone {
          width: 3rem;
          height: 3rem;
          background-color: #111827;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .working-insta-icon-phone-inner {
          width: 2rem;
          height: 2.5rem;
          background-color: white;
          border-radius: 0.125rem;
        }

        .working-insta-icon-instagram {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .working-insta-chat-bubble {
          width: 3rem;
          height: 2.5rem;
          background-color: #e5e7eb;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .working-insta-chat-dots {
          display: flex;
          gap: 0.25rem;
        }

        .working-insta-chat-dot {
          width: 0.375rem;
          height: 0.375rem;
          background-color: #9ca3af;
          border-radius: 50%;
        }

        .working-insta-emoji {
          font-size: 2.25rem;
        }

        .working-insta-text {
          text-align: center;
        }

        .working-insta-card-title {
          color: #111827;
          font-weight: 600;
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }

        .working-insta-card-description {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .working-insta-arrow {
          display: none;
        }

        @media (min-width: 768px) {
          .working-insta-arrow {
            display: block;
          }
        }

        @media (max-width: 767px) {
          .working-insta-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <div id="working-insta" className="working-insta-container">
        <div className="working-insta-content">
          {/* Header */}
          <div className="working-insta-header">
            <h1 className="working-insta-title">
              Here's How <span className="working-insta-title-highlight">QuickRevert</span> Works
            </h1>
            <p className="working-insta-subtitle">Simple setup, powerful results</p>
          </div>

          {/* Steps Container */}
          <div className="working-insta-steps">
            {/* Step 1 */}
            <div className="working-insta-step">
              <div className="working-insta-card">
                {/* Step Number */}
                <div className="working-insta-step-number-container">
                  <div className="working-insta-step-number">
                    <span className="working-insta-step-number-text">1</span>
                  </div>
                </div>

                {/* Icons */}
                <div className="working-insta-icons">
                  <div className="working-insta-icon-phone">
                    <div className="working-insta-icon-phone-inner"></div>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 10L6 10M14 10L10 6M14 10L10 14"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="working-insta-icon-instagram">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="6" y="6" width="12" height="12" rx="3" fill="none" stroke="white" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" fill="none" stroke="white" strokeWidth="2" />
                      <circle cx="17" cy="7" r="1" fill="white" />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className="working-insta-text">
                  <h3 className="working-insta-card-title">
                    QuickRevert connects to your Instagram
                  </h3>
                  <p className="working-insta-card-description">
                    Connects to your current IG account
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="working-insta-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="working-insta-step">
              <div className="working-insta-card">
                {/* Step Number */}
                <div className="working-insta-step-number-container">
                  <div className="working-insta-step-number">
                    <span className="working-insta-step-number-text">2</span>
                  </div>
                </div>

                {/* Icons - Chat Bubbles */}
                <div className="working-insta-icons">
                  <div className="working-insta-chat-bubble">
                    <div className="working-insta-chat-dots">
                      <div className="working-insta-chat-dot"></div>
                      <div className="working-insta-chat-dot"></div>
                      <div className="working-insta-chat-dot"></div>
                    </div>
                  </div>
                  <div className="working-insta-chat-bubble">
                    <div className="working-insta-chat-dots">
                      <div className="working-insta-chat-dot"></div>
                      <div className="working-insta-chat-dot"></div>
                      <div className="working-insta-chat-dot"></div>
                    </div>
                  </div>
                  <div className="working-insta-chat-bubble">
                    <div className="working-insta-chat-dots">
                      <div className="working-insta-chat-dot"></div>
                      <div className="working-insta-chat-dot"></div>
                      <div className="working-insta-chat-dot"></div>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="working-insta-text">
                  <h3 className="working-insta-card-title">
                    Conversations start automatically
                  </h3>
                  <p className="working-insta-card-description">
                    Responds instantly to every ad click
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="working-insta-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="working-insta-step">
              <div className="working-insta-card">
                {/* Step Number */}
                <div className="working-insta-step-number-container">
                  <div className="working-insta-step-number">
                    <span className="working-insta-step-number-text">3</span>
                  </div>
                </div>

                {/* Icons - Fire and People */}
                <div className="working-insta-icons">
                  <div className="working-insta-emoji">🔥</div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 10L6 10M14 10L10 6M14 10L10 14"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="working-insta-emoji">👥</div>
                </div>

                {/* Text */}
                <div className="working-insta-text">
                  <h3 className="working-insta-card-title">
                    Hot leads get handed to your team
                  </h3>
                  <p className="working-insta-card-description">
                    Qualified prospects ready for human sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
