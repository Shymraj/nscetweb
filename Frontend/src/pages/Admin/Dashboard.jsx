import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import HomePageManager from './HomePageManager';
import { FaChevronUp, FaHome, FaUsers, FaBriefcase, FaCalendarCheck, FaImages, FaCalendarAlt, FaCog, FaSignOutAlt, FaUserPlus, FaUserTie, FaGraduationCap, FaEnvelope, FaBook, FaBuilding, FaImage, FaCheck, FaTimes, FaUpload, FaRedo, FaEye, FaTrash, FaArrowLeft } from "react-icons/fa";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin-login');
    }
  }, [navigate]);

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

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <h2>NSCET - ADMIN</h2>
        </div>
        
        <ul className="sidebar-menu">
          <li className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}><FaHome className="sidebar-icon" /> Home Page</li>
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


        {/* Scrollable Content */}
        <div className="admin-content" onScroll={handleScroll}>
          {activeTab === 'home' && <HomePageManager />}
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
    'Electronics and Communication Engineering',
    'Mechanical Engineering',
    'Electrical and Electronics Engineering',
    'Civil Engineering',
    'Artificial Intelligence & Data Science',
    'Information Technology',
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
  const [staff, setStaff] = useState([]);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [research, setResearch] = useState('');
  const [photo, setPhoto] = useState(null);
  const [editingStaffId, setEditingStaffId] = useState(null);

  const fetchStaff = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/staff');
    setStaff(res.data.data);
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
    } else {
      await axios.post('http://localhost:5000/api/admin/staff', formData);
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
      fetchStaff();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  // Group staff by department
  const staffByDept = staff.reduce((acc, st) => {
    if (!acc[st.department]) acc[st.department] = [];
    acc[st.department].push(st);
    return acc;
  }, {});

  const deptNames = [
    'Computer Science and Engineering',
    'Electronics and Communication Engineering',
    'Mechanical Engineering',
    'Electrical and Electronics Engineering',
    'Civil Engineering',
    'Artificial Intelligence & Data Science',
    'Information Technology',
    'Science and Humanities'
  ];

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

      {Object.keys(staffByDept).map(dept => (
        <div key={dept} className="dept-group">
          <div className="dept-header">
            <div><FaBuilding style={{marginRight: '10px'}}/> {dept}</div>
            <div className="dept-badge">{staffByDept[dept].length} Staff</div>
          </div>
          <div className="staff-cards-grid">
            {staffByDept[dept].map(st => (
              <div className="staff-card" key={st.id}>
                {st.photo_url ? (
                  <img src={`http://localhost:5000${st.photo_url}`} alt={st.name} />
                ) : (
                  <div style={{height: '200px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>No Image</div>
                )}
                <div className="staff-card-info" style={{padding: '15px'}}>
                  <h4 className="staff-card-name" style={{color: '#1e3a8a', fontSize: '16px', marginBottom: '4px'}}>{st.name}</h4>
                  <p className="staff-card-desig" style={{color: '#4b5563', fontSize: '14px', marginBottom: '15px'}}>{st.designation}</p>
                  
                  {/* Info List */}
                  <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px', borderBottom: '1px solid #e5e7eb', paddingBottom: '15px'}}>
                    <div style={{display: 'flex', gap: '10px', textAlign: 'left', alignItems: 'flex-start'}}>
                      <div style={{color: '#3b82f6', marginTop: '2px'}}><FaGraduationCap /></div>
                      <div>
                        <div style={{fontSize: '12px', color: '#6b7280', fontWeight: '600'}}>Qualification:</div>
                        <div style={{fontSize: '13px', color: '#374151'}}>{st.qualifications || 'N/A'}</div>
                      </div>
                    </div>
                    <div style={{display: 'flex', gap: '10px', textAlign: 'left', alignItems: 'flex-start'}}>
                      <div style={{color: '#3b82f6', marginTop: '2px'}}><FaEnvelope /></div>
                      <div>
                        <div style={{fontSize: '12px', color: '#6b7280', fontWeight: '600'}}>Email:</div>
                        <div style={{fontSize: '13px', color: '#374151', wordBreak: 'break-all'}}>{st.email || 'N/A'}</div>
                      </div>
                    </div>
                    <div style={{display: 'flex', gap: '10px', textAlign: 'left', alignItems: 'flex-start'}}>
                      <div style={{color: '#3b82f6', marginTop: '2px'}}><FaBook /></div>
                      <div>
                        <div style={{fontSize: '12px', color: '#6b7280', fontWeight: '600'}}>Research and publications:</div>
                        <div style={{fontSize: '13px', color: '#374151'}}>{st.research || 'N/A'}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <button onClick={() => {
                      setEditingStaffId(st.id);
                      setName(st.name || ''); setDesignation(st.designation || ''); setDepartment(st.department || '');
                      setEmail(st.email || ''); setQualifications(st.qualifications || ''); setResearch(st.research || '');
                      setPhoto(null);
                    }} style={{backgroundColor: '#0056b3', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
                      <FaUserTie /> Edit Details
                    </button>
                    <button onClick={() => handleDeleteStaff(st.id)} style={{backgroundColor: 'transparent', color: '#ef4444', border: 'none', padding: '5px', cursor: 'pointer', fontSize: '12px', textDecoration: 'underline'}}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

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
    </div>
  );
};

// --- PLACEMENTS MANAGER ---
const PlacementsManager = () => {
  const [images, setImages] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const fetchImages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/placements');
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
      await axios.post('http://localhost:5000/api/admin/placements', formData);
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
        await axios.delete(`http://localhost:5000/api/admin/placements/${id}`);
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
                 <img src={`http://localhost:5000${img.image_url}`} alt="Placement" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                 
                 <div className="placement-overlay">
                   <div className="placement-actions">
                     <button 
                       type="button"
                       className="admin-photo-btn"
                       onClick={() => setPreviewImage(`http://localhost:5000${img.image_url}`)}
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
