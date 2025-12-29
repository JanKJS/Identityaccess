import { Bot, FileCode, LineChart, Settings, Download, CheckCircle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Bot,
      title: 'Fully Automated Trading',
      description: 'Set it and forget it. The EA handles all trading decisions based on proven RSI signals without manual intervention.'
    },
    {
      icon: FileCode,
      title: 'Easy Installation',
      description: 'Simple .ex5 file installation. Just drop the file into your MT5 experts folder and activate on your chart.'
    },
    {
      icon: LineChart,
      title: 'Stable Performance',
      description: 'Thoroughly backtested with transparent results. Built for consistency rather than unrealistic promises.'
    },
    {
      icon: Settings,
      title: 'Customizable Settings',
      description: 'Adjust RSI levels, lot size, take profit, and stop loss to match your trading style and risk appetite.'
    },
    {
      icon: CheckCircle,
      title: 'Simple Risk Management',
      description: 'Clear stop loss and take profit levels on every trade. No complicated hedging or dangerous strategies.'
    },
    {
      icon: Download,
      title: 'Instant Delivery',
      description: 'Receive your EA file, installation guide, and recommended settings immediately after purchase via email.'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Key Features & Benefits
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Everything you need for automated RSI-based trading on MT5
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
