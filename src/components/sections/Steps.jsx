import { useState } from 'react';
import { steps } from '../../data/content';
import './Steps.css';

export function Steps() {
  const [current, setCurrent] = useState(0);
  const total = steps.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const prevStep   = steps[(current - 1 + total) % total];
  const activeStep = steps[current];
  const nextStep   = steps[(current + 1) % total];

  return (
    <section className="steps-section">
      <div className="container">
        <h2 className="section-title steps-title">
          7 Easy Steps to Land in your Dream University
        </h2>

        <div className="steps-carousel-area">

          {/* Number row: prev ○ ────── ● ────── ○ next */}
          <div className="steps-number-row">
            <div className="steps-dotted-line" />
            <div className="step-num step-num-side step-num-prev">{prevStep.number}</div>
            <div className="step-num step-num-active">{activeStep.number}</div>
            <div className="step-num step-num-side step-num-next">{nextStep.number}</div>
          </div>

          {/* Card carousel — active card centred, side cards partially visible */}
          <div className="steps-cards-outer">
            <div className="steps-cards-row">
              <div className="step-card step-card-side">
                <div className="step-icon">
                  {prevStep.icon.startsWith('/') ? (
                    <img src={prevStep.icon} alt={prevStep.title} className="step-illustration" />
                  ) : prevStep.icon}
                </div>
                <h3 className="step-title">{prevStep.title}</h3>
                <p className="step-desc">{prevStep.description}</p>
              </div>

              <div className="step-card step-card-active">
                <div className="step-icon">
                  {activeStep.icon.startsWith('/') ? (
                    <img src={activeStep.icon} alt={activeStep.title} className="step-illustration" />
                  ) : activeStep.icon}
                </div>
                <h3 className="step-title">{activeStep.title}</h3>
                <p className="step-desc">{activeStep.description}</p>
              </div>

              <div className="step-card step-card-side">
                <div className="step-icon">
                  {nextStep.icon.startsWith('/') ? (
                    <img src={nextStep.icon} alt={nextStep.title} className="step-illustration" />
                  ) : nextStep.icon}
                </div>
                <h3 className="step-title">{nextStep.title}</h3>
                <p className="step-desc">{nextStep.description}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="steps-controls">
            <button className="steps-nav-btn" onClick={prev}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Previous Step
            </button>
            <button className="steps-nav-btn" onClick={next}>
              Next Step
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
