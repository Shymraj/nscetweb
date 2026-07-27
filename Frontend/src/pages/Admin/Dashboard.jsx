import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import HomePageManager from './HomePageManager';
import { FaChevronUp, FaHome, FaUsers, FaBriefcase, FaCalendarCheck, FaImages, FaCalendarAlt, FaCog, FaSignOutAlt, FaUserPlus, FaUserTie, FaGraduationCap, FaEnvelope, FaBook, FaBuilding, FaImage, FaCheck, FaTimes } from "react-icons/fa";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('staff');
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
      <div className="admin-header">
        <h1>NSCET - Admin</h1>
      </div>
      <div className="admin-dashboard">
        <div className="admin-sidebar">
          <ul>
            <li className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}><FaHome /> Home Page</li>
            <li className={activeTab === 'staff' ? 'active' : ''} onClick={() => setActiveTab('staff')}><FaUsers /> Faculties</li>
            <li className={activeTab === 'placements' ? 'active' : ''} onClick={() => setActiveTab('placements')}><FaBriefcase /> Placements</li>
            <li className={activeTab === 'updates' ? 'active' : ''} onClick={() => setActiveTab('updates')}><FaCalendarCheck /> Daily Updates</li>
            <li className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}><FaImages /> Gallery</li>
            <li className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}><FaCalendarAlt /> Events</li>
          </ul>
          
          <div className="sidebar-settings-label">SETTINGS</div>
          <button className="logout-btn-sidebar" onClick={handleLogout}><FaSignOutAlt /> Logout</button>
        </div>
        <div className="admin-content" onScroll={handleScroll}>
        {activeTab === 'home' && <HomePageManager />}
        {activeTab === 'staff' && <StaffManager />}
        {activeTab === 'placements' && <div><h2>Placements</h2><p>Coming Soon...</p></div>}
        {activeTab === 'updates' && <div><h2>Daily Updates</h2><p>Coming Soon...</p></div>}
        {activeTab === 'gallery' && <div><h2>Gallery</h2><p>Coming Soon...</p></div>}
        {activeTab === 'events' && <EventsManager />}
        {/* Hidden but still accessible via logic if needed */}
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
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState('');

  const fetchEvents = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/events');
    setEvents(res.data.data);
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/admin/events', { title, slug, description });
    setTitle(''); setSlug(''); setDescription('');
    fetchEvents();
  };

  const handleAddPhoto = async (e) => {
    e.preventDefault();
    if (!selectedEventId || !photo) return alert("Select event and photo");
    const formData = new FormData();
    formData.append('photo', photo);
    await axios.post(`http://localhost:5000/api/admin/events/${selectedEventId}/photo`, formData);
    setPhoto(null);
    fetchEvents();
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:5000/api/admin/events/${id}`);
      fetchEvents();
    }
  };

  return (
    <div>
      <h2>Manage Events</h2>
      <div className="form-section">
        <h3>Add New Event</h3>
        <form onSubmit={handleAddEvent}>
          <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
          <input type="text" placeholder="Slug (e.g. waves-25)" value={slug} onChange={e=>setSlug(e.target.value)} required />
          <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
          <button type="submit">Create Event</button>
        </form>
      </div>

      <div className="form-section">
        <h3>Add Photo to Event</h3>
        <form onSubmit={handleAddPhoto}>
          <select value={selectedEventId} onChange={e=>setSelectedEventId(e.target.value)} required>
            <option value="">Select Event</option>
            {events.map(ev => <option key={ev.id} value={ev.id}>{ev.title}</option>)}
          </select>
          <input type="file" onChange={e=>setPhoto(e.target.files[0])} required />
          <button type="submit">Upload Photo</button>
        </form>
      </div>

      <div className="list-section">
        <h3>Existing Events</h3>
        <table className="admin-table">
          <thead><tr><th>Title</th><th>Slug</th><th>Photos Count</th><th>Action</th></tr></thead>
          <tbody>
            {events.map(ev => (
              <tr key={ev.id}>
                <td>{ev.title}</td>
                <td>{ev.slug}</td>
                <td>{ev.images?.length || 0}</td>
                <td><button className="delete-btn" onClick={() => handleDeleteEvent(ev.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
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

// --- DEPARTMENTS MANAGER ---
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
