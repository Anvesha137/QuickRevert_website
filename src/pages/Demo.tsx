import React, { useState } from 'react';
import Footer from '../components/footer';

const Demo = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    websiteLink: '',
    contactNumber: '',
    countryCode: '+1',
    platform: '',
    agreedToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo form submitted:', formData);
  };

  return (
    <div style={styles.container}>
      <style>{`
        .check-icon {
          flex-shrink: 0;
        }
        
        .demo-button {
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .demo-button:hover {
          background-color: #45a049;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(76, 175, 80, 0.3);
        }
        
        .demo-button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
          transform: none;
        }
        
        .form-input {
          transition: all 0.2s ease;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #4caf50;
          box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
        }
        
        .checkbox-input:checked {
          background-color: #4caf50;
          border-color: #4caf50;
        }
        
        .terms-link {
          color: #4caf50;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .terms-link:hover {
          color: #45a049;
          text-decoration: underline;
        }
      `}</style>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.contentWrapper}>
          {/* Left Side - Information */}
          <div style={styles.leftSection}>
            <h1 style={styles.mainHeading}>
              Book a 30 mins demo<br />
              with our WhatsApp<br />
              specialists
            </h1>

            <p style={styles.subHeading}>
              Every minute will count. In these 30 mins, you'll see how
            </p>

            <div style={styles.featuresList}>
              <div style={styles.featureItem}>
                <div className="check-icon" style={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.25 5.625L7.5 14.375L3.75 10.625"
                      stroke="#4caf50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={styles.featureText}>
                  QuickRevert customers acquire new customers using WhatsApp
                </p>
              </div>

              <div style={styles.featureItem}>
                <div className="check-icon" style={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.25 5.625L7.5 14.375L3.75 10.625"
                      stroke="#4caf50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={styles.featureText}>
                  How they recover abandoned carts, turn COD orders into prepaid and grab reviews from shoppers using WhatsApp automations
                </p>
              </div>

              <div style={styles.featureItem}>
                <div className="check-icon" style={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.25 5.625L7.5 14.375L3.75 10.625"
                      stroke="#4caf50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={styles.featureText}>
                  How B2C companies use WhatsApp chatbots to qualify website traffic at scale
                </p>
              </div>

              <div style={styles.featureItem}>
                <div className="check-icon" style={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.25 5.625L7.5 14.375L3.75 10.625"
                      stroke="#4caf50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={styles.featureText}>
                  How marketing and growth teams use WhatsApp to build deep customer journeys across the lifecycle, and not just 1 time purchase. Like email automation, but for WhatsApp
                </p>
              </div>

              <div style={styles.featureItem}>
                <div className="check-icon" style={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.25 5.625L7.5 14.375L3.75 10.625"
                      stroke="#4caf50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={styles.featureText}>
                  You can track every single WhatsApp interaction and push this data to CRMs and Marketing Automation platforms
                </p>
              </div>

              <div style={styles.featureItem}>
                <div className="check-icon" style={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.25 5.625L7.5 14.375L3.75 10.625"
                      stroke="#4caf50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={styles.featureText}>
                  You can log and segment each chat inside QuickRevert CRM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div style={styles.rightSection}>
            <div style={styles.formCard}>
              <p style={styles.formIntro}>
                Please fill out the form below and we will ensure a personalised demo catering to your requirements.
              </p>

              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      Full name <span style={styles.required}>(required)</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-input"
                      style={styles.input}
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      Email <span style={styles.required}>(required)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      style={styles.input}
                      placeholder="name@abc.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      Website Link <span style={styles.required}>(required)</span>
                    </label>
                    <input
                      type="url"
                      name="websiteLink"
                      className="form-input"
                      style={styles.input}
                      placeholder="www.example.com"
                      value={formData.websiteLink}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      Contact Number <span style={styles.required}>(required)</span>
                    </label>
                    <div style={styles.phoneInputContainer}>
                      <select
                        name="countryCode"
                        style={styles.countryCodeSelect}
                        value={formData.countryCode}
                        onChange={handleInputChange}
                      >
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+86">🇨🇳 +86</option>
                        <option value="+81">🇯🇵 +81</option>
                      </select>
                      <input
                        type="tel"
                        name="contactNumber"
                        className="form-input"
                        style={styles.phoneInput}
                        placeholder="0812 34 56789"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Online store platform <span style={styles.required}>(required)</span>
                  </label>
                  <select
                    name="platform"
                    className="form-input"
                    style={styles.select}
                    value={formData.platform}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your online store platform</option>
                    <option value="shopify">Shopify</option>
                    <option value="woocommerce">WooCommerce</option>
                    <option value="magento">Magento</option>
                    <option value="bigcommerce">BigCommerce</option>
                    <option value="custom">Custom</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    className="checkbox-input"
                    style={styles.checkbox}
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    id="terms"
                  />
                  <label htmlFor="terms" style={styles.checkboxLabel}>
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="terms-link" onClick={(e) => e.preventDefault()}>
                      Terms
                    </a>
                    {' '}and{' '}
                    <a href="#" className="terms-link" onClick={(e) => e.preventDefault()}>
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="demo-button"
                  style={styles.submitButton}
                  disabled={!formData.agreedToTerms}
                >
                  I want a Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  header: {
    backgroundColor: '#000000',
    padding: '12px 0',
  },
  headerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logoIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '20px',
    color: '#ffffff',
    fontWeight: '400',
  },
  logoTextBold: {
    fontWeight: '700',
  },
  mainContent: {
    padding: '60px 40px',
  },
  contentWrapper: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    gap: '80px',
    alignItems: 'flex-start',
  },
  leftSection: {
    flex: 1,
  },
  mainHeading: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#1a1a1a',
    lineHeight: '1.2',
    marginBottom: '24px',
  },
  subHeading: {
    fontSize: '18px',
    color: '#333333',
    marginBottom: '32px',
    fontWeight: '500',
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  featureItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
  },
  checkIcon: {
    marginTop: '2px',
  },
  featureText: {
    fontSize: '16px',
    color: '#4a4a4a',
    lineHeight: '1.6',
    margin: 0,
  },
  rightSection: {
    flex: '0 0 500px',
  },
  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  formIntro: {
    fontSize: '14px',
    color: '#666666',
    marginBottom: '32px',
    lineHeight: '1.6',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333333',
    textAlign: 'left',
  },
  required: {
    fontSize: '12px',
    fontWeight: '400',
    color: '#999999',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    boxSizing: 'border-box' as const,
    textAlign: 'left',
  },
  phoneInputContainer: {
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-start',
    marginTop: '4px',
  },
  countryCodeSelect: {
    padding: '12px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    minWidth: '80px',
  },
  phoneInput: {
    flex: 1,
    padding: '12px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    boxSizing: 'border-box' as const,
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    boxSizing: 'border-box' as const,
  },
  checkboxContainer: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    marginTop: '8px',
  },
  checkbox: {
    width: '18px',
    height: '18px',
    marginTop: '2px',
    cursor: 'pointer',
    accentColor: '#4caf50',
  },
  checkboxLabel: {
    fontSize: '13px',
    color: '#666666',
    lineHeight: '1.5',
    cursor: 'pointer',
  },
  submitButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#4caf50',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    marginTop: '8px',
  },
};

export default Demo;
