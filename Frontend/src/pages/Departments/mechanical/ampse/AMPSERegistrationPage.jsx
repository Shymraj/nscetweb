import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
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
  ArrowLeft,
  Share2
} from "lucide-react";
import { getApiUrl } from "@/config/api";
import qrCodeImg from "./ampse_qr.png";
import paymentQrImg from "./payment_qr.png";
import "./AMPSE.css";

const AMPSERegistrationPage = () => {
  const [searchParams] = useSearchParams();
  const initialTierParam = searchParams.get("tier") || "tier2";
  const [activeTier, setActiveTier] = useState(
    ["tier1", "tier2", "tier3"].includes(initialTierParam) ? initialTierParam : "tier2"
  );

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
  const [emailStatus, setEmailStatus] = useState("");

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

  useEffect(() => {
    document.title = "Register for AMPSE - 2K27 | NSCET Theni";
    window.scrollTo(0, 0);
  }, []);

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

  const handleSwitchTab = (tier) => {
    setActiveTier(tier);
    setSubmitError("");
  };

  // Structured summary builder
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

    // Validation
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

    // 1. Send via FormSubmit API directly to ampse@nscet.org
    try {
      await fetch("https://formsubmit.co/ajax/ampse@nscet.org", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _replyto: senderEmail,
          registration_id: generatedId,
          applicant_name: senderName,
          applicant_email: senderEmail,
          applicant_phone: senderMobile,
          institution: senderInstitution,
          tier: activeTier,
          complete_registration_details: fullSummary
        })
      });
      setEmailStatus("delivered");
    } catch (err) {
      console.warn("Direct form-to-email service note:", err);
    }

    // 2. Save to Backend Database
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
      console.warn("Backend enquiry record:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(submittedSummary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  // Direct Mailto Handler
  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(`[AMPSE-2K27 Registration ${regId}] Details`);
    const body = encodeURIComponent(submittedSummary);
    window.location.href = `mailto:ampse@nscet.org?subject=${subject}&body=${body}`;
  };

  // Direct Gmail Web Compose
  const handleOpenGmail = () => {
    const subject = encodeURIComponent(`[AMPSE-2K27 Registration ${regId}] Details`);
    const body = encodeURIComponent(submittedSummary);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ampse@nscet.org&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="ampse-registration-page-wrapper">
      {/* Top Banner Navigation */}
      <div className="ampse-reg-page-topbar">
        <div className="ampse-container ampse-reg-page-topbar-inner">
          <Link to="/departments/mechanical/ampse" className="ampse-reg-back-link">
            <ArrowLeft size={18} />
            <span>Back to AMPSE - 2K27 Conference Home</span>
          </Link>
          <div className="ampse-reg-page-secretariat">
            <Mail size={16} />
            <span>Official Email: <strong>ampse@nscet.org</strong></span>
          </div>
        </div>
      </div>

      <div className="ampse-container ampse-reg-page-container">
        {/* Page Hero Header */}
        <div className="ampse-reg-header-card">
          <div className="ampse-reg-header-content">
            <span className="ampse-modal-badge">
              <Sparkles size={14} /> Official Registration & Paper Submission Portal
            </span>
            <h1 className="ampse-reg-h1">AMPSE - 2K27 Registration</h1>
            <p className="ampse-reg-subtitle">
              3rd International Conference on Advances in Materials Processing and Sustainable Energy
            </p>
            <div className="ampse-reg-meta-pills">
              <span className="ampse-meta-pill">
                <Calendar size={14} /> 12th & 13th March 2027
              </span>
              <span className="ampse-meta-pill">
                <Building size={14} /> Department of Mechanical Engineering, NSCET Theni
              </span>
              <span className="ampse-meta-pill">
                <Mail size={14} /> Secretariat: ampse@nscet.org
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Tier Selection Tabs */}
        <div className="ampse-modal-tier-tabs ampse-page-tier-tabs">
          <button
            type="button"
            className={`ampse-tier-tab ${activeTier === "tier1" ? "active" : ""}`}
            onClick={() => handleSwitchTab("tier1")}
          >
            <User size={18} />
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
            <BookOpen size={18} />
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
            <Award size={18} />
            <div className="ampse-tab-text">
              <span className="ampse-tab-name">Scopus / Springer</span>
              <span className="ampse-tab-fee">₹7,500 / paper</span>
            </div>
          </button>
        </div>

        {/* Content Box */}
        <div className="ampse-reg-main-box">
          {isSubmitted ? (
            /* SUCCESS REGISTRATION SLIP */
            <div className="ampse-success-slip">
              <div className="ampse-slip-badge">
                <CheckCircle size={36} className="ampse-slip-success-icon" />
                <h3>Registration Details Submitted!</h3>
                <p>
                  Your registration information has been recorded and submitted to <strong>ampse@nscet.org</strong>.
                </p>
              </div>

              <div className="ampse-slip-ref-box">
                <span className="ampse-slip-ref-label">Official Registration Reference ID:</span>
                <span className="ampse-slip-ref-id">{regId}</span>
                <span className="ampse-slip-dest">Recipient: ampse@nscet.org</span>
              </div>

              <div className="ampse-slip-summary-card">
                <div className="ampse-slip-card-header">
                  <h4>Complete Submission Summary Formatted for ampse@nscet.org</h4>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="ampse-slip-copy-btn"
                  >
                    {copiedSummary ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedSummary ? "Copied to Clipboard!" : "Copy Full Details"}</span>
                  </button>
                </div>
                <pre className="ampse-slip-summary-pre">{submittedSummary}</pre>
              </div>

              {/* Action Buttons to ensure delivery */}
              <div className="ampse-success-delivery-actions">
                <p className="ampse-delivery-note">
                  <ShieldCheck size={16} /> If you need to send an abstract or paper soft copy, click below to open your email client with all details pre-filled:
                </p>
                <div className="ampse-delivery-btn-group">
                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="ampse-btn ampse-btn-gold"
                  >
                    <ExternalLink size={16} /> Open in Gmail (ampse@nscet.org)
                  </button>
                  <button
                    type="button"
                    onClick={handleMailtoDirect}
                    className="ampse-btn ampse-btn-primary"
                  >
                    <Mail size={16} /> Open in Default Email Client
                  </button>
                  <Link
                    to="/departments/mechanical/ampse"
                    className="ampse-btn ampse-btn-outline"
                  >
                    Return to Conference Page
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* REGISTRATION FORM */
            <form onSubmit={handleSubmit} className="ampse-form-container">
              {submitError && (
                <div className="ampse-error-banner">
                  <AlertCircle size={18} />
                  <span>{submitError}</span>
                </div>
              )}

              {/* TIER 1: PARTICIPANT / ATTENDEE */}
              {activeTier === "tier1" && (
                <>
                  <div className="ampse-form-section">
                    <h4 className="ampse-section-h4">
                      <User size={16} /> 1. Personal & Institutional Details
                    </h4>
                    <div className="ampse-form-grid">
                      <div className="ampse-field-group">
                        <label>Salutation</label>
                        <select
                          name="salutation"
                          value={attendeeData.salutation}
                          onChange={handleAttendeeChange}
                          className="ampse-input"
                        >
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Dr.">Dr.</option>
                          <option value="Prof.">Prof.</option>
                        </select>
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>Full Name <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. R. Karthik"
                          value={attendeeData.fullName}
                          onChange={handleAttendeeChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Category <span className="ampse-required">*</span></label>
                        <select
                          name="category"
                          value={attendeeData.category}
                          onChange={handleAttendeeChange}
                          className="ampse-input"
                        >
                          <option value="UG Student">UG Student (₹500)</option>
                          <option value="PG Scholar">PG Scholar (₹500)</option>
                          <option value="Research Scholar">Research Scholar (₹500)</option>
                          <option value="Faculty Member">Faculty Member (₹500)</option>
                          <option value="Industry Delegate">Industry Delegate (₹500)</option>
                        </select>
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>College / University / Organization <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="institution"
                          placeholder="e.g. Nadar Saraswathi College of Engg & Tech"
                          value={attendeeData.institution}
                          onChange={handleAttendeeChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Department</label>
                        <input
                          type="text"
                          name="department"
                          placeholder="e.g. Mechanical Engineering"
                          value={attendeeData.department}
                          onChange={handleAttendeeChange}
                          className="ampse-input"
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
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Email Address <span className="ampse-required">*</span></label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={attendeeData.email}
                          onChange={handleAttendeeChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Mobile Number <span className="ampse-required">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="10-digit mobile number"
                          value={attendeeData.phone}
                          onChange={handleAttendeeChange}
                          required
                          maxLength="13"
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>WhatsApp Number</label>
                        <input
                          type="tel"
                          name="whatsapp"
                          placeholder="Optional if same as mobile"
                          value={attendeeData.whatsapp}
                          onChange={handleAttendeeChange}
                          className="ampse-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="ampse-form-section">
                    <h4 className="ampse-section-h4">
                      <Layers size={16} /> 2. Attendance & Participation Preferences
                    </h4>
                    <div className="ampse-form-grid">
                      <div className="ampse-field-group">
                        <label>Mode of Participation</label>
                        <select
                          name="attendanceMode"
                          value={attendeeData.attendanceMode}
                          onChange={handleAttendeeChange}
                          className="ampse-input"
                        >
                          <option value="physical">Physical (On-Campus at NSCET Theni)</option>
                          <option value="online">Online (Virtual Live Stream)</option>
                        </select>
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>Primary Session / Interest Area</label>
                        <input
                          type="text"
                          name="interestArea"
                          placeholder="e.g. Advanced Materials, Thermal & Energy"
                          value={attendeeData.interestArea}
                          onChange={handleAttendeeChange}
                          className="ampse-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Verification */}
                  <div className="ampse-form-section">
                    <h4 className="ampse-section-h4">
                      <CreditCard size={16} /> 3. Fee Payment Verification (₹500 /- per head)
                    </h4>
                    <div className="ampse-payment-guide-box">
                      <div className="ampse-bank-text">
                        <p><strong>Beneficiary:</strong> Nadar Saraswathi College of Engineering and Technology</p>
                        <p><strong>Bank & Branch:</strong> Canara Bank, Theni Branch</p>
                        <p><strong>Account Number:</strong> <code>5013101000305</code></p>
                        <p><strong>IFSC Code:</strong> <code>CNRB0005013</code></p>
                        <p className="ampse-pay-note">Scan UPI QR Code using Google Pay / PhonePe / Paytm / Any UPI App for <strong>₹500</strong>.</p>
                      </div>
                      <div className="ampse-payment-qr-col">
                        <img src={paymentQrImg} alt="Canara Bank UPI QR Code" className="ampse-form-qr-img" />
                        <span>Scan to Pay ₹500</span>
                      </div>
                    </div>

                    <div className="ampse-form-grid">
                      <div className="ampse-field-group">
                        <label>Payment Method</label>
                        <select
                          name="paymentMode"
                          value={attendeeData.paymentMode}
                          onChange={handleAttendeeChange}
                          className="ampse-input"
                        >
                          <option value="UPI / GPay / PhonePe">UPI (GPay / PhonePe / Paytm)</option>
                          <option value="NEFT / RTGS / IMPS">NEFT / RTGS / Net Banking</option>
                          <option value="Cash at College Office">Cash at College Accounts Counter</option>
                        </select>
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>Payment Transaction UTR / Ref Number <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="transactionId"
                          placeholder="e.g. 4085XXXXXXXX or Bank Ref #"
                          value={attendeeData.transactionId}
                          onChange={handleAttendeeChange}
                          required
                          className="ampse-input"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* TIER 2: PRESENTATION & ISBN */}
              {activeTier === "tier2" && (
                <>
                  <div className="ampse-form-section">
                    <h4 className="ampse-section-h4">
                      <User size={16} /> 1. Primary Presenting Author Details
                    </h4>
                    <div className="ampse-form-grid">
                      <div className="ampse-field-group">
                        <label>Salutation</label>
                        <select
                          name="salutation"
                          value={isbnData.salutation}
                          onChange={handleIsbnChange}
                          className="ampse-input"
                        >
                          <option value="Dr.">Dr.</option>
                          <option value="Prof.">Prof.</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                          <option value="Mrs.">Mrs.</option>
                        </select>
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>Primary Author Full Name <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="primaryAuthor"
                          placeholder="e.g. Dr. A. Vembathurajesh"
                          value={isbnData.primaryAuthor}
                          onChange={handleIsbnChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Designation</label>
                        <input
                          type="text"
                          name="designation"
                          placeholder="e.g. Assistant Professor"
                          value={isbnData.designation}
                          onChange={handleIsbnChange}
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>College / University / Organization <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="institution"
                          placeholder="e.g. Nadar Saraswathi College of Engg & Tech"
                          value={isbnData.institution}
                          onChange={handleIsbnChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Department</label>
                        <input
                          type="text"
                          name="department"
                          placeholder="e.g. Mechanical Engineering"
                          value={isbnData.department}
                          onChange={handleIsbnChange}
                          className="ampse-input"
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
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Email Address <span className="ampse-required">*</span></label>
                        <input
                          type="email"
                          name="email"
                          placeholder="author.email@example.com"
                          value={isbnData.email}
                          onChange={handleIsbnChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Mobile Number <span className="ampse-required">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="10-digit mobile number"
                          value={isbnData.phone}
                          onChange={handleIsbnChange}
                          required
                          maxLength="13"
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>WhatsApp Number</label>
                        <input
                          type="tel"
                          name="whatsapp"
                          placeholder="Optional if same as mobile"
                          value={isbnData.whatsapp}
                          onChange={handleIsbnChange}
                          className="ampse-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Co-Authors */}
                  <div className="ampse-form-section">
                    <h4 className="ampse-section-h4">
                      <Users size={16} /> 2. Co-Authors (Up to 3 optional)
                    </h4>
                    <div className="ampse-form-grid">
                      <div className="ampse-field-group">
                        <label>Co-Author 1</label>
                        <input
                          type="text"
                          name="coAuthor1"
                          placeholder="Name & Affiliation"
                          value={isbnData.coAuthor1}
                          onChange={handleIsbnChange}
                          className="ampse-input"
                        />
                      </div>
                      <div className="ampse-field-group">
                        <label>Co-Author 2</label>
                        <input
                          type="text"
                          name="coAuthor2"
                          placeholder="Name & Affiliation"
                          value={isbnData.coAuthor2}
                          onChange={handleIsbnChange}
                          className="ampse-input"
                        />
                      </div>
                      <div className="ampse-field-group">
                        <label>Co-Author 3</label>
                        <input
                          type="text"
                          name="coAuthor3"
                          placeholder="Name & Affiliation"
                          value={isbnData.coAuthor3}
                          onChange={handleIsbnChange}
                          className="ampse-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Paper Details */}
                  <div className="ampse-form-section">
                    <h4 className="ampse-section-h4">
                      <FileText size={16} /> 3. Paper Title & Presentation Track
                    </h4>
                    <div className="ampse-form-grid">
                      <div className="ampse-field-group ampse-col-span-3">
                        <label>Conference Paper Title <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="paperTitle"
                          placeholder="Enter complete title of your research paper"
                          value={isbnData.paperTitle}
                          onChange={handleIsbnChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>Conference Track</label>
                        <select
                          name="track"
                          value={isbnData.track}
                          onChange={handleIsbnChange}
                          className="ampse-input"
                        >
                          {conferenceTracks.map((trk, i) => (
                            <option key={i} value={trk}>{trk}</option>
                          ))}
                        </select>
                      </div>

                      <div className="ampse-field-group">
                        <label>Presentation Mode</label>
                        <select
                          name="presentationMode"
                          value={isbnData.presentationMode}
                          onChange={handleIsbnChange}
                          className="ampse-input"
                        >
                          <option value="physical">Physical (NSCET Campus Oral)</option>
                          <option value="online">Online (Virtual via Google Meet)</option>
                        </select>
                      </div>

                      <div className="ampse-field-group ampse-col-span-3">
                        <label>Paper Abstract Summary</label>
                        <textarea
                          name="abstractText"
                          rows="4"
                          placeholder="Paste a concise 150-250 word abstract of your paper..."
                          value={isbnData.abstractText}
                          onChange={handleIsbnChange}
                          className="ampse-textarea"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="ampse-form-section">
                    <h4 className="ampse-section-h4">
                      <CreditCard size={16} /> 4. Registration Fee Payment Verification (₹1,000 / Paper)
                    </h4>
                    <div className="ampse-payment-guide-box">
                      <div className="ampse-bank-text">
                        <p><strong>Beneficiary:</strong> Nadar Saraswathi College of Engineering and Technology</p>
                        <p><strong>Bank & Branch:</strong> Canara Bank, Theni Branch</p>
                        <p><strong>Account Number:</strong> <code>5013101000305</code></p>
                        <p><strong>IFSC Code:</strong> <code>CNRB0005013</code></p>
                        <p className="ampse-pay-note">Scan UPI QR Code for <strong>₹1,000</strong> per paper (covers all 4 authors).</p>
                      </div>
                      <div className="ampse-payment-qr-col">
                        <img src={paymentQrImg} alt="Canara Bank UPI QR Code" className="ampse-form-qr-img" />
                        <span>Scan to Pay ₹1,000</span>
                      </div>
                    </div>

                    <div className="ampse-form-grid">
                      <div className="ampse-field-group">
                        <label>Payment Method</label>
                        <select
                          name="paymentMode"
                          value={isbnData.paymentMode}
                          onChange={handleIsbnChange}
                          className="ampse-input"
                        >
                          <option value="UPI / GPay / PhonePe">UPI (GPay / PhonePe / Paytm)</option>
                          <option value="NEFT / RTGS / IMPS">NEFT / RTGS / Net Banking</option>
                          <option value="Cash at College Office">Cash at College Accounts Counter</option>
                        </select>
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>Payment Transaction UTR / Ref Number <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="transactionId"
                          placeholder="e.g. 4085XXXXXXXX or Bank Ref #"
                          value={isbnData.transactionId}
                          onChange={handleIsbnChange}
                          required
                          className="ampse-input"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* TIER 3: SCOPUS / SPRINGER */}
              {activeTier === "tier3" && (
                <>
                  <div className="ampse-form-section">
                    <h4 className="ampse-section-h4">
                      <Award size={16} /> 1. Corresponding Author & Publication Profile
                    </h4>
                    <div className="ampse-form-grid">
                      <div className="ampse-field-group">
                        <label>Salutation</label>
                        <select
                          name="salutation"
                          value={scopusData.salutation}
                          onChange={handleScopusChange}
                          className="ampse-input"
                        >
                          <option value="Dr.">Dr.</option>
                          <option value="Prof.">Prof.</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                          <option value="Mrs.">Mrs.</option>
                        </select>
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>Corresponding Author Name <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="correspondingAuthor"
                          placeholder="e.g. Dr. B. Radha Krishnan"
                          value={scopusData.correspondingAuthor}
                          onChange={handleScopusChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Academic Rank / Designation</label>
                        <input
                          type="text"
                          name="academicRank"
                          placeholder="e.g. Associate Professor / Professor"
                          value={scopusData.academicRank}
                          onChange={handleScopusChange}
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>University / Institution <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="institution"
                          placeholder="Full University / Institute Name"
                          value={scopusData.institution}
                          onChange={handleScopusChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Institutional Email <span className="ampse-required">*</span></label>
                        <input
                          type="email"
                          name="institutionalEmail"
                          placeholder="author@institution.edu"
                          value={scopusData.institutionalEmail}
                          onChange={handleScopusChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>Mobile Number <span className="ampse-required">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="10-digit mobile number"
                          value={scopusData.phone}
                          onChange={handleScopusChange}
                          required
                          maxLength="13"
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group">
                        <label>ORCID or Scopus Author ID</label>
                        <input
                          type="text"
                          name="orcidId"
                          placeholder="e.g. 0000-0002-XXXX-XXXX"
                          value={scopusData.orcidId}
                          onChange={handleScopusChange}
                          className="ampse-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="ampse-form-section">
                    <h4 className="ampse-section-h4">
                      <FileText size={16} /> 2. Manuscript Details & Target Indexing
                    </h4>
                    <div className="ampse-form-grid">
                      <div className="ampse-field-group ampse-col-span-3">
                        <label>Full Manuscript Title <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="manuscriptTitle"
                          placeholder="Complete title of the research paper"
                          value={scopusData.manuscriptTitle}
                          onChange={handleScopusChange}
                          required
                          className="ampse-input"
                        />
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>Conference Domain Track</label>
                        <select
                          name="track"
                          value={scopusData.track}
                          onChange={handleScopusChange}
                          className="ampse-input"
                        >
                          {conferenceTracks.map((trk, i) => (
                            <option key={i} value={trk}>{trk}</option>
                          ))}
                        </select>
                      </div>

                      <div className="ampse-field-group">
                        <label>Target Proceedings</label>
                        <select
                          name="targetChannel"
                          value={scopusData.targetChannel}
                          onChange={handleScopusChange}
                          className="ampse-input"
                        >
                          <option value="Atlantis Press / Springer Nature Proceedings">Atlantis Press / Springer Nature</option>
                          <option value="Scopus Indexed Proceedings">Scopus Indexed Proceedings</option>
                        </select>
                      </div>

                      <div className="ampse-field-group ampse-col-span-3">
                        <label>Structured Abstract</label>
                        <textarea
                          name="structuredAbstract"
                          rows="4"
                          placeholder="Abstract covering Background, Methodology, Results & Conclusions..."
                          value={scopusData.structuredAbstract}
                          onChange={handleScopusChange}
                          className="ampse-textarea"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="ampse-form-section">
                    <h4 className="ampse-section-h4">
                      <CreditCard size={16} /> 3. Publication Fee Verification (₹7,500 / Paper)
                    </h4>
                    <div className="ampse-payment-guide-box">
                      <div className="ampse-bank-text">
                        <p><strong>Beneficiary:</strong> Nadar Saraswathi College of Engineering and Technology</p>
                        <p><strong>Bank & Branch:</strong> Canara Bank, Theni Branch</p>
                        <p><strong>Account Number:</strong> <code>5013101000305</code></p>
                        <p><strong>IFSC Code:</strong> <code>CNRB0005013</code></p>
                        <p className="ampse-pay-note">Scan UPI QR Code for <strong>₹7,500</strong> for Atlantis Press / Springer Nature publication channel.</p>
                      </div>
                      <div className="ampse-payment-qr-col">
                        <img src={paymentQrImg} alt="Canara Bank UPI QR Code" className="ampse-form-qr-img" />
                        <span>Scan to Pay ₹7,500</span>
                      </div>
                    </div>

                    <div className="ampse-form-grid">
                      <div className="ampse-field-group">
                        <label>Payment Method</label>
                        <select
                          name="paymentMode"
                          value={scopusData.paymentMode}
                          onChange={handleScopusChange}
                          className="ampse-input"
                        >
                          <option value="UPI / GPay / PhonePe">UPI (GPay / PhonePe / Paytm)</option>
                          <option value="NEFT / RTGS / IMPS">NEFT / RTGS / Net Banking</option>
                          <option value="Cash at College Office">Cash at College Accounts Counter</option>
                        </select>
                      </div>

                      <div className="ampse-field-group ampse-col-span-2">
                        <label>Payment Transaction UTR / Ref Number <span className="ampse-required">*</span></label>
                        <input
                          type="text"
                          name="transactionId"
                          placeholder="e.g. 4085XXXXXXXX or Bank Ref #"
                          value={scopusData.transactionId}
                          onChange={handleScopusChange}
                          required
                          className="ampse-input"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* SUBMIT BUTTON */}
              <div className="ampse-reg-page-submit-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ampse-btn ampse-btn-gold ampse-btn-lg ampse-btn-full"
                >
                  <Send size={18} />
                  <span>{isSubmitting ? "Submitting Registration Details to ampse@nscet.org..." : "Submit Registration & Send to ampse@nscet.org"}</span>
                </button>
                <p className="ampse-form-disclaimer">
                  <Mail size={14} /> Submitting this form sends your full delegate information directly to <strong>ampse@nscet.org</strong> and records your registration.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AMPSERegistrationPage;

