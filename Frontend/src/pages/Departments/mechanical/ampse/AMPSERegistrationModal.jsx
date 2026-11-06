import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  X,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  Building,
  User,
  Users,
  Award,
  CreditCard,
  QrCode,
  Sparkles,
  Send,
  Copy,
  Check,
  AlertCircle,
  Calendar,
  Layers,
  BookOpen,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Tag
} from "lucide-react";
import { getApiUrl } from "@/config/api";
import qrCodeImg from "./ampse_qr.png";

const AMPSERegistrationModal = ({ isOpen, onClose, initialTier = "tier2" }) => {
  const [activeTier, setActiveTier] = useState(initialTier);

  // Sync active tier when modal opens or initialTier prop changes
  useEffect(() => {
    if (isOpen) {
      setActiveTier(initialTier || "tier2");
      setIsSubmitted(false);
      setSubmitError("");
    }
  }, [isOpen, initialTier]);

  // Form State for Tier 1: Attendee / Participant
  const [attendeeData, setAttendeeData] = useState({
    salutation: "Mr.",
    fullName: "",
    category: "UG Student",
    department: "",
    institution: "",
    email: "",
    phone: "",
    whatsapp: "",
    city: "",
    attendanceMode: "physical",
    interestArea: "All Keynote & Technical Sessions",
    dietaryPreference: "Standard / Veg",
    paymentMode: "UPI / GPay / PhonePe",
    transactionId: "",
    paymentDate: new Date().toISOString().split("T")[0]
  });

  // Form State for Tier 2: Presentation & ISBN Book Chapter
  const [isbnData, setIsbnData] = useState({
    salutation: "Dr.",
    primaryAuthor: "",
    designation: "",
    department: "",
    institution: "",
    email: "",
    phone: "",
    whatsapp: "",
    city: "",
    coAuthor1: "",
    coAuthor2: "",
    coAuthor3: "",
    paperTitle: "",
    track: "Composite Materials",
    presentationMode: "physical",
    abstractText: "",
    confirmIsbn: true,
    paymentMode: "UPI / GPay / PhonePe",
    transactionId: "",
    paymentDate: new Date().toISOString().split("T")[0]
  });

  // Form State for Tier 3: Scopus / Springer Nature Publications
  const [scopusData, setScopusData] = useState({
    salutation: "Dr.",
    correspondingAuthor: "",
    academicRank: "Assistant Professor",
    department: "",
    institution: "",
    institutionalEmail: "",
    alternateEmail: "",
    phone: "",
    whatsapp: "",
    orcidId: "",
    city: "",
    coAuthor1: "",
    coAuthor2: "",
    coAuthor3: "",
    manuscriptTitle: "",
    track: "Composite Materials",
    targetChannel: "Atlantis Press / Springer Nature Proceedings",
    presentationMode: "physical",
    structuredAbstract: "",
    keywords: "",
    originalityCertified: true,
    paymentMode: "UPI / GPay / PhonePe",
    transactionId: "",
    paymentDate: new Date().toISOString().split("T")[0]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [regId, setRegId] = useState("");
  const [submittedSummary, setSubmittedSummary] = useState("");
  const [copiedSummary, setCopiedSummary] = useState(false);

  const conferenceTracks = [
    "Composite Materials",
    "Advance Welding",
    "Materials Processing",
    "Smart Materials",
    "Nano Materials",
    "Materials Testing",
    "Refrigeration and Air Conditioning",
    "Renewable Energy",
    "Advanced Materials Processing",
    "CFD and Simulation",
    "Coating Technology",
    "Other Multidisciplinary Themes"
  ];

  const handleAttendeeChange = (e) => {
    const { name, value } = e.target;
    setAttendeeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIsbnChange = (e) => {
    const { name, value, type, checked } = e.target;
    setIsbnData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleScopusChange = (e) => {
    const { name, value, type, checked } = e.target;
    setScopusData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  // Switch between tabs inside modal
  const handleSwitchTab = (tier) => {
    setActiveTier(tier);
    setSubmitError("");
  };

  // Generate Summary Text based on active tier
  const buildSummary = (id) => {
    if (activeTier === "tier1") {
      return `=====================================================
AMPSE - 2K27 PARTICIPANT / ATTENDEE REGISTRATION
Department of Mechanical Engineering, NSCET Theni
=====================================================
Registration Reference ID : ${id}
Package Tier              : Attendee Only (₹500 /- per head)
Official Secretariat      : ampse@nscet.org
Conference Dates          : 12th & 13th March 2027

---------------- DELEGATE DETAILS -------------------
Name                : ${attendeeData.salutation} ${attendeeData.fullName}
Category            : ${attendeeData.category}
Department          : ${attendeeData.department || "Not Specified"}
Institution/College : ${attendeeData.institution}
Email Address       : ${attendeeData.email}
Mobile Number       : ${attendeeData.phone}
WhatsApp Number     : ${attendeeData.whatsapp || attendeeData.phone}
City / State        : ${attendeeData.city || "Not Specified"}

---------------- ATTENDANCE PREFERENCES --------------
Mode of Attendance  : ${attendeeData.attendanceMode === "physical" ? "Physical In-Person at NSCET Campus, Theni" : "Online Virtual Live Stream"}
Sessions of Interest: ${attendeeData.interestArea}
Dietary / Kit       : ${attendeeData.dietaryPreference}

---------------- PAYMENT DETAILS --------------------
Fee Amount          : ₹500 /- (INR Five Hundred Only)
Payment Mode        : ${attendeeData.paymentMode}
Transaction ID/UTR  : ${attendeeData.transactionId}
Payment Date        : ${attendeeData.paymentDate}
Beneficiary Account : Nadar Saraswathi College of Engineering and Technology, Theni
Bank                : Canara Bank, Theni Branch (A/C: 5013101000305, IFSC: CNRB0005013)
=====================================================`;
    }

    if (activeTier === "tier2") {
      return `=====================================================
AMPSE - 2K27 PRESENTATION & ISBN BOOK CHAPTER REGISTRATION
Department of Mechanical Engineering, NSCET Theni
=====================================================
Registration Reference ID : ${id}
Package Tier              : Presentation & ISBN Book Chapter (₹1,000 / Paper)
ISBN Registration         : ISBN: 978-93-6128-639-1
Official Secretariat      : ampse@nscet.org
Conference Dates          : 12th & 13th March 2027

---------------- PRIMARY AUTHOR ---------------------
Name                : ${isbnData.salutation} ${isbnData.primaryAuthor}
Designation         : ${isbnData.designation || "Not Specified"}
Department          : ${isbnData.department || "Not Specified"}
College / Institute : ${isbnData.institution}
Email Address       : ${isbnData.email}
Mobile Number       : ${isbnData.phone}
WhatsApp Number     : ${isbnData.whatsapp || isbnData.phone}
City / State        : ${isbnData.city || "Not Specified"}

---------------- CO-AUTHORS (MAX 3) -----------------
Co-Author 1         : ${isbnData.coAuthor1 || "None"}
Co-Author 2         : ${isbnData.coAuthor2 || "None"}
Co-Author 3         : ${isbnData.coAuthor3 || "None"}

---------------- PAPER & PRESENTATION ---------------
Paper Title         : ${isbnData.paperTitle}
Conference Track    : ${isbnData.track}
Presentation Mode   : ${isbnData.presentationMode === "physical" ? "Physical On-Campus Oral Presentation at NSCET Theni" : "Online / Virtual Oral Presentation via Google Meet"}
ISBN Publication    : Confirmed for ISBN: 978-93-6128-639-1 Book Chapter Proceedings

---------------- ABSTRACT SUMMARY -------------------
${isbnData.abstractText || "Manuscript softcopy will be submitted directly to ampse@nscet.org"}

---------------- PAYMENT VERIFICATION ---------------
Registration Fee    : ₹1,000 /- per paper
Payment Mode        : ${isbnData.paymentMode}
Transaction ID/UTR  : ${isbnData.transactionId}
Payment Date        : ${isbnData.paymentDate}
Beneficiary Account : Nadar Saraswathi College of Engineering and Technology, Theni
Bank                : Canara Bank, Theni Branch (A/C: 5013101000305, IFSC: CNRB0005013)
=====================================================`;
    }

    // Tier 3: Scopus / Springer Nature
    return `=====================================================
AMPSE - 2K27 SCOPUS / SPRINGER NATURE PUBLICATION REGISTRATION
Department of Mechanical Engineering, NSCET Theni
=====================================================
Registration Reference ID : ${id}
Package Tier              : Scopus / Springer Nature Indexed Publication (₹7,500 / Paper)
Target Proceedings Channel: ${scopusData.targetChannel}
Official Secretariat      : ampse@nscet.org
Conference Dates          : 12th & 13th March 2027

---------------- CORRESPONDING AUTHOR ---------------
Name                : ${scopusData.salutation} ${scopusData.correspondingAuthor}
Academic Rank       : ${scopusData.academicRank}
Department          : ${scopusData.department || "Not Specified"}
Institution         : ${scopusData.institution}
Institutional Email : ${scopusData.institutionalEmail}
Alternate Email     : ${scopusData.alternateEmail || "None"}
Mobile Number       : ${scopusData.phone}
WhatsApp Number     : ${scopusData.whatsapp || scopusData.phone}
ORCID / Scopus ID   : ${scopusData.orcidId || "Not Provided"}
City / State        : ${scopusData.city || "Not Specified"}

---------------- CO-AUTHORS & AFFILIATIONS ----------
Co-Author 1         : ${scopusData.coAuthor1 || "None"}
Co-Author 2         : ${scopusData.coAuthor2 || "None"}
Co-Author 3         : ${scopusData.coAuthor3 || "None"}

---------------- RESEARCH MANUSCRIPT ----------------
Manuscript Title    : ${scopusData.manuscriptTitle}
Subject Domain/Track: ${scopusData.track}
Presentation Mode   : ${scopusData.presentationMode === "physical" ? "Physical On-Campus Oral Presentation at NSCET Theni" : "Online Virtual Oral Presentation"}
Indexing Channel    : Atlantis Press / Springer Nature Indexed Proceedings (DOI Included)
Keywords            : ${scopusData.keywords || "Not Specified"}
Originality Status  : Certified Original & Unpublished Research

---------------- STRUCTURED ABSTRACT ----------------
${scopusData.structuredAbstract || "Full manuscript submitted directly to ampse@nscet.org"}

---------------- PUBLICATION FEE VERIFICATION -------
Publication Fee     : ₹7,500 /- per paper
Payment Mode        : ${scopusData.paymentMode}
Transaction ID/UTR  : ${scopusData.transactionId}
Payment Date        : ${scopusData.paymentDate}
Beneficiary Account : Nadar Saraswathi College of Engineering and Technology, Theni
Bank                : Canara Bank, Theni Branch (A/C: 5013101000305, IFSC: CNRB0005013)
=====================================================`;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    let generatedId = "";
    let emailSubject = "";
    let senderName = "";
    let senderEmail = "";
    let senderMobile = "";
    let senderInstitution = "";

    // Validation per tier
    if (activeTier === "tier1") {
      if (!attendeeData.fullName.trim()) {
        setSubmitError("Please enter your Full Name.");
        return;
      }
      if (!attendeeData.email.trim() || !attendeeData.email.includes("@")) {
        setSubmitError("Please enter a valid Email Address.");
        return;
      }
      if (!attendeeData.phone.trim() || attendeeData.phone.length < 10) {
        setSubmitError("Please enter a valid 10-digit Phone Number.");
        return;
      }
      if (!attendeeData.institution.trim()) {
        setSubmitError("Please enter your College / Organization Name.");
        return;
      }
      if (!attendeeData.transactionId.trim()) {
        setSubmitError("Please enter the Payment Transaction ID / UTR Number (₹500).");
        return;
      }

      generatedId = `AMPSE27-ATT-${Math.floor(100000 + Math.random() * 900000)}`;
      senderName = `${attendeeData.salutation} ${attendeeData.fullName}`;
      senderEmail = attendeeData.email;
      senderMobile = attendeeData.phone;
      senderInstitution = attendeeData.institution;
      emailSubject = `[AMPSE-2K27 Attendee Registration ${generatedId}] ${senderName} - ${senderInstitution}`;
    } else if (activeTier === "tier2") {
      if (!isbnData.primaryAuthor.trim()) {
        setSubmitError("Please enter the Primary Presenting Author Name.");
        return;
      }
      if (!isbnData.email.trim() || !isbnData.email.includes("@")) {
        setSubmitError("Please enter a valid Email Address.");
        return;
      }
      if (!isbnData.phone.trim() || isbnData.phone.length < 10) {
        setSubmitError("Please enter a valid 10-digit Phone Number.");
        return;
      }
      if (!isbnData.institution.trim()) {
        setSubmitError("Please enter your College / Institution Name.");
        return;
      }
      if (!isbnData.paperTitle.trim()) {
        setSubmitError("Please enter your Conference Paper Title.");
        return;
      }
      if (!isbnData.transactionId.trim()) {
        setSubmitError("Please enter the Payment Transaction ID / UTR Number (₹1,000).");
        return;
      }

      generatedId = `AMPSE27-ISBN-${Math.floor(100000 + Math.random() * 900000)}`;
      senderName = `${isbnData.salutation} ${isbnData.primaryAuthor}`;
      senderEmail = isbnData.email;
      senderMobile = isbnData.phone;
      senderInstitution = isbnData.institution;
      emailSubject = `[AMPSE-2K27 ISBN Paper ${generatedId}] ${isbnData.paperTitle} - ${senderName}`;
    } else {
      // Tier 3
      if (!scopusData.correspondingAuthor.trim()) {
        setSubmitError("Please enter the Corresponding Author Name.");
        return;
      }
      if (!scopusData.institutionalEmail.trim() || !scopusData.institutionalEmail.includes("@")) {
        setSubmitError("Please enter a valid Institutional Email Address.");
        return;
      }
      if (!scopusData.phone.trim() || scopusData.phone.length < 10) {
        setSubmitError("Please enter a valid 10-digit Phone Number.");
        return;
      }
      if (!scopusData.institution.trim()) {
        setSubmitError("Please enter your University / Institution Name.");
        return;
      }
      if (!scopusData.manuscriptTitle.trim()) {
        setSubmitError("Please enter the Full Manuscript Title.");
        return;
      }
      if (!scopusData.transactionId.trim()) {
        setSubmitError("Please enter the Payment Transaction ID / UTR Number (₹7,500).");
        return;
      }

      generatedId = `AMPSE27-SCOPUS-${Math.floor(100000 + Math.random() * 900000)}`;
      senderName = `${scopusData.salutation} ${scopusData.correspondingAuthor}`;
      senderEmail = scopusData.institutionalEmail;
      senderMobile = scopusData.phone;
      senderInstitution = scopusData.institution;
      emailSubject = `[AMPSE-2K27 Scopus/Springer ${generatedId}] ${scopusData.manuscriptTitle} - ${senderName}`;
    }

    setIsSubmitting(true);
    setRegId(generatedId);

    const fullSummary = buildSummary(generatedId);
    setSubmittedSummary(fullSummary);

    // 1. Save to Backend Database
    try {
      await axios.post(getApiUrl("/api/admin/home/enquiry"), {
        fullName: senderName,
        email: senderEmail,
        mobile: senderMobile,
        whatsapp: senderMobile,
        city: senderInstitution,
        subject: emailSubject,
        message: fullSummary
      });
    } catch (err) {
      console.warn("Backend enquiry fallback:", err);
    }

    // 2. Dispatch structured email via mailto to ampse@nscet.org
    const mailtoSubject = encodeURIComponent(emailSubject);
    const mailtoBody = encodeURIComponent(fullSummary);
    const mailtoUrl = `mailto:ampse@nscet.org?subject=${mailtoSubject}&body=${mailtoBody}`;

    try {
      window.open(mailtoUrl, "_blank");
    } catch (e) {
      console.warn("Mail client popup fallback:", e);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(submittedSummary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(`[AMPSE-2K27 Registration ${regId}] Details`);
    const body = encodeURIComponent(submittedSummary);
    window.location.href = `mailto:ampse@nscet.org?subject=${subject}&body=${body}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="ampse-modal-overlay" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          className="ampse-modal-box"
          onClick={(e) => e.stopPropagation()}
        >
          {/* MODAL HEADER */}
          <div className="ampse-modal-header">
            <div>
              <div className="ampse-modal-badge">
                <Sparkles size={13} />
                <span>AMPSE - 2K27 Registration Portal</span>
              </div>
              <h2 className="ampse-modal-title">
                {activeTier === "tier1" && "Participant / Attendee Registration"}
                {activeTier === "tier2" && "Paper Presentation & ISBN Book Chapter"}
                {activeTier === "tier3" && "Scopus / Springer Nature Publications Tier"}
              </h2>
              <p className="ampse-modal-sub">
                {activeTier === "tier1" && "For delegates attending keynote sessions, workshops, and technical events (₹500 / Head)."}
                {activeTier === "tier2" && "Includes oral presentation slot and publication in registered ISBN: 978-93-6128-639-1 (₹1,000 / Paper)."}
                {activeTier === "tier3" && "Oral presentation + Indexed journal publication channel in Atlantis Press / Springer Nature (₹7,500 / Paper)."}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="ampse-modal-close"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* DYNAMIC TIER SELECTION TABS */}
          <div className="ampse-modal-tier-tabs">
            <button
              type="button"
              className={`ampse-tier-tab ${activeTier === "tier1" ? "active" : ""}`}
              onClick={() => handleSwitchTab("tier1")}
            >
              <User size={15} />
              <div className="ampse-tab-text">
                <span className="ampse-tab-name">Attendee Only</span>
                <span className="ampse-tab-fee">₹500 / head</span>
              </div>
            </button>

            <button
              type="button"
              className={`ampse-tier-tab ${activeTier === "tier2" ? "active popular" : ""}`}
              onClick={() => handleSwitchTab("tier2")}
            >
              <BookOpen size={15} />
              <div className="ampse-tab-text">
                <span className="ampse-tab-name">Presentation & ISBN</span>
                <span className="ampse-tab-fee">₹1,000 / paper</span>
              </div>
              <span className="ampse-tab-pill">Popular</span>
            </button>

            <button
              type="button"
              className={`ampse-tier-tab ${activeTier === "tier3" ? "active" : ""}`}
              onClick={() => handleSwitchTab("tier3")}
            >
              <Award size={15} />
              <div className="ampse-tab-text">
                <span className="ampse-tab-name">Scopus / Springer</span>
                <span className="ampse-tab-fee">₹7,500 / paper</span>
              </div>
            </button>
          </div>

          {/* MODAL BODY */}
          <div className="ampse-modal-body">
            {isSubmitted ? (
              /* SUCCESS REGISTRATION SLIP */
              <div className="ampse-success-slip">
                <div className="ampse-slip-badge">
                  <CheckCircle size={32} className="ampse-slip-success-icon" />
                  <h3>Registration Submitted Successfully!</h3>
                  <p>Your details have been recorded and queued for verification by the conference secretariat.</p>
                </div>

                <div className="ampse-slip-ref-box">
                  <span className="ampse-slip-ref-label">Registration Reference Code:</span>
                  <span className="ampse-slip-ref-id">{regId}</span>
                  <span className="ampse-slip-dest">Official Secretariat: ampse@nscet.org</span>
                </div>

                <div className="ampse-slip-summary-card">
                  <div className="ampse-slip-card-header">
                    <h4>Registration Summary (Sent to ampse@nscet.org)</h4>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="ampse-slip-copy-btn"
                    >
                      {copiedSummary ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedSummary ? "Copied!" : "Copy Details"}</span>
                    </button>
                  </div>
                  <pre className="ampse-slip-summary-pre">{submittedSummary}</pre>
                </div>

                <div className="ampse-slip-actions">
                  <button
                    type="button"
                    onClick={handleMailtoDirect}
                    className="ampse-btn ampse-btn-primary"
                  >
                    <Mail size={16} /> Open Email Client (Send to ampse@nscet.org)
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="ampse-btn ampse-btn-outline"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            ) : (
              /* DEDICATED REGISTRATION FORMS */
              <form onSubmit={handleSubmit} className="ampse-form-container">
                {submitError && (
                  <div className="ampse-form-alert error">
                    <AlertCircle size={18} />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* =========================================================
                    FORM 1: ATTENDEE / PARTICIPANT ONLY (₹500)
                    ========================================================= */}
                {activeTier === "tier1" && (
                  <div className="ampse-form-section-group">
                    <div className="ampse-tier-info-banner tier1-info">
                      <Tag size={18} className="ampse-info-icon" />
                      <div>
                        <strong>Attendee Only Package (₹500 /- per head):</strong>
                        <p>Includes access to all keynote sessions, delegate kit, proceedings copy, and participation certificate. <em>Paper presentation & ISBN book chapter are not included in this tier.</em></p>
                      </div>
                    </div>

                    {/* Section: Delegate Details */}
                    <div className="ampse-field-section">
                      <h4 className="ampse-field-section-title">
                        <User size={16} /> Delegate Information
                      </h4>

                      <div className="ampse-form-grid-3">
                        <div className="ampse-field-group">
                          <label>Salutation</label>
                          <select
                            name="salutation"
                            value={attendeeData.salutation}
                            onChange={handleAttendeeChange}
                          >
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Dr.">Dr.</option>
                            <option value="Prof.">Prof.</option>
                          </select>
                        </div>

                        <div className="ampse-field-group col-span-2">
                          <label>Full Name *</label>
                          <input
                            type="text"
                            name="fullName"
                            placeholder="e.g. A. Rajesh Kumar"
                            value={attendeeData.fullName}
                            onChange={handleAttendeeChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Delegate Category *</label>
                          <select
                            name="category"
                            value={attendeeData.category}
                            onChange={handleAttendeeChange}
                          >
                            <option value="UG Student">UG Student (Engineering / Science)</option>
                            <option value="PG Student">PG Student (M.E. / M.Tech / M.Sc)</option>
                            <option value="Research Scholar">Research Scholar (Ph.D.)</option>
                            <option value="Faculty Member">Faculty Member / Academician</option>
                            <option value="Industry Professional">Industry Professional / R&D Delegate</option>
                          </select>
                        </div>

                        <div className="ampse-field-group">
                          <label>Department / Branch</label>
                          <input
                            type="text"
                            name="department"
                            placeholder="e.g. Mechanical Engineering"
                            value={attendeeData.department}
                            onChange={handleAttendeeChange}
                          />
                        </div>
                      </div>

                      <div className="ampse-field-group">
                        <label>College / University / Company Name *</label>
                        <input
                          type="text"
                          name="institution"
                          placeholder="e.g. Nadar Saraswathi College of Engineering & Technology"
                          value={attendeeData.institution}
                          onChange={handleAttendeeChange}
                          required
                        />
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="e.g. rajesh@gmail.com"
                            value={attendeeData.email}
                            onChange={handleAttendeeChange}
                            required
                          />
                        </div>

                        <div className="ampse-field-group">
                          <label>Mobile Number (10 digits) *</label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="e.g. 9876543210"
                            value={attendeeData.phone}
                            onChange={handleAttendeeChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>WhatsApp Number</label>
                          <input
                            type="tel"
                            name="whatsapp"
                            placeholder="Same as mobile or alternate"
                            value={attendeeData.whatsapp}
                            onChange={handleAttendeeChange}
                          />
                        </div>

                        <div className="ampse-field-group">
                          <label>City & State</label>
                          <input
                            type="text"
                            name="city"
                            placeholder="e.g. Theni, Tamil Nadu"
                            value={attendeeData.city}
                            onChange={handleAttendeeChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section: Attendance Preferences */}
                    <div className="ampse-field-section">
                      <h4 className="ampse-field-section-title">
                        <MapPin size={16} /> Attendance Mode & Preferences
                      </h4>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Mode of Attendance *</label>
                          <select
                            name="attendanceMode"
                            value={attendeeData.attendanceMode}
                            onChange={handleAttendeeChange}
                          >
                            <option value="physical">Physical (NSCET Campus, Vadapudupatti, Theni)</option>
                            <option value="virtual">Virtual Live Stream (Google Meet)</option>
                          </select>
                        </div>

                        <div className="ampse-field-group">
                          <label>Dietary / Kit Preference</label>
                          <select
                            name="dietaryPreference"
                            value={attendeeData.dietaryPreference}
                            onChange={handleAttendeeChange}
                          >
                            <option value="Standard / Veg">Standard Vegetarian Food & Kit</option>
                            <option value="Online Kit Only">Online Digital Kit (Virtual)</option>
                          </select>
                        </div>
                      </div>

                      <div className="ampse-field-group">
                        <label>Sessions of Primary Interest</label>
                        <select
                          name="interestArea"
                          value={attendeeData.interestArea}
                          onChange={handleAttendeeChange}
                        >
                          <option value="All Keynote & Technical Sessions">All Keynote & Technical Sessions</option>
                          <option value="Advanced Materials Processing">Advanced Materials Processing</option>
                          <option value="Sustainable Green Energy & CFD">Sustainable Green Energy & CFD</option>
                          <option value="Industry 4.0 & Manufacturing">Industry 4.0 & Manufacturing</option>
                        </select>
                      </div>
                    </div>

                    {/* Section: Payment (₹500) */}
                    <div className="ampse-field-section payment-section">
                      <h4 className="ampse-field-section-title">
                        <CreditCard size={16} /> Delegate Fee Payment (₹500 /- per head)
                      </h4>

                      <div className="ampse-payment-guide-box">
                        <div className="ampse-bank-text">
                          <p><strong>Beneficiary:</strong> Nadar Saraswathi College of Engineering and Technology</p>
                          <p><strong>Bank:</strong> Canara Bank, Theni Branch</p>
                          <p><strong>Account Number:</strong> <code>5013101000305</code></p>
                          <p><strong>IFSC Code:</strong> <code>CNRB0005013</code></p>
                          <p className="ampse-pay-note">Scan UPI QR Code using Google Pay / PhonePe / Paytm / Any UPI App for <strong>₹500</strong>.</p>
                        </div>
                        <div className="ampse-payment-qr-col">
                          <img src={qrCodeImg} alt="Canara Bank UPI QR Code" className="ampse-form-qr-img" />
                          <span>Scan to Pay ₹500</span>
                        </div>
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Transaction ID / UTR / Reference No. *</label>
                          <input
                            type="text"
                            name="transactionId"
                            placeholder="e.g. 408221849182"
                            value={attendeeData.transactionId}
                            onChange={handleAttendeeChange}
                            required
                          />
                        </div>

                        <div className="ampse-field-group">
                          <label>Payment Date *</label>
                          <input
                            type="date"
                            name="paymentDate"
                            value={attendeeData.paymentDate}
                            onChange={handleAttendeeChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* =========================================================
                    FORM 2: PRESENTATION & ISBN BOOK CHAPTER (₹1,000)
                    ========================================================= */}
                {activeTier === "tier2" && (
                  <div className="ampse-form-section-group">
                    <div className="ampse-tier-info-banner tier2-info">
                      <BookOpen size={18} className="ampse-info-icon" />
                      <div>
                        <strong>Paper Presentation & ISBN Book Chapter (₹1,000 / Paper):</strong>
                        <p>Includes oral presentation slot, proceedings copy, presentation certificates, and publication in book chapter with registered <strong>ISBN: 978-93-6128-639-1</strong>. (Allows 1 Author + up to 3 Co-authors).</p>
                      </div>
                    </div>

                    {/* Section: Primary Author */}
                    <div className="ampse-field-section">
                      <h4 className="ampse-field-section-title">
                        <User size={16} /> 1. Primary / Presenting Author Details
                      </h4>

                      <div className="ampse-form-grid-3">
                        <div className="ampse-field-group">
                          <label>Salutation</label>
                          <select
                            name="salutation"
                            value={isbnData.salutation}
                            onChange={handleIsbnChange}
                          >
                            <option value="Dr.">Dr.</option>
                            <option value="Prof.">Prof.</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                          </select>
                        </div>

                        <div className="ampse-field-group col-span-2">
                          <label>Primary Author Full Name *</label>
                          <input
                            type="text"
                            name="primaryAuthor"
                            placeholder="e.g. Dr. K. Murugesan"
                            value={isbnData.primaryAuthor}
                            onChange={handleIsbnChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Designation</label>
                          <input
                            type="text"
                            name="designation"
                            placeholder="e.g. Assistant Professor / PG Scholar"
                            value={isbnData.designation}
                            onChange={handleIsbnChange}
                          />
                        </div>

                        <div className="ampse-field-group">
                          <label>Department</label>
                          <input
                            type="text"
                            name="department"
                            placeholder="e.g. Department of Mechanical Engineering"
                            value={isbnData.department}
                            onChange={handleIsbnChange}
                          />
                        </div>
                      </div>

                      <div className="ampse-field-group">
                        <label>College / Institution Name *</label>
                        <input
                          type="text"
                          name="institution"
                          placeholder="e.g. Nadar Saraswathi College of Engineering and Technology"
                          value={isbnData.institution}
                          onChange={handleIsbnChange}
                          required
                        />
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="e.g. author@gmail.com"
                            value={isbnData.email}
                            onChange={handleIsbnChange}
                            required
                          />
                        </div>

                        <div className="ampse-field-group">
                          <label>Mobile Number (10 digits) *</label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="e.g. 9876543210"
                            value={isbnData.phone}
                            onChange={handleIsbnChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>WhatsApp Number</label>
                          <input
                            type="tel"
                            name="whatsapp"
                            placeholder="Same as mobile or alternate"
                            value={isbnData.whatsapp}
                            onChange={handleIsbnChange}
                          />
                        </div>

                        <div className="ampse-field-group">
                          <label>City & State</label>
                          <input
                            type="text"
                            name="city"
                            placeholder="e.g. Theni, Tamil Nadu"
                            value={isbnData.city}
                            onChange={handleIsbnChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section: Co-Authors (Max 3) */}
                    <div className="ampse-field-section">
                      <h4 className="ampse-field-section-title">
                        <Users size={16} /> 2. Co-Authors (Maximum 3 Co-authors Allowed)
                      </h4>
                      <p className="ampse-field-hint">Leave blank if single author paper. Certificates will be issued to all listed co-authors.</p>

                      <div className="ampse-field-group">
                        <label>Co-Author 1 (Name, Department, Institution)</label>
                        <input
                          type="text"
                          name="coAuthor1"
                          placeholder="e.g. S. Karthik, Asst. Prof, Mechanical, NSCET Theni"
                          value={isbnData.coAuthor1}
                          onChange={handleIsbnChange}
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Co-Author 2 (Name, Department, Institution)</label>
                        <input
                          type="text"
                          name="coAuthor2"
                          placeholder="e.g. P. Vignesh, PG Scholar, Mechanical, Anna Univ"
                          value={isbnData.coAuthor2}
                          onChange={handleIsbnChange}
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Co-Author 3 (Name, Department, Institution)</label>
                        <input
                          type="text"
                          name="coAuthor3"
                          placeholder="e.g. M. Suresh, Final Year Mechanical, NSCET"
                          value={isbnData.coAuthor3}
                          onChange={handleIsbnChange}
                        />
                      </div>
                    </div>

                    {/* Section: Paper & Presentation */}
                    <div className="ampse-field-section">
                      <h4 className="ampse-field-section-title">
                        <FileText size={16} /> 3. Paper Title & Presentation Mode
                      </h4>

                      <div className="ampse-field-group">
                        <label>Paper Title *</label>
                        <input
                          type="text"
                          name="paperTitle"
                          placeholder="e.g. Experimental Investigation on Tensile Behavior of Natural Fiber Reinforced Polymer Composites"
                          value={isbnData.paperTitle}
                          onChange={handleIsbnChange}
                          required
                        />
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Conference Domain / Track *</label>
                          <select
                            name="track"
                            value={isbnData.track}
                            onChange={handleIsbnChange}
                          >
                            {conferenceTracks.map((tr, idx) => (
                              <option key={idx} value={tr}>{tr}</option>
                            ))}
                          </select>
                        </div>

                        <div className="ampse-field-group">
                          <label>Presentation Mode *</label>
                          <select
                            name="presentationMode"
                            value={isbnData.presentationMode}
                            onChange={handleIsbnChange}
                          >
                            <option value="physical">Physical On-Campus Oral Presentation (NSCET Theni)</option>
                            <option value="virtual">Online Virtual Oral Presentation (Google Meet)</option>
                          </select>
                        </div>
                      </div>

                      <div className="ampse-field-group">
                        <label>Abstract Summary (Max 300 Words)</label>
                        <textarea
                          name="abstractText"
                          rows={4}
                          placeholder="Paste your abstract text here (Objective, Methodology, Key Findings)..."
                          value={isbnData.abstractText}
                          onChange={handleIsbnChange}
                        />
                      </div>

                      <div className="ampse-checkbox-box">
                        <label className="ampse-checkbox-label">
                          <input
                            type="checkbox"
                            name="confirmIsbn"
                            checked={isbnData.confirmIsbn}
                            onChange={handleIsbnChange}
                          />
                          <span>Publish our paper in the official ISBN Book Chapter Proceedings (ISBN: <strong>978-93-6128-639-1</strong>).</span>
                        </label>
                      </div>
                    </div>

                    {/* Section: Payment (₹1,000) */}
                    <div className="ampse-field-section payment-section">
                      <h4 className="ampse-field-section-title">
                        <CreditCard size={16} /> 4. Registration Fee Payment (₹1,000 /- per paper)
                      </h4>

                      <div className="ampse-payment-guide-box">
                        <div className="ampse-bank-text">
                          <p><strong>Beneficiary:</strong> Nadar Saraswathi College of Engineering and Technology</p>
                          <p><strong>Bank:</strong> Canara Bank, Theni Branch</p>
                          <p><strong>Account Number:</strong> <code>5013101000305</code></p>
                          <p><strong>IFSC Code:</strong> <code>CNRB0005013</code></p>
                          <p className="ampse-pay-note">Scan UPI QR Code for <strong>₹1,000</strong> per paper (covers all 4 authors).</p>
                        </div>
                        <div className="ampse-payment-qr-col">
                          <img src={qrCodeImg} alt="Canara Bank UPI QR Code" className="ampse-form-qr-img" />
                          <span>Scan to Pay ₹1,000</span>
                        </div>
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Transaction ID / UTR / Reference No. *</label>
                          <input
                            type="text"
                            name="transactionId"
                            placeholder="e.g. 408221849182"
                            value={isbnData.transactionId}
                            onChange={handleIsbnChange}
                            required
                          />
                        </div>

                        <div className="ampse-field-group">
                          <label>Payment Date *</label>
                          <input
                            type="date"
                            name="paymentDate"
                            value={isbnData.paymentDate}
                            onChange={handleIsbnChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* =========================================================
                    FORM 3: SCOPUS / SPRINGER NATURE PUBLICATIONS (₹7,500)
                    ========================================================= */}
                {activeTier === "tier3" && (
                  <div className="ampse-form-section-group">
                    <div className="ampse-tier-info-banner tier3-info">
                      <Award size={18} className="ampse-info-icon" />
                      <div>
                        <strong>Scopus / Springer Nature Indexed Publication Tier (₹7,500 / Paper):</strong>
                        <p>Includes oral presentation slot, proceedings indexed publication channel via <strong>Atlantis Press / Springer Nature</strong>, digital DOI allocation, and author certificates.</p>
                      </div>
                    </div>

                    {/* Section: Corresponding Author */}
                    <div className="ampse-field-section">
                      <h4 className="ampse-field-section-title">
                        <User size={16} /> 1. Corresponding Author & Academic Credentials
                      </h4>

                      <div className="ampse-form-grid-3">
                        <div className="ampse-field-group">
                          <label>Salutation</label>
                          <select
                            name="salutation"
                            value={scopusData.salutation}
                            onChange={handleScopusChange}
                          >
                            <option value="Dr.">Dr.</option>
                            <option value="Prof.">Prof.</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                          </select>
                        </div>

                        <div className="ampse-field-group col-span-2">
                          <label>Corresponding Author Full Name *</label>
                          <input
                            type="text"
                            name="correspondingAuthor"
                            placeholder="e.g. Dr. S. Annamalai"
                            value={scopusData.correspondingAuthor}
                            onChange={handleScopusChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Academic Designation *</label>
                          <select
                            name="academicRank"
                            value={scopusData.academicRank}
                            onChange={handleScopusChange}
                          >
                            <option value="Professor">Professor</option>
                            <option value="Associate Professor">Associate Professor</option>
                            <option value="Assistant Professor">Assistant Professor</option>
                            <option value="Senior Scientist / Researcher">Senior Scientist / Researcher</option>
                            <option value="Post-Doctoral Fellow">Post-Doctoral Fellow</option>
                            <option value="Ph.D. Research Scholar">Ph.D. Research Scholar</option>
                          </select>
                        </div>

                        <div className="ampse-field-group">
                          <label>Department *</label>
                          <input
                            type="text"
                            name="department"
                            placeholder="e.g. Mechanical Engineering"
                            value={scopusData.department}
                            onChange={handleScopusChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="ampse-field-group">
                        <label>University / Institute Affiliation *</label>
                        <input
                          type="text"
                          name="institution"
                          placeholder="e.g. National Institute of Technology (NIT), Trichy"
                          value={scopusData.institution}
                          onChange={handleScopusChange}
                          required
                        />
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Official Institutional Email *</label>
                          <input
                            type="email"
                            name="institutionalEmail"
                            placeholder="e.g. author@nitt.edu"
                            value={scopusData.institutionalEmail}
                            onChange={handleScopusChange}
                            required
                          />
                          <span className="ampse-tiny-hint">Required for Scopus / Publisher corresponding indexing</span>
                        </div>

                        <div className="ampse-field-group">
                          <label>Alternate / Personal Email</label>
                          <input
                            type="email"
                            name="alternateEmail"
                            placeholder="e.g. author@gmail.com"
                            value={scopusData.alternateEmail}
                            onChange={handleScopusChange}
                          />
                        </div>
                      </div>

                      <div className="ampse-form-grid-3">
                        <div className="ampse-field-group">
                          <label>Mobile Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="e.g. 9876543210"
                            value={scopusData.phone}
                            onChange={handleScopusChange}
                            required
                          />
                        </div>

                        <div className="ampse-field-group">
                          <label>WhatsApp Number</label>
                          <input
                            type="tel"
                            name="whatsapp"
                            placeholder="Same as mobile"
                            value={scopusData.whatsapp}
                            onChange={handleScopusChange}
                          />
                        </div>

                        <div className="ampse-field-group">
                          <label>ORCID iD / Scopus Author ID</label>
                          <input
                            type="text"
                            name="orcidId"
                            placeholder="0000-0002-XXXX-XXXX"
                            value={scopusData.orcidId}
                            onChange={handleScopusChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section: Co-Authors & Institutional Affiliations */}
                    <div className="ampse-field-section">
                      <h4 className="ampse-field-section-title">
                        <Users size={16} /> 2. Co-Authors & Affiliations (Max 3)
                      </h4>

                      <div className="ampse-field-group">
                        <label>Co-Author 1 (Name, Affiliation, Email)</label>
                        <input
                          type="text"
                          name="coAuthor1"
                          placeholder="e.g. Dr. B. Ramesh, Prof, Dept of Mech, PSG Tech, ramesh@psgtech.edu"
                          value={scopusData.coAuthor1}
                          onChange={handleScopusChange}
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Co-Author 2 (Name, Affiliation, Email)</label>
                        <input
                          type="text"
                          name="coAuthor2"
                          placeholder="e.g. K. Priya, Research Scholar, IIT Madras, priya@iitm.ac.in"
                          value={scopusData.coAuthor2}
                          onChange={handleScopusChange}
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Co-Author 3 (Name, Affiliation, Email)</label>
                        <input
                          type="text"
                          name="coAuthor3"
                          placeholder="e.g. T. Venkatesh, Senior Scientist, CSIR, venkat@csir.res.in"
                          value={scopusData.coAuthor3}
                          onChange={handleScopusChange}
                        />
                      </div>
                    </div>

                    {/* Section: Research Manuscript */}
                    <div className="ampse-field-section">
                      <h4 className="ampse-field-section-title">
                        <Layers size={16} /> 3. Research Manuscript & Journal Indexing Scope
                      </h4>

                      <div className="ampse-field-group">
                        <label>Full Manuscript Title *</label>
                        <input
                          type="text"
                          name="manuscriptTitle"
                          placeholder="e.g. Microstructural Characterization and Tribological Performance of Laser Cladded Inconel 718 Superalloy"
                          value={scopusData.manuscriptTitle}
                          onChange={handleScopusChange}
                          required
                        />
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Conference Domain / Track *</label>
                          <select
                            name="track"
                            value={scopusData.track}
                            onChange={handleScopusChange}
                          >
                            {conferenceTracks.map((tr, idx) => (
                              <option key={idx} value={tr}>{tr}</option>
                            ))}
                          </select>
                        </div>

                        <div className="ampse-field-group">
                          <label>Target Publication Channel</label>
                          <input
                            type="text"
                            name="targetChannel"
                            value={scopusData.targetChannel}
                            readOnly
                            className="ampse-input-readonly"
                          />
                        </div>
                      </div>

                      <div className="ampse-field-group">
                        <label>Indexing Keywords (4 to 6 comma-separated keywords) *</label>
                        <input
                          type="text"
                          name="keywords"
                          placeholder="e.g. Laser Cladding, Inconel 718, Wear Resistance, Microstructure, Surface Engineering"
                          value={scopusData.keywords}
                          onChange={handleScopusChange}
                          required
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Structured Abstract (Max 350 Words: Objective, Methodology, Results, Conclusion) *</label>
                        <textarea
                          name="structuredAbstract"
                          rows={5}
                          placeholder="Objective: ...&#10;Methodology: ...&#10;Results: ...&#10;Conclusion: ..."
                          value={scopusData.structuredAbstract}
                          onChange={handleScopusChange}
                          required
                        />
                      </div>

                      <div className="ampse-checkbox-box">
                        <label className="ampse-checkbox-label">
                          <input
                            type="checkbox"
                            name="originalityCertified"
                            checked={scopusData.originalityCertified}
                            onChange={handleScopusChange}
                          />
                          <span>I certify this is an original unpublished research manuscript not under concurrent review in any other journal or conference proceedings.</span>
                        </label>
                      </div>
                    </div>

                    {/* Section: Payment (₹7,500) */}
                    <div className="ampse-field-section payment-section">
                      <h4 className="ampse-field-section-title">
                        <CreditCard size={16} /> 4. Publication Fee Payment (₹7,500 /- per paper)
                      </h4>

                      <div className="ampse-payment-guide-box">
                        <div className="ampse-bank-text">
                          <p><strong>Beneficiary:</strong> Nadar Saraswathi College of Engineering and Technology</p>
                          <p><strong>Bank:</strong> Canara Bank, Theni Branch</p>
                          <p><strong>Account Number:</strong> <code>5013101000305</code></p>
                          <p><strong>IFSC Code:</strong> <code>CNRB0005013</code></p>
                          <p className="ampse-pay-note">Scan UPI QR Code for <strong>₹7,500</strong> for Atlantis Press / Springer Nature publication channel.</p>
                        </div>
                        <div className="ampse-payment-qr-col">
                          <img src={qrCodeImg} alt="Canara Bank UPI QR Code" className="ampse-form-qr-img" />
                          <span>Scan to Pay ₹7,500</span>
                        </div>
                      </div>

                      <div className="ampse-form-grid-2">
                        <div className="ampse-field-group">
                          <label>Transaction ID / UTR / Reference No. *</label>
                          <input
                            type="text"
                            name="transactionId"
                            placeholder="e.g. 408221849182"
                            value={scopusData.transactionId}
                            onChange={handleScopusChange}
                            required
                          />
                        </div>

                        <div className="ampse-field-group">
                          <label>Payment Date *</label>
                          <input
                            type="date"
                            name="paymentDate"
                            value={scopusData.paymentDate}
                            onChange={handleScopusChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODAL FOOTER */}
                <div className="ampse-modal-footer">
                  <div className="ampse-footer-fee-callout">
                    <span className="ampse-callout-label">Amount Payable:</span>
                    <span className="ampse-callout-val">
                      {activeTier === "tier1" && "₹500 /- per head"}
                      {activeTier === "tier2" && "₹1,000 /- per paper"}
                      {activeTier === "tier3" && "₹7,500 /- per paper"}
                    </span>
                  </div>

                  <div className="ampse-footer-buttons">
                    <button
                      type="button"
                      onClick={onClose}
                      className="ampse-btn ampse-btn-outline"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ampse-btn ampse-btn-primary"
                    >
                      <Send size={16} />
                      {isSubmitting ? "Submitting & Emailing..." : `Submit & Send to ampse@nscet.org`}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AMPSERegistrationModal;
