import { motion } from "framer-motion";
import { summaryTableData } from "../data";

const SummaryTable = () => {
  return (
    <section className="dev-section-wrapper bg-light-1">
      <div className="dev-inner-container">
      <h2 className="dev-section-title" style={{ display: "block", textAlign: "center", marginBottom: "3rem" }}>
        Summary Alignment Table
      </h2>
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="premium-glass-card table-container-card"
      >
        <div className="table-responsive-wrapper">
          <table className="dev-summary-table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Vision Alignment</th>
                <th>Mission Highlights</th>
                <th>Fishbone Years</th>
              </tr>
            </thead>
            <tbody>
              {summaryTableData.map((row, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="table-row"
                >
                  <td data-label="Department" className="fw-bold text-primary">{row.department}</td>
                  <td data-label="Vision Alignment">{row.visionAlign}</td>
                  <td data-label="Mission Highlights">{row.missionAlign}</td>
                  <td data-label="Fishbone Years">
                    <span className="year-badge">{row.fishbone}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default SummaryTable;
