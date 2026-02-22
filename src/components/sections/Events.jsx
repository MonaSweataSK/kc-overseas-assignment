import { events } from '../../data/content';
import './Events.css';

export function Events() {
  const featured = events[0];          // city1 — large left card
  const secondary = events.slice(1, 3); // city2 & city3 — small right stack

  return (
    <section className="events-section">
      <div className="container">
        <h2 className="section-title events-title">Webinars &amp; Events</h2>

        <div className="events-grid">

          {/* ── Large featured card ── */}
          <div className="event-card event-card-featured">
            <div className="event-featured-image-wrap">
              <img src={featured.image} alt={featured.title} className="event-image" />
            </div>
            <div className="event-body">
              <p className="event-date">{featured.date} · {featured.time}</p>
              <h3 className="event-name">{featured.title}</h3>
              <p className="event-desc">{featured.description}</p>
              <a href={featured.link} className="event-link">
                Register Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Two small stacked cards ── */}
          <div className="events-right-col">
            {secondary.map((event, i) => (
              <div key={i} className="event-card event-card-small">
                <div className="event-small-image-wrap">
                  <img src={event.image} alt={event.title} className="event-image" />
                </div>
                <div className="event-body">
                  <p className="event-date">{event.date} · {event.time}</p>
                  <h3 className="event-name">{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                  <a href={event.link} className="event-link">
                    Register Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="events-cta">
          <a href="#" className="event-link events-see-more">
            See More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
