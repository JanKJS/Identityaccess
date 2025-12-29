import { X } from 'lucide-react';

interface TermsOfServiceProps {
  onClose: () => void;
}

export default function TermsOfService({ onClose }: TermsOfServiceProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Terms of Service</h1>
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
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By purchasing and using RSI Stability Pro (the "Software"), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, do not purchase or use the Software.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. License Grant</h2>
            <p className="mb-2">
              Upon purchase, you are granted a non-exclusive, non-transferable license to use the Software for personal trading purposes.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Single License: Use on one trading account</li>
              <li>Unlimited License: Use on unlimited trading accounts owned by you</li>
              <li>You may not resell, redistribute, or share the Software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Risk Disclosure</h2>
            <p className="mb-2">
              Trading foreign exchange (forex) on margin carries a high level of risk and may not be suitable for all investors.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Past performance is not indicative of future results</li>
              <li>You may lose some or all of your invested capital</li>
              <li>The Software is provided as a trading tool, not investment advice</li>
              <li>You are solely responsible for your trading decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. No Guarantees</h2>
            <p>
              We make no guarantees or warranties regarding the profitability or performance of the Software.
              Backtest results are based on historical data and do not guarantee future performance.
              Market conditions constantly change, and results may vary significantly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. User Responsibilities</h2>
            <p className="mb-2">You agree to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Use the Software in accordance with all applicable laws and regulations</li>
              <li>Maintain the confidentiality of your license key</li>
              <li>Not attempt to reverse engineer, decompile, or modify the Software</li>
              <li>Not use the Software for any illegal purposes</li>
              <li>Monitor your trading account and adjust settings as needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Refund Policy</h2>
            <p>
              Due to the digital nature of the Software, all sales are final. We do not offer refunds after the Software
              has been delivered. Please ensure you understand the product before purchasing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Updates and Support</h2>
            <p>
              We provide free updates and basic email support for the Software. However, we reserve the right to
              discontinue updates or support at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly,
              or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Software.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Disclaimer of Warranties</h2>
            <p>
              The Software is provided "as is" without warranty of any kind, either express or implied, including but not
              limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Termination</h2>
            <p>
              We reserve the right to terminate your license at any time if you violate these Terms of Service.
              Upon termination, you must cease all use of the Software and destroy all copies in your possession.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
              upon posting. Your continued use of the Software after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with applicable laws,
              without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at rsistability@outlook.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
