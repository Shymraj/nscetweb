import React from 'react';
import { motion } from 'framer-motion';
import { Award, UsersRound, FlaskConical, MapPin, BrainCircuit, Handshake } from 'lucide-react';
import { institutionalStrengthData } from '../data';

const iconMap = {
  'award': Award,
  'users-round': UsersRound,
  'flask-conical': FlaskConical,
  'map-pin': MapPin,
  'brain-circuit': BrainCircuit,
  'handshake': Handshake
};

const InstitutionalStrength = () => {
    return (
        <section className="dev-section-wrapper bg-light-2">
            <div className="dev-inner-container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="about-section-heading">{institutionalStrengthData.title}</h2>
                    <p className="exec-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {institutionalStrengthData.subtitle}
                    </p>
                </div>
                
                <div className="swot-grid">
                    {institutionalStrengthData.points.map((point, index) => {
                        const Icon = iconMap[point.icon];
                        return (
                            <motion.div 
                                key={point.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="premium-glass-card feature-card"
                            >
                                <div className="feature-icon-wrapper">
                                    {Icon && <Icon size={26} strokeWidth={2.5} />}
                                </div>
                                <h3 className="feature-title" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>{point.title}</h3>
                                <p className="exec-text" style={{ fontSize: '1.05rem', textAlign: 'center', margin: 0, lineHeight: 1.6 }}>
                                    {point.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InstitutionalStrength;
