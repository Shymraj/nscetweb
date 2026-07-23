import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Preloader.css';

const PageTransition = () => {
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const isFirstRender = useRef(true);
    const prevPathname = useRef(location.pathname);

    useEffect(() => {
        // Skip the very first render (initial page load — handled by Preloader)
        if (isFirstRender.current) {
            isFirstRender.current = false;
            prevPathname.current = location.pathname;
            return;
        }

        // Skip if same pathname
        if (prevPathname.current === location.pathname) return;
        prevPathname.current = location.pathname;

        // Trigger transition
        setIsTransitioning(true);
        setIsExiting(false);

        // Start exit phase
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 900);

        // Fully remove
        const removeTimer = setTimeout(() => {
            setIsTransitioning(false);
            setIsExiting(false);
        }, 1300);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(removeTimer);
        };
    }, [location.pathname]);

    if (!isTransitioning) return null;

    return (
        <div className={`page-transition-overlay ${isExiting ? 'exit' : 'active'}`}>
            <div className="transition-n-container">
                {/* Ambient glow */}
                <div className="transition-n-glow" />

                {/* Google-G-style multi-color spinning circle */}
                <div className="transition-google-circle">
                    <svg viewBox="0 0 100 100">
                        <circle className="g-arc-blue" cx="50" cy="50" r="42" />
                        <circle className="g-arc-gold" cx="50" cy="50" r="42" />
                        <circle className="g-arc-light" cx="50" cy="50" r="42" />
                        <circle className="g-arc-accent" cx="50" cy="50" r="42" />
                    </svg>
                </div>

                {/* "N" letter in center with shimmer */}
                <div className="transition-n-letter">N</div>
            </div>
        </div>
    );
};

export default PageTransition;
