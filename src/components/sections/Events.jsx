import { SectionTitle } from '../ui/SectionTitle';
import { Carousel } from '../ui/Carousel';
import { Card } from '../ui/Card';
import { events } from '../../data/content';

export function Events() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="mb-12">Webinars & Events</SectionTitle>
        <Carousel>
          {events.map((event, i) => (
            <Card key={i} className="max-w-sm mx-auto overflow-hidden p-0" hover>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <p className="text-orange-500 text-sm font-medium mb-1">
                  {event.date} / {event.time}
                </p>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <a
                  href={event.link}
                  className="text-orange-500 font-medium text-sm hover:text-orange-600"
                >
                  Register Now →
                </a>
              </div>
            </Card>
          ))}
        </Carousel>
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:opacity-90"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
