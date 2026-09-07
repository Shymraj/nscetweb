import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import HomePageManager from './HomePageManager';
import { FaChevronUp, FaHome, FaUsers, FaBriefcase, FaCalendarCheck, FaImages, FaCalendarAlt, FaCog, FaSignOutAlt, FaUserPlus, FaUserTie, FaGraduationCap, FaEnvelope, FaBook, FaBuilding, FaImage, FaCheck, FaTimes, FaUpload, FaRedo, FaEye, FaTrash, FaArrowLeft, FaBars, FaSearch, FaBell, FaChevronDown, FaCheckCircle, FaPhoneAlt, FaWhatsapp, FaCity, FaCommentAlt, FaUser, FaFileAlt, FaExternalLinkAlt, FaFilePdf, FaLinkedin, FaExclamationTriangle, FaFilter } from "react-icons/fa";
import { getFacultyData, getAllStaticStaff } from '../Departments/facultyRegistry';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [unreadEnquiries, setUnreadEnquiries] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "NSCET | Admin";
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin-login');
    } else {
      fetchUnreadEnquiries();
      const interval = setInterval(fetchUnreadEnquiries, 10000); // Poll every 10 seconds
      return () => clearInterval(interval);
    }
  }, [navigate]);

  const fetchUnreadEnquiries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/enquiries');
      if (res.data.success) {
        const count = res.data.data.filter(eq => !eq.is_read).length;
        setUnreadEnquiries(count);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin-login');
  };

  const handleScroll = (e) => {
    if (e.target.scrollTop > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const handleScrollTop = () => {
    document.querySelector('.admin-content').scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageTitle = (tab) => {
    switch (tab) {
      case 'home': return { title: 'Home Page', subtitle: 'Manage main landing page content' };
      case 'staff': return { title: 'Faculties Section', subtitle: 'Manage staff and faculty details' };
      case 'placements': return { title: 'Placements', subtitle: 'Manage placement records and images' };
      case 'updates': return { title: 'Daily Updates', subtitle: 'Manage daily college updates' };
      case 'gallery': return { title: 'Gallery', subtitle: 'Manage college gallery photos' };
      case 'events': return { title: 'Events', subtitle: 'Manage department events' };
      case 'departments': return { title: 'Departments', subtitle: 'Manage departments' };
      case 'enquiries': return { title: 'Form Enquiries', subtitle: 'Manage contact form submissions' };
      default: return { title: 'Dashboard', subtitle: 'Manage system settings' };
    }
  };

  const currentPageInfo = getPageTitle(activeTab);

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <h2>NSCET - ADMIN</h2>
        </div>
        
        <ul className="sidebar-menu">
          <li className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}><FaHome className="sidebar-icon" /> Home Page</li>
          <li className={activeTab === 'enquiries' ? 'active' : ''} onClick={() => setActiveTab('enquiries')} style={{ display: 'flex', alignItems: 'center' }}>
            <FaEnvelope className="sidebar-icon" /> Form Enquiries
            {unreadEnquiries > 0 && <span style={{ backgroundColor: '#ef4444', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold', marginLeft: 'auto' }}>{unreadEnquiries}</span>}
          </li>
          <li className={activeTab === 'staff' ? 'active' : ''} onClick={() => setActiveTab('staff')}><FaUsers className="sidebar-icon" /> Faculties</li>
          <li className={activeTab === 'placements' ? 'active' : ''} onClick={() => setActiveTab('placements')}><FaBriefcase className="sidebar-icon" /> Placements</li>
          <li className={activeTab === 'updates' ? 'active' : ''} onClick={() => setActiveTab('updates')}><FaCalendarCheck className="sidebar-icon" /> Daily Updates</li>
          <li className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}><FaImages className="sidebar-icon" /> Gallery</li>
          <li className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}><FaCalendarAlt className="sidebar-icon" /> Events</li>
        </ul>
        
        <div className="sidebar-footer">
          <button className="logout-btn-sidebar" onClick={handleLogout}>
            <FaSignOutAlt className="sidebar-icon" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="admin-main">

        {/* Top Navbar */}
        <div className="admin-topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#fff', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <FaBars style={{ color: '#0044cc', fontSize: '20px', cursor: 'pointer' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: 0, color: '#0A1A3A', fontSize: '18px', fontWeight: '700' }}>{currentPageInfo.title}</h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '12px' }}>{currentPageInfo.subtitle}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <FaBell style={{ fontSize: '20px', color: '#475569' }} />
              {unreadEnquiries > 0 && (
                <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: '#ef4444', color: 'white', fontSize: '10px', fontWeight: 'bold', width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {unreadEnquiries}
                </span>
              )}
            </div>

            <div className="admin-profile" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <div className="profile-avatar" style={{ backgroundColor: '#0044cc', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px' }}>
                A
              </div>
              <div className="profile-info" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="profile-name" style={{ color: '#0A1A3A', fontWeight: '700', fontSize: '14px', lineHeight: '1.2' }}>Admin</span>
                <span className="profile-role" style={{ color: '#64748b', fontSize: '12px', fontWeight: '500' }}>Administrator</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="admin-content" onScroll={handleScroll}>
          {activeTab === 'home' && <HomePageManager />}
          {activeTab === 'enquiries' && <EnquiriesManager updateUnreadCount={fetchUnreadEnquiries} />}
          {activeTab === 'staff' && <StaffManager />}
          {activeTab === 'placements' && <PlacementsManager />}
          {activeTab === 'updates' && <div><h2 className="page-title">Daily Updates</h2><p>Coming Soon...</p></div>}
          {activeTab === 'gallery' && <GalleryManager />}
          {activeTab === 'events' && <EventsManager />}
          {activeTab === 'departments' && <DepartmentsManager />}
          
          {showScrollTop && (
            <button className="scroll-to-top-admin" onClick={handleScrollTop} title="Scroll to Top">
              <FaChevronUp />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// --- ENQUIRIES MANAGER ---
const timeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return `Just now`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) return `Yesterday`;
  if (diffInDays < 7) return `${diffInDays} days ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const EnquiriesManager = ({ updateUnreadCount }) => {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [filter, setFilter] = useState('Newest First');

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/enquiries');
      if (res.data.success) {
        setEnquiries(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleMarkRead = async (id, e) => {
    if (e) e.stopPropagation();
    try {
      await axios.put(`http://localhost:5000/api/admin/enquiries/${id}/read`);
      await fetchEnquiries(); // Refresh the list from backend
      if (updateUnreadCount) updateUnreadCount();
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry(prev => ({...prev, is_read: 1}));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id, e) => {
    if (e) e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/enquiries/${id}`);
        fetchEnquiries();
        if (updateUnreadCount) updateUnreadCount();
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry(null);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Stats calculation
  const totalMessages = enquiries.length;
  const unreadMessages = enquiries.filter(eq => !eq.is_read).length;
  const resolvedMessages = totalMessages - unreadMessages;
  const todayMessages = enquiries.filter(eq => new Date(eq.created_at).toDateString() === new Date().toDateString()).length;

  // Filter and sort for the list
  let displayedEnquiries = [...enquiries];
  if (filter === 'Unread Only') {
    displayedEnquiries = displayedEnquiries.filter(e => !e.is_read);
  }
  
  if (filter === 'Oldest First') {
    displayedEnquiries.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  } else {
    // Default: Newest First
    displayedEnquiries.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100%', padding: '20px' }}>
      
      {/* Stats Cards Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <div style={{ backgroundColor: '#e0e7ff', color: '#4f46e5', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginRight: '15px' }}>
            <FaEnvelope />
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Total Messages</div>
            <div style={{ color: '#0f172a', fontSize: '24px', fontWeight: '700' }}>{totalMessages}</div>
            <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>All time</div>
          </div>
        </div>
        
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <div style={{ backgroundColor: '#fef3c7', color: '#d97706', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginRight: '15px' }}>
            <FaEnvelope />
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Unread Messages</div>
            <div style={{ color: '#0f172a', fontSize: '24px', fontWeight: '700' }}>{unreadMessages}</div>
            <div style={{ color: '#f59e0b', fontSize: '11px', marginTop: '4px', display: 'flex', alignItems: 'center' }}><span style={{width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block', marginRight: '4px'}}></span> Need attention</div>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <div style={{ backgroundColor: '#dcfce7', color: '#16a34a', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginRight: '15px' }}>
            <FaCheckCircle />
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Resolved</div>
            <div style={{ color: '#0f172a', fontSize: '24px', fontWeight: '700' }}>{resolvedMessages}</div>
            <div style={{ color: '#10b981', fontSize: '11px', marginTop: '4px', display: 'flex', alignItems: 'center' }}><FaCheck style={{marginRight: '4px'}}/> Marked as read</div>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <div style={{ backgroundColor: '#f3e8ff', color: '#9333ea', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginRight: '15px' }}>
            <FaCalendarAlt />
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '13px', fontWeight: '600' }}>Today's Messages</div>
            <div style={{ color: '#0f172a', fontSize: '24px', fontWeight: '700' }}>{todayMessages}</div>
            <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
          </div>
        </div>
      </div>

      {/* Split Pane Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '20px' }}>
        
        {/* Left Column: All Messages */}
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 200px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '16px', color: '#0f172a', fontWeight: '700' }}>All Messages ({totalMessages})</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '12px', color: '#475569', outline: 'none' }}>
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
                <option value="Unread Only">Unread Only</option>
              </select>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '5px' }}>
            {displayedEnquiries.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#9ca3af', marginTop: '50px' }}>No messages found.</div>
            ) : (
              displayedEnquiries.map((enq) => {
                const isSelected = selectedEnquiry && selectedEnquiry.id === enq.id;
                const avatarChar = enq.fullName ? enq.fullName.charAt(0).toUpperCase() : '?';
                const avatarColors = ['#e0e7ff', '#fef3c7', '#dcfce7', '#f3e8ff', '#ffe4e6', '#e0f2fe'];
                const textColors = ['#4f46e5', '#d97706', '#16a34a', '#9333ea', '#e11d48', '#0284c7'];
                const colorIndex = (enq.fullName ? enq.fullName.charCodeAt(0) : 0) % avatarColors.length;

                return (
                  <div 
                    key={enq.id} 
                    onClick={() => {
                      setSelectedEnquiry(enq);
                      if (!enq.is_read) handleMarkRead(enq.id); // auto mark read on click
                    }}
                    style={{ 
                      padding: '15px', 
                      borderRadius: '8px', 
                      marginBottom: '10px', 
                      cursor: 'pointer',
                      border: isSelected ? '1px solid #3b82f6' : '1px solid #f1f5f9',
                      backgroundColor: isSelected ? '#eff6ff' : '#fff',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: avatarColors[colorIndex], color: textColors[colorIndex], display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px' }}>
                        {avatarChar}
                      </div>
                      {!enq.is_read && <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', backgroundColor: '#3b82f6', borderRadius: '50%', border: '2px solid white' }}></div>}
                    </div>
                    
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <div style={{ fontSize: '14px', fontWeight: enq.is_read ? '600' : '700', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{enq.fullName}</div>
                        <div style={{ fontSize: '11px', color: '#64748b', whiteSpace: 'nowrap' }}>{timeAgo(enq.created_at)}</div>
                      </div>
                      <div style={{ fontSize: '12px', fontWeight: enq.is_read ? '500' : '600', color: '#334155', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{enq.subject}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{enq.message}</div>
                    </div>

                    {!enq.is_read && (
                      <div style={{ fontSize: '10px', color: '#ef4444', backgroundColor: '#fee2e2', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold', alignSelf: 'center', marginLeft: '5px' }}>
                        New
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Message Detail */}
        {selectedEnquiry ? (
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '30px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 200px)', overflowY: 'auto' }}>
            
            {/* Header Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <div style={{ color: '#3b82f6', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: '500' }} onClick={() => setSelectedEnquiry(null)}>
                <FaArrowLeft style={{ marginRight: '6px' }} /> Back to Messages
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {!selectedEnquiry.is_read && (
                  <button onClick={(e) => handleMarkRead(selectedEnquiry.id, e)} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #22c55e', color: '#16a34a', backgroundColor: '#f0fdf4', cursor: 'pointer', fontSize: '12px', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                    <FaCheck style={{ marginRight: '6px' }}/> Mark as Read
                  </button>
                )}
                <button onClick={(e) => handleDelete(selectedEnquiry.id, e)} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #fca5a5', color: '#ef4444', backgroundColor: '#fef2f2', cursor: 'pointer', fontSize: '12px', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                  <FaTrash style={{ marginRight: '6px' }}/> Delete
                </button>
              </div>
            </div>

            {/* Profile Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                {selectedEnquiry.fullName ? selectedEnquiry.fullName.charAt(0).toUpperCase() : '?'}
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>{selectedEnquiry.fullName}</div>
                <div style={{ fontSize: '14px', color: '#3b82f6', fontWeight: '600', marginTop: '2px' }}>{selectedEnquiry.subject}</div>
                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', display: 'flex', alignItems: 'center' }}><FaCalendarAlt style={{ marginRight: '6px' }}/> {new Date(selectedEnquiry.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</div>
              </div>
            </div>

            {/* Info Table */}
            <div style={{ border: '1px solid #f1f5f9', borderRadius: '8px', padding: '20px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', marginBottom: '15px', borderBottom: '1px solid #f1f5f9', paddingBottom: '15px' }}>
                <div style={{ width: '150px', color: '#64748b', fontSize: '13px', display: 'flex', alignItems: 'center', fontWeight: '600' }}><FaUser style={{ marginRight: '8px', color: '#3b82f6' }}/> Full Name</div>
                <div style={{ color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{selectedEnquiry.fullName}</div>
              </div>
              <div style={{ display: 'flex', marginBottom: '15px', borderBottom: '1px solid #f1f5f9', paddingBottom: '15px' }}>
                <div style={{ width: '150px', color: '#64748b', fontSize: '13px', display: 'flex', alignItems: 'center', fontWeight: '600' }}><FaEnvelope style={{ marginRight: '8px', color: '#3b82f6' }}/> Email Address</div>
                <div style={{ color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{selectedEnquiry.email}</div>
              </div>
              <div style={{ display: 'flex', marginBottom: '15px', borderBottom: '1px solid #f1f5f9', paddingBottom: '15px' }}>
                <div style={{ width: '150px', color: '#64748b', fontSize: '13px', display: 'flex', alignItems: 'center', fontWeight: '600' }}><FaPhoneAlt style={{ marginRight: '8px', color: '#3b82f6' }}/> Mobile Number</div>
                <div style={{ color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{selectedEnquiry.mobile}</div>
              </div>
              <div style={{ display: 'flex', marginBottom: '15px', borderBottom: '1px solid #f1f5f9', paddingBottom: '15px' }}>
                <div style={{ width: '150px', color: '#64748b', fontSize: '13px', display: 'flex', alignItems: 'center', fontWeight: '600' }}><FaWhatsapp style={{ marginRight: '8px', color: '#3b82f6' }}/> WhatsApp Number</div>
                <div style={{ color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{selectedEnquiry.whatsapp || '-'}</div>
              </div>
              <div style={{ display: 'flex', marginBottom: '15px', borderBottom: '1px solid #f1f5f9', paddingBottom: '15px' }}>
                <div style={{ width: '150px', color: '#64748b', fontSize: '13px', display: 'flex', alignItems: 'center', fontWeight: '600' }}><FaCity style={{ marginRight: '8px', color: '#3b82f6' }}/> City/District</div>
                <div style={{ color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{selectedEnquiry.city || '-'}</div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '150px', color: '#64748b', fontSize: '13px', display: 'flex', alignItems: 'center', fontWeight: '600' }}><FaBook style={{ marginRight: '8px', color: '#3b82f6' }}/> Subject</div>
                <div style={{ color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{selectedEnquiry.subject}</div>
              </div>
            </div>

            {/* Message Block */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ color: '#0f172a', fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', marginBottom: '10px' }}><FaCommentAlt style={{ marginRight: '8px', color: '#3b82f6' }}/> Message</div>
              <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', color: '#334155', fontSize: '14px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                {selectedEnquiry.message || 'No message provided.'}
              </div>
            </div>

            {/* Reply Actions */}
            <div style={{ display: 'flex', gap: '15px', marginTop: 'auto', justifyContent: 'flex-end' }}>
              <a 
                href={`mailto:${selectedEnquiry.email}?subject=Re: ${selectedEnquiry.subject}`} 
                style={{ padding: '10px 20px', borderRadius: '6px', backgroundColor: '#6366f1', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600' }}
              >
                <FaEnvelope style={{ marginRight: '8px' }}/> Reply via Email
              </a>
              {selectedEnquiry.whatsapp && (
                <a 
                  href={`https://wa.me/${selectedEnquiry.whatsapp.replace(/\D/g, '')}?text=Hello ${selectedEnquiry.fullName}, regarding your enquiry: "${selectedEnquiry.subject}"`}
                  target="_blank" rel="noreferrer"
                  style={{ padding: '10px 20px', borderRadius: '6px', backgroundColor: '#22c55e', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600' }}
                >
                  <FaWhatsapp style={{ marginRight: '8px' }}/> Reply on WhatsApp
                </a>
              )}
            </div>

          </div>
        ) : (
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px dashed #cbd5e1', color: '#94a3b8', height: 'calc(100vh - 200px)' }}>
            <FaEnvelope style={{ fontSize: '48px', marginBottom: '15px', color: '#cbd5e1' }} />
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#64748b' }}>Select a message</h3>
            <p style={{ margin: '5px 0 0', fontSize: '13px' }}>Click on any message from the left to view details</p>
          </div>
        )}
      </div>

    </div>
  );
};

// --- EVENTS MANAGER ---
const EventsManager = () => {
  const [events, setEvents] = useState([]);
  const [department, setDepartment] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/events');
      // Filter out Gallery events as they are managed in the Gallery section
      const departmentEvents = (res.data.data || []).filter(ev => ev.department !== 'Gallery');
      setEvents(departmentEvents);
    } catch (error) {
      console.error(error);
      setEvents([]);
    }
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleCreateOrUpdateEvent = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('department', department);
    formData.append('date', date);
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/admin/events/${editingId}`, formData);
        alert('Event updated successfully.');
      } else {
        await axios.post('http://localhost:5000/api/admin/events', formData);
        alert('Event created successfully.');
      }
      resetForm();
      fetchEvents();
    } catch (error) {
      console.error(error);
      alert('Error saving event.');
    }
  };

  const resetForm = () => {
    setDepartment(''); setDate(''); setTitle(''); setDescription(''); setImage(null); setEditingId(null);
  };

  const handleEdit = (ev) => {
    setEditingId(ev.id);
    setDepartment(ev.department || '');
    setDate(ev.date || '');
    setTitle(ev.title || '');
    setDescription(ev.description || '');
    setImage(null); // Force re-upload or keep existing backend logic
    // Scroll to top
    document.querySelector('.admin-content').scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/events/${id}`);
        fetchEvents();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const deptNames = [
    'Computer Science and Engineering',
    'Information Technology',
    'Artificial Intelligence & Data Science',
    'Electronics and Communication Engineering',
    'Electrical and Electronics Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Science and Humanities'
  ];

  return (
    <div>
      <div className="page-header" style={{marginBottom: '20px'}}>
        <h2 className="page-title" style={{marginBottom: '4px', color: '#0A1A3A', display: 'flex', alignItems: 'center'}}>
          <FaCalendarAlt style={{marginRight: '10px'}}/> Department Events Management
        </h2>
        <div style={{fontSize: '12px', color: '#6b7280'}}>Home / Events</div>
      </div>
      
      {/* Create New Event Card */}
      <div className="staff-card-form" style={{marginBottom: '30px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
        <div className="staff-form-header" style={{color: '#374151', fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px'}}>
          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', border: '1.5px solid #6b7280', marginRight: '10px', fontSize: '14px', color: '#6b7280'}}>{editingId ? '✎' : '+'}</span> 
          {editingId ? 'Edit Event' : 'Create New Event'}
        </div>
        
        <form onSubmit={handleCreateOrUpdateEvent}>
          <div className="staff-grid-inputs" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px'}}>
            <div className="input-group" style={{marginBottom: 0}}>
              <label style={{fontWeight: '500', color: '#4b5563', fontSize: '13px', marginBottom: '8px'}}>Department <span style={{color: '#ef4444'}}>*</span></label>
              <select value={department} onChange={e=>setDepartment(e.target.value)} required style={{padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '6px', width: '100%', backgroundColor: 'white', outline: 'none', fontSize: '13px'}}>
                <option value="">-- Select Department --</option>
                {deptNames.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            
            <div className="input-group" style={{marginBottom: 0}}>
              <label style={{fontWeight: '500', color: '#4b5563', fontSize: '13px', marginBottom: '8px'}}>Event Date <span style={{color: '#ef4444'}}>*</span></label>
              <input type="date" value={date} onChange={e=>setDate(e.target.value)} required style={{padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '6px', width: '100%', outline: 'none', fontSize: '13px', color: '#4b5563', backgroundColor: 'white'}}/>
            </div>
          </div>

          <div className="input-group" style={{marginBottom: '24px'}}>
            <label style={{fontWeight: '500', color: '#4b5563', fontSize: '13px', marginBottom: '8px'}}>Event Title <span style={{color: '#ef4444'}}>*</span></label>
            <input type="text" placeholder="e.g., Annual Tech Fest 2024" value={title} onChange={e=>setTitle(e.target.value)} required style={{padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '6px', width: '100%', outline: 'none', fontSize: '13px'}}/>
          </div>

          <div className="input-group" style={{marginBottom: '24px'}}>
            <label style={{fontWeight: '500', color: '#4b5563', fontSize: '13px', marginBottom: '8px'}}>Event Description <span style={{color: '#ef4444'}}>*</span></label>
            <textarea placeholder="Enter detailed event description..." value={description} onChange={e=>setDescription(e.target.value)} required style={{padding: '12px 14px', border: '1px solid #d1d5db', borderRadius: '6px', width: '100%', outline: 'none', minHeight: '100px', resize: 'vertical', fontSize: '13px', fontFamily: 'inherit'}}></textarea>
            <div style={{fontSize: '11px', color: '#9ca3af', marginTop: '6px'}}>Provide comprehensive details about the event</div>
          </div>

          <div className="input-group" style={{marginBottom: '24px'}}>
            <label style={{fontWeight: '500', color: '#4b5563', fontSize: '13px', marginBottom: '8px'}}>Event Image <span style={{color: '#ef4444'}}>*</span></label>
            <div style={{display: 'flex', border: '1px solid #d1d5db', borderRadius: '6px', overflow: 'hidden', alignItems: 'center', backgroundColor: '#ffffff'}}>
              <div style={{backgroundColor: '#f9fafb', padding: '10px 14px', borderRight: '1px solid #d1d5db', color: '#4b5563', fontSize: '13px', whiteSpace: 'nowrap', fontWeight: '500'}}>Choose file</div>
              <input type="file" onChange={e=>setImage(e.target.files[0])} accept="image/*" style={{padding: '7px 10px', width: '100%', border: 'none', background: 'transparent', fontSize: '13px'}} required />
            </div>
            <div style={{fontSize: '11px', color: '#9ca3af', marginTop: '6px'}}>Max 50MB. Formats: JPG, PNG, GIF, WEBP {editingId && "(Leave blank to keep existing)"}</div>
          </div>
          
          <div style={{display: 'flex', gap: '10px'}}>
            <button type="submit" className="btn-primary" style={{backgroundColor: '#3b82f6', borderRadius: '6px', padding: '10px 20px', fontSize: '14px', display: 'flex', alignItems: 'center', fontWeight: '500', border: 'none', cursor: 'pointer', color: 'white'}}>
              <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '14px', height: '14px', borderRadius: '50%', border: '1.5px solid white', marginRight: '8px', fontSize: '10px', fontWeight: 'bold'}}>{editingId ? '✓' : '+'}</span> {editingId ? 'Update Event' : 'Create Event'}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} style={{backgroundColor: '#6b7280', borderRadius: '6px', padding: '10px 20px', fontSize: '14px', display: 'flex', alignItems: 'center', fontWeight: '500', border: 'none', cursor: 'pointer', color: 'white'}}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* All Events List */}
      <div className="staff-card-form" style={{border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
        <div className="staff-form-header" style={{color: '#374151', fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
          <FaBook style={{marginRight: '10px', color: '#6b7280'}}/> All Events ({events.length})
        </div>
        
        <div style={{overflowX: 'auto', borderRadius: '6px', border: '1px solid #e5e7eb'}}>
          <table className="admin-table" style={{width: '100%', borderCollapse: 'collapse', margin: 0}}>
            <thead>
              <tr style={{backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb'}}>
                <th style={{padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#4b5563', fontWeight: '600'}}>Title</th>
                <th style={{padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#4b5563', fontWeight: '600'}}>Department</th>
                <th style={{padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#4b5563', fontWeight: '600'}}>Date</th>
                <th style={{padding: '12px 16px', textAlign: 'right', fontSize: '13px', color: '#4b5563', fontWeight: '600'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {events.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{padding: '60px 20px', textAlign: 'center', color: '#9ca3af'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <FaImages style={{fontSize: '48px', color: '#d1d5db', marginBottom: '16px'}} />
                      <span style={{fontSize: '14px', color: '#6b7280'}}>No events created yet. Create your first event above!</span>
                    </div>
                  </td>
                </tr>
              ) : (
                events.map(ev => (
                  <tr key={ev.id} style={{borderBottom: '1px solid #e5e7eb'}}>
                    <td style={{padding: '12px 16px', fontSize: '14px', color: '#111827', fontWeight: '500'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        {ev.image_url ? <img src={`http://localhost:5000${ev.image_url}`} alt={ev.title} style={{width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px'}} /> : <div style={{width: '40px', height: '40px', backgroundColor: '#e5e7eb', borderRadius: '4px'}} />}
                        {ev.title}
                      </div>
                    </td>
                    <td style={{padding: '12px 16px', fontSize: '14px', color: '#4b5563'}}>{ev.department}</td>
                    <td style={{padding: '12px 16px', fontSize: '14px', color: '#4b5563'}}>{ev.date}</td>
                    <td style={{padding: '12px 16px', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '8px', alignItems: 'center'}}>
                      <button onClick={() => handleEdit(ev)} style={{backgroundColor: '#f3f4f6', color: '#4b5563', border: '1px solid #d1d5db', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'background-color 0.2s'}}>Edit</button>
                      <button onClick={() => handleDeleteEvent(ev.id)} style={{backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'background-color 0.2s'}}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// --- STAFF MANAGER ---
const StaffManager = () => {
  const [staff, setStaff] = useState(() => {
    try {
      const cached = localStorage.getItem('cached_admin_staff');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    try {
      return getAllStaticStaff();
    } catch (e) {
      return [];
    }
  });
  const [isBackendOnline, setIsBackendOnline] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [research, setResearch] = useState('');
  const [photo, setPhoto] = useState(null);
  const [editingStaffId, setEditingStaffId] = useState(null);

  // --- Academic Profile State ---
  const [academicStaff, setAcademicStaff] = useState(null);
  const [acadAbout, setAcadAbout] = useState('');
  const [acadLinkedin, setAcadLinkedin] = useState('');
  const [acadSpec, setAcadSpec] = useState('');
  const [acadExperience, setAcadExperience] = useState('');
  const [acadPublications, setAcadPublications] = useState('');
  const [acadProjects, setAcadProjects] = useState('');
  const [acadPatents, setAcadPatents] = useState('');
  const [acadAwards, setAcadAwards] = useState('');
  const [acadProfileUrl, setAcadProfileUrl] = useState('');
  const [acadPdfFile, setAcadPdfFile] = useState(null);
  const [existingPdfUrl, setExistingPdfUrl] = useState('');
  const [removePdf, setRemovePdf] = useState(false);
  const [isSavingAcad, setIsSavingAcad] = useState(false);
  const [acadActiveTab, setAcadActiveTab] = useState('summary'); // 'summary' | 'details' | 'document'

  const arrayToLines = (val) => {
    if (!val) return '';
    if (Array.isArray(val)) return val.join('\n');
    try {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed.join('\n');
    } catch (e) {}
    return String(val);
  };

  const linesToArray = (str) => {
    if (!str) return [];
    return str.split('\n').map(s => s.trim()).filter(Boolean);
  };

  const getDeptSlug = (dept) => {
    const d = (dept || '').toLowerCase().trim();
    if (d.includes('computer science') || d.includes('cse')) return 'cse';
    if (d.includes('artificial') || d.includes('aids')) return 'aids';
    if (d.includes('information') || d.includes('it')) return 'it';
    if (d.includes('civil')) return 'civil';
    if (d.includes('mechanical')) return 'mechanical';
    if (d.includes('electrical') || d.includes('eee')) return 'electrical';
    if (d.includes('electronics') || d.includes('ece')) return 'electronics';
    if (d.includes('science') || d.includes('humanities') || d.includes('s&h')) return 'science-humanities';
    return 'cse';
  };

  const getLiveProfileUrl = (st) => {
    if (!st) return '#';
    const slug = getDeptSlug(st.department);
    return `/departments/${slug}/faculty/${st.id}`;
  };

  const handleOpenAcademicModal = (st) => {
    setAcademicStaff(st);
    setAcadActiveTab('summary');
    const slug = getDeptSlug(st.department);
    const fallback = getFacultyData(slug, st.name) || {};

    setAcadAbout(st.about !== undefined && st.about !== null && st.about !== '' ? st.about : (fallback.about || ''));
    setAcadLinkedin(st.linkedin !== undefined && st.linkedin !== null && st.linkedin !== '' ? st.linkedin : (fallback.linkedin || ''));
    setAcadSpec(st.spec || st.research || fallback.spec || '');
    setAcadExperience(arrayToLines(st.experience || fallback.experience || []));
    setAcadPublications(arrayToLines(st.publications || fallback.publications || []));
    setAcadProjects(arrayToLines(st.projects || fallback.projects || []));
    setAcadPatents(arrayToLines(st.patents || fallback.patents || []));
    setAcadAwards(arrayToLines(st.awards || fallback.awards || []));
    setAcadProfileUrl(st.profile_url || '');
    setExistingPdfUrl(st.profile_pdf || '');
    setAcadPdfFile(null);
    setRemovePdf(false);
  };

  const handleSaveAcademicProfile = async (e) => {
    e.preventDefault();
    if (!academicStaff) return;
    setIsSavingAcad(true);

    try {
      const formData = new FormData();
      formData.append('about', acadAbout);
      formData.append('linkedin', acadLinkedin);
      formData.append('spec', acadSpec);
      formData.append('experience', JSON.stringify(linesToArray(acadExperience)));
      formData.append('publications', JSON.stringify(linesToArray(acadPublications)));
      formData.append('projects', JSON.stringify(linesToArray(acadProjects)));
      formData.append('patents', JSON.stringify(linesToArray(acadPatents)));
      formData.append('awards', JSON.stringify(linesToArray(acadAwards)));
      formData.append('profile_url', acadProfileUrl);
      formData.append('remove_pdf', removePdf);
      if (acadPdfFile) {
        formData.append('profile_pdf', acadPdfFile);
      }

      const res = await axios.put(`http://localhost:5000/api/admin/staff/${academicStaff.id}/academic-profile`, formData);
      if (res.data.success) {
        alert('Academic Profile updated successfully!');
        setAcademicStaff(null);
        fetchStaff();
      } else {
        alert('Failed: ' + res.data.message);
      }
    } catch (err) {
      console.error('Error saving academic profile:', err);
      alert('Error updating academic profile: ' + (err.response?.data?.message || err.message));
    } finally {
      setIsSavingAcad(false);
    }
  };

  const fetchStaff = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/staff');
      if (res.data && res.data.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
        setStaff(res.data.data);
        setIsBackendOnline(true);
        try {
          localStorage.setItem('cached_admin_staff', JSON.stringify(res.data.data));
        } catch (e) {}
      }
    } catch (err) {
      console.warn("Backend API offline or unreachable; using static/cached fallback staff:", err);
      setIsBackendOnline(false);
      setStaff(prev => (prev && prev.length > 0 ? prev : getAllStaticStaff()));
    }
  };

  useEffect(() => { fetchStaff(); }, []);

  const clearForm = () => {
    setName(''); setDesignation(''); setDepartment(''); setEmail(''); setQualifications(''); setResearch(''); setPhoto(null); setEditingStaffId(null);
  };

  const handleAddStaff = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('designation', designation);
    formData.append('department', department);
    formData.append('email', email);
    formData.append('qualifications', qualifications);
    formData.append('research', research);
    formData.append('is_hod', false); // Optional for now
    if (photo) formData.append('photo', photo);
    
    if (editingStaffId) {
      await axios.put(`http://localhost:5000/api/admin/staff/${editingStaffId}`, formData);
      alert('Staff details updated successfully!');
    } else {
      await axios.post('http://localhost:5000/api/admin/staff', formData);
      alert('Staff added successfully!');
    }
    
    clearForm();
    fetchStaff();
  };

  const handleEditStaff = (st) => {
    setEditingStaffId(st.id);
    setName(st.name || '');
    setDesignation(st.designation || '');
    setDepartment(st.department || '');
    setEmail(st.email || '');
    setQualifications(st.qualifications || '');
    setResearch(st.research || '');
    setPhoto(null);
    document.querySelector('.admin-content').scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteStaff = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:5000/api/admin/staff/${id}`);
      alert('Staff deleted successfully!');
      fetchStaff();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const getStaffPhoto = (url, staffName) => {
    if (!url) return `https://ui-avatars.com/api/?name=${encodeURIComponent(staffName || 'Faculty')}&background=1e3a8a&color=fff&size=200`;
    if (typeof url === 'string') {
      if (url.startsWith('http') || url.startsWith('data:') || url.startsWith('blob:')) return url;
      if (url.startsWith('/uploads')) return `http://localhost:5000${url}`;
      return url;
    }
    return url;
  };

  const deptNames = [
    'Computer Science and Engineering',
    'Information Technology',
    'Artificial Intelligence & Data Science',
    'Electronics and Communication Engineering',
    'Electrical and Electronics Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Science and Humanities'
  ];

  // Filter staff by department and search query
  const filteredStaff = staff.filter(st => {
    if (deptFilter !== 'All' && st.department !== deptFilter) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      (st.name && st.name.toLowerCase().includes(q)) ||
      (st.designation && st.designation.toLowerCase().includes(q)) ||
      (st.department && st.department.toLowerCase().includes(q)) ||
      (st.email && st.email.toLowerCase().includes(q)) ||
      (st.qualifications && st.qualifications.toLowerCase().includes(q)) ||
      (st.research && st.research.toLowerCase().includes(q))
    );
  });

  // Group staff by department
  const staffByDept = filteredStaff.reduce((acc, st) => {
    const dept = st.department || 'Other';
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(st);
    return acc;
  }, {});

  return (
    <div>
      <h2 className="page-title">Faculties</h2>
      
      {!editingStaffId && (
        <div className="staff-card-form">
          <div className="staff-form-header">
            <FaUserPlus /> Add New Staff Member
          </div>
          <div className="staff-form-subtitle">Fill in the details below to add a new staff member to the system</div>
          
          <form onSubmit={handleAddStaff}>
            <div className="staff-grid-inputs">
              <div className="input-group">
                <label><FaUserTie /> Full Name</label>
                <input type="text" placeholder="Enter staff name" value={name} onChange={e=>setName(e.target.value)} required />
              </div>
              <div className="input-group">
                <label><FaBriefcase /> Position/Designation</label>
                <input type="text" placeholder="e.g. Professor, Lecturer" value={designation} onChange={e=>setDesignation(e.target.value)} required />
              </div>
              <div className="input-group">
                <label><FaGraduationCap /> Qualification</label>
                <input type="text" placeholder="e.g., Ph.D., M.Tech" value={qualifications} onChange={e=>setQualifications(e.target.value)} />
              </div>
              <div className="input-group">
                <label><FaEnvelope /> Email Address</label>
                <input type="email" placeholder="e.g., staff@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
              </div>
              <div className="input-group">
                <label><FaBook /> Research and publications</label>
                <input type="text" placeholder="Research areas and publications" value={research} onChange={e=>setResearch(e.target.value)} />
              </div>
            </div>
            
            <div className="input-group" style={{maxWidth: '300px', marginBottom: '25px'}}>
              <label><FaBuilding /> Department</label>
              <select value={department} onChange={e=>setDepartment(e.target.value)} required>
                <option value="">-- Select Department --</option>
                {deptNames.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div className="input-group">
              <label><FaImage /> Staff Image</label>
              <div className="upload-area">
                <input type="file" onChange={handleFileChange} accept="image/*" />
                <FaImage className="upload-icon" />
                <div>Click to select or drag & drop an image</div>
                <div style={{fontSize: '12px', color: '#999', marginTop: '5px'}}>(JPG, PNG, WEBP - Max 50MB)</div>
                {photo && <div style={{marginTop: '10px', color: '#28a745', fontWeight: 'bold'}}><FaCheck /> {photo.name}</div>}
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary"><FaCheck /> Add Staff Member</button>
              <button type="button" className="btn-secondary" onClick={clearForm}><FaTimes /> Clear Form</button>
            </div>
          </form>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '20px 24px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        border: '1px solid #e2e8f0',
        marginBottom: '25px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {!isBackendOnline && (
          <div style={{
            backgroundColor: '#fffbeb',
            border: '1px solid #fef3c7',
            padding: '10px 14px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: '#92400e'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaExclamationTriangle style={{ color: '#d97706' }} />
              Showing offline faculty directory (Backend server not connected).
            </span>
            <button
              onClick={fetchStaff}
              style={{
                backgroundColor: '#f59e0b',
                color: 'white',
                border: 'none',
                padding: '4px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              Retry Sync
            </button>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '260px', position: 'relative' }}>
            <FaSearch style={{ position: 'absolute', left: '12px', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search faculty by name, designation, qualification or email..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px 10px 38px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaFilter style={{ color: '#64748b', fontSize: '13px' }} />
            <select
              value={deptFilter}
              onChange={e => setDeptFilter(e.target.value)}
              style={{
                padding: '10px 14px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '13px',
                fontWeight: '600',
                color: '#334155',
                backgroundColor: '#f8fafc',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="All">All Departments ({staff.length})</option>
              {deptNames.map(d => {
                const count = staff.filter(s => s.department === d).length;
                return <option key={d} value={d}>{d} ({count})</option>;
              })}
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#64748b' }}>
          <span>Showing <strong>{filteredStaff.length}</strong> faculties {deptFilter !== 'All' ? `in ${deptFilter}` : 'across all departments'}</span>
          {searchQuery && <span>Matching "<em>{searchQuery}</em>"</span>}
        </div>
      </div>

      {filteredStaff.length === 0 ? (
        <div style={{
          padding: '60px 20px',
          textAlign: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          border: '1px dashed #cbd5e1',
          color: '#64748b'
        }}>
          <FaUsers style={{ fontSize: '48px', color: '#cbd5e1', marginBottom: '12px' }} />
          <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', color: '#1e293b' }}>No Faculty Members Found</h4>
          <p style={{ margin: 0, fontSize: '13px' }}>Try clearing your search query or choosing a different department filter.</p>
        </div>
      ) : (
        [...new Set([...deptNames, ...Object.keys(staffByDept)])].filter(dept => staffByDept[dept] && staffByDept[dept].length > 0).map(dept => (
          <div key={dept} className="dept-group">
            <div className="dept-header">
              <div><FaBuilding style={{marginRight: '10px'}}/> {dept}</div>
              <div className="dept-badge">{staffByDept[dept].length} Staff</div>
            </div>
            <div className="staff-cards-grid">
              {staffByDept[dept].sort((a, b) => (b.is_hod || 0) - (a.is_hod || 0)).map(st => (
                <div className="staff-card" key={st.id} style={{display: 'flex', flexDirection: 'column', height: '100%', background: '#ffffff'}}>
                  <img 
                    src={getStaffPhoto(st.photo_url || st.image, st.name)} 
                    alt={st.name} 
                    style={{width: '100%', height: '200px', objectFit: 'cover', borderBottom: '1px solid #e5e7eb', flexShrink: 0}}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(st.name || 'Faculty')}&background=1e3a8a&color=fff&size=200`;
                    }}
                  />
                  <div className="staff-card-info" style={{padding: '16px', display: 'flex', flexDirection: 'column', flex: 1}}>
                    <h4 className="staff-card-name" style={{color: '#1e3a8a', fontSize: '16px', marginBottom: '4px', minHeight: '22px'}}>{st.name}</h4>
                    <p className="staff-card-desig" style={{color: '#4b5563', fontSize: '14px', marginBottom: '15px', minHeight: '36px', lineHeight: '1.3'}}>{st.designation}</p>
                    
                    {/* Info List */}
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px', borderBottom: '1px solid #e5e7eb', paddingBottom: '15px', flexGrow: 1}}>
                      <div style={{display: 'flex', gap: '10px', textAlign: 'left', alignItems: 'flex-start', minHeight: '36px'}}>
                        <div style={{color: '#3b82f6', marginTop: '2px', flexShrink: 0}}><FaGraduationCap /></div>
                        <div>
                          <div style={{fontSize: '12px', color: '#6b7280', fontWeight: '600'}}>Qualification:</div>
                          <div style={{fontSize: '13px', color: '#374151'}}>{st.qualifications || 'N/A'}</div>
                        </div>
                      </div>
                      <div style={{display: 'flex', gap: '10px', textAlign: 'left', alignItems: 'flex-start', minHeight: '36px'}}>
                        <div style={{color: '#3b82f6', marginTop: '2px', flexShrink: 0}}><FaEnvelope /></div>
                        <div>
                          <div style={{fontSize: '12px', color: '#6b7280', fontWeight: '600'}}>Email:</div>
                          <div style={{fontSize: '13px', color: '#374151', wordBreak: 'break-all'}}>{st.email || 'N/A'}</div>
                        </div>
                      </div>
                      <div style={{display: 'flex', gap: '10px', textAlign: 'left', alignItems: 'flex-start', minHeight: '48px'}}>
                        <div style={{color: '#3b82f6', marginTop: '2px', flexShrink: 0}}><FaBook /></div>
                        <div>
                          <div style={{fontSize: '12px', color: '#6b7280', fontWeight: '600'}}>Research and publications:</div>
                          <div style={{fontSize: '13px', color: '#374151', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}} title={st.research || 'N/A'}>{st.research || 'N/A'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Perfectly aligned action buttons pinned to bottom */}
                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto'}}>
                      <button onClick={() => {
                        setEditingStaffId(st.id);
                        setName(st.name || ''); setDesignation(st.designation || ''); setDepartment(st.department || '');
                        setEmail(st.email || ''); setQualifications(st.qualifications || ''); setResearch(st.research || '');
                        setPhoto(null);
                      }} style={{backgroundColor: '#0056b3', color: 'white', border: 'none', padding: '9px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background-color 0.2s', width: '100%'}}>
                        <FaUserTie /> Edit Details
                      </button>
                      
                      <button onClick={() => handleOpenAcademicModal(st)} style={{backgroundColor: '#4f46e5', color: 'white', border: 'none', padding: '9px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 2px 4px rgba(79, 70, 229, 0.2)', transition: 'background-color 0.2s', width: '100%'}}>
                        <FaFileAlt /> Edit Academic Profile
                      </button>

                      <button onClick={() => handleDeleteStaff(st.id)} style={{backgroundColor: 'transparent', color: '#ef4444', border: 'none', padding: '6px', cursor: 'pointer', fontSize: '12px', textDecoration: 'underline', marginTop: '2px', alignSelf: 'center'}}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}

      {editingStaffId && (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}}>
          <div style={{backgroundColor: 'white', padding: '30px', borderRadius: '10px', width: '90%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto'}}>
            <h3 style={{marginTop: 0, marginBottom: '20px', color: '#1f2937', fontSize: '18px', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px'}}><FaUserTie style={{marginRight: '10px'}} /> Edit Staff Details</h3>
            <form onSubmit={handleAddStaff}>
              <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <div>
                  <label style={{fontSize: '13px', color: '#4b5563', fontWeight: '600', marginBottom: '5px', display: 'block'}}>Full Name <span style={{color: '#ef4444'}}>*</span></label>
                  <input type="text" value={name} onChange={e=>setName(e.target.value)} required style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', color: '#4b5563', fontWeight: '600', marginBottom: '5px', display: 'block'}}>Designation <span style={{color: '#ef4444'}}>*</span></label>
                  <input type="text" value={designation} onChange={e=>setDesignation(e.target.value)} required style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', color: '#4b5563', fontWeight: '600', marginBottom: '5px', display: 'block'}}>Qualification</label>
                  <input type="text" value={qualifications} onChange={e=>setQualifications(e.target.value)} style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', color: '#4b5563', fontWeight: '600', marginBottom: '5px', display: 'block'}}>Email Address</label>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', color: '#4b5563', fontWeight: '600', marginBottom: '5px', display: 'block'}}>Research and Publications</label>
                  <input type="text" value={research} onChange={e=>setResearch(e.target.value)} style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', color: '#4b5563', fontWeight: '600', marginBottom: '5px', display: 'block'}}>Department <span style={{color: '#ef4444'}}>*</span></label>
                  <select value={department} onChange={e=>setDepartment(e.target.value)} required style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px'}}>
                    {deptNames.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{fontSize: '13px', color: '#4b5563', fontWeight: '600', marginBottom: '5px', display: 'block'}}>Update Photo (Optional)</label>
                  <input type="file" onChange={handleFileChange} accept="image/*" style={{width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px'}} />
                </div>
                <div style={{display: 'flex', gap: '15px', marginTop: '10px'}}>
                  <button type="button" onClick={() => setEditingStaffId(null)} style={{flex: 1, backgroundColor: '#f3f4f6', color: '#4b5563', border: '1px solid #d1d5db', padding: '12px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '600'}}><FaTimes style={{marginRight: '5px'}}/> Cancel</button>
                  <button type="submit" style={{flex: 1, backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '600'}}><FaCheck style={{marginRight: '5px'}}/> Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- ACADEMIC PROFILE MANAGER MODAL --- */}
      {academicStaff && (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1100, padding: '15px'}}>
          <div style={{backgroundColor: 'white', borderRadius: '12px', width: '100%', maxWidth: '780px', maxHeight: '92vh', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden'}}>
            
            {/* Modal Header */}
            <div style={{padding: '18px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#4f46e5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'}}>
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 style={{margin: 0, color: '#0f172a', fontSize: '18px', fontWeight: '700'}}>
                    Edit Academic Profile
                  </h3>
                  <div style={{fontSize: '13px', color: '#64748b', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <span style={{fontWeight: '600', color: '#1e293b'}}>{academicStaff.name}</span>
                    <span>•</span>
                    <span style={{color: '#475569'}}>{academicStaff.designation}</span>
                  </div>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <button 
                  type="button" 
                  onClick={() => window.open(getLiveProfileUrl(academicStaff), '_blank')}
                  style={{display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#e0e7ff', color: '#4338ca', border: 'none', padding: '7px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', transition: 'all 0.2s'}}
                  title="Preview live profile on website"
                >
                  <FaExternalLinkAlt style={{fontSize: '11px'}} /> View Live Profile
                </button>
                <button 
                  type="button" 
                  onClick={() => setAcademicStaff(null)} 
                  style={{backgroundColor: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', padding: '4px'}}
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div style={{display: 'flex', borderBottom: '1px solid #e2e8f0', backgroundColor: '#ffffff', padding: '0 24px'}}>
              <button 
                type="button"
                onClick={() => setAcadActiveTab('summary')}
                style={{
                  padding: '12px 16px',
                  border: 'none',
                  borderBottom: acadActiveTab === 'summary' ? '2px solid #4f46e5' : '2px solid transparent',
                  color: acadActiveTab === 'summary' ? '#4f46e5' : '#64748b',
                  fontWeight: acadActiveTab === 'summary' ? '700' : '500',
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                1. Summary & Specialization
              </button>
              <button 
                type="button"
                onClick={() => setAcadActiveTab('details')}
                style={{
                  padding: '12px 16px',
                  border: 'none',
                  borderBottom: acadActiveTab === 'details' ? '2px solid #4f46e5' : '2px solid transparent',
                  color: acadActiveTab === 'details' ? '#4f46e5' : '#64748b',
                  fontWeight: acadActiveTab === 'details' ? '700' : '500',
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                2. Academic Highlights
              </button>
              <button 
                type="button"
                onClick={() => setAcadActiveTab('document')}
                style={{
                  padding: '12px 16px',
                  border: 'none',
                  borderBottom: acadActiveTab === 'document' ? '2px solid #4f46e5' : '2px solid transparent',
                  color: acadActiveTab === 'document' ? '#4f46e5' : '#64748b',
                  fontWeight: acadActiveTab === 'document' ? '700' : '500',
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                3. Profile PDF Document
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleSaveAcademicProfile} style={{display: 'flex', flexDirection: 'column', flex: 1, overflowY: 'auto'}}>
              <div style={{padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px', flex: 1}}>
                
                {acadActiveTab === 'summary' && (
                  <>
                    <div>
                      <label style={{fontSize: '13px', color: '#334155', fontWeight: '600', marginBottom: '6px', display: 'block'}}>
                        Professional Summary / About Faculty
                      </label>
                      <textarea 
                        rows={4}
                        value={acadAbout}
                        onChange={e => setAcadAbout(e.target.value)}
                        placeholder="Write a brief professional summary or introduction for this faculty member..."
                        style={{width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', lineHeight: '1.5', fontFamily: 'inherit'}}
                      />
                      <span style={{fontSize: '11px', color: '#94a3b8', marginTop: '4px', display: 'block'}}>
                        This appears under the "Professional Summary" section on their academic portfolio page.
                      </span>
                    </div>

                    <div>
                      <label style={{fontSize: '13px', color: '#334155', fontWeight: '600', marginBottom: '6px', display: 'block'}}>
                        Research Domains & Specializations (Comma separated)
                      </label>
                      <input 
                        type="text" 
                        value={acadSpec} 
                        onChange={e => setAcadSpec(e.target.value)}
                        placeholder="e.g. Recommendation Systems, Cloud Computing, Artificial Intelligence"
                        style={{width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}}
                      />
                      <span style={{fontSize: '11px', color: '#94a3b8', marginTop: '4px', display: 'block'}}>
                        Separate each area with a comma. They will display as badge tags.
                      </span>
                    </div>

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                      <div>
                        <label style={{fontSize: '13px', color: '#334155', fontWeight: '600', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px'}}>
                          <FaLinkedin style={{color: '#0a66c2'}} /> LinkedIn Profile URL
                        </label>
                        <input 
                          type="url" 
                          value={acadLinkedin} 
                          onChange={e => setAcadLinkedin(e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                          style={{width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}}
                        />
                      </div>
                      <div>
                        <label style={{fontSize: '13px', color: '#334155', fontWeight: '600', marginBottom: '6px', display: 'block'}}>
                          Research Portfolio / Google Scholar Link
                        </label>
                        <input 
                          type="url" 
                          value={acadProfileUrl} 
                          onChange={e => setAcadProfileUrl(e.target.value)}
                          placeholder="https://scholar.google.com/citations?user=..."
                          style={{width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}}
                        />
                      </div>
                    </div>
                  </>
                )}

                {acadActiveTab === 'details' && (
                  <>
                    <div style={{backgroundColor: '#f1f5f9', padding: '10px 14px', borderRadius: '8px', fontSize: '12px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      💡 <span><strong>Tip:</strong> Enter one item per line. Each line will be shown as an individual bullet point or publication entry.</span>
                    </div>

                    <div>
                      <label style={{fontSize: '13px', color: '#334155', fontWeight: '600', marginBottom: '4px', display: 'block'}}>
                        Selected Publications & Papers (One per line)
                      </label>
                      <textarea 
                        rows={3}
                        value={acadPublications}
                        onChange={e => setAcadPublications(e.target.value)}
                        placeholder="Deep Learning Approaches for Anomaly Detection — IEEE Transactions, 2023&#10;Cloud-based Scalable Architecture — Journal of Cloud Computing, 2024"
                        style={{width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', lineHeight: '1.5', fontFamily: 'inherit'}}
                      />
                    </div>

                    <div>
                      <label style={{fontSize: '13px', color: '#334155', fontWeight: '600', marginBottom: '4px', display: 'block'}}>
                        Funded Projects & Consultancy (One per line)
                      </label>
                      <textarea 
                        rows={3}
                        value={acadProjects}
                        onChange={e => setAcadProjects(e.target.value)}
                        placeholder="AI-Powered Smart Campus Administration System&#10;Rural Health IoT Monitoring System"
                        style={{width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', lineHeight: '1.5', fontFamily: 'inherit'}}
                      />
                    </div>

                    <div>
                      <label style={{fontSize: '13px', color: '#334155', fontWeight: '600', marginBottom: '4px', display: 'block'}}>
                        Patents & Innovations (One per line)
                      </label>
                      <textarea 
                        rows={3}
                        value={acadPatents}
                        onChange={e => setAcadPatents(e.target.value)}
                        placeholder="Automated Resource Provisioning Framework (Published - 2023)"
                        style={{width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', lineHeight: '1.5', fontFamily: 'inherit'}}
                      />
                    </div>

                    <div>
                      <label style={{fontSize: '13px', color: '#334155', fontWeight: '600', marginBottom: '4px', display: 'block'}}>
                        Professional Experience (One per line)
                      </label>
                      <textarea 
                        rows={3}
                        value={acadExperience}
                        onChange={e => setAcadExperience(e.target.value)}
                        placeholder="Associate Professor, NSCET (2020 - Present)&#10;Assistant Professor, XYZ College (2015 - 2020)"
                        style={{width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', lineHeight: '1.5', fontFamily: 'inherit'}}
                      />
                    </div>

                    <div>
                      <label style={{fontSize: '13px', color: '#334155', fontWeight: '600', marginBottom: '4px', display: 'block'}}>
                        Awards & Recognition (One per line)
                      </label>
                      <textarea 
                        rows={2}
                        value={acadAwards}
                        onChange={e => setAcadAwards(e.target.value)}
                        placeholder="Excellence in AI Research Award - 2023"
                        style={{width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', lineHeight: '1.5', fontFamily: 'inherit'}}
                      />
                    </div>
                  </>
                )}

                {acadActiveTab === 'document' && (
                  <>
                    <div style={{backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '18px'}}>
                      <h4 style={{margin: '0 0 10px 0', fontSize: '15px', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <FaFilePdf style={{color: '#ef4444', fontSize: '18px'}} /> Official Academic Profile Document (PDF)
                      </h4>
                      <p style={{margin: '0 0 15px 0', fontSize: '13px', color: '#64748b', lineHeight: '1.5'}}>
                        Upload the faculty member's detailed Anna University / NAAC format profile, CV, or bio-data in PDF format. When uploaded, a prominent download button will appear on their live academic profile page.
                      </p>

                      {existingPdfUrl && !removePdf && (
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#e2e8f0', padding: '10px 15px', borderRadius: '8px', marginBottom: '15px'}}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <FaFilePdf style={{color: '#dc2626', fontSize: '18px'}} />
                            <div>
                              <div style={{fontSize: '13px', fontWeight: '600', color: '#1e293b'}}>Current Attached PDF</div>
                              <a 
                                href={`http://localhost:5000${existingPdfUrl}`} 
                                target="_blank" 
                                rel="noreferrer" 
                                style={{fontSize: '12px', color: '#4f46e5', textDecoration: 'underline'}}
                              >
                                View Current PDF
                              </a>
                            </div>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => setRemovePdf(true)}
                            style={{backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600'}}
                          >
                            Remove File
                          </button>
                        </div>
                      )}

                      {removePdf && (
                        <div style={{backgroundColor: '#fef2f2', border: '1px solid #fecaca', padding: '10px 15px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                          <span style={{fontSize: '13px', color: '#991b1b'}}>Current PDF will be removed upon saving.</span>
                          <button 
                            type="button" 
                            onClick={() => setRemovePdf(false)}
                            style={{backgroundColor: '#e2e8f0', color: '#334155', border: 'none', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px'}}
                          >
                            Undo
                          </button>
                        </div>
                      )}

                      <div>
                        <label style={{fontSize: '13px', color: '#334155', fontWeight: '600', marginBottom: '6px', display: 'block'}}>
                          {existingPdfUrl && !removePdf ? 'Replace With New PDF Document' : 'Select PDF Document'}
                        </label>
                        <input 
                          type="file" 
                          accept="application/pdf"
                          onChange={e => setAcadPdfFile(e.target.files[0] || null)}
                          style={{width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '13px', backgroundColor: 'white'}}
                        />
                        {acadPdfFile && (
                          <div style={{marginTop: '6px', fontSize: '12px', color: '#059669', fontWeight: '600'}}>
                            Selected: {acadPdfFile.name} ({(acadPdfFile.size / 1024).toFixed(1)} KB)
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

              </div>

              {/* Modal Footer */}
              <div style={{padding: '16px 24px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '12px', backgroundColor: '#f8fafc'}}>
                <button 
                  type="button" 
                  onClick={() => setAcademicStaff(null)} 
                  disabled={isSavingAcad}
                  style={{backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '600'}}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSavingAcad}
                  style={{backgroundColor: '#4f46e5', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', opacity: isSavingAcad ? 0.7 : 1}}
                >
                  <FaCheck /> {isSavingAcad ? 'Saving Academic Profile...' : 'Save Academic Profile'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- PLACEMENTS MANAGER ---
const PlacementsManager = () => {
  const [images, setImages] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_URL || `${window.location.protocol}//${window.location.hostname}:5000`;

  const fetchImages = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/admin/placements`);
      setImages(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { fetchImages(); }, []);

  const handleUploadImage = async (e) => {
    e.preventDefault();
    if (!photo) return;
    const formData = new FormData();
    formData.append('photo', photo);
    try {
      await axios.post(`${API_BASE_URL}/api/admin/placements`, formData);
      setPhoto(null);
      fetchImages();
      alert('Upload successful.');
      // Reset file input
      const fileInput = document.querySelector('input[type="file"][accept="image/*"]');
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error(error);
      alert('Upload failed.');
    }
  };

  const handleDeleteImage = async (id) => {
    if (window.confirm("Are you sure you want to delete this placement image?")) {
      try {
        await axios.delete(`${API_BASE_URL}/api/admin/placements/${id}`);
        fetchImages();
      } catch (error) {
        console.error(error);
        alert('Failed to delete image');
      }
    }
  };

  const handleClear = () => {
    setPhoto(null);
    const fileInput = document.querySelector('input[type="file"][accept="image/*"]');
    if (fileInput) fileInput.value = '';
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="page-header" style={{marginBottom: '20px'}}>
        <h2 className="page-title" style={{marginBottom: '4px', color: '#0A1A3A'}}>Placement Management</h2>
        <div style={{fontSize: '12px', color: '#6b7280'}}>Home / Placements</div>
      </div>
      
      <div className="staff-card-form" style={{marginBottom: '30px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px'}}>
        <div className="staff-form-header" style={{color: '#374151', fontSize: '18px', fontWeight: '600', display: 'flex', alignItems: 'center'}}>
          <FaImage style={{marginRight: '10px', color: '#007bff'}}/> Add Placement Image
        </div>
        <div className="staff-form-subtitle" style={{marginBottom: '20px', color: '#6b7280', fontSize: '13px'}}>
          Upload company logos and placement related images
        </div>
        
        <div style={{borderTop: '2px solid #3b82f6', margin: '0 -24px 24px -24px'}}></div>

        <form onSubmit={handleUploadImage}>
          <div className="input-group">
            <label style={{color: '#059669', fontWeight: '600', display: 'flex', alignItems: 'center'}}><FaUpload style={{marginRight: '6px'}}/> Select Image</label>
            <div className="upload-area" style={{border: '1px dashed #d1d5db', borderRadius: '8px', padding: '40px 20px', backgroundColor: '#f9fafb', transition: 'all 0.3s'}}>
              <input type="file" onChange={handleFileChange} accept="image/*" />
              <FaImage className="upload-icon" style={{fontSize: '36px', color: '#3b82f6'}} />
              <div style={{marginTop: '12px', fontWeight: '500', color: '#4b5563'}}>Click to select or drag & drop image</div>
              <div style={{fontSize: '12px', color: '#9ca3af', marginTop: '6px'}}>(JPG, PNG, WEBP - Max 50MB)</div>
              {photo && <div style={{marginTop: '12px', color: '#059669', fontWeight: '600'}}><FaCheck /> {photo.name}</div>}
            </div>
          </div>

          <div className="form-actions" style={{display: 'flex', gap: '12px', marginTop: '24px'}}>
            <button type="submit" className="btn-primary" style={{flex: 1, backgroundColor: '#1d4ed8', fontSize: '14px', padding: '12px', borderRadius: '6px'}}><FaUpload style={{marginRight: '8px'}}/> Upload Image</button>
            <button type="button" className="clear-btn" onClick={handleClear}><FaRedo style={{marginRight: '8px'}}/> Clear</button>
          </div>
        </form>
      </div>

      <div className="dept-group" style={{marginTop: '40px'}}>
        <div className="dept-header" style={{backgroundColor: '#15803d', borderRadius: '8px 8px 0 0', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', color: 'white', fontWeight: '600', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center'}}><FaBuilding style={{marginRight: '10px'}}/> Placement Photos</div>
          <div className="dept-badge" style={{backgroundColor: 'rgba(255,255,255,0.25)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px'}}>{images.length} Images</div>
        </div>
        <div className="staff-cards-grid" style={{padding: '30px', border: '1px solid #e5e7eb', borderTop: 'none', borderRadius: '0 0 8px 8px', background: 'white'}}>
          {images.length === 0 ? (
            <div style={{textAlign: 'center', color: '#6b7280', width: '100%', gridColumn: '1 / -1'}}>No placement images found.</div>
          ) : (
            images.map((img) => (
               <div key={img.id} className="staff-card admin-placement-card">
                 <img src={`${API_BASE_URL}${img.image_url}`} alt="Placement" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                 
                 <div className="placement-overlay">
                   <div className="placement-actions">
                     <button 
                       type="button"
                       className="admin-photo-btn"
                       onClick={() => setPreviewImage(`${API_BASE_URL}${img.image_url}`)}
                     >
                       <FaEye /> View
                     </button>
                     <button 
                       type="button"
                       className="admin-photo-btn admin-photo-delete"
                       onClick={() => handleDeleteImage(img.id)}
                     >
                       <FaTrash /> Delete
                     </button>
                   </div>
                 </div>
               </div>
            ))
          )}
        </div>
      </div>

      {/* Full Screen Image Preview Modal */}
      {previewImage && (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => setPreviewImage(null)}>
          <img src={previewImage} style={{maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}} onClick={e => e.stopPropagation()} />
          <button onClick={() => setPreviewImage(null)} style={{position: 'absolute', top: '24px', right: '32px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '44px', height: '44px', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', backdropFilter: 'blur(4px)'}}
          onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}>
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};

// --- GALLERY MANAGER ---
const GalleryManager = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState('');
  const [eventImages, setEventImages] = useState(null);
  const [viewingEvent, setViewingEvent] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/events');
      // Filter only Gallery events
      const galleryEvents = (res.data.data || []).filter(ev => ev.department === 'Gallery');
      setEvents(galleryEvents);
      
      // Update viewingEvent if it's currently active so new photos show immediately
      if (viewingEvent) {
        const updatedEvent = galleryEvents.find(e => e.id === viewingEvent.id);
        if (updatedEvent) setViewingEvent(updatedEvent);
      }
    } catch (e) {
      console.error(e);
      setEvents([]);
    }
  };

  useEffect(() => { fetchEvents(); }, []);
  // ... omitting unchanged fetch logic up to the render ...
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    if (!eventName || !thumbnail) return alert("Please provide event name and thumbnail");
    
    const formData = new FormData();
    formData.append('title', eventName);
    formData.append('description', 'Gallery Event');
    formData.append('department', 'Gallery');
    formData.append('date', new Date().getFullYear().toString());
    formData.append('image', thumbnail); // 'image' is the field name in multer

    try {
      await axios.post('http://localhost:5000/api/admin/events', formData);
      setEventName(''); 
      setThumbnail(null);
      fetchEvents();
      alert('Event created successfully.');
    } catch (error) {
      console.error(error);
      alert('Failed to create event');
    }
  };

  const handleUploadImages = async (e) => {
    e.preventDefault();
    if (!selectedEventId || !eventImages || eventImages.length === 0) return alert("Select event and images");
    
    try {
      // Upload each photo to the event
      for (let i = 0; i < eventImages.length; i++) {
        const formData = new FormData();
        formData.append('photo', eventImages[i]);
        await axios.post(`http://localhost:5000/api/admin/events/${selectedEventId}/photo`, formData);
      }
      setEventImages(null);
      const fileInput = document.getElementById('galleryImagesInput');
      if (fileInput) fileInput.value = '';
      fetchEvents();
      alert('Images uploaded successfully.');
    } catch (error) {
      console.error(error);
      alert('Failed to upload some images');
    }
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm("Are you sure you want to delete this event and all its photos?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/events/${id}`);
        if (viewingEvent && viewingEvent.id === id) setViewingEvent(null);
        fetchEvents();
      } catch (e) { 
        console.error(e);
        alert('Failed to delete event');
      }
    }
  };

  const handleDeletePhoto = async (photoId) => {
    if (window.confirm("Are you sure you want to delete this photo?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/events/photo/${photoId}`);
        fetchEvents();
      } catch (e) {
        console.error(e);
        alert('Failed to delete photo');
      }
    }
  };

  return (
    <div>
      <div className="page-header" style={{marginBottom: '20px'}}>
        <h2 className="page-title" style={{marginBottom: '4px', color: '#0A1A3A', display: 'flex', alignItems: 'center'}}>
          <FaImages style={{marginRight: '10px'}}/> Gallery Management
        </h2>
        <div style={{fontSize: '12px', color: '#6b7280'}}>Home / Gallery</div>
      </div>
      
      {/* Create New Event Card */}
      <div className="staff-card-form" style={{marginBottom: '30px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
        <div className="staff-form-header" style={{color: '#374151', fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px'}}>
          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', border: '1.5px solid #6b7280', marginRight: '10px', fontSize: '14px', color: '#6b7280'}}>+</span> 
          Create New Event
        </div>
        
        <form onSubmit={handleCreateEvent}>
          <div className="staff-grid-inputs" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
            <div className="input-group" style={{marginBottom: 0}}>
              <label style={{fontWeight: '500', color: '#4b5563', fontSize: '13px', marginBottom: '8px'}}>Event Name <span style={{color: '#ef4444'}}>*</span></label>
              <input type="text" placeholder="e.g., Annual Day 2024" value={eventName} onChange={e=>setEventName(e.target.value)} required style={{padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '6px', width: '100%', outline: 'none', transition: 'border-color 0.2s'}}/>
              <div style={{fontSize: '11px', color: '#9ca3af', marginTop: '6px'}}>Use unique event names</div>
            </div>
            
            <div className="input-group" style={{marginBottom: 0}}>
              <label style={{fontWeight: '500', color: '#4b5563', fontSize: '13px', marginBottom: '8px'}}>Card/Thumbnail Image <span style={{color: '#ef4444'}}>*</span></label>
              <div style={{display: 'flex', border: '1px solid #d1d5db', borderRadius: '6px', overflow: 'hidden', alignItems: 'center', backgroundColor: '#ffffff'}}>
                <div style={{backgroundColor: '#f9fafb', padding: '10px 14px', borderRight: '1px solid #d1d5db', color: '#4b5563', fontSize: '13px', whiteSpace: 'nowrap', fontWeight: '500'}}>Choose file</div>
                <input type="file" onChange={e=>setThumbnail(e.target.files[0])} accept="image/*" style={{padding: '7px 10px', width: '100%', border: 'none', background: 'transparent', fontSize: '13px'}} required />
              </div>
              <div style={{fontSize: '11px', color: '#9ca3af', marginTop: '6px'}}>Max 50MB. Formats: JPG, PNG, GIF, WEBP</div>
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{marginTop: '24px', backgroundColor: '#3b82f6', borderRadius: '6px', padding: '10px 20px', fontSize: '14px', display: 'flex', alignItems: 'center', fontWeight: '500', border: 'none', cursor: 'pointer', color: 'white'}}>
            <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '14px', height: '14px', borderRadius: '50%', border: '1.5px solid white', marginRight: '8px', fontSize: '10px', fontWeight: 'bold'}}>+</span> Create Event
          </button>
        </form>
      </div>

      {/* Upload Images to Event Card */}
      <div className="staff-card-form" style={{marginBottom: '30px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
        <div className="staff-form-header" style={{color: '#374151', fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px'}}>
          <FaUpload style={{marginRight: '10px', color: '#6b7280'}}/> Upload Images to Event
        </div>
        
        <form onSubmit={handleUploadImages}>
          <div className="staff-grid-inputs" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
            <div className="input-group" style={{marginBottom: 0}}>
              <label style={{fontWeight: '500', color: '#4b5563', fontSize: '13px', marginBottom: '8px'}}>Select Event <span style={{color: '#ef4444'}}>*</span></label>
              <select value={selectedEventId} onChange={e=>setSelectedEventId(e.target.value)} required style={{padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '6px', width: '100%', backgroundColor: 'white', outline: 'none', fontSize: '13px'}}>
                <option value="">-- Select Event --</option>
                {events.map(ev => <option key={ev.id} value={ev.id}>{ev.title}</option>)}
              </select>
            </div>
            
            <div className="input-group" style={{marginBottom: 0}}>
              <label style={{fontWeight: '500', color: '#4b5563', fontSize: '13px', marginBottom: '8px'}}>Select Images <span style={{color: '#ef4444'}}>*</span> (Multiple)</label>
              <div style={{display: 'flex', border: '1px solid #d1d5db', borderRadius: '6px', overflow: 'hidden', alignItems: 'center', backgroundColor: '#ffffff'}}>
                <div style={{backgroundColor: '#f9fafb', padding: '10px 14px', borderRight: '1px solid #d1d5db', color: '#4b5563', fontSize: '13px', whiteSpace: 'nowrap', fontWeight: '500'}}>Choose files</div>
                <input type="file" id="galleryImagesInput" multiple onChange={e=>setEventImages(e.target.files)} accept="image/*" style={{padding: '7px 10px', width: '100%', border: 'none', background: 'transparent', fontSize: '13px'}} required />
              </div>
              <div style={{fontSize: '11px', color: '#9ca3af', marginTop: '6px'}}>You can select multiple images at once</div>
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{marginTop: '24px', backgroundColor: '#15803d', borderRadius: '6px', padding: '10px 20px', fontSize: '14px', display: 'flex', alignItems: 'center', fontWeight: '500', border: 'none', cursor: 'pointer', color: 'white'}}>
            <FaUpload style={{marginRight: '8px'}}/> Upload Images
          </button>
        </form>
      </div>

      {/* Manage Events List / View Event Photos */}
      <div className="staff-card-form" style={{border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
        {!viewingEvent ? (
          <>
            <div className="staff-form-header" style={{color: '#374151', fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
              <FaBook style={{marginRight: '10px', color: '#6b7280'}}/> Manage Events ({events.length})
            </div>
            
            <div style={{overflowX: 'auto', borderRadius: '6px', border: '1px solid #e5e7eb'}}>
              <table className="admin-table" style={{width: '100%', borderCollapse: 'collapse', margin: 0}}>
                <thead>
                  <tr style={{backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb'}}>
                    <th style={{padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#4b5563', fontWeight: '600'}}>Event Name</th>
                    <th style={{padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#4b5563', fontWeight: '600'}}>Photos Count</th>
                    <th style={{padding: '12px 16px', textAlign: 'right', fontSize: '13px', color: '#4b5563', fontWeight: '600'}}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {events.length === 0 ? (
                    <tr><td colSpan="3" style={{padding: '30px', textAlign: 'center', color: '#6b7280', fontSize: '14px'}}>No events found.</td></tr>
                  ) : (
                    events.map(ev => (
                      <tr key={ev.id} style={{borderBottom: '1px solid #e5e7eb'}}>
                        <td style={{padding: '12px 16px', fontSize: '14px', color: '#111827', fontWeight: '500'}}>{ev.title}</td>
                        <td style={{padding: '12px 16px', fontSize: '14px', color: '#4b5563'}}>{ev.images?.length || 0}</td>
                        <td style={{padding: '12px 16px', textAlign: 'right', display: 'flex', gap: '8px', justifyContent: 'flex-end'}}>
                          <button onClick={() => setViewingEvent(ev)} style={{backgroundColor: '#e0f2fe', color: '#0369a1', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'background-color 0.2s'}}>View Photos</button>
                          {/* Keeping delete as an option for admins just in case, but styled less prominently if requested. I'll include both since they might need to delete events later. */}
                          <button onClick={() => handleDeleteEvent(ev.id)} style={{backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'background-color 0.2s'}}>Delete</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px'}}>
              <div className="staff-form-header" style={{color: '#374151', fontSize: '18px', fontWeight: '600', display: 'flex', alignItems: 'center', margin: 0}}>
                <FaImages style={{marginRight: '10px', color: '#3b82f6'}}/> {viewingEvent.title} - Photos
              </div>
              <button 
                onClick={() => setViewingEvent(null)} 
                style={{backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)', transition: 'background-color 0.2s'}}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              >
                <FaArrowLeft /> Back to Events
              </button>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px'}}>
              <style>
                {`
                  .photo-card {
                    position: relative;
                    border-radius: 8px;
                    overflow: hidden;
                    border: 1px solid #e5e7eb;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    background-color: #f9fafb;
                    aspect-ratio: 1;
                    transition: transform 0.2s, box-shadow 0.2s;
                  }
                  .photo-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 12px rgba(0,0,0,0.1);
                  }
                  .photo-card-overlay {
                    position: absolute;
                    bottom: -60px;
                    left: 0;
                    right: 0;
                    background: rgba(0,0,0,0.75);
                    display: flex;
                    justify-content: space-around;
                    padding: 12px;
                    transition: bottom 0.3s ease;
                    backdrop-filter: blur(4px);
                  }
                  .photo-card:hover .photo-card-overlay {
                    bottom: 0;
                  }
                  .photo-action-btn {
                    color: white;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    padding: 6px 12px;
                    border-radius: 6px;
                    transition: background 0.2s;
                  }
                  .photo-action-btn:hover {
                    background: rgba(255,255,255,0.2);
                  }
                `}
              </style>
              {(!viewingEvent.photosList || viewingEvent.photosList.length === 0) ? (
                <div style={{gridColumn: '1 / -1', padding: '40px', textAlign: 'center', color: '#6b7280', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px dashed #d1d5db'}}>
                  No photos uploaded for this event yet. Use the upload section above.
                </div>
              ) : (
                viewingEvent.photosList.map((photo, i) => (
                  <div key={i} className="photo-card">
                    <img src={`http://localhost:5000${photo.url}`} alt={`${viewingEvent.title} - ${i}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    <div className="photo-card-overlay">
                      <button className="photo-action-btn" onClick={() => setPreviewImage(`http://localhost:5000${photo.url}`)}>
                        <FaEye /> View
                      </button>
                      <button className="photo-action-btn" onClick={() => handleDeletePhoto(photo.id)} style={{color: '#fca5a5'}}>
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>

      {/* Full Screen Image Preview Modal */}
      {previewImage && (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => setPreviewImage(null)}>
          <img src={previewImage} style={{maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}} onClick={e => e.stopPropagation()} />
          <button onClick={() => setPreviewImage(null)} style={{position: 'absolute', top: '24px', right: '32px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '44px', height: '44px', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', backdropFilter: 'blur(4px)'}}
          onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}>
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};

const DepartmentsManager = () => {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchDepartments = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/departments');
    setDepartments(res.data.data);
  };

  useEffect(() => { fetchDepartments(); }, []);

  const handleAddDepartment = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (photo) formData.append('photo', photo);
    await axios.post('http://localhost:5000/api/admin/departments', formData);
    setName(''); setDescription(''); setPhoto(null);
    fetchDepartments();
  };

  const handleDeleteDepartment = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:5000/api/admin/departments/${id}`);
      fetchDepartments();
    }
  };

  return (
    <div>
      <h2>Manage Departments</h2>
      <div className="form-section">
        <h3>Add Department</h3>
        <form onSubmit={handleAddDepartment}>
          <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
          <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
          <input type="file" onChange={e=>setPhoto(e.target.files[0])} />
          <button type="submit">Add Department</button>
        </form>
      </div>

      <div className="list-section">
        <h3>Existing Departments</h3>
        <table className="admin-table">
          <thead><tr><th>Name</th><th>Action</th></tr></thead>
          <tbody>
            {departments.map(dp => (
              <tr key={dp.id}>
                <td>{dp.name}</td>
                <td><button className="delete-btn" onClick={() => handleDeleteDepartment(dp.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
