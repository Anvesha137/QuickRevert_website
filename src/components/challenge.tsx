

export function Challenge() {
  return (
    <section className="bg-green-500 relative overflow-hidden py-20 px-6">
      {/* Scribble Decoration */}
      <div className="absolute top-8 left-8 w-32 h-32 opacity-60">
        <svg
          viewBox="0 0 120 120"
          fill="none"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))" }}
        >
          <path
            d="M20 60 Q30 20, 50 40 T80 60 Q90 80, 70 90 T40 70 Q20 50, 30 30 T60 50 Q80 70, 60 80 T40 60 Q25 45, 35 35 T55 45 Q70 60, 55 70"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M50 30 Q60 10, 80 25 T100 50 Q110 70, 90 85 T60 75 Q40 60, 50 45"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="flex justify-center mb-12">
          <div className="bg-black text-white px-8 py-4 rounded-3xl inline-block">
            <h2 className="text-2xl lg:text-3xl" style={{ fontWeight: 700 }}>
              Facing these challenges?
            </h2>
          </div>
        </div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Rising Ad Costs */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="mb-6">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="w-16 h-16"
              >
                <circle cx="32" cy="32" r="32" fill="#E8F0FF" />
                <path
                  d="M28 24C28 21.7909 29.7909 20 32 20C34.2091 20 36 21.7909 36 24C36 26.2091 34.2091 28 32 28C29.7909 28 28 29.7909 28 32"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="32" cy="38" r="2" fill="#3B82F6" />
                <path
                  d="M20 42L26 36M44 42L38 36"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-gray-900 mb-3 text-xl" style={{ fontWeight: 700 }}>
              Rising Ad Costs
            </h3>
            <p className="text-gray-600" style={{ lineHeight: 1.6 }}>
              Leverage fixed-cost marketing on WhatsApp, where peak seasons and
              competitor bids won't inflate your budget.
            </p>
          </div>

          {/* Card 2 - Alarming RTO Rates */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="mb-6">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="w-16 h-16"
              >
                <circle cx="32" cy="32" r="32" fill="#DCFCE7" />
                <path
                  d="M24 28H40M24 28L28 24M24 28L28 32"
                  stroke="#22C55E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40 36H24M40 36L36 32M40 36L36 40"
                  stroke="#22C55E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-gray-900 mb-3 text-xl" style={{ fontWeight: 700 }}>
              Alarming RTO Rates
            </h3>
            <p className="text-gray-600" style={{ lineHeight: 1.6 }}>
              Convert COD to prepaid effortlessly through WhatsApp journeys,
              enhancing customer satisfaction while minimizing RTO rates.
            </p>
          </div>

          {/* Card 3 - Struggling to Retain Customers */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="mb-6">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="w-16 h-16"
              >
                <circle cx="32" cy="32" r="32" fill="#FEF3C7" />
                <circle
                  cx="32"
                  cy="28"
                  r="6"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                />
                <path
                  d="M42 44C42 39.5817 37.5228 36 32 36C26.4772 36 22 39.5817 22 44"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="40"
                  cy="32"
                  r="10"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h3 className="text-gray-900 mb-3 text-xl" style={{ fontWeight: 700 }}>
              Struggling to Retain Customers
            </h3>
            <p className="text-gray-600" style={{ lineHeight: 1.6 }}>
              Maximize Customer LTV by capitalizing on WhatsApp's 98% open rate
              and turn single-purchase buyers into repeat customers.
            </p>
          </div>
        </div>
      </div>


    </section>
  );
}
