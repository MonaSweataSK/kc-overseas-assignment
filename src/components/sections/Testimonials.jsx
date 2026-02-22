import { useState } from 'react';
import { testimonials } from '../../data/content';
import './Testimonials.css';

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = 5; // 15 cards ÷ 3

export function Testimonials() {
  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => (p - 1 + TOTAL_PAGES) % TOTAL_PAGES);
  const next = () => setPage((p) => (p + 1) % TOTAL_PAGES);

  const visible = testimonials.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title testimonials-title">Our students love us</h2>

        <div className="testimonials-carousel">
          <button className="testi-arrow testi-prev" onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="testi-cards-wrap">
            {visible.map((t, i) => (
              <div key={`${page}-${i}`} className="testi-card">
                <div className="testi-quote-icon">
                  <img src="/assets/quotes.svg" alt="" width="40" height="32" />
                </div>
                <p className="testi-text">{t.quote}</p>
                <div className="testi-author">
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-detail">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="testi-arrow testi-next" onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* 5 dots — one per page */}
        <div className="testi-dots">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              className={`testi-dot ${i === page ? 'active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
