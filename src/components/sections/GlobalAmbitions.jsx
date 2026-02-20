import { SectionTitle } from '../ui/SectionTitle';

const benefits = [
  'We work with various universities globally, offering diverse programs.',
  'Comprehensive guidance ensures a smooth application and visa process.',
  'Expert advice to help you choose the right course and destination.',
];

export function GlobalAmbitions() {
  return (
    <section className="py-16 md:py-24 bg-neutral-peach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/assets/image 412.png"
              alt="Counseling session"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <SectionTitle align="left" className="mb-6">
              Realize your global ambitions with us
            </SectionTitle>
            <p className="text-gray-600 mb-8">
              Our experienced counselors provide personalized guidance to help you navigate the
              complex world of international education. From choosing the right program to
              settling in your new country, we're with you every step of the way.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-400 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
