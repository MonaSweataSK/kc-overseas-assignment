import { SectionTitle } from '../ui/SectionTitle';
import { Carousel } from '../ui/Carousel';
import { Card } from '../ui/Card';
import { testimonials } from '../../data/content';

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-neutral-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="mb-12">Our Students Love Us</SectionTitle>
        <Carousel>
          {testimonials.map((t, i) => (
            <Card key={i} className="max-w-2xl mx-auto relative">
              <img
                src="/assets/quotes.svg"
                alt=""
                className="w-12 h-12 absolute top-6 left-6 opacity-80"
              />
              <div className="pl-4 pt-4">
                <p className="text-gray-700 text-lg italic mb-6">"{t.text}"</p>
                <p className="font-semibold text-gray-800">{t.name}</p>
                <p className="text-gray-600 text-sm">{t.role}</p>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
