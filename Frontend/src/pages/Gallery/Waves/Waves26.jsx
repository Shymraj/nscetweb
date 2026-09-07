import React, { useEffect, useState } from 'react';
import './Waves26.css';

const Waves26 = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`waves-container ${mounted ? 'is-mounted' : ''}`}>
      {/* Dynamic Background Elements */}
      <div className="waves-bg-orb orb-1"></div>
      <div className="waves-bg-orb orb-2"></div>
      <div className="waves-bg-orb orb-3"></div>

      <div className="waves-content">
        <div className="waves-badge">
          <span className="badge-dot"></span>
          STAY TUNED FOR THE BIGGEST FEST
        </div>

        <h1 className="waves-title" data-text="WAVES'26">
          WAVES'26
        </h1>

        <div className="waves-subtitle-wrapper">
          <h2 className="waves-subtitle">
            <span>C</span><span>O</span><span>M</span><span>I</span><span>N</span><span>G</span>
            <span className="space"> </span>
            <span>S</span><span>O</span><span>O</span><span>N</span>
          </h2>
        </div>

        <div className="waves-divider"></div>

        <p className="waves-description">
          The stage is being set. The legacy continues. Prepare yourself for an unforgettable experience of art, culture, and innovation.
        </p>
      </div>
    </div>
  );
};

export default Waves26;
