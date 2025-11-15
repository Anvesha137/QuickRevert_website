import React, { useState } from 'react';

const Integration = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    'All',
    'Analytics',
    'Automation',
    'CRM',
    'Checkout',
    'Customer Support',
    'Feedback Collection',
    'Payment Gateway',
    'Reporting',
    'Social',
  ];

  const integrations = [
    {
      name: 'Blaze',
      category: 'Automation',
      description: 'Streamline and part recovery process with Blaze and QuickRevert.tech. Our integration ensures marketing text sales and maintaining...',
      icon: '⚡',
      bgColor: '#ffffff',
    },
    {
      name: 'Breeze',
      category: 'CRM',
      description: 'Re-engage customers and convert abandoned carts into successful sales, improving your overall e-commerce performance.',
      icon: '≈',
      iconColor: '#8b7aff',
      bgColor: '#ffffff',
    },
    {
      name: 'Cashfree Payments',
      category: 'Payment Gateway',
      description: 'Simplify payment processing by converting COD to prepaid payments through Razol and QuickRevert.tech integration.',
      icon: '₹',
      iconColor: '#4caf50',
      bgColor: '#ffffff',
    },
    {
      name: 'Clickpost',
      category: 'Automation',
      description: 'Improve shipping communications by providing timely updates and alerts through ClickPost and QuickRevert.tech.',
      icon: '📦',
      iconColor: '#2196f3',
      bgColor: '#ffffff',
    },
    {
      name: 'Delivery',
      category: 'Automation',
      description: 'Streamline your shipping notifications and keep customers updated with Delivery and QuickRevert.tech integration.',
      icon: '🚚',
      iconColor: '#000000',
      bgColor: '#ffffff',
    },
    {
      name: 'Ecom360',
      category: 'Analytics',
      description: 'Maximize recovery of abandoned carts with powerful tools from Ecom360 and QuickRevert.tech.',
      icon: '📊',
      iconColor: '#4caf50',
      bgColor: '#ffffff',
    },
    {
      name: 'Freshdesk',
      category: 'Customer Support',
      description: 'Boost your customer support efficiency by integrating QuickRevert.tech with Freshdesk. Streamline your support interactions and...',
      icon: '💬',
      iconColor: '#4caf50',
      bgColor: '#ffffff',
    },
    {
      name: 'GoKwik',
      category: 'Checkout',
      description: 'Avoid decision by recovering abandoned carts and re-engaging customers by integrating GoKwik with QuickRevert.tech.',
      icon: '🚀',
      iconColor: '#5b7aff',
      bgColor: '#ffffff',
    },
    {
      name: 'Google Analytics',
      category: 'Analytics',
      description: 'Gain comprehensive and lead events to GA4 for comprehensive performance tracking and insights.',
      icon: '📈',
      iconColor: '#ff9800',
      bgColor: '#ffffff',
    },
    {
      name: 'Hubspot',
      category: 'CRM',
      description: 'Automatically create leads in HubSpot from QuickRevert.tech interactions, ensuring no potential customer is missed.',
      icon: '🔶',
      iconColor: '#ff6b35',
      bgColor: '#ffffff',
    },
    {
      name: 'Instagram and facebook',
      category: 'Social',
      description: 'Manage and respond to messages and comments from your audiences on your Instagram page using QuickRevert.tech to enhance customer...',
      icon: '📱',
      iconColor: '#e91e63',
      bgColor: '#ffffff',
    },
    {
      name: 'Judge.me',
      category: 'Feedback Collection',
      description: 'Enhance your customer feedback process by integrating Judge.me with JudgeMe. Collect reviews effortlessly to improve your product...',
      icon: '✓',
      iconColor: '#4caf50',
      bgColor: '#ffffff',
    },
  ];

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesFilter = selectedFilter === 'All' || integration.category === selectedFilter;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={styles.container}>
      <style>{`
        .filter-item {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .filter-item:hover {
          background-color: #f5f5f5;
        }
        
        .integration-card {
          transition: all 0.3s ease;
        }
        
        .integration-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .search-input {
          transition: all 0.2s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #4caf50;
        }
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Integrations</h1>
        <p style={styles.subtitle}>
          Extend the power of WhatsApp automation for your brand with tools that seamlessly<br />
          integrate with your tech stack and drive sales, engagement, and customer loyalty.
        </p>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Filters Sidebar */}
        <div style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Filters</h3>
          
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search here..."
              className="search-input"
              style={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span style={styles.searchIcon}>🔍</span>
          </div>

          <div style={styles.filterList}>
            {filters.map((filter, index) => (
              <div
                key={index}
                className="filter-item"
                style={{
                  ...styles.filterItem,
                  ...(selectedFilter === filter ? styles.filterItemActive : {}),
                }}
                onClick={() => setSelectedFilter(filter)}
              >
                <div style={styles.radioButton}>
                  {selectedFilter === filter && <div style={styles.radioButtonInner} />}
                </div>
                <span style={styles.filterText}>{filter}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div style={styles.gridContainer}>
          {filteredIntegrations.map((integration, index) => (
            <div key={index} className="integration-card" style={styles.card}>
              <div style={{
                ...styles.iconContainer,
                backgroundColor: integration.bgColor,
              }}>
                <span style={{
                  ...styles.icon,
                  color: integration.iconColor || '#000000',
                }}>
                  {integration.icon}
                </span>
              </div>
              <h3 style={styles.cardTitle}>{integration.name}</h3>
              <p style={styles.cardDescription}>{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
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
    paddingTop: '20px',
  },
  title: {
    color: '#ffffff',
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '16px',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    color: '#b0b0b0',
    fontSize: '15px',
    lineHeight: '1.6',
    fontWeight: '400',
  },
  mainContent: {
    display: 'flex',
    gap: '30px',
    maxWidth: '1400px',
    margin: '0 auto',
    alignItems: 'flex-start',
  },
  sidebar: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    width: '280px',
    flexShrink: 0,
    position: 'sticky' as const,
    top: '20px',
  },
  sidebarTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '16px',
    marginTop: '0',
  },
  searchContainer: {
    position: 'relative' as const,
    marginBottom: '20px',
  },
  searchInput: {
    width: '100%',
    padding: '10px 12px 10px 36px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box' as const,
  },
  searchIcon: {
    position: 'absolute' as const,
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '14px',
    opacity: 0.5,
  },
  filterList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },
  filterItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 12px',
    borderRadius: '6px',
  },
  filterItemActive: {
    backgroundColor: '#f0f0f0',
  },
  radioButton: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '2px solid #757575',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  radioButtonInner: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#4caf50',
  },
  filterText: {
    fontSize: '14px',
    color: '#424242',
    fontWeight: '500',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #e0e0e0',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  iconContainer: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    border: '1px solid #e0e0e0',
  },
  icon: {
    fontSize: '24px',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '8px',
    marginTop: '0',
  },
  cardDescription: {
    fontSize: '13px',
    color: '#666666',
    lineHeight: '1.5',
    margin: '0',
  },
};

export default Integration;
