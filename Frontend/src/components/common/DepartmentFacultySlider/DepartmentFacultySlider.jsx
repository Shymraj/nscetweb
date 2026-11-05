import React, { useRef, useEffect } from "react";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";
import "./DepartmentFacultySlider.css";

const DepartmentFacultySlider = ({ faculties = [], onOpenProfile, showHOD = true, autoScroll = true }) => {
  if (!faculties || faculties.length === 0) return null;

  const hasExplicitHOD = showHOD && faculties.some(f => Boolean(f.isHOD));
  const hod = hasExplicitHOD ? faculties.find(f => f.isHOD) : null;
  const regularStaffs = hod ? faculties.filter(f => f !== hod) : faculties;

  const scrollRef = useRef(null);
  const scrollTimeout = useRef(null);
  const isPausedRef = useRef(false);

  // If autoScroll is false, do not animate automatically
  const shouldAnimate = autoScroll && regularStaffs.length > 1;
  const hasMultiple = regularStaffs.length > 1;

  // Repeat sufficiently to ensure infinite seamless scrolling on large desktop screens only when auto-scrolling
  const repeatCount = shouldAnimate ? Math.max(4, Math.ceil(16 / regularStaffs.length)) : 1;
  const loopStaffs = shouldAnimate 
    ? Array.from({ length: repeatCount }, () => regularStaffs).flat()
    : regularStaffs;

  useEffect(() => {
    const track = scrollRef.current;
    if (!track || !shouldAnimate) return;

    let animId;
    let lastTimestamp = performance.now();
    const speed = 1.35; // Fast, silky smooth auto-scroll speed for both Desktop & Mobile

    const animateScroll = (currentTimestamp) => {
      if (track && !isPausedRef.current) {
        const delta = (currentTimestamp - lastTimestamp) / 16.67;
        const moveBy = speed * Math.min(Math.max(delta, 0.5), 2.5);
        track.scrollLeft += moveBy;

        const singleSetWidth = track.scrollWidth / repeatCount;
        if (track.scrollLeft >= singleSetWidth) {
          track.scrollLeft -= singleSetWidth;
        }
      }
      lastTimestamp = currentTimestamp;
      animId = requestAnimationFrame(animateScroll);
    };

    animId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(scrollTimeout.current);
    };
  }, [shouldAnimate, regularStaffs.length, repeatCount]);

  const pauseScroll = () => {
    if (shouldAnimate) {
      isPausedRef.current = true;
    }
  };

  const resumeScroll = () => {
    if (shouldAnimate) {
      isPausedRef.current = false;
    }
  };

  const handleTouchEnd = () => {
    if (shouldAnimate) {
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isPausedRef.current = false;
      }, 1800);
    }
  };

  const slideCards = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".cse-staff-card");
      const scrollAmount = card ? (card.offsetWidth + 24) : 260;

      if (shouldAnimate) {
        isPausedRef.current = true;
        clearTimeout(scrollTimeout.current);

        const singleSetWidth = scrollRef.current.scrollWidth / repeatCount;
        if (direction === "left" && scrollRef.current.scrollLeft <= 10) {
          scrollRef.current.scrollLeft += singleSetWidth;
        }
      }

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });

      if (shouldAnimate) {
        // Resume auto scroll after 2.5 seconds of manual clicking
        scrollTimeout.current = setTimeout(() => {
          isPausedRef.current = false;
        }, 2500);
      }
    }
  };

  const isCompactNoScroll = !shouldAnimate && regularStaffs.length <= 4;

  return (
    <div className="cse-faculty-layout-wrapper">
      {/* HOD Special Card */}
      {hod && (
        <div className="cse-hod-fixed-wrapper">
          <div className="cse-staff-card cse-hod-special-card">
            <img
              src={
                hod.image ||
                hod.fallbackImage ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(hod.name)}&background=1e3a8a&color=fff&size=150`
              }
              alt={hod.name}
              className="cse-staff-img cse-hod-img"
              style={{ objectPosition: hod.objectPosition || "center 15%" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  hod.fallbackImage ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(hod.name)}&background=1e3a8a&color=fff&size=150`;
              }}
            />

            <div className="cse-card-info-wrap">
              <h4 className="cse-staff-name">{hod.name}</h4>
              <div className="cse-hod-badge">HEAD OF DEPARTMENT</div>
              <p className="cse-staff-pos cse-hod-pos">{hod.desig}</p>

              <div className="cse-qual-badges">
                <span className="cse-badge-outline cse-hod-badge-outline">
                  {hod.qual}
                </span>
              </div>

              {hod.spec && (
                <div className="cse-spec-badges">
                  {hod.spec
                    .split(/&|,/)
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .slice(0, 1)
                    .map((tag, sIdx) => (
                      <span key={sIdx} className="cse-spec-tag">
                        {tag}
                      </span>
                    ))}
                </div>
              )}
            </div>

            {hod.email && (
              <div className="cse-contact-item-small">
                <FaEnvelope className="cse-contact-icon cse-hod-icon" />
                <a href={`mailto:${hod.email.trim()}`}>{hod.email}</a>
              </div>
            )}

            <button
              className="cse-card-profile-btn cse-hod-profile-btn"
              onClick={() => onOpenProfile && onOpenProfile(hod)}
              type="button"
            >
              <FaFileAlt /> Academic Profile
            </button>
          </div>
        </div>
      )}

      {/* Regular Faculty Slider Track */}
      {regularStaffs.length > 0 && (
        <div 
          className={`cse-slider-wrapper ${isCompactNoScroll ? "no-autoscroll-compact" : ""}`}
          onMouseEnter={pauseScroll}
          onMouseLeave={resumeScroll}
        >
          <div className="cse-slider-container">
            {hasMultiple && (
              <button
                className="cse-slider-btn left"
                onClick={() => slideCards("left")}
                aria-label="Previous Faculty"
                type="button"
              >
                &#10094;
              </button>
            )}

            <div
              className="cse-scroll-track"
              ref={scrollRef}
              style={{ justifyContent: shouldAnimate ? "flex-start" : (!hod ? "center" : "flex-start") }}
              onTouchStart={pauseScroll}
              onTouchEnd={handleTouchEnd}
            >
              {loopStaffs.map((staff, index) => (
                <div
                  key={`scroll-${staff.id || staff.slug || index}-${index}`}
                  className="cse-staff-card"
                >
                  <img
                    src={
                      staff.image ||
                      staff.fallbackImage ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.name)}&background=1e3a8a&color=fff&size=150`
                    }
                    alt={staff.name}
                    className="cse-staff-img"
                    style={{ objectPosition: staff.objectPosition || "center 15%" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        staff.fallbackImage ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.name)}&background=1e3a8a&color=fff&size=150`;
                    }}
                  />

                  <div className="cse-card-info-wrap">
                    <h4 className="cse-staff-name">{staff.name}</h4>
                    <p className="cse-staff-pos">{staff.desig}</p>

                    <div className="cse-qual-badges">
                      <span className="cse-badge-outline">{staff.qual}</span>
                    </div>

                    {staff.spec && (
                      <div className="cse-spec-badges">
                        {staff.spec
                          .split(/&|,/)
                          .map((s) => s.trim())
                          .filter(Boolean)
                          .slice(0, 1)
                          .map((tag, sIdx) => (
                            <span key={sIdx} className="cse-spec-tag">
                              {tag}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>

                  {staff.email && (
                    <div className="cse-contact-item-small">
                      <FaEnvelope className="cse-contact-icon" />
                      <a href={`mailto:${staff.email.trim()}`}>{staff.email}</a>
                    </div>
                  )}

                  <button
                    className="cse-card-profile-btn"
                    onClick={() => onOpenProfile && onOpenProfile(staff)}
                    type="button"
                  >
                    <FaFileAlt /> Academic Profile
                  </button>
                </div>
              ))}
            </div>

            {hasMultiple && (
              <button
                className="cse-slider-btn right"
                onClick={() => slideCards("right")}
                aria-label="Next Faculty"
                type="button"
              >
                &#10095;
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentFacultySlider;
