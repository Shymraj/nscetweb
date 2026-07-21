import React, { useEffect, useState, useMemo } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [fading, setFading] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFading(true), 3200);
        const hideTimer = setTimeout(() => setHidden(true), 4000);
        return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
    }, []);

    // Generate random golden sparkle particles around the text
    const sparkles = useMemo(() => {
        return Array.from({ length: 60 }).map((_, i) => {
            const angle = Math.random() * Math.PI * 2;
            const radius = 30 + Math.random() * 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius * 0.5; // flatten vertically for 3D feel
            const size = 1 + Math.random() * 4;
            const delay = Math.random() * 3;
            const dur = 1.5 + Math.random() * 2.5;
            const brightness = 0.3 + Math.random() * 0.7;
            return { x, y, size, delay, dur, brightness, id: i };
        });
    }, []);

    // Generate falling spark trails
    const sparks = useMemo(() => {
        return Array.from({ length: 25 }).map((_, i) => {
            const x = -45 + Math.random() * 90; // percentage spread
            const delay = Math.random() * 4;
            const dur = 0.8 + Math.random() * 1.5;
            const size = 1 + Math.random() * 2;
            return { x, delay, dur, size, id: i };
        });
    }, []);

    if (hidden) return null;

    return (
        <div className={`global-preloader ${fading ? 'fade-out' : ''}`}>
            {/* ====== Premium Golden Background ====== */}
            <div className="preloader-bg-3d">
                <div className="aurora-layer">
                    <div className="aurora-wave" />
                    <div className="aurora-wave" />
                    <div className="aurora-wave" />
                </div>
                <div className="nebula-cloud" />
                <div className="nebula-cloud" />
                <div className="nebula-cloud" />
                <div className="nebula-cloud" />
                <div className="bg-3d-grid" />
                <div className="bg-3d-shape"><div className="face" /><div className="face" /><div className="face" /></div>
                <div className="bg-3d-shape"><div className="face" /><div className="face" /><div className="face" /></div>
                <div className="bg-3d-shape"><div className="face" /><div className="face" /><div className="face" /></div>
                <div className="bg-3d-shape"><div className="face" /><div className="face" /><div className="face" /></div>
                <div className="bg-3d-ring">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="ring-segment" />
                    ))}
                </div>
                <div className="bg-star" />
                <div className="bg-star" />
                <div className="bg-star" />
                <div className="bg-star" />
            </div>

            {/* Golden floating particles */}
            <div className="ambient-particles">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="ambient-particle" />
                ))}
            </div>

            {/* ====== CENTER — Golden Particle Text ====== */}
            <div className="preloader-center">
                <div className="nscet-text-container">
                    {/* Background glow */}
                    <div className="nscet-mega-glow" />

                    {/* Sparkle particle field */}
                    <div className="sparkle-field">
                        {sparkles.map(s => (
                            <div
                                key={s.id}
                                className="sparkle-dot"
                                style={{
                                    left: `calc(50% + ${s.x}px)`,
                                    top: `calc(50% + ${s.y}px)`,
                                    width: `${s.size}px`,
                                    height: `${s.size}px`,
                                    animationDelay: `${s.delay}s`,
                                    animationDuration: `${s.dur}s`,
                                    opacity: s.brightness,
                                }}
                            />
                        ))}
                    </div>

                    {/* Falling golden sparks */}
                    <div className="spark-rain">
                        {sparks.map(s => (
                            <div
                                key={s.id}
                                className="falling-spark"
                                style={{
                                    left: `calc(50% + ${s.x}%)`,
                                    animationDelay: `${s.delay}s`,
                                    animationDuration: `${s.dur}s`,
                                    width: `${s.size}px`,
                                    height: `${s.size}px`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Main NSCET text with golden particle look */}
                    <div className="nscet-golden-text" data-text="NSCET">
                        <span className="letter" style={{ animationDelay: '0.2s' }}>N</span>
                        <span className="letter" style={{ animationDelay: '0.35s' }}>S</span>
                        <span className="letter" style={{ animationDelay: '0.5s' }}>C</span>
                        <span className="letter" style={{ animationDelay: '0.65s' }}>E</span>
                        <span className="letter" style={{ animationDelay: '0.8s' }}>T</span>
                    </div>

                    {/* Shimmer overlay */}
                    <div className="nscet-shimmer-overlay" />
                </div>

                {/* Tagline */}
                <div className="preloader-tagline">
                    <span>N</span><span>a</span><span>d</span><span>a</span><span>r</span>
                    <span>&nbsp;</span>
                    <span>S</span><span>a</span><span>r</span><span>a</span><span>s</span><span>w</span><span>a</span><span>t</span><span>h</span><span>i</span>
                    <span>&nbsp;</span>
                    <span>C</span><span>o</span><span>l</span><span>l</span><span>e</span><span>g</span><span>e</span>
                </div>

                <div className="preloader-progress-track">
                    <div className="preloader-progress-bar" />
                </div>
            </div>
        </div>
    );
};

export default Preloader;
