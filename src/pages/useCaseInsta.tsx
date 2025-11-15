export default function UseCaseInsta() {
  return (
    <>
      <style>{`
        .usecase-insta-container {
          width: 100%;
          padding: 4rem 2rem;
          background-color: #f5f5f5;
        }

        .usecase-insta-content {
          max-width: 72rem;
          margin: 0 auto;
        }

        .usecase-insta-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .usecase-insta-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #374151;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .usecase-insta-title-highlight {
          color: #10b981;
        }

        .usecase-insta-subtitle {
          color: #9ca3af;
          font-size: 1rem;
        }

        .usecase-insta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .usecase-insta-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .usecase-insta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .usecase-card {
          background-color: white;
          border-radius: 1.5rem;
          padding: 2rem 1.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .usecase-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .usecase-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
          text-align: center;
        }

        .usecase-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .usecase-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.625rem;
          justify-content: center;
        }

        .usecase-tag {
          background-color: #d1fae5;
          color: #059669;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        @media (max-width: 767px) {
          .usecase-insta-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div id="use-case-insta" className="usecase-insta-container">
        <div className="usecase-insta-content">
          {/* Header */}
          <div className="usecase-insta-header">
            <h2 className="usecase-insta-title">
              Works best with industries where buyers{' '}
              <span className="usecase-insta-title-highlight">
                ask lots of questions
              </span>{' '}
              before they buy
            </h2>
            <p className="usecase-insta-subtitle">
              QuickRevert adapts to your industry and objectives
            </p>
          </div>

          {/* Grid of Industry Cards */}
          <div className="usecase-insta-grid">
            {/* Real Estate */}
            <div className="usecase-card">
              <span className="usecase-icon">🏡</span>
              <h3 className="usecase-title">Real Estate</h3>
              <div className="usecase-tags">
                <span className="usecase-tag">Property inquiries</span>
                <span className="usecase-tag">Viewing schedules</span>
                <span className="usecase-tag">Market questions</span>
              </div>
            </div>

            {/* Financial Services */}
            <div className="usecase-card">
              <span className="usecase-icon">💰</span>
              <h3 className="usecase-title">Financial Services</h3>
              <div className="usecase-tags">
                <span className="usecase-tag">Insurance quotes</span>
                <span className="usecase-tag">Loan consultations</span>
                <span className="usecase-tag">Investment advice</span>
              </div>
            </div>

            {/* Home Services */}
            <div className="usecase-card">
              <span className="usecase-icon">🔧</span>
              <h3 className="usecase-title">Home Services</h3>
              <div className="usecase-tags">
                <span className="usecase-tag">Project quotes</span>
                <span className="usecase-tag">Service scheduling</span>
                <span className="usecase-tag">Scope discussions</span>
              </div>
            </div>

            {/* Automotive */}
            <div className="usecase-card">
              <span className="usecase-icon">🚗</span>
              <h3 className="usecase-title">Automotive</h3>
              <div className="usecase-tags">
                <span className="usecase-tag">Vehicle questions</span>
                <span className="usecase-tag">Test drives</span>
                <span className="usecase-tag">Financing options</span>
              </div>
            </div>

            {/* Education */}
            <div className="usecase-card">
              <span className="usecase-icon">🎓</span>
              <h3 className="usecase-title">Education</h3>
              <div className="usecase-tags">
                <span className="usecase-tag">Course enrollment</span>
                <span className="usecase-tag">Student support</span>
                <span className="usecase-tag">Program info</span>
              </div>
            </div>

            {/* Travel */}
            <div className="usecase-card">
              <span className="usecase-icon">✈️</span>
              <h3 className="usecase-title">Travel</h3>
              <div className="usecase-tags">
                <span className="usecase-tag">Trip planning</span>
                <span className="usecase-tag">Destination info</span>
                <span className="usecase-tag">Package customization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}