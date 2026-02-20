import { Navigation } from './Navigation';

export function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-64 bg-hero-bg p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-lg"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="pt-12">
          <Navigation onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
