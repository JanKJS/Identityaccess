import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg transition-colors duration-200"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="max-w-7xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Full size screenshot"
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
