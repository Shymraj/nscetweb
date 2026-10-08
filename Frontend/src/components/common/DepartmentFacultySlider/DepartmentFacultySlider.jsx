import React, { useRef, useEffect } from "react";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";
import "./DepartmentFacultySlider.css";

const DepartmentFacultySlider = ({ faculties = [], onOpenProfile, showHOD = true }) => {
  if (!faculties || faculties.length === 0) return null;

  const hasExplicitHOD = showHOD && faculties.some(f => Boolean(f.isHOD));
  const hod = hasExplicitHOD ? faculties.find(f => f.isHOD) : null;
  const regularStaffs = hod ? faculties.filter(f => f !== hod) : faculties;

  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);
  const scrollTimeout = useRef(null);
  const isPausedRef = useRef(false);

  const shouldAnimate = regularStaffs.length > 3;
  const loopStaffs = shouldAnimate ? [...regularStaffs, ...regularStaffs] : regularStaffs;

  useEffect(() => {
    const track = scrollRef.current;
    if (!track || !shouldAnimate) return;

    const startScroll = () => {
      clearInterval(scrollInterval.current);
      scrollInterval.current = setInterval(() => {
        if (track && !isPausedRef.current) {
          track.scrollLeft += 1;
          if (track.scrollLeft >= track.scrollWidth / 2) {
            track.scrollLeft = 0;
          }
        }
      }, 25);
    };

    startScroll();

    return () => {
      clearInterval(scrollInterval.current);
      clearTimeout(scrollTimeout.current);
    };
  }, [shouldAnimate, regularStaffs.length]);

  const pauseScroll = () => {
    isPausedRef.current = true;
  };

  const resumeScroll = () => {
    isPausedRef.current = false;
  };

  const slideCards = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".cse-staff-card");
      const scrollAmount = card ? (card.offsetWidth + 20) : 280;
      isPausedRef.current = true;
      clearTimeout(scrollTimeout.current);

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });

      scrollTimeout.current = setTimeout(() => {
        isPausedRef.current = false;
      }, 1500);
    }
  };

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
        <div className="cse-slider-wrapper">
          <div className="cse-slider-container">
            {shouldAnimate && (
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
              onMouseEnter={pauseScroll}
              onMouseLeave={resumeScroll}
              onTouchStart={pauseScroll}
              onTouchEnd={resumeScroll}
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

            {shouldAnimate && (
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
