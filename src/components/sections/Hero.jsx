import { useState } from 'react';
import { Button } from '../ui/Button';
import './Hero.css';

const BRANCH_OPTIONS = [
  'Pune Branch',
  'Mumbai Branch',
  'Nagpur Branch',
  'Ahmedabad Branch',
  'Delhi Branch'
];

export function Hero() {
  const [selectedBranch, setSelectedBranch] = useState('Pune Branch');
  const [isBranchOpen, setIsBranchOpen] = useState(false);

  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="hero-bg-svg">
          {/* Desktop SVG background */}
          <svg className="hero-svg-desktop" viewBox="0 0 1920 650" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 0H1920V548.975C1170.28 685.039 749.965 682.304 0 548.975L0 0Z" fill="#6C48F0"/>
          </svg>
          {/* Mobile SVG background */}
          <svg className="hero-svg-mobile" viewBox="0 0 375 669" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M-113 0H487V568.24C351.076 703.792 20.5 701.375 -113 568.24L-113 0Z" fill="#6C48F0"/>
          </svg>
        </div>

        {/* Star pattern overlay */}
        <div className="hero-stars" aria-hidden="true">
          <img src="/assets/logos/stars.svg" alt="" className="hero-stars-svg" />
        </div>

        <div className="container hero-content">
          <div className="hero-breadcrumb">Home &bull; <h5 className="hero-breadcrumb-h5">{selectedBranch}</h5></div>
          <h1 className="hero-title">KC Overseas Education <br /> Pune</h1>
          <p className="hero-description">
            We value your career aspirations, which is why we map your preferences with the best that <br />
            our global universities have to offer. Thousands of our students are pursuing their programs <br />
            and aspirations in eminent universities globally and we welcome you to pursue yours!
          </p>
          <div className="hero-actions">
            <Button onClick={() => window.location.href = '#'}>I'm Interested in</Button>

            <div className="branch-dropdown-wrapper">
              <button 
                className={`hero-btn-address ${isBranchOpen ? 'active' : ''}`}
                onClick={() => setIsBranchOpen(!isBranchOpen)}
              >
                <span className="address-circle">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 5.5L8 10.5L13 5.5" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Branch Address
              </button>
              
              {isBranchOpen && (
                <div className="branch-dropdown-menu">
                  {BRANCH_OPTIONS.map((branch) => (
                    <button 
                      key={branch} 
                      className="branch-dropdown-item"
                      onClick={() => {
                        setSelectedBranch(branch);
                        setIsBranchOpen(false);
                      }}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
