import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [fading, setFading] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        // Minimum visual display to show the sleek loading state
        const fadeTimer = setTimeout(() => {
            setFading(true);
        }, 2200);

        // Completely unmount/hide after the fade out completes
        const hideTimer = setTimeout(() => {
            setHidden(true);
        }, 2800);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (hidden) return null;

    return (
        <div className={`global-preloader ${fading ? 'fade-out' : ''}`}>
            <div className="nscet-preloader-container">
                <h1 className="nscet-text" data-text="NSCET">
                    NSCET
                </h1>
                <div className="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
