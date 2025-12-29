import { Mail, TrendingUp } from 'lucide-react';

interface FooterProps {
  onShowTerms: () => void;
  onShowPrivacy: () => void;
}

export default function Footer({ onShowTerms, onShowPrivacy }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">RSI Stability Pro</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional RSI-based Expert Advisor for MetaTrader 5.
              Designed for stable and consistent automated trading.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  About the Strategy
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#screenshots" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  Performance
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:rsistability@outlook.com"
                className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                rsistability@outlook.com
              </a>
              <p className="text-slate-400 text-sm">
                Typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} RSI Stability Pro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={onShowTerms}
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={onShowPrivacy}
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-slate-800/30 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-xs text-center leading-relaxed">
            <strong className="text-slate-300">Risk Disclaimer:</strong> Trading forex involves substantial risk of loss
            and is not suitable for all investors. Past performance is not indicative of future results.
            Please trade responsibly and only with funds you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
}
