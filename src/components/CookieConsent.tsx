import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="bg-emerald-500/20 p-2 rounded-lg flex-shrink-0">
                <Cookie className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Cookie Notice</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and provide a better user experience.
                  By clicking "Accept", you consent to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-none px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <X className="w-4 h-4" />
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg shadow-emerald-500/30"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
