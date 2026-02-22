import { Button } from '../ui/Button';
import './Hero.css';


export function Hero() {
  return (
    <>
      <section className="hero-section">
        {/* Star pattern overlay */}
        <div className="hero-stars" aria-hidden="true">
          <img src="/assets/logos/stars.svg" alt="" className="hero-stars-svg" />
        </div>

        <div className="container hero-content">
          <div className="hero-breadcrumb">Home &bull; <h5 className="hero-breadcrumb-h5">Pune Branch</h5></div>
          <h1 className="hero-title">KC Overseas Education <br /> Pune</h1>
          <p className="hero-description">
            We value your career aspirations, which is why we map your preferences with the best that <br />
            our global universities have to offer. Thousands of our students are pursuing their programs <br />
            and aspirations in eminent universities globally and we welcome you to pursue yours!
          </p>
          <div className="hero-actions">
            <Button onClick={() => window.location.href = '#'}>Enquire Now</Button>
            <a href="#" className="hero-btn-address">
              <span className="address-circle">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 5.5L8 10.5L13 5.5" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Branch Address
            </a>
          </div>
        </div>
      </section>
      <div className="hero-curve-bottom" aria-hidden="true" />
    </>
  );
}
