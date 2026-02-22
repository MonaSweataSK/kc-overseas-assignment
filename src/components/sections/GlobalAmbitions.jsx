import { benefits } from '../../data/content';
import './GlobalAmbitions.css';

export function GlobalAmbitions() {
  return (
    <section className="ambitions-section">
      <div className="container ambitions-inner">
        <div className="ambitions-image-wrap">
          <div className="ambitions-image-bg" />
          <img
            src="/assets/ambitions.png"
            alt="Counseling session with students"
            className="ambitions-image"
          />
        </div>
        <div className="ambitions-content">
          <h2 className="section-title ambitions-heading">
            Realize your global ambitions with us
          </h2>
          <p className="ambitions-description">
            With a keen ear for your choices and preferences, our counselling
            experience is so seamless that you will land in your dream
            university even before you do!
          </p>
          <ul className="ambitions-list">
            {benefits.map((item, i) => (
              <li key={i} className="ambitions-item">
                <span className="ambitions-star">★</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
