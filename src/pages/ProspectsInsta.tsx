export default function ProspectsInsta() {
  return (
    <>
      <style>{`
        .prospects-insta-container {
          width: 100%;
          background-color: white;
        }

        .prospects-insta-content {
          max-width: 80rem;
          margin: 0 auto;
        }

        .prospects-insta-header {
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .prospects-insta-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .prospects-insta-title-highlight {
          color: #10b981;
        }

        .prospects-insta-subtitle {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .prospects-insta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .prospects-insta-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .prospects-insta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .prospects-dm-card {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border-radius: 1.5rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }

        .prospects-dm-image {
          width: 100%;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="prospects-insta-container">
        <div className="prospects-insta-content">
          {/* Header */}
          <div className="prospects-insta-header">
            <h2 className="prospects-insta-title">
              Watch Prospects <span className="prospects-insta-title-highlight">Convert</span>
            </h2>
            <p className="prospects-insta-subtitle">Actual Instagram DMs powered by QuickRevert</p>
          </div>

          {/* Grid of DM Cards */}
          <div className="prospects-insta-grid">
            {/* Card 1 - purewell clinic */}
            <div className="prospects-dm-card">
              <img src="/1.png" alt="Purewell Clinic DM" className="prospects-dm-image" />
            </div>

            {/* Card 2 - Wanderlust Journeys */}
            <div className="prospects-dm-card">
              <img src="/2.png" alt="Wanderlust Journeys DM" className="prospects-dm-image" />
            </div>

            {/* Card 3 - skillforceacademy */}
            <div className="prospects-dm-card">
              <img src="/3.png" alt="SkillForce Academy DM" className="prospects-dm-image" />
            </div>

            {/* Card 4 - techhive */}
            <div className="prospects-dm-card">
              <img src="/4.png" alt="TechHive DM" className="prospects-dm-image" />
            </div>

            {/* Card 5 - lunaapparel */}
            <div className="prospects-dm-card">
              <img src="/5.png" alt="LunaApparel DM" className="prospects-dm-image" />
            </div>

            {/* Card 6 - brewnest */}
            <div className="prospects-dm-card">
              <img src="/6.png" alt="BrewNest DM" className="prospects-dm-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}