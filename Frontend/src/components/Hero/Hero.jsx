import "./Hero.css";
import heroImage from "../../assets/Img/hero.jpeg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <p className="hero-subtitle">
            ✨ Welcome to NSCET
          </p>

          <h1 className="hero-title">
            Nadar Saraswathi
            <br />
            College of Engineering
            <br />
            & Technology
          </h1>

          <div className="hero-buttons">
            <button className="apply-btn">
              Apply Now
            </button>

            <button className="explore-btn">
              Explore Campus
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">

          <div className="hero-card">
            🏆 NAAC 'A' Grade
          </div>

          <div className="hero-card">
            🎓 Affiliated to Anna University
          </div>

          <div className="hero-card">
            🏛️ AICTE Approved
          </div>

        </div>

      </div>

      <div
        className="scroll-down"
        onClick={() =>
          document
            .getElementById("stats")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        ↓
      </div>
    </section>
  );
}

export default Hero;