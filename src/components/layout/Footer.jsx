import { useState } from 'react';
import { Button } from '../ui/Button';
import './Footer.css';

export function Footer() {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
      setInterest('');
    }
  };

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-bg-svg">
        {/* Desktop SVG background */}
        <svg className="footer-svg-desktop" viewBox="0 0 1920 346" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 346H1920V100.924C1170.28 -35.0035 749.965 -32.272 0 100.924V346Z" fill="#0E1B2C"/>
        </svg>
        {/* Mobile SVG background */}
        <svg className="footer-svg-mobile" viewBox="0 0 375 469" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-113 468.5H487V100.76C351.076 -34.7924 20.5 -32.3752 -113 100.76V468.5Z" fill="#0E1B2C"/>
        </svg>
      </div>
      
      {/* Decorative streaks positioned relative to screen/section */}
      <div className="footer-streak">
        <img src="/assets/streaks.svg" alt="" aria-hidden="true" />
      </div>

      <div className="container footer-content">
        <h2 className="footer-title">Stay updated with KC Overseas</h2>

        <form className="footer-form" onSubmit={handleSubmit}>
          <div className="footer-inputs">
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer-input"
              required
              id="footer-email"
            />
            <div className="footer-select-wrap">
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="footer-select"
                id="footer-interest"
              >
                <option value="">I'm Interested in</option>
                <option>Study in USA</option>
                <option>Study in UK</option>
                <option>Study in Canada</option>
                <option>Study in Australia</option>
                <option>Study in Germany</option>
                <option>IELTS / TOEFL Prep</option>
                <option>Visa Assistance</option>
                <option>Other</option>
              </select>
              <img src="/assets/logos/chevron-down.svg" alt="" className="select-chevron" aria-hidden="true" />
            </div>
          </div>
          <Button type="submit">
            {submitted ? '✓ Subscribed!' : 'Subscribe Now'}
          </Button>
        </form>
      </div>
    </footer>
  );
}
