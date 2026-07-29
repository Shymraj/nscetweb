import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import HomePageManager from './HomePageManager';
import { FaChevronUp, FaHome, FaUsers, FaBriefcase, FaCalendarCheck, FaImages, FaCalendarAlt, FaCog, FaSignOutAlt, FaUserPlus, FaUserTie, FaGraduationCap, FaEnvelope, FaBook, FaBuilding, FaImage, FaCheck, FaTimes, FaUpload, FaRedo } from "react-icons/fa";

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
      setEvents(res.data.data || []);
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
            <div style={{fontSize: '11px', color: '#9ca3af', marginTop: '6px'}}>Max 5MB. Formats: JPG, PNG, GIF, WEBP {editingId && "(Leave blank to keep existing)"}</div>
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

  const fetchStaff = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/staff');
    setStaff(res.data.data);
  };

  useEffect(() => { fetchStaff(); }, []);

  const clearForm = () => {
    setName(''); setDesignation(''); setDepartment(''); setEmail(''); setQualifications(''); setResearch(''); setPhoto(null);
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
    await axios.post('http://localhost:5000/api/admin/staff', formData);
    clearForm();
    fetchStaff();
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
              <div style={{fontSize: '12px', color: '#999', marginTop: '5px'}}>(JPG, PNG, WEBP - Max 5MB)</div>
              {photo && <div style={{marginTop: '10px', color: '#28a745', fontWeight: 'bold'}}><FaCheck /> {photo.name}</div>}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary"><FaCheck /> Add Staff Member</button>
            <button type="button" className="btn-secondary" onClick={clearForm}><FaTimes /> Clear Form</button>
          </div>
        </form>
      </div>

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
                <div className="staff-card-info">
                  <h4 className="staff-card-name">{st.name}</h4>
                  <p className="staff-card-desig">{st.designation}</p>
                  <button className="staff-card-delete" onClick={() => handleDeleteStaff(st.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// --- PLACEMENTS MANAGER ---
const PlacementsManager = () => {
  const [images, setImages] = useState([]);
  const [photo, setPhoto] = useState(null);

  const fetchImages = async () => {
    try {
      // Stub for fetching images
      setImages([]);
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
      // await axios.post('http://localhost:5000/api/admin/placements', formData);
      setPhoto(null);
      fetchImages();
      alert('Upload functionality to be connected to backend.');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => setPhoto(null);

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
              <div style={{fontSize: '12px', color: '#9ca3af', marginTop: '6px'}}>(JPG, PNG, WEBP - Max 5MB)</div>
              {photo && <div style={{marginTop: '12px', color: '#059669', fontWeight: '600'}}><FaCheck /> {photo.name}</div>}
            </div>
          </div>

          <div className="form-actions" style={{display: 'flex', gap: '12px', marginTop: '24px'}}>
            <button type="submit" className="btn-primary" style={{flex: 1, backgroundColor: '#1d4ed8', fontSize: '14px', padding: '12px', borderRadius: '6px'}}><FaUpload style={{marginRight: '8px'}}/> Upload Image</button>
            <button type="button" className="btn-secondary" onClick={handleClear} style={{flex: 1, backgroundColor: '#6b7280', color: 'white', border: 'none', fontSize: '14px', padding: '12px', borderRadius: '6px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><FaRedo style={{marginRight: '8px'}}/> Clear</button>
          </div>
        </form>
      </div>

      <div className="dept-group" style={{marginTop: '40px'}}>
        <div className="dept-header" style={{backgroundColor: '#15803d', borderRadius: '8px 8px 0 0', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', color: 'white', fontWeight: '600', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center'}}><FaBuilding style={{marginRight: '10px'}}/> Placement Images</div>
          <div className="dept-badge" style={{backgroundColor: 'rgba(255,255,255,0.25)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px'}}>{images.length} Images</div>
        </div>
        <div className="staff-cards-grid" style={{padding: '30px', border: '1px solid #e5e7eb', borderTop: 'none', borderRadius: '0 0 8px 8px', background: 'white'}}>
          {images.length === 0 ? (
            <div style={{textAlign: 'center', color: '#6b7280', width: '100%', gridColumn: '1 / -1'}}>No placement images found.</div>
          ) : (
            images.map((img, i) => (
               <div key={i} className="staff-card">Image Placeholder</div>
            ))
          )}
        </div>
      </div>
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

  const fetchEvents = async () => {
    try {
      // const res = await axios.get('http://localhost:5000/api/admin/events');
      // setEvents(res.data.data || []);
      setEvents([]); // Placeholder
    } catch (e) {
      console.error(e);
      setEvents([]);
    }
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    if (!eventName) return;
    const formData = new FormData();
    formData.append('title', eventName);
    formData.append('slug', eventName.toLowerCase().replace(/ /g, '-'));
    if (thumbnail) formData.append('thumbnail', thumbnail);

    try {
      // await axios.post('http://localhost:5000/api/admin/events', formData);
      setEventName(''); setThumbnail(null);
      fetchEvents();
      alert('Event creation connected to backend (placeholder).');
    } catch (error) {
      console.error(error);
    }
  };

  const handleUploadImages = async (e) => {
    e.preventDefault();
    if (!selectedEventId || !eventImages) return alert("Select event and images");
    const formData = new FormData();
    for (let i = 0; i < eventImages.length; i++) {
      formData.append('photos', eventImages[i]);
    }
    try {
      // await axios.post(`http://localhost:5000/api/admin/events/${selectedEventId}/photos`, formData);
      setEventImages(null);
      fetchEvents();
      alert('Images upload connected to backend (placeholder).');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        // await axios.delete(`http://localhost:5000/api/admin/events/${id}`);
        fetchEvents();
      } catch (e) { console.error(e); }
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
              <div style={{fontSize: '11px', color: '#9ca3af', marginTop: '6px'}}>Max 5MB. Formats: JPG, PNG, GIF, WEBP</div>
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
                <input type="file" multiple onChange={e=>setEventImages(e.target.files)} accept="image/*" style={{padding: '7px 10px', width: '100%', border: 'none', background: 'transparent', fontSize: '13px'}} required />
              </div>
              <div style={{fontSize: '11px', color: '#9ca3af', marginTop: '6px'}}>You can select multiple images at once</div>
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{marginTop: '24px', backgroundColor: '#15803d', borderRadius: '6px', padding: '10px 20px', fontSize: '14px', display: 'flex', alignItems: 'center', fontWeight: '500', border: 'none', cursor: 'pointer', color: 'white'}}>
            <FaUpload style={{marginRight: '8px'}}/> Upload Images
          </button>
        </form>
      </div>

      {/* Manage Events List */}
      <div className="staff-card-form" style={{border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
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
                    <td style={{padding: '12px 16px', textAlign: 'right'}}>
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
