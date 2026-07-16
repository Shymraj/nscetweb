import { motion } from "framer-motion";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: "vision-mission", label: "Vision & Mission" },
    { id: "quality-policy", label: "Quality Policy" },
    { id: "policy-document", label: "Policy Document" },
    { id: "organizational-chart", label: "Organizational Chart" }
  ];

  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="act-statutes-sidebar"
    >
      <div className="sidebar-glass-card">
        <h3 className="sidebar-title">Act & Statutes</h3>
        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
