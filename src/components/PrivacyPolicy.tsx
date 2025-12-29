import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-slate-300">
          <p className="text-sm text-slate-400">Last Updated: December 18, 2025</p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy explains how RSI Stability Pro ("we", "our", or "us") collects, uses, and protects
              your personal information when you purchase and use our Software. We are committed to protecting your privacy
              and handling your data transparently and securely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-2">We collect the following types of information:</p>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">2.1 Purchase Information</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Name and email address</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Billing address</li>
              <li>Purchase date and transaction details</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">2.2 Usage Information</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>License key activation details</li>
              <li>Software version information</li>
              <li>Basic technical information for support purposes</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">2.3 Communication Data</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Email correspondence for support inquiries</li>
              <li>Feedback and suggestions you provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-2">We use your information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Processing and fulfilling your purchase</li>
              <li>Delivering the Software and license keys</li>
              <li>Providing customer support and technical assistance</li>
              <li>Sending important updates about the Software</li>
              <li>Improving our products and services</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Information Sharing</h2>
            <p className="mb-2">We do not sell your personal information. We may share your information only in these circumstances:</p>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">4.1 Service Providers</h3>
            <p className="ml-4 mb-2">
              We work with trusted third-party service providers who help us operate our business:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-8">
              <li>Stripe - for payment processing</li>
              <li>Email service providers - for delivering purchase confirmations and support</li>
              <li>Cloud hosting providers - for data storage</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">4.2 Legal Requirements</h3>
            <p className="ml-4">
              We may disclose your information if required by law or in response to valid legal processes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
            <p className="mb-2">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure backup and recovery procedures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy,
              unless a longer retention period is required by law. Purchase records are typically retained for accounting and
              tax purposes for at least 7 years.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access - Request a copy of your personal information</li>
              <li>Correction - Request correction of inaccurate information</li>
              <li>Deletion - Request deletion of your personal information</li>
              <li>Objection - Object to processing of your information</li>
              <li>Portability - Request transfer of your information</li>
              <li>Withdraw Consent - Withdraw consent for optional processing</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us at rsistability@outlook.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Cookies and Tracking</h2>
            <p>
              Our website uses essential cookies for basic functionality and security. We do not use tracking cookies
              or third-party analytics that identify individual users. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Trading Data Privacy</h2>
            <p>
              The Software operates locally on your MetaTrader platform. We do not collect, store, or have access to
              your trading activity, account balances, positions, or any trading-related data. Your trading information
              remains private between you and your broker.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Children's Privacy</h2>
            <p>
              Our Software is not intended for use by individuals under the age of 18. We do not knowingly collect
              personal information from children. If you believe we have collected information from a child,
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence.
              We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email
              or through a prominent notice on our website. Your continued use of the Software after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <p className="mt-2 ml-4">
              Email: rsistability@outlook.com<br />
              Support: rsistability@outlook.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
