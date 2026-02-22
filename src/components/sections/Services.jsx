import { services } from '../../data/content';
import './Services.css';

export function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title services-title">Services we provide</h2>
        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.id} className="service-card">
              <div className="service-icon-wrap">
                <img src={svc.icon} alt={svc.title} className="service-icon" />
              </div>
              <span className="service-label">{svc.title}</span>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <a href="#" className="btn-explore">Enquire Now</a>
        </div>
      </div>
    </section>
  );
}
