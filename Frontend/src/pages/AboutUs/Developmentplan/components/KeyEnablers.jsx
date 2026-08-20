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
                    <h2 className="dev-section-title">{keyEnablersData.title}</h2>
                    <p className="exec-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {keyEnablersData.subtitle}
                    </p>
                </div>
                
                <div className="swot-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem' }}>
                    {keyEnablersData.enablers.map((enabler, index) => {
                        const Icon = iconMap[enabler.icon];
                        return (
                            <motion.div 
                                key={enabler.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="premium-glass-card"
                                style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                            >
                                <div className="feature-icon-wrapper" style={{ flexShrink: 0, width: '65px', height: '65px' }}>
                                    {Icon && <Icon size={28} strokeWidth={2.5} />}
                                </div>
                                <div>
                                    <h3 className="feature-title" style={{ fontSize: '1.3rem', marginBottom: '0.75rem', textAlign: 'left' }}>
                                        {enabler.title}
                                    </h3>
                                    <p className="exec-text" style={{ fontSize: '1.05rem', textAlign: 'left', margin: 0, lineHeight: 1.6 }}>
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
