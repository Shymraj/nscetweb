import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import nscetVideo from '../../page loading/NSCET.webm';
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
            <div className="transition-n-container" style={{ width: '250px', height: '250px', clipPath: 'inset(0 0 25% 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <video 
                  src={nscetVideo}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
            </div>
        </div>
    );
};

export default PageTransition;
