import React, { useState } from 'react';
import { Shield, ArrowLeft, Send, AlertTriangle, CheckCircle, ExternalLink, Phone, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PremiumSubPages.css';

const SEDGGrievance = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    registerNo: '',
    department: '',
    year: '',
    email: '',
    phone: '',
    grievanceType: 'Discrimination / Biased Treatment',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="premium-subpage-wrapper">
      <div className="premium-container max-w-700">
        <Link to="/student-life/sedg" className="premium-back-link">
          <ArrowLeft size={18} /> Back to SEDG Cell
        </Link>

        <div className="subpage-header text-center">
          <div className="subpage-badge red">
            <Shield size={18} />
            <span>CONFIDENTIAL GRIEVANCE PORTAL</span>
          </div>
          <h1 className="subpage-title">File a Grievance</h1>
          <p className="subpage-desc">
            Your privacy and dignity are our highest priorities. All grievances are handled with complete confidentiality and impartial committee review.
          </p>
        </div>

        {/* Official Google Form Alert Banner */}
        <div className="grievance-alert-box">
          <div className="alert-icon-wrap">
            <AlertTriangle size={24} />
          </div>
          <div className="alert-content-wrap">
            <h4>Direct Institutional Redressal</h4>
            <p>You can also submit directly via the official college online grievance portal form.</p>
            <a 
              href="https://forms.gle/ZQYs4KRbVJfyGV25A" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="google-form-btn"
            >
              <span>Open Online Grievance Form</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Local Submission Form */}
        <div className="premium-form-card">
          <div className="form-card-header">
            <Lock size={20} className="lock-icon" />
            <div>
              <h3>Confidential Submission</h3>
              <p>Name and details are optional if you prefer to submit anonymously.</p>
            </div>
          </div>

          {submitted ? (
            <div className="form-success-message">
              <CheckCircle size={56} className="success-icon" />
              <h3>Grievance Submitted Successfully</h3>
              <p>Your concern has been forwarded to the SC/ST & SEDG Welfare Committee. Necessary steps and confidential support will be initiated promptly.</p>
              <button className="reset-form-btn" onClick={() => setSubmitted(false)}>
                Submit Another Grievance
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grievance-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label>Full Name (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe (or leave blank)" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Register / Roll Number (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 9213..." 
                    value={formData.registerNo}
                    onChange={(e) => setFormData({...formData, registerNo: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Department & Year</label>
                  <input 
                    type="text" 
                    placeholder="e.g. CSE / III Year" 
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Nature of Grievance</label>
                  <select 
                    value={formData.grievanceType}
                    onChange={(e) => setFormData({...formData, grievanceType: e.target.value})}
                  >
                    <option value="Discrimination / Biased Treatment">Discrimination / Biased Treatment</option>
                    <option value="Scholarship / Financial Hurdles">Scholarship / Financial Hurdles</option>
                    <option value="Academic Support & Mentoring">Academic Support & Mentoring</option>
                    <option value="Hostel / Campus Facilities">Hostel / Campus Facilities</option>
                    <option value="Harassment / Unfair Conduct">Harassment / Unfair Conduct</option>
                    <option value="Other Concerns">Other Concerns</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Contact Phone (Optional)</label>
                  <input 
                    type="tel" 
                    placeholder="Phone number for follow-up" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Contact Email (Optional)</label>
                  <input 
                    type="email" 
                    placeholder="Email for resolution notice" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Detailed Description of Grievance *</label>
                <textarea 
                  rows="5" 
                  placeholder="Please describe the incident, location, persons involved, or assistance needed in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-grievance-btn">
                <span>Submit Grievance Confidentially</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </div>

        {/* Emergency Contacts Footer */}
        <div className="grievance-contact-footer">
          <h4>Need Immediate Assistance?</h4>
          <p>You can also reach out directly to the Chair Person or Vice Principal:</p>
          <div className="emergency-numbers">
            <a href="tel:9443488999" className="emergency-chip">
              <Phone size={14} /> <span>Principal: 9443488999</span>
            </a>
            <a href="tel:9884854043" className="emergency-chip">
              <Phone size={14} /> <span>Vice Principal: 9884854043</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEDGGrievance;