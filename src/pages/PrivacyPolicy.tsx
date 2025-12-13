import React from 'react';
import { Navbar } from '../components/navbar';
import Footer from '../components/footer';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          
          <div className="text-sm text-gray-600 mb-8">
            <p><strong>Effective Date:</strong> 1st October 2025</p>
          </div>
          
          <p className="text-gray-700 mb-6">
            QuickRevert Technologies ("Quickrevert," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our software, services, and websites (collectively, the "Services").
          </p>
          
          <p className="text-gray-700 mb-6">
            By accessing or using our Services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information that, alone or in combination with other information, could be used to identify you ("Personal Data").
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">A. Information You Provide to Us</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category of Data</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples of Data Collected</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose of Collection</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Account/Contact Data</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Name, email address, phone number, company name, address, payment information.</td>
                          <td className="px-6 py-4 text-sm text-gray-500">To create and manage your account, process payments, and communicate with you.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">User Content/Input Data</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Text, audio, images, files, or any other content you input, upload, or generate while using our Services (e.g., prompts for an AI service, support tickets, feedback).</td>
                          <td className="px-6 py-4 text-sm text-gray-500">To provide the specific Service you request, for example, generating a response from an AI model.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Communication Data</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Records of correspondence, including email, chat, or customer support interactions.</td>
                          <td className="px-6 py-4 text-sm text-gray-500">To respond to your inquiries, provide customer support, and improve our Service.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">B. Information We Collect Automatically</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category of Data</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples of Data Collected</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose of Collection</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Usage Data</td>
                          <td className="px-6 py-4 text-sm text-gray-500">IP address, browser type, device information, operating system, pages viewed, time spent on pages, referral URL, and features of our Services used.</td>
                          <td className="px-6 py-4 text-sm text-gray-500">To maintain, improve, and personalize our Services; to monitor for and prevent fraud and misuse.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Log Data</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Server logs, crash data, device event information.</td>
                          <td className="px-6 py-4 text-sm text-gray-500">To diagnose Service problems, analyze trends, and ensure system stability and security.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cookies and Tracking Data</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Information collected through cookies, web beacons, and similar technologies.</td>
                          <td className="px-6 py-4 text-sm text-gray-500">To authenticate users, remember preferences, analyze website traffic, and for marketing purposes.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Personal Data</h2>
              <p className="text-gray-700 mb-4">
                We use your Personal Data for the following purposes and under the following legal bases (where applicable):
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose of Use</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Legal Basis (Examples: Contract, Consent, Legitimate Interest)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Service Provision</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Contract: To provide and operate the Services, process transactions, and manage your account.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Service Improvement & Development</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Legitimate Interest: To analyze usage data, understand user needs, and develop new features, including training and improving our underlying AI models/algorithms.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Security and Fraud Prevention</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Legal Obligation/Legitimate Interest: To maintain the security of our systems, detect and prevent fraudulent or abusive activity.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Communication</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Contract/Legitimate Interest: To send you technical notices, updates, security alerts, and support messages.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Marketing and Promotions</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Consent/Legitimate Interest: To send you promotional communications about Quickrevert Technologies' products and services (you may opt-out at any time).</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Legal Compliance</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Legal Obligation: To comply with applicable laws, legal processes, and governmental requests.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Processing for AI/Model Training</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">User Content and AI Training</h3>
                  <p className="text-gray-700">
                    Quickrevert Technologies may use the User Content/Input Data you provide to improve and train our proprietary AI models and services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Opt-Out</h3>
                  <p className="text-gray-700">
                    We may provide users with options to opt-out of having their User Content used for future model training purposes. Please review your account settings or contact us to understand available controls.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Anonymization</h3>
                  <p className="text-gray-700">
                    Where User Content is used for model training, we take steps to aggregate, anonymize, or de-identify the data where feasible to reduce the risk of re-identification.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Purpose Limitation</h3>
                  <p className="text-gray-700">
                    Use of User Content for training is strictly limited to improving the safety, accuracy, and performance of our Services.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Share Your Personal Data</h2>
              <p className="text-gray-700 mb-4">
                We may disclose your Personal Data in the following circumstances:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• With Service Providers</h3>
                  <p className="text-gray-700">
                    We share information with third-party vendors, consultants, and other service providers who perform services for us or on our behalf, such as payment processing, data hosting, and security services. These parties are bound by contractual obligations to keep personal data confidential and use it only for the purposes for which we disclose it to them.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• With Affiliates</h3>
                  <p className="text-gray-700">
                    We may share your information with our current or future corporate affiliates (parent companies, subsidiaries, joint ventures, etc.) for internal business purposes consistent with this policy.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Business Transfers</h3>
                  <p className="text-gray-700">
                    In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Legal Obligation and Safety</h3>
                  <p className="text-gray-700">
                    If required by law, subpoena, or other legal process, or if we reasonably believe that disclosure is necessary to protect the rights, property, or safety of Quickrevert Technologies, our customers, or the public.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• With Your Consent</h3>
                  <p className="text-gray-700">
                    We may share your information with any other third party with your prior written consent or explicit instruction.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Data Protection Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location and applicable law (such as GDPR or CCPA), you may have the following rights regarding your Personal Data:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Right to Access</h3>
                  <p className="text-gray-700">
                    The right to request copies of your Personal Data.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Right to Rectification</h3>
                  <p className="text-gray-700">
                    The right to request that we correct any information you believe is inaccurate or incomplete.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Right to Erasure ("Right to be Forgotten")</h3>
                  <p className="text-gray-700">
                    The right to request that we delete your Personal Data, under certain conditions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Right to Restrict Processing</h3>
                  <p className="text-gray-700">
                    The right to request that we restrict the processing of your Personal Data, under certain conditions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Right to Object to Processing</h3>
                  <p className="text-gray-700">
                    The right to object to our processing of your Personal Data, under certain conditions (e.g., direct marketing or processing based on legitimate interest).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Right to Data Portability</h3>
                  <p className="text-gray-700">
                    The right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">• Right to Opt-out of Sales/Sharing (CCPA/CPRA)</h3>
                  <p className="text-gray-700">
                    The right to opt-out of the "sale" or "sharing" of your personal information for cross-context behavioral advertising. Quickrevert Technologies does not "sell" customer data in the traditional sense; however, certain uses of third-party analytics and advertising cookies may be considered "sharing" under these laws.
                  </p>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-700">
                    To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below. We may need to verify your identity before processing a request.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security and Retention</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Security</h3>
                  <p className="text-gray-700">
                    Quickrevert Technologies implements technical, administrative, and physical security measures designed to protect your Personal Data from accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. However, no electronic transmission or storage is 100% secure, so we cannot guarantee absolute security.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Retention</h3>
                  <p className="text-gray-700">
                    We retain Personal Data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or comments about this Privacy Policy, our data practices, or if you wish to exercise your data rights, please contact us at:
              </p>
              <p className="text-gray-700">
                <strong>Quickrevert Technologies</strong>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:connect@quickrevert.tech" className="text-blue-600 hover:underline">connect@quickrevert.tech</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}