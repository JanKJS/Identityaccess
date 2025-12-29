import { ZoomIn } from 'lucide-react';

interface ScreenshotsProps {
  onImageClick: (imageUrl: string) => void;
}

export default function Screenshots({ onImageClick }: ScreenshotsProps) {
  const screenshots = [
    {
      url: '/image.png',
      caption: 'Complete Backtest Statistics & Performance Metrics',
      alt: 'RSI Stability Pro detailed backtest results showing profit factor, drawdown, and trading statistics'
    },
    {
      url: '/image copy.png',
      caption: 'Equity Curve - Consistent Growth Over Time',
      alt: 'RSI Stability Pro equity curve showing steady upward trend with balanced drawdown'
    }
  ];

  return (
    <section id="screenshots" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Proven Performance
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real backtest results demonstrating stable and consistent trading performance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition-all duration-300 shadow-xl"
            >
              <div className="relative group cursor-pointer" onClick={() => onImageClick(screenshot.url)}>
                <img
                  src={screenshot.url}
                  alt={screenshot.alt}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg flex items-center gap-2">
                    <ZoomIn className="w-5 h-5 text-slate-900" />
                    <span className="text-slate-900 font-semibold">Click to zoom</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-200 font-medium text-center">{screenshot.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6 text-center">
          <p className="text-emerald-300 font-medium">
            Backtested on real historical data with transparent results
          </p>
        </div>
      </div>
    </section>
  );
}
