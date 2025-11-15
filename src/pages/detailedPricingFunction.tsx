import React from 'react';
import { Link } from 'react-router-dom';

const DetailedPricingFunction = () => {
  const plans = ['Starter', 'Standard', 'Plus'];

  const sections = [
    {
      title: 'Organization Size',
      features: [
        {
          name: 'Monthly Active Contacts',
          starter: 'Unlimited',
          standard: 'Unlimited',
          plus: 'Unlimited',
        },
        {
          name: 'Agents Logins Included',
          starter: '1',
          standard: '2',
          plus: '5',
        },
        {
          name: 'Additional Agents',
          starter: '₹500 per month per agent',
          standard: '₹500 per month per agent',
          plus: '₹500 per month per agent',
        },
      ],
    },
    {
      title: 'Growth Tools',
      features: [
        {
          name: 'WhatsApp Website Widget',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Welcome / Exit Popups',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Click To WhatsApp Ads Integration',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'QR Code Scan To WhatsApp',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Payment Collection On WhatsApp',
          starter: false,
          standard: false,
          plus: true,
        },
      ],
    },
    {
      title: 'Promotional Broadcasts',
      features: [
        {
          name: 'Rule Based Segments',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Excel Sheets',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Auto Resume Campaigns',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Broadcast Failures Auto-Retry',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Dead Audience Filtering',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Promotional Message Frequency Control',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Geo-Fencing',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'Drip Campaigns',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'Welcome Offer',
          starter: false,
          standard: 'with reminders',
          plus: 'with reminders',
        },
        {
          name: 'Product Browsing Abandonment',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'Add-to-Cart Abandonment',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'Cart Checkout Abandonment',
          starter: true,
          standard: 'with reminders',
          plus: 'with reminders',
        },
        {
          name: 'Order Alerts',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Repeat Purchase Reminders',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'COD Confirmation',
          starter: false,
          standard: 'with reminders',
          plus: 'with reminders',
        },
        {
          name: 'COD To Prepaid',
          starter: false,
          standard: 'with reminders',
          plus: 'with reminders',
        },
        {
          name: 'Collect Feedback',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Cross-sell / Upsell',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Custom Triggers',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'Custom Campaigns',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'API / Payload Based Personalization',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'Exit Conditions',
          starter: false,
          standard: false,
          plus: true,
        },
      ],
    },
    {
      title: 'Chatbots',
      features: [
        {
          name: 'WhatsApp Bots',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Keyword Based Response',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'NLP Based Training',
          starter: false,
          standard: false,
          plus: true,
        },
      ],
    },
    {
      title: 'WhatsApp Blue Tick Application',
      features: [
        {
          name: 'Blue Tick Application',
          starter: true,
          standard: true,
          plus: true,
        },
      ],
    },
    {
      title: 'Live Chat',
      features: [
        {
          name: 'Live Chat',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Agent Analytics',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Office Hours / Holiday Handling',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Chat Routing',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'Chat Disposition',
          starter: false,
          standard: false,
          plus: true,
        },
      ],
    },
    {
      title: 'Analytics',
      features: [
        {
          name: 'Conversion Analytics',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Engagement Analytics',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Chatbot Analytics',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Custom Reports',
          starter: false,
          standard: false,
          plus: true,
        },
      ],
    },
    {
      title: 'Integration',
      features: [
        {
          name: 'Support Desk',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Custom Integrations With 3rd Party Systems',
          starter: false,
          standard: false,
          plus: true,
        },
      ],
    },
    {
      title: 'Customer Success',
      features: [
        {
          name: 'Email Support',
          starter: true,
          standard: true,
          plus: true,
        },
        {
          name: 'Chat Support',
          starter: false,
          standard: true,
          plus: true,
        },
        {
          name: 'Phone / WhatsApp Support',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'Account Manager',
          starter: false,
          standard: false,
          plus: true,
        },
        {
          name: 'White Glove Services',
          starter: false,
          standard: false,
          plus: true,
        },
      ],
    },
    {
      title: 'Add Ons',
      features: [
        {
          name: 'Custom Chatbot Setups',
          starter: false,
          standard: false,
          plus: false,
        },
      ],
    },
  ];

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span style={styles.checkmark}>✓</span>
      ) : (
        <span style={styles.dash}>—</span>
      );
    }
    return <span style={styles.textValue}>{value}</span>;
  };

  return (
    <div style={styles.container}>
      <style>{`
        .pricing-table {
          overflow-x: auto;
        }
        
        .table-wrapper {
          min-width: 800px;
        }
        
        .book-demo-link {
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        
        .book-demo-link:hover {
          opacity: 0.7;
        }
        
        @media (max-width: 768px) {
          .table-wrapper {
            min-width: 600px;
          }
        }
      `}</style>

      <div className="pricing-table" style={styles.tableContainer}>
        <div className="table-wrapper">
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.headerCell}>
                  <div style={styles.featureDetailsHeader}>Feature Details</div>
                </th>
                {plans.map((plan, index) => (
                  <th key={index} style={styles.planHeader}>
                    <div style={styles.planHeaderContent}>
                      <div style={styles.planName}>{plan}</div>
                      <Link to="/demo" className="book-demo-link" style={styles.bookDemoLink}>
                        Book a Demo
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sections.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <tr>
                    <td colSpan={4} style={styles.sectionHeader}>
                      {section.title}
                    </td>
                  </tr>
                  {section.features.map((feature, featureIndex) => (
                    <tr key={featureIndex} style={styles.featureRow}>
                      <td style={styles.featureNameCell}>{feature.name}</td>
                      <td style={styles.valueCell}>
                        {renderCell(feature.starter)}
                      </td>
                      <td style={styles.valueCell}>
                        {renderCell(feature.standard)}
                      </td>
                      <td style={styles.valueCell}>
                        {renderCell(feature.plus)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#ffffff',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  tableContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
  },
  headerCell: {
    padding: '24px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'left' as const,
    borderBottom: '2px solid #e0e0e0',
    borderRight: '1px solid #e0e0e0',
    verticalAlign: 'top' as const,
  },
  featureDetailsHeader: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#000000',
  },
  planHeader: {
    padding: '24px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center' as const,
    borderBottom: '2px solid #e0e0e0',
    borderRight: '1px solid #e0e0e0',
    verticalAlign: 'top' as const,
  },
  planHeaderContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '8px',
  },
  planName: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#000000',
  },
  bookDemoLink: {
    color: '#4caf50',
    fontSize: '14px',
    fontWeight: '500',
  },
  sectionHeader: {
    padding: '16px 20px',
    backgroundColor: '#e8f5e9',
    fontSize: '15px',
    fontWeight: '700',
    color: '#2e7d32',
    borderBottom: '1px solid #c8e6c9',
  },
  featureRow: {
    borderBottom: '1px solid #f5f5f5',
  },
  featureNameCell: {
    padding: '16px 20px',
    fontSize: '14px',
    color: '#424242',
    borderRight: '1px solid #e0e0e0',
    fontWeight: '500',
  },
  valueCell: {
    padding: '16px 20px',
    textAlign: 'center' as const,
    borderRight: '1px solid #e0e0e0',
  },
  checkmark: {
    color: '#4caf50',
    fontSize: '18px',
    fontWeight: '700',
  },
  dash: {
    color: '#bdbdbd',
    fontSize: '18px',
  },
  textValue: {
    color: '#1976d2',
    fontSize: '13px',
    fontWeight: '500',
  },
};

export default DetailedPricingFunction;
