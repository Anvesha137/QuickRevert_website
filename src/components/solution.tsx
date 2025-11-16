import { Check, ArrowRight, Sparkles } from "lucide-react";

export function Solution() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-500" fill="currentColor" />
            <p className="text-gray-500 uppercase tracking-wider text-sm" style={{ fontWeight: 600 }}>
              QUICKREVERT.TECH SOLUTIONS
            </p>
            <Sparkles className="w-5 h-5 text-yellow-500" fill="currentColor" />
          </div>
          <h2 className="text-gray-900 text-4xl lg:text-5xl" style={{ fontWeight: 700 }}>
            Your Go To WhatsApp Marketing Wizard
          </h2>
        </div>

        {/* Solution 1 - Personalized Bulk Messaging */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl">
                <div className="mb-6">
                  <p className="text-green-500 uppercase tracking-wider text-sm mb-3" style={{ fontWeight: 600 }}>
                    BROADCAST MARKETING
                  </p>
                  <h3 className="text-white text-3xl lg:text-4xl mb-8" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                    Personalized Bulk Messaging
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                    </div>
                    <p className="text-gray-300" style={{ lineHeight: 1.6 }}>
                      Automate outreach with scheduled, data-driven campaigns
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                    </div>
                    <p className="text-gray-300" style={{ lineHeight: 1.6 }}>
                      Smart segmentation and filters to weed out inactive leads
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                    </div>
                    <p className="text-gray-300" style={{ lineHeight: 1.6 }}>
                      Contact-level tracking for reads, clicks, and conversions
                    </p>
                  </div>
                </div>

                <button className="text-green-500 hover:text-green-400 transition-colors inline-flex items-center gap-2" style={{ fontWeight: 600 }}>
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img 
                src="/b10954283bdfa6327b314b969f6e7f36ed195aeb.png" 
                alt="WhatsApp Bulk Messaging Preview" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Solution 2 - AI Chatbot */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl">
                <div className="mb-6">
                  <p className="text-green-500 uppercase tracking-wider text-sm mb-3" style={{ fontWeight: 600 }}>
                    AI CHATBOT
                  </p>
                  <h3 className="text-white text-3xl lg:text-4xl mb-8" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                    24x7 Assistant for Pre & Post-Sales Queries
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                    </div>
                    <p className="text-gray-300" style={{ lineHeight: 1.6 }}>
                      Easy-to-use, No-code AI builder for quick setup
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                    </div>
                    <p className="text-gray-300" style={{ lineHeight: 1.6 }}>
                      Personalize chats using data from your existing CRM
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                    </div>
                    <p className="text-gray-300" style={{ lineHeight: 1.6 }}>
                      Smooth transition to human agents for complex queries
                    </p>
                  </div>
                </div>

                <button className="text-green-500 hover:text-green-400 transition-colors inline-flex items-center gap-2" style={{ fontWeight: 600 }}>
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img 
                src="/9998365fa6c2de0c59636864acd70c8df04460d4.png" 
                alt="Custom Journey Workflow Builder" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Solution 3 - Drip Campaigns */}
        <div className="mt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl">
                <div className="mb-6">
                  <p className="text-green-500 uppercase tracking-wider text-sm mb-3" style={{ fontWeight: 600 }}>
                    DRIP CAMPAIGNS
                  </p>
                  <h3 className="text-white text-3xl lg:text-4xl mb-8" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                    Interactive Drip Campaigns for Adaptive Customer Engagement
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                    </div>
                    <p className="text-gray-300" style={{ lineHeight: 1.6 }}>
                      Craft multi-step, multi-day customer journeys
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                    </div>
                    <p className="text-gray-300" style={{ lineHeight: 1.6 }}>
                      Personalize paths with conditional branching based on user behaviour
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                    </div>
                    <p className="text-gray-300" style={{ lineHeight: 1.6 }}>
                      Trigger journeys via 3rd-party app or API integrations
                    </p>
                  </div>
                </div>

                <button className="text-green-500 hover:text-green-400 transition-colors inline-flex items-center gap-2" style={{ fontWeight: 600 }}>
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img 
                src="/75c0599c8c4efb77053b9f04009689d7c74bb8f4.png" 
                alt="Drip Campaign Workflow" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}