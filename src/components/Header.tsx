import { TrendingUp } from 'lucide-react';

export default function Header() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">RSI Stability Pro</h1>
              <p className="text-sm text-slate-300 hidden sm:block">Clean, stable, RSI-based trading robot for MT5</p>
            </div>
          </div>
          <button
            onClick={scrollToPricing}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-lg shadow-emerald-500/30"
          >
            Buy Now
          </button>
        </div>
      </div>
    </header>
  );
}
