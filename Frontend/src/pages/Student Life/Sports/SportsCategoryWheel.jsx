import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaRunning, 
    FaVolleyballBall, 
    FaChessKnight,
    FaFistRaised,
    FaUsers,
    FaTrophy,
    FaUserGraduate,
    FaMedal,
    FaMapMarkerAlt
} from 'react-icons/fa';
import { GiPunchBlast } from 'react-icons/gi';
import './SportsCategoryWheel.css';

// Custom icons since Kabaddi doesn't have a perfect standard icon
const KabaddiIcon = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M352 128c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64zM240 224c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32h-16zm-76.4-18.3L115.3 243.6c-13.6 11.4-15.3 31.7-3.9 45.3s31.7 15.3 45.3 3.9l48.3-40.2V384c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V224c0-35.3-28.7-64-64-64h-57.5z" />
    </svg>
);

const CATEGORIES = [
    { id: 'Team Sports', label: 'Team Sports', icon: FaUsers },
    { id: 'Athletics', label: 'Athletics', icon: FaRunning },
    { id: 'Volleyball', label: 'Volleyball', icon: FaVolleyballBall },
    { id: 'Kabaddi', label: 'Kabaddi', icon: KabaddiIcon },
    { id: 'Martial Arts', label: 'Martial Arts', icon: GiPunchBlast },
    { id: 'Boxing', label: 'Boxing', icon: FaFistRaised },
    { id: 'Chess', label: 'Chess', icon: FaChessKnight }
];

const parseAchievements = (achievementsData) => {
    let parsedStudents = [];
    achievementsData.forEach(ach => {
        const eventText = ach.event.toUpperCase();
        
        let category = "All Sports";
        let sport = "Sport";
        
        // Define Categories
        if (eventText.includes("CYCLING") || eventText.includes("POWER LIFTING") || eventText.includes("CROSS COUNTRY") || eventText.includes("WEIGHT LIFTING") || eventText.includes("ATHLETIC") || eventText.includes("ATHLETICS")) {
            category = "Athletics";
            if (eventText.includes("CYCLING")) sport = "Cycling";
            else if (eventText.includes("POWER LIFTING")) sport = "Power Lifting";
            else if (eventText.includes("CROSS COUNTRY")) sport = "Cross Country";
            else if (eventText.includes("WEIGHT LIFTING")) sport = "Weight Lifting";
            else sport = "Athletics";
        }
        else if (eventText.includes("VOLLEYBALL")) { category = "Volleyball"; sport = "Volleyball"; }
        else if (eventText.includes("KABBADI") || eventText.includes("KABADDI")) { category = "Kabaddi"; sport = "Kabaddi"; }
        else if (eventText.includes("SILAMBAM") || eventText.includes("TAEKWONDO")) { category = "Martial Arts"; sport = eventText.includes("SILAMBAM") ? "Silambam" : "Taekwondo"; }
        else if (eventText.includes("BOXING")) { category = "Boxing"; sport = "Boxing"; }
        else if (eventText.includes("CHESS")) { category = "Chess"; sport = "Chess"; }
        else if (eventText.includes("HANDBALL") || eventText.includes("BADMINTON") || eventText.includes("BASKETBALL") || eventText.includes("TABLE TENNIS")) {
            // Treat as team sports explicitly
            category = "Team Sports";
            if (eventText.includes("HANDBALL")) sport = "Handball";
            else if (eventText.includes("BALL BADMINTON") || eventText.includes("BADMINTON")) sport = "Badminton";
            else if (eventText.includes("BASKETBALL")) sport = "Basketball";
            else if (eventText.includes("TABLE TENNIS")) sport = "Table Tennis";
        }

        // Determine Medal/Achievement Level
        let achievementDesc = "🏅 Participant";
        if (ach.goldenHighlight || eventText.includes("I POSITION") || eventText.includes("WORLD RECORD") || eventText.includes("CHAMPION")) achievementDesc = "🥇 Gold Medalist";
        else if (eventText.includes("II POSITION")) achievementDesc = "🥈 Silver Medalist";
        else if (eventText.includes("III POSITION")) achievementDesc = "🥉 Bronze Medalist";

        // Special override for Phiramoth
        if (ach.sno === 1) achievementDesc = "🥇 National Champion";

        // Split students
        const lines = ach.students.split('\n');
        lines.forEach((line, index) => {
            const cleanLine = line.trim();
            if (!cleanLine || cleanLine === "MEN:" || cleanLine === "WOMEN:") return;
            
            let namePart = cleanLine;
            let specificAchievement = achievementDesc;
            
            const match = cleanLine.match(/^[0-9]+\.\s*(.*?)\s*\((.*?)\)$/);
            if (match) {
                namePart = match[1];
                specificAchievement = match[2];
            } else {
                namePart = namePart.replace(/^[0-9]+\.\s*/, '');
            }
            
            let name = namePart;
            let dept = "";
            if (namePart.includes('–')) {
                const parts = namePart.split('–');
                name = parts[0].trim();
                dept = parts.length > 1 ? parts[1].trim() : "";
            } else if (namePart.includes('-')) {
                const parts = namePart.split('-');
                name = parts[0].trim();
                dept = parts.length > 1 ? parts[1].trim() : "";
            }
            
            if (specificAchievement !== achievementDesc) {
                if (specificAchievement.includes("I Position")) specificAchievement = "🥇 Gold";
                else if (specificAchievement.includes("II Position")) specificAchievement = "🥈 Silver";
                else if (specificAchievement.includes("III Position")) specificAchievement = "🥉 Bronze";
                else specificAchievement = "🏅 " + specificAchievement;
            }

            // Also copy Volleyball and Kabaddi into 'Team Sports'
            // To do this elegantly, we assign a primary category and a list of tags
            const tags = [category];
            if (['Volleyball', 'Kabaddi'].includes(category)) {
                tags.push('Team Sports');
            }

            parsedStudents.push({
                id: `${ach.sno}-${index}`,
                name,
                dept,
                sport,
                tags,
                achievement: specificAchievement,
                venue: ach.venue,
                date: ach.date
            });
        });
    });
    return parsedStudents;
};

