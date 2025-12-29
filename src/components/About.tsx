import { Activity, Clock, Target, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About the Strategy
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A proven RSI-based approach designed for stability and consistent results
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8 sm:p-12 mb-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-200 text-lg leading-relaxed mb-6">
              RSI Stability Pro employs a time-tested RSI (Relative Strength Index) overbought/oversold strategy,
              optimized for the M1 timeframe on MT5. The EA identifies high-probability entry points based on
              market momentum extremes. While compatible with all forex pairs, it has been specifically optimized
              and thoroughly tested for EUR/USD to deliver the most stable performance.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-emerald-500/20 p-3 rounded-lg">
                    <Activity className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Entry Logic</h3>
                  <p className="text-slate-300 text-sm">
                    Buy signals trigger when RSI falls below oversold level (default 30).
                    Sell signals activate when RSI rises above overbought level (default 70).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-emerald-500/20 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Risk Management</h3>
                  <p className="text-slate-300 text-sm">
                    Each trade includes both take profit and stop loss set at 200 pips by default,
                    providing clear risk-reward parameters for every position.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-emerald-500/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Timeframe</h3>
                  <p className="text-slate-300 text-sm">
                    Operates on the M1 (1-minute) timeframe, allowing for frequent trading opportunities
                    while maintaining disciplined entry criteria.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-emerald-500/20 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Position Sizing</h3>
                  <p className="text-slate-300 text-sm">
                    Uses fixed lot size of 1.0 per trade by default. Easily adjustable to match
                    your account size and risk tolerance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-600 rounded-lg px-6 py-3">
            <span className="text-emerald-400 font-semibold">Platform:</span>
            <span className="text-white font-bold">MetaTrader 5 (MT5)</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-600 rounded-lg px-6 py-3 ml-3">
            <span className="text-emerald-400 font-semibold">Compatible Pairs:</span>
            <span className="text-white font-bold">All Forex Pairs</span>
            <span className="text-slate-400">|</span>
            <span className="text-emerald-300">Optimized for EUR/USD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
