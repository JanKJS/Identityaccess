import { Check, Mail, FileText, Settings as SettingsIcon } from 'lucide-react';

export default function Pricing() {
  const features = [
    'RSI Stability Pro EA (.ex5 file)',
    'Installation guide & README',
    'Recommended settings file (.set)',
    'Email support',
    'Lifetime updates',
    'Money-back guarantee'
  ];

  const handlePurchase = () => {
    window.location.href = 'https://buy.stripe.com/dRm14p2P80ZX3233WA38400';
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-slate-300">
            One-time payment, lifetime access
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-5xl sm:text-6xl font-bold text-white">$49</span>
                <span className="text-slate-400 text-xl">USD</span>
              </div>
              <p className="text-emerald-400 font-semibold">Limited time offer</p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 bg-emerald-500/20 rounded-full p-1">
                    <Check className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button
                onClick={handlePurchase}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center gap-2 text-lg"
              >
                Buy Now - $49
              </button>

              <p className="text-xs text-slate-400 text-center">
                Secure payment powered by Stripe
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 border-t border-slate-700 p-6">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                <p className="text-xs text-slate-400">Instant email delivery</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <p className="text-xs text-slate-400">Complete documentation</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SettingsIcon className="w-5 h-5 text-emerald-400" />
                <p className="text-xs text-slate-400">Ready-to-use settings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            By purchasing, you agree to our terms of service. All sales are final but covered by our satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
