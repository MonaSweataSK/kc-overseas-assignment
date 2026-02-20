import { SectionTitle } from '../ui/SectionTitle';
import { Carousel } from '../ui/Carousel';
import { Card } from '../ui/Card';
import { steps } from '../../data/content';

export function Steps() {
  return (
    <section className="py-16 md:py-24 bg-neutral-purple-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="mb-12">
          7 Easy Steps to Land in your Dream University
        </SectionTitle>
        <Carousel>
          {steps.map((step, i) => (
            <Card key={i} className="max-w-md mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <span className="text-4xl mb-4 block">{step.icon}</span>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
