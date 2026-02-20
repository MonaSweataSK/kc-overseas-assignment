import { Button } from '../ui/Button';
import { WavyDivider } from '../ui/WavyDivider';

export function Hero() {
  return (
    <section className="relative bg-hero-bg pt-24 md:pt-28 pb-20 md:pb-32 overflow-hidden">
      {/* Subtle star/dot pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-white/90 text-sm mb-2">Find Your Branch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              KC Overseas Education Pune
            </h1>
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              All our programs have one common objective: to ensure that international students are
              provided with the best facilities, support and opportunities. No matter the
              destination, the course or the level of study, our programs are designed to help you
              prepare for a successful career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button>Book Slot</Button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-hero-bg font-medium border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Video
              </button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center p-6">
              <img
                src="/assets/counselling.svg"
                alt="Study Abroad"
                className="w-20 h-20 md:w-24 md:h-24"
              />
              <span className="text-gray-800 font-semibold mt-2 text-sm md:text-base">
                Study Abroad Program
              </span>
            </div>
          </div>
        </div>
      </div>
      <WavyDivider fill="#ffffff" />
    </section>
  );
}
