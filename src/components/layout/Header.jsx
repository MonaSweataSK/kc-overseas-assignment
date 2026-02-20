import { useState } from 'react';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-hero-bg/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center">
              <img src="/assets/logo.svg" alt="KC Overseas Education" className="h-8 md:h-10" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <Navigation />
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              aria-label="Open menu"
            >
              <img src="/assets/logos/hamburger.svg" alt="" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
