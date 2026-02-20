import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { updates } from '../../data/content';

export function Updates() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="mb-12">Latest KC Updates</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {updates.map((update, i) => (
            <div key={i}>
              {update.type === 'hiring' ? (
                <div className="h-full rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white shadow-lg relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4">{update.title}</h3>
                    <p className="mb-6 opacity-90">{update.description}</p>
                    <a
                      href={update.ctaLink}
                      className="inline-block px-6 py-3 rounded-xl bg-white text-orange-500 font-medium hover:bg-gray-100 transition"
                    >
                      {update.cta}
                    </a>
                  </div>
                </div>
              ) : (
                <Card hover className="h-full">
                  <div className="text-center">
                    <img
                      src={update.logo}
                      alt={update.title}
                      className="h-16 w-auto mx-auto mb-4 object-contain"
                    />
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{update.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{update.date}</p>
                    <a
                      href={update.link}
                      className="text-orange-500 font-medium text-sm hover:text-orange-600"
                    >
                      Read More →
                    </a>
                  </div>
                </Card>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:opacity-90"
          >
            View More Updates
          </a>
        </div>
      </div>
    </section>
  );
}
