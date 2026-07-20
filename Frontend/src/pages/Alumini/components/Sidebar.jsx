import { motion } from "framer-motion";
import certificatePdf from "./main.pdf";

const Sidebar = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: "overview", label: "Overview" },
        { id: "office-bearers", label: "OFFICE BEARERS" },
        { id: "alumni-meets", label: "Alumni Meets" },
        { id: "distinguished-alumni", label: "Distinguished Alumni" },
        { id: "certificate", label: "Certificate" }
    ];

    return (
        <motion.aside
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="alumni-sidebar"
        >
            <div className="sidebar-glass-card">
                <h3 className="sidebar-title">Alumni Association</h3>
                <ul className="sidebar-nav">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            {item.id === "certificate" ? (
                                <a
                                    className="sidebar-link"
                                    href={certificatePdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'block', textDecoration: 'none' }}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <button
                                    className={`sidebar-link ${activeSection === item.id ? "active" : ""}`}
                                    onClick={() => setActiveSection(item.id)}
                                >
                                    {item.label}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
