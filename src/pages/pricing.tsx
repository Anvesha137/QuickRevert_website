import React, { useState } from 'react';
import DetailedPricingFunction from './detailedPricingFunction';
import DemoPricing from './demoPricing';
import FAQPricing from './FAQPricing';
import Footer from '../components/footer';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'annually' | 'quarterly'>('annually');
  const [currency, setCurrency] = useState('INR');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'An entry-level option ideal for small businesses, offering basic features, limited flows and integrations.',
      price: '2,999',
      highlight: false,
      features: [
        'WhatsApp Website Widget',
        'Welcome / Exit Popups',
        'Cart Checkout Abandonment',
        'Order Alerts',
        'Blue Tick Application',
        'Email Support'
      ]
    },
    {
      name: 'Standard',
      badge: 'Most Popular',
      description: 'A comprehensive package designed for growing businesses, including advanced segmentation features & support.',
      price: '7,499',
      highlight: true,
      features: [
        'Everything in Starter plus',
        'Collect Feedback',
        'Cross-Sell / Upsell',
        'WhatsApp Bots',
        'Keyword Based Response',
        'Chat Support'
      ]
    },
    {
      name: 'Plus',
      description: 'A premium offering tailored for larger businesses, with full feature access, Whatsapp flows and white-glove service',
      price: '14,999',
      highlight: false,
      features: [
        'Everything in Standard plus',
        'White Glove Services',
        'Custom Chatbot Setups',
        'NLP Based Training',
        'Custom Integrations With 3rd Party Systems',
        'Product Browsing & Add-to-Cart Abandonment'
      ]
    },
    {
      name: 'Enterprise',
      description: 'A flexible, enterprise solution catering to specific business needs, offering personalized features and dedicated support',
      price: null,
      highlight: false,
      features: []
    }
  ];

  return (
    <div>
      <div style={styles.container}>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .pricing-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .pricing-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          }
          
          .book-demo-btn {
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }
          
          .book-demo-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
          }
          
          .toggle-btn {
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }
          
          .toggle-btn:hover {
            opacity: 0.9;
          }
        `}</style>
        
        <div style={styles.header}>
          <h1 style={styles.title}>
            Pricing That Scales with Your Business 📈
          </h1>
          
          <div style={styles.controls}>
            <div style={styles.billingToggle}>
              <span style={styles.saveLabel}>
                Save up to <span style={styles.savePercentage}>25%</span>
              </span>
              <button
                className="toggle-btn"
                style={{
                  ...styles.toggleButton,
                  ...(billingCycle === 'annually' ? styles.toggleButtonActive : {}),
                }}
                onClick={() => setBillingCycle('annually')}
              >
                Annually
              </button>
              <button
                className="toggle-btn"
                style={{
                  ...styles.toggleButton,
                  ...(billingCycle === 'quarterly' ? styles.toggleButtonActive : {}),
                }}
                onClick={() => setBillingCycle('quarterly')}
              >
                Quarterly
              </button>
            </div>
            
            <select
              style={styles.currencySelect}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
        
        <div style={styles.cardsContainer}>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="pricing-card"
              style={{
                ...styles.card,
                ...(plan.highlight ? styles.cardHighlight : {}),
              }}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.planName}>{plan.name}</h3>
                {plan.badge && (
                  <span style={styles.badge}>{plan.badge}</span>
                )}
              </div>
              
              <p style={styles.description}>{plan.description}</p>
              
              <div style={styles.pricingSection}>
                {plan.price ? (
                  <>
                    <p style={styles.startingFrom}>starting from</p>
                    <div style={styles.priceContainer}>
                      <span style={styles.currency}>₹</span>
                      <span style={styles.price}>{plan.price}</span>
                      <span style={styles.period}>/mo</span>
                    </div>
                    <p style={styles.taxNote}>*All taxes extra</p>
                    <p style={styles.messagingNote}>
                      **Messaging charges extra{' '}
                      <span style={styles.infoIcon}>ⓘ</span>
                    </p>
                  </>
                ) : (
                  <>
                    <h2 style={styles.talkToSales}>Talk to Sales</h2>
                    <p style={styles.taxNote}>*All taxes extra</p>
                    <p style={styles.messagingNote}>**Messaging charges extra</p>
                  </>
                )}
              </div>
              
              <button className="book-demo-btn" style={styles.bookDemoButton}>
                Book a Demo
              </button>
              
              <div style={styles.featuresContainer}>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} style={styles.featureItem}>
                    <span style={styles.checkmark}>✓</span>
                    <span style={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Detailed Pricing Function Component */}
      <DetailedPricingFunction />
      
      {/* Demo Pricing Component */}
      <DemoPricing />
      
      {/* FAQ Pricing Component */}
      <FAQPricing />
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '40px',
  },
  title: {
    color: '#ffffff',
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '30px',
    letterSpacing: '-0.5px',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap' as const,
  },
  billingToggle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  saveLabel: {
    color: '#ffd700',
    fontSize: '14px',
    fontWeight: '500',
  },
  savePercentage: {
    fontWeight: '700',
  },
  toggleButton: {
    padding: '8px 20px',
    backgroundColor: 'transparent',
    color: '#ffffff',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
  },
  toggleButtonActive: {
    backgroundColor: '#4caf50',
    color: '#000000',
  },
  currencySelect: {
    padding: '8px 12px',
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '1px solid #ffffff',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
    outline: 'none',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '0',
    maxWidth: '1400px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column' as const,
    borderRight: '1px solid #e0e0e0',
  },
  cardHighlight: {
    backgroundColor: '#e8f5e9',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
  },
  planName: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#000000',
    margin: '0',
  },
  badge: {
    backgroundColor: '#ff9800',
    color: '#000000',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: '700',
  },
  description: {
    color: '#424242',
    fontSize: '13px',
    lineHeight: '1.5',
    marginBottom: '24px',
    minHeight: '60px',
  },
  pricingSection: {
    marginBottom: '20px',
  },
  startingFrom: {
    color: '#757575',
    fontSize: '12px',
    margin: '0 0 4px 0',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '8px',
  },
  currency: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#000000',
  },
  price: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#000000',
  },
  period: {
    fontSize: '18px',
    color: '#424242',
    fontWeight: '500',
  },
  talkToSales: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#000000',
    margin: '20px 0',
  },
  taxNote: {
    color: '#757575',
    fontSize: '11px',
    margin: '4px 0',
  },
  messagingNote: {
    color: '#757575',
    fontSize: '11px',
    margin: '4px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  infoIcon: {
    fontSize: '12px',
    opacity: 0.7,
  },
  bookDemoButton: {
    width: '100%',
    padding: '14px 24px',
    backgroundColor: '#4caf50',
    color: '#ffffff',
    borderRadius: '25px',
    fontSize: '15px',
    fontWeight: '600',
    marginBottom: '24px',
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  },
  checkmark: {
    color: '#4caf50',
    fontSize: '16px',
    fontWeight: '700',
    flexShrink: 0,
  },
  featureText: {
    color: '#424242',
    fontSize: '14px',
    lineHeight: '1.4',
  },
};

export default Pricing;