import { useState, useEffect } from 'react';
import { testimonials } from '../../data/content';
import './Testimonials.css';

const CARDS_PER_PAGE_DESKTOP = 3;
const CARDS_PER_PAGE_MOBILE = 1;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const { width } = useWindowSize();

  const isMobile = width <= 768;
  const cardsPerPage = isMobile ? CARDS_PER_PAGE_MOBILE : CARDS_PER_PAGE_DESKTOP;
  
  // Limit to 5 testimonials on mobile, otherwise use all
  const data = isMobile ? testimonials.slice(0, 5) : testimonials;
  const totalPages = Math.ceil(data.length / cardsPerPage);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const visible = data.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage);

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

        {/* Dots — one per page */}
        <div className="testi-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
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
