import { services } from '../../data/content';
import { Button } from '../ui/Button';
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
          <Button onClick={() => window.location.href = '#'}>Enquire Now</Button>
        </div>
      </div>
    </section>
  );
}
