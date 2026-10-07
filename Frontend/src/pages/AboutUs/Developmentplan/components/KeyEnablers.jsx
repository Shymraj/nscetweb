import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Building, Users, Globe } from 'lucide-react';
import { keyEnablersData } from '../data';

const iconMap = {
  'laptop': Laptop,
  'building': Building,
  'users': Users,
  'globe': Globe
};

const KeyEnablers = () => {
    return (
        <section className="dev-section-wrapper bg-light-1">
            <div className="dev-inner-container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="about-section-heading">{keyEnablersData.title}</h2>
                    <p className="exec-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {keyEnablersData.subtitle}
                    </p>
                </div>
                
                <div className="key-enablers-grid">
                    {keyEnablersData.enablers.map((enabler, index) => {
                        const Icon = iconMap[enabler.icon];
                        return (
                            <motion.div 
                                key={enabler.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="premium-glass-card key-enabler-card"
                            >
                                <div className="feature-icon-wrapper key-enabler-icon">
                                    {Icon && <Icon size={26} strokeWidth={2.5} />}
                                </div>
                                <div className="key-enabler-body">
                                    <h3 className="feature-title key-enabler-title">
                                        {enabler.title}
                                    </h3>
                                    <p className="exec-text key-enabler-text">
                                        {enabler.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default KeyEnablers;
