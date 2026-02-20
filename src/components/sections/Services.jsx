import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { services } from '../../data/content';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="mb-12">Services we provide</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {services.map((service, i) => (
            <Card key={i} hover>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
                  <img src={service.icon} alt="" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button>Explore All</Button>
        </div>
      </div>
    </section>
  );
}
