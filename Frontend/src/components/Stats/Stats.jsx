import "./Stats.css";
import Counter from "./Counter";
import { useInView } from "react-intersection-observer";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

function Stats() {
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.7,
});

  return (
<section className="stats">
      {/* Stats Cards */}
<div className="stats-container" ref={ref}>
        <div className="stats-card">
          <div className="icon-box">
            <FaUserGraduate />
          </div>

          <h2>
<Counter end={6000} suffix="+" start={inView} />          </h2>

          <p>Students</p>
        </div>

        <div className="stats-card">
          <div className="icon-box">
            <FaChalkboardTeacher />
          </div>

          <h2>
<Counter end={250} suffix="+" start={inView} />          </h2>

          <p>Faculty Members</p>
        </div>

        <div className="stats-card">
          <div className="icon-box">
            <FaBuilding />
          </div>

          <h2>
<Counter end={30} suffix="+" start={inView} />          </h2>

          <p>Departments</p>
        </div>

        <div className="stats-card">
          <div className="icon-box">
            <FaBriefcase />
          </div>

          <h2>
<Counter end={95} suffix="%" start={inView} />          </h2>

          <p>Placement Rate</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;