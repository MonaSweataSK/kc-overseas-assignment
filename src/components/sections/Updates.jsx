import { updates } from '../../data/content';
import './Updates.css';

export function Updates() {
  return (
    <section className="updates-section">
      <div className="container">
        <h2 className="section-title updates-title">Latest KC Updates</h2>
        <div className="updates-grid">
          {updates.map((update, i) => {
            if (update.type === 'hiring') {
              return (
                <div key={i} className="update-card update-hiring">
                  {/* decorative arcs */}
                  <div className="hiring-arcs" aria-hidden="true">
                    <span className="arc arc-1" />
                    <span className="arc arc-2" />
                  </div>
                  <div className="hiring-content">
                    <h3 className="hiring-title">{update.title}</h3>
                    <p className="hiring-desc">{update.description}</p>
                    <a href={update.ctaHref} className="hiring-btn">{update.cta}</a>
                  </div>
                </div>
              );
            }

            return (
              <div key={i} className="update-card update-partner">
                <div className="partner-logo-wrap">
                  <img src={update.logo} alt={update.org} className="partner-logo" />
                </div>
                <p className="partner-org">{update.org}</p>
                {/* decorative star dots */}
                <div className="partner-stars" aria-hidden="true">
                  <span>✦</span><span>✦</span><span>✦</span>
                </div>
                <a href={update.link} className="partner-title">{update.title}</a>
                <p className="partner-date">{update.date}</p>
              </div>
            );
          })}
        </div>

        <div className="updates-cta">
          <a href="#" className="updates-more-link">
            More News
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