const StudentCard = ({ student, index, side, photo }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9, x: side === 'left' ? 20 : -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="achiever-card"
    >
        <div className="achiever-top">
            <div className="achiever-avatar">
                {photo ? <img src={photo} alt={student.name} /> : <FaUserGraduate size={24} />}
            </div>
            <div className="achiever-info">
                <h4>{student.name}</h4>
                <span>{student.dept || 'Student'}</span>
            </div>
        </div>
        
        <div className="achiever-details">
            <div className="achievement-text">
                <strong>{student.achievement}</strong>
            </div>
            <div className="venue-text" style={{ color: 'var(--theme-primary)', fontWeight: 600 }}>
                {student.sport}
            </div>
            {student.venue && (
                <div className="venue-text">
                    <FaMapMarkerAlt style={{ marginTop: '2px' }} />
                    {student.venue}
                </div>
            )}
        </div>
    </motion.div>
);

const SportsCategoryWheel = ({ achievementsData, studentPhotos = {} }) => {
    const [selectedCategory, setSelectedCategory] = useState('All Sports');
    
    const allStudents = useMemo(() => parseAchievements(achievementsData), [achievementsData]);
    
    const filteredStudents = useMemo(() => {
        const baseStudents = allStudents.filter(s => !!studentPhotos[s.name]);
        if (selectedCategory === 'All Sports') return baseStudents;
        return baseStudents.filter(s => s.tags.includes(selectedCategory));
    }, [selectedCategory, allStudents, studentPhotos]);

    const halfLength = Math.ceil(filteredStudents.length / 2);
    const leftStudents = filteredStudents.slice(0, halfLength);
    const rightStudents = filteredStudents.slice(halfLength);
    
    const sectionRef = useRef(null);
    const leftInnerRef = useRef(null);
    const rightInnerRef = useRef(null);
    const scrollProgress = useRef(0);
    const requestRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const direction = useRef(1);

    // Reset scroll progress when category changes
    useEffect(() => {
        scrollProgress.current = 0;
        if (leftInnerRef.current) leftInnerRef.current.style.transform = 'translateY(0px)';
        if (rightInnerRef.current) rightInnerRef.current.style.transform = 'translateY(0px)';
        setIsAnimating(false);
    }, [selectedCategory]);

    const animate = () => {
        const leftInner = leftInnerRef.current;
        const rightInner = rightInnerRef.current;
        if (!leftInner || !rightInner) return;

        const viewportHeight = leftInner.parentElement.clientHeight || 520;
        const leftMax = Math.max(0, leftInner.scrollHeight - viewportHeight);
        const rightMax = Math.max(0, rightInner.scrollHeight - viewportHeight);
        
        if (leftMax === 0 && rightMax === 0) {
            setIsAnimating(false);
            return;
        }

        const maxScrollPixels = Math.max(leftMax, rightMax);
        
        // Use a constant pixel speed so all categories (e.g. All Sports vs Chess) scroll at the exact same visual speed
        const PIXELS_PER_FRAME = 0.8; 
        scrollProgress.current += direction.current * (PIXELS_PER_FRAME / maxScrollPixels);
        
        if (scrollProgress.current >= 1) {
            scrollProgress.current = 1;
            direction.current = -1; // Reverse direction
        } else if (scrollProgress.current <= 0) {
            scrollProgress.current = 0;
            direction.current = 1; // Reverse direction
        }

        const leftTransform = scrollProgress.current * leftMax;
        const rightTransform = scrollProgress.current * rightMax;
        
        leftInner.style.transform = `translateY(-${leftTransform}px)`;
        rightInner.style.transform = `translateY(-${rightTransform}px)`;

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (isAnimating) {
            requestRef.current = requestAnimationFrame(animate);
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [isAnimating, selectedCategory, filteredStudents]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setIsAnimating(true);
            } else {
                setIsAnimating(false);
            }
        }, { threshold: 0.5 }); // Start animation when 50% of the section is visible

        const container = sectionRef.current;
        if (container) {
            observer.observe(container);
        }

        return () => {
            if (container) observer.unobserve(container);
            cancelAnimationFrame(requestRef.current);
        };
    }, [selectedCategory, filteredStudents]);
    
    return (
        <section ref={sectionRef} className="sports-wheel-section">
            <div className="sports-wheel-container">
                
                <div className="sports-wheel-header">
                    <span className="section-label">Sports Achievements</span>
                    <h2>Explore Our Athletes</h2>
                    <p>Discover students who represented the institution across multiple sporting disciplines, bringing pride and laurels to NSCET.</p>
                </div>

                <div className="achiever-category-header">
                    <motion.h3 
                        key={`title-${selectedCategory}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="achiever-title"
                    >
                        {selectedCategory.toUpperCase()}
                    </motion.h3>
                    <div className="achiever-subtitle">
                        <span>{selectedCategory === 'All Sports' ? 'All Athletes' : `${selectedCategory} Achievers`}</span>
                        <span className="achiever-count">{filteredStudents.length} Students</span>
                    </div>
                </div>

                <div className="sports-wheel-layout">
                    
                    {/* LEFT SIDE: First half of achievers */}
                    <div className="achiever-column left-column">
                        <div className="achiever-grid single-col">
                            <div className="achiever-grid-inner" ref={leftInnerRef}>
                                <AnimatePresence mode="popLayout">
                                    {leftStudents.map((student, i) => (
                                        <StudentCard key={student.id} student={student} index={i} side="left" photo={studentPhotos[student.name]} />
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* CENTER: The Wheel */}
                    <div className="wheel-column">
                        <div className="wheel-container">
                            <button 
                                className={`wheel-center ${selectedCategory === 'All Sports' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('All Sports')}
                                aria-label="View All Sports"
                                style={{ 
                                    cursor: 'pointer', 
                                    border: selectedCategory === 'All Sports' ? '2px solid #38bdf8' : '2px solid rgba(56, 189, 248, 0.3)',
                                    boxShadow: selectedCategory === 'All Sports' ? '0 0 40px rgba(56, 189, 248, 0.4)' : ''
                                }}
                            >
                                <FaTrophy className="trophy-icon" />
                                <span>ALL SPORTS</span>
                            </button>

                            <div className="wheel-segments">
                                {CATEGORIES.map((cat, index) => {
                                    const angle = (index / CATEGORIES.length) * 2 * Math.PI;
                                    const xDir = Math.cos(angle);
                                    const yDir = Math.sin(angle);
                                    const Icon = cat.icon;
                                    const isActive = selectedCategory === cat.id;
                                    
                                    return (
                                        <button
                                            key={cat.id}
                                            className={`wheel-item ${isActive ? 'active' : ''}`}
                                            style={{ 
                                                '--x-dir': xDir,
                                                '--y-dir': yDir
                                            }}
                                            onClick={() => setSelectedCategory(cat.id)}
                                            aria-label={`Select ${cat.label}`}
                                            aria-pressed={isActive}
                                        >
                                            <div className="wheel-item-content">
                                                <Icon className="wheel-item-icon" />
                                                <span className="wheel-item-name">{cat.label}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Second half of achievers */}
                    <div className="achiever-column right-column">
                        <div className="achiever-grid single-col">
                            <div className="achiever-grid-inner" ref={rightInnerRef}>
                                <AnimatePresence mode="popLayout">
                                    {rightStudents.map((student, i) => (
                                        <StudentCard key={student.id} student={student} index={i} side="right" photo={studentPhotos[student.name]} />
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>

                {filteredStudents.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="no-achievers"
                    >
                        <FaMedal />
                        <p>No achievers recorded for this category yet.</p>
                    </motion.div>
                )}

            </div>
        </section>
    );
};

export default SportsCategoryWheel;
