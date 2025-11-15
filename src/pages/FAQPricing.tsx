import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQPricing = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(8); // WhatsApp cost question open by default

  const faqs = [
    {
      question: 'Can I use my existing WhatsApp number with QuickRevert.tech?',
      answer: 'Yes, you can use your existing WhatsApp number with QuickRevert.tech.',
    },
    {
      question: 'Is there a limit on number of messages I can send?',
      answer: 'The number of messages you can send depends on your plan and WhatsApp\'s policies.',
    },
    {
      question: 'Can my team members login from multiple devices?',
      answer: 'Yes, team members can login from multiple devices based on your plan.',
    },
    {
      question: 'How much time does it take to setup everything?',
      answer: 'Setup typically takes 24-48 hours depending on your requirements.',
    },
    {
      question: 'Can I apply for Blue Tick?',
      answer: 'Yes, we assist with Blue Tick verification applications.',
    },
    {
      question: 'Can it integrate with my other business tools?',
      answer: 'Yes, QuickRevert.tech integrates with various business tools and platforms.',
    },
    {
      question: 'Can I send Promotional Campaigns on WhatsApp via API?',
      answer: 'Yes, you can send promotional campaigns through the WhatsApp API.',
    },
    {
      question: 'Is the WhatsApp API free?',
      answer: 'The WhatsApp API itself is free, but messaging costs apply.',
    },
    {
      question: 'How much does WhatsApp cost per month?',
      answer: null, // This will have custom content
      customContent: (
        <div style={styles.customAnswer}>
          <h3 style={styles.answerTitle}>WhatsApp Messaging Window and Costs</h3>
          
          <p style={styles.answerText}>
            WhatsApp offers a <span style={styles.highlight}>24-hour window for messaging</span> that starts when a 
            business sends a message to a 
            customer. During this period, businesses and customers can send unlimited messages, including pre-approved 
            template messages and non-templated messages, without additional costs.
          </p>
          
          <p style={styles.answerText}>
            The cost for WhatsApp messages varies based on the template message type and the recipient's country.
          </p>
          
          <p style={styles.answerText}>
            There are currently four types of templates: <span style={styles.highlight}>₹0.25 for Marketing Message, ₹0.17 for 
            Authentication and Utility Messages, and ₹0.41 for Service Message.</span>
          </p>
          
          <p style={styles.answerText}>
            These rates apply to messages sent within India.
          </p>
          
          <p style={styles.answerText}>
            Each messaging window lasts for 24 hours.
          </p>
          
          <p style={styles.answerText}>
            Starting a conversation with a template message or replying to one during an ongoing service chat 
            session will start a 24-hour window for each conversation type.
          </p>
          
          <p style={styles.answerText}>
            If you mix message types like Marketing, Authentication, Utility, or Service in a single conversation, 
            you'll charged separately for each message type initiated.
          </p>
          
          <p style={styles.answerText}>
            Each message category—whether for Marketing, Authentication, Utility, or Service—has its own 
            rate. So, if you send different types of messages to the same customer in 24 hours, you'll be 
            charged for each type separately.
          </p>
          
          <p style={styles.answerText}>
            When you initiate a chat in any of these categories, you have a 24-hour slot to talk to your 
            customers without extra fees. This gives you plenty of time for meaningful interaction.
          </p>
        </div>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <style>{`
        .faq-item {
          transition: all 0.3s ease;
        }
        
        .faq-button {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .faq-button:hover {
          background-color: #f5f5f5;
        }
        
        .book-demo-btn {
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .book-demo-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
        }
        
        .faq-answer {
          animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }
      `}</style>
      
      <div style={styles.header}>
        <h2 style={styles.title}>Frequently Asked Questions</h2>
        <p style={styles.subtitle}>Quick answers to our most asked questions</p>
      </div>
      
      <div style={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" style={styles.faqItem}>
            <button
              className="faq-button"
              style={styles.faqButton}
              onClick={() => toggleFAQ(index)}
            >
              <span style={styles.question}>{faq.question}</span>
              <span style={styles.icon}>{openIndex === index ? '−' : '+'}</span>
            </button>
            
            {openIndex === index && (
              <div className="faq-answer" style={styles.answerContainer}>
                {faq.customContent ? (
                  faq.customContent
                ) : (
                  <p style={styles.answer}>{faq.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div style={styles.footer}>
        <h3 style={styles.footerTitle}>Still have questions?</h3>
        <p style={styles.footerText}>
          Reach out and discover how our team can make your WhatsApp<br />
          Marketing experience a breeze.
        </p>
        <Link to="/demo" 
          className="book-demo-btn"
          style={styles.bookDemoButton}
        >
          Book a Demo
        </Link>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#ffffff',
    padding: '60px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '40px',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#4caf50',
    fontWeight: '500',
  },
  faqContainer: {
    maxWidth: '800px',
    margin: '0 auto 60px auto',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  faqItem: {
    border: '2px solid #000000',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  faqButton: {
    width: '100%',
    padding: '18px 24px',
    backgroundColor: '#ffffff',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left' as const,
  },
  question: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#000000',
    flex: 1,
  },
  icon: {
    fontSize: '24px',
    fontWeight: '300',
    color: '#000000',
    marginLeft: '16px',
  },
  answerContainer: {
    padding: '0 24px 24px 24px',
    backgroundColor: '#ffffff',
  },
  answer: {
    fontSize: '14px',
    color: '#424242',
    lineHeight: '1.6',
    margin: '0',
  },
  customAnswer: {
    fontSize: '14px',
    color: '#424242',
    lineHeight: '1.6',
  },
  answerTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#7b3f00',
    marginBottom: '16px',
    marginTop: '0',
  },
  answerText: {
    fontSize: '13px',
    color: '#424242',
    lineHeight: '1.7',
    marginBottom: '12px',
  },
  highlight: {
    color: '#d84315',
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center' as const,
    marginTop: '60px',
  },
  footerTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '12px',
  },
  footerText: {
    fontSize: '14px',
    color: '#666666',
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  bookDemoButton: {
    backgroundColor: '#4caf50',
    color: '#ffffff',
    padding: '14px 36px',
    fontSize: '15px',
    fontWeight: '600',
    borderRadius: '25px',
    boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
  },
};

export default FAQPricing;