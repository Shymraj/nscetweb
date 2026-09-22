import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaArrowRight, FaArrowLeft, FaSearch, FaBuilding, FaStar, FaUserAlt } from 'react-icons/fa';
import './Dashboard.css';

const HomePageManager = () => {
  return (
    <div>
      <h2 style={{ color: '#004d99', marginBottom: '20px' }}>Home Page</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        <MarqueeManager />
        <HeroManager />
        <TimerManager />
        <CenterOfExcellenceManager />
        <CampusNewsManager />
        <NoticeBoardManager />
        <AnnouncementManager />
        <ImageManager />
        <PrincipalManager />
        {/* <CourseManager type="ug_course" /> */}
        {/* <CourseManager type="pg_course" /> */}
        <RecruiterManager />
        <ReviewManager />
      </div>
    </div>
  );
};

// Common Styles
const sectionTitleStyle = { color: '#004d99', marginBottom: '15px' };
const addTitleStyle = { color: '#0000ff', fontSize: '1.1em', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' };
const formRowStyle = { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px', flexWrap: 'wrap' };
const labelStyle = { width: '150px', fontWeight: 'normal', color: '#555' };
const inputGroupStyle = { display: 'flex', gap: '15px', flex: 1, flexWrap: 'wrap' };
const addBtnStyle = { backgroundColor: '#007bff', color: 'white', border: 'none', padding: '8px 25px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' };
const delBtnStyle = { backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '6px 15px', borderRadius: '4px', cursor: 'pointer' };

// --- Sub-Managers ---

// 4 Clean Speed Options (All within 30 seconds max)
const SPEED_OPTIONS = [
  { mode: 'very_fast', label: 'Very Fast (8s)', seconds: 8 },
  { mode: 'fast', label: 'Fast (14s)', seconds: 14 },
  { mode: 'normal', label: 'Normal (20s)', seconds: 20 },
  { mode: 'slow', label: 'Slow (30s)', seconds: 30 },
];

const MarqueeManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [content, setContent] = useState('');

  // Speed Settings State
  const [showSpeedModal, setShowSpeedModal] = useState(false);
  const [speedMode, setSpeedMode] = useState('normal');
  const [speedSeconds, setSpeedSeconds] = useState(20);
  const [savedSpeedSeconds, setSavedSpeedSeconds] = useState(20);
  const [isSavingSpeed, setIsSavingSpeed] = useState(false);
  const [successToast, setSuccessToast] = useState('');

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/home/marquee');
      if (res.data?.success && Array.isArray(res.data.data)) {
        setItems(res.data.data);
      }
    } catch (err) {
      console.error("Error fetching marquee items:", err);
    }
  };

  const fetchSettings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/home/marquee-settings');
      if (res.data?.success && res.data.data) {
        const sec = Math.min(30, Math.max(6, Number(res.data.data.speed_seconds) || 20));
        const mode = res.data.data.speed_mode || 'normal';
        setSpeedSeconds(sec);
        setSavedSpeedSeconds(sec);
        setSpeedMode(mode);
      }
    } catch (err) {
      console.error("Error fetching marquee settings:", err);
    }
  };

  useEffect(() => {
    fetchItems();
    fetchSettings();
  }, []);

  // Open Speed Modal
  const handleOpenSpeedModal = () => {
    setSpeedSeconds(savedSpeedSeconds);
    setShowSpeedModal(true);
  };

  // Close Speed Modal
  const handleCloseSpeedModal = () => {
    setShowSpeedModal(false);
  };

  // Select one of the 4 options
  const handleSelectOption = (opt) => {
    setSpeedMode(opt.mode);
    setSpeedSeconds(opt.seconds);
  };

  // Slider change (strictly bounded 6s to 30s)
  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setSpeedSeconds(val);
    const matched = SPEED_OPTIONS.find(o => o.seconds === val);
    setSpeedMode(matched ? matched.mode : 'custom');
  };

  // Manual numeric input change
  const handleNumberChange = (e) => {
    const raw = e.target.value;
    if (raw === '') {
      setSpeedSeconds('');
      return;
    }
    const val = Math.max(6, Math.min(30, Number(raw) || 20));
    setSpeedSeconds(val);
    const matched = SPEED_OPTIONS.find(o => o.seconds === val);
    setSpeedMode(matched ? matched.mode : 'custom');
  };

  // Save speed
  const handleSaveSpeed = async () => {
    const sec = Math.max(6, Math.min(30, Number(speedSeconds) || 20));
    setIsSavingSpeed(true);
    try {
      const res = await axios.put('http://localhost:5000/api/admin/home/marquee-settings', {
        speed_mode: speedMode,
        speed_seconds: sec
      });
      if (res.data?.success) {
        setSavedSpeedSeconds(sec);
        setSpeedSeconds(sec);
        setShowSpeedModal(false);
        setSuccessToast(`Marquee speed updated to ${sec}s`);
        setTimeout(() => setSuccessToast(''), 3500);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to save speed settings.");
    } finally {
      setIsSavingSpeed(false);
    }
  };

  // Marquee Content Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/marquee/${editId}`, { content });
      } else {
        await axios.post(`http://localhost:5000/api/admin/home/marquee`, { content });
      }
      setContent('');
      setEditId(null);
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setContent(item.content || '');
  };

  const cancelEdit = () => {
    setContent('');
    setEditId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this marquee item?")) {
      await axios.delete(`http://localhost:5000/api/admin/home/marquee/${id}`);
      fetchItems();
    }
  };

  const previewText = items.length > 0 && items[0].content
    ? items.map(i => i.content).join(" ✦ ")
    : "Welcome to Nadar Saraswathi College of Engineering & Technology ✦ Admissions Open 2026-2027";

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
        <h3 style={{ ...sectionTitleStyle, margin: 0 }}>1. Marquee Section</h3>
        {successToast && (
          <span style={{ color: '#155724', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', padding: '4px 12px', borderRadius: '4px', fontSize: '13px' }}>
            ✓ {successToast}
          </span>
        )}
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Content</th>
            <th style={{ width: '120px', textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="2" style={{ textAlign: 'center', color: '#777', padding: '20px' }}>
                No marquee announcements added yet.
              </td>
            </tr>
          ) : (
            items.map(item => (
              <tr key={item.id}>
                <td style={{ verticalAlign: 'middle' }}>{item.content}</td>
                <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                  <button
                    style={{ ...addBtnStyle, padding: '6px 15px', margin: 0, width: '95px', boxSizing: 'border-box' }}
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-action-speed"
                    onClick={handleOpenSpeedModal}
                    title="Configure marquee scrolling speed"
                  >
                    Edit Speed
                  </button>
                  <button
                    style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '95px', boxSizing: 'border-box' }}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Marquee Section" : "Add Marquee Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Marquee :</div>
          <div style={inputGroupStyle}>
            <textarea
              style={{ flex: 1, padding: '8px', minHeight: '60px', border: '1px solid #ccc', borderRadius: '4px' }}
              value={content}
              onChange={e => setContent(e.target.value)}
              required
              placeholder="Content"
            ></textarea>
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && (
          <button type="button" onClick={cancelEdit} style={{ ...delBtnStyle, marginLeft: '10px', padding: '8px 25px' }}>
            Cancel
          </button>
        )}
      </form>

      {/* --- CLEAN SPEED CONTROL MODAL (Appears on 'Edit Speed' click) --- */}
      {showSpeedModal && (
        <div className="marquee-speed-overlay" onClick={handleCloseSpeedModal}>
          <div className="marquee-speed-modal" onClick={e => e.stopPropagation()}>
            <div className="marquee-speed-modal-header">
              <h4 className="marquee-speed-modal-title">Marquee Speed Settings</h4>
              <button className="marquee-speed-modal-close" onClick={handleCloseSpeedModal}>&times;</button>
            </div>

            <div className="marquee-speed-modal-body">
              <div className="speed-info-row">
                <span>Current Active Speed:</span>
                <span className="speed-info-val">{savedSpeedSeconds}s</span>
              </div>

              <div>
                <div className="speed-label-text">Select Speed:</div>
                <div className="speed-preset-grid">
                  {SPEED_OPTIONS.map(opt => (
                    <button
                      key={opt.mode}
                      type="button"
                      className={`speed-option-btn ${speedSeconds === opt.seconds ? 'active' : ''}`}
                      onClick={() => handleSelectOption(opt)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="speed-label-text">Fine-Tune Speed (6s to 30s):</div>
                <div className="speed-slider-group">
                  <input
                    type="range"
                    min="6"
                    max="30"
                    step="1"
                    value={Number(speedSeconds) || 20}
                    onChange={handleSliderChange}
                    className="speed-slider-input"
                  />
                  <div className="speed-num-box">
                    <input
                      type="number"
                      min="6"
                      max="30"
                      value={speedSeconds}
                      onChange={handleNumberChange}
                    />
                    <span>sec</span>
                  </div>
                </div>
                <div className="speed-slider-hint">
                  <span>Faster (6s)</span>
                  <span>Slower (30s)</span>
                </div>
              </div>

              <div>
                <div className="speed-label-text">Live Preview:</div>
                <div className="speed-preview-wrap">
                  <div className="speed-preview-tag">UPDATES</div>
                  <div className="speed-preview-marquee">
                    <div
                      className="speed-preview-track"
                      style={{ animationDuration: `${Number(speedSeconds) || 20}s` }}
                    >
                      <span>{previewText} &nbsp;&nbsp;✦&nbsp;&nbsp;</span>
                      <span>{previewText} &nbsp;&nbsp;✦&nbsp;&nbsp;</span>
                      <span>{previewText} &nbsp;&nbsp;✦&nbsp;&nbsp;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="marquee-speed-modal-footer">
              <button type="button" className="btn-speed-cancel" onClick={handleCloseSpeedModal}>
                Cancel
              </button>
              <button
                type="button"
                className="btn-speed-save"
                onClick={handleSaveSpeed}
                disabled={isSavingSpeed}
              >
                {isSavingSpeed ? "Saving..." : "Save Speed"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const HeroManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [buttonName, setButtonName] = useState('');
  const [url, setUrl] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/hero');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('sub_heading', subHeading);
    formData.append('paragraph', paragraph);
    formData.append('button_name', buttonName);
    formData.append('url', url);
    if (photo) formData.append('photo', photo);
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/hero/${editId}`, formData);
      } else {
        await axios.post(`http://localhost:5000/api/admin/home/hero`, formData);
      }
      setHeading(''); setSubHeading(''); setParagraph(''); setButtonName(''); setUrl(''); setPhoto(null); setEditId(null);
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };
  const handleEdit = (item) => {
    setEditId(item.id);
    setHeading(item.heading || '');
    setSubHeading(item.sub_heading || '');
    setParagraph(item.paragraph || '');
    setButtonName(item.button_name || '');
    setUrl(item.url || '');
    setPhoto(null);
  };
  const cancelEdit = () => {
    setHeading(''); setSubHeading(''); setParagraph(''); setButtonName(''); setUrl(''); setPhoto(null); setEditId(null);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/hero/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>2. Hero Section</h3>
      <table className="admin-table">
        <thead><tr><th>Heading</th><th>Sub Heading</th><th>Paragraph</th><th>Button Name</th><th>Url</th><th>Image</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.heading}</td>
              <td>{item.sub_heading}</td>
              <td>{item.paragraph}</td>
              <td>{item.button_name}</td>
              <td>{item.url}</td>
              <td>{item.photo_url && <img src={`http://localhost:5000${item.photo_url}`} alt="hero" style={{ width: '50px' }} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{ ...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Hero Section" : "Add Hero Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Hero Details :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Heading" value={heading} onChange={e => setHeading(e.target.value)} required />
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Sub Heading" value={subHeading} onChange={e => setSubHeading(e.target.value)} />
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Button Name" value={buttonName} onChange={e => setButtonName(e.target.value)} />
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} />
          </div>
        </div>
        <div style={formRowStyle}>
          <div style={labelStyle}></div>
          <div style={inputGroupStyle}>
            <textarea style={{ flex: 1, padding: '8px', minHeight: '60px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Paragraph" value={paragraph} onChange={e => setParagraph(e.target.value)}></textarea>
          </div>
        </div>
        <div style={formRowStyle}>
          <div style={labelStyle}>Image Upload :</div>
          <div style={inputGroupStyle}>
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setPhoto(e.target.files[0])} />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{ ...delBtnStyle, marginLeft: '10px', padding: '8px 25px' }}>Cancel</button>}
      </form>
    </div>
  );
};

const TimerManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [eventName, setEventName] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/timer');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/timer/${editId}`, { event_name: eventName, target_date: targetDate });
      } else {
        await axios.post(`http://localhost:5000/api/admin/home/timer`, { event_name: eventName, target_date: targetDate });
      }
      setEventName(''); setTargetDate(''); setEditId(null);
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };
  const handleEdit = (item) => {
    setEditId(item.id);
    setEventName(item.event_name || '');
    if (item.target_date) {
      const d = new Date(item.target_date);
      const tzoffset = (new Date()).getTimezoneOffset() * 60000;
      setTargetDate((new Date(d - tzoffset)).toISOString().slice(0, 16));
    } else {
      setTargetDate('');
    }
  };
  const cancelEdit = () => {
    setEventName(''); setTargetDate(''); setEditId(null);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/home/timer/${id}`);
      fetchItems();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete timer. Please try again or check server connection.");
    }
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>3. Timer Section</h3>
      <table className="admin-table">
        <thead><tr><th>Event Name</th><th>Target Date</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.event_name}</td>
              <td>{new Date(item.target_date).toLocaleString()}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{ ...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Timer Section" : "Add Timer Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Timer :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Event Name" value={eventName} onChange={e => setEventName(e.target.value)} required />
            <input type="datetime-local" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={targetDate} onChange={e => setTargetDate(e.target.value)} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{ ...delBtnStyle, marginLeft: '10px', padding: '8px 25px' }}>Cancel</button>}
      </form>
    </div>
  );
};

const CenterOfExcellenceManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState('');
  const [highlight, setHighlight] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photo2, setPhoto2] = useState(null);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/home/coe');
      setItems(res.data.data || []);
    } catch (err) {
      console.error('Failed to fetch COE items:', err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('highlight', highlight);
    formData.append('description', description);
    if (photo) formData.append('photo', photo);
    if (photo2) formData.append('photo2', photo2);

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/coe/${editId}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/admin/home/coe', formData);
      }
      cancelEdit();
      fetchItems();
    } catch (error) {
      console.error(error);
      alert('Failed to save Centre of Excellence item.');
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title || '');
    setHighlight(item.highlight || '');
    setDescription(item.description || '');
    setPhoto(null);
    setPhoto2(null);
  };

  const cancelEdit = () => {
    setTitle('');
    setHighlight('');
    setDescription('');
    setPhoto(null);
    setPhoto2(null);
    setEditId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this Centre of Excellence item?')) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/home/coe/${id}`);
        fetchItems();
      } catch (error) {
        console.error(error);
        alert('Failed to delete.');
      }
    }
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>4. Centre of Excellence Section</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Topic / Highlight</th>
            <th>Description</th>
            <th>Images</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td style={{ fontWeight: '600' }}>{item.title}</td>
              <td>
                <span style={{ backgroundColor: '#eef2ff', color: '#3730a3', padding: '4px 8px', borderRadius: '4px', fontSize: '0.9em', fontWeight: '500' }}>
                  {item.highlight}
                </span>
              </td>
              <td style={{ maxWidth: '280px', fontSize: '0.88em', color: '#4b5563' }}>{item.description}</td>
              <td>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {item.photo_url && (
                    <img
                      src={`http://localhost:5000${item.photo_url}`}
                      alt="coe 1"
                      style={{ width: '55px', height: '40px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                  )}
                  {item.photo_url2 && (
                    <img
                      src={`http://localhost:5000${item.photo_url2}`}
                      alt="coe 2"
                      style={{ width: '55px', height: '40px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                  )}
                </div>
              </td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button
                  style={{ ...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }}
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Centre of Excellence Section" : "Add Centre of Excellence Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
          <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
            Title : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. Drone Technology)</span>
          </label>
          <input
            type="text"
            style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
            placeholder="e.g. Drone Technology"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
          <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
            Topic / Highlight : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. Advanced Robotics)</span>
          </label>
          <input
            type="text"
            style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
            placeholder="e.g. Advanced Robotics"
            value={highlight}
            onChange={e => setHighlight(e.target.value)}
            required
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
          <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
            Description : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(Detailed description about this centre...)</span>
          </label>
          <textarea
            style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '75px', lineHeight: '1.4' }}
            placeholder="Detailed description..."
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Primary Image : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(Main showcase photo)</span>
            </label>
            <input
              type="file"
              accept="image/*"
              style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
              onChange={e => setPhoto(e.target.files[0])}
              required={!editId}
            />
            {editId && <span style={{ fontSize: '0.85em', color: '#666' }}>Leave empty to keep existing</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Secondary Image : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(Lab / secondary photo)</span>
            </label>
            <input
              type="file"
              accept="image/*"
              style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
              onChange={e => setPhoto2(e.target.files[0])}
            />
            {editId && <span style={{ fontSize: '0.85em', color: '#666' }}>Leave empty to keep existing</span>}
          </div>
        </div>

        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && (
          <button
            type="button"
            onClick={cancelEdit}
            style={{ ...delBtnStyle, marginLeft: '10px', padding: '8px 25px' }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

const CampusNewsManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [tag, setTag] = useState('Campus Event');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [newsDate, setNewsDate] = useState('');
  const [linkUrl, setLinkUrl] = useState('#');
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/home/featured-news');
      setItems(res.data.data || []);
    } catch (err) {
      console.error('Failed to fetch featured news:', err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('tag', tag);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('news_date', newsDate);
    formData.append('link_url', linkUrl);
    if (photo) formData.append('photo', photo);

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/featured-news/${editId}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/admin/home/featured-news', formData);
      }
      cancelEdit();
      fetchItems();
    } catch (error) {
      console.error(error);
      alert('Failed to save Campus News.');
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setTag(item.tag || 'Campus Event');
    setTitle(item.title || '');
    setDescription(item.description || '');
    setNewsDate(item.news_date || '');
    setLinkUrl(item.link_url || '#');
    setPhoto(null);
  };

  const cancelEdit = () => {
    setEditId(null);
    setTag('Campus Event');
    setTitle('');
    setDescription('');
    setNewsDate('');
    setLinkUrl('#');
    setPhoto(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this featured news story?')) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/home/featured-news/${id}`);
        fetchItems();
      } catch (error) {
        console.error(error);
        alert('Failed to delete.');
      }
    }
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>5. Campus News & Announcements Section</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Tag / Category</th>
            <th>Date</th>
            <th>Heading / Title</th>
            <th>Paragraph Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                {item.photo_url && (
                  <img
                    src={`http://localhost:5000${item.photo_url}`}
                    alt="Featured"
                    style={{ width: '80px', height: '55px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #ddd' }}
                  />
                )}
              </td>
              <td>
                <span style={{ backgroundColor: '#ffedd5', color: '#c2410c', padding: '4px 8px', borderRadius: '4px', fontSize: '0.85em', fontWeight: 'bold' }}>
                  {item.tag || 'Campus Event'}
                </span>
              </td>
              <td style={{ whiteSpace: 'nowrap', fontSize: '0.9em', color: '#555' }}>{item.news_date}</td>
              <td style={{ fontWeight: '600', maxWidth: '240px' }}>{item.title}</td>
              <td style={{ maxWidth: '300px', fontSize: '0.88em', color: '#4b5563' }}>{item.description}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button
                  style={{ ...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }}
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Campus News (Featured Story)" : "Add Campus News (Featured Story)"}</div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Category / Tag : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. CAMPUS EVENT or TECH FEST)</span>
            </label>
            <input
              type="text"
              style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="e.g. CAMPUS EVENT"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Event Date : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. October 25, 2026)</span>
            </label>
            <input
              type="text"
              style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="e.g. October 25, 2026"
              value={newsDate}
              onChange={(e) => setNewsDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
          <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
            Heading / Title : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. National Tech Symposium 2026...)</span>
          </label>
          <input
            type="text"
            style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
            placeholder="e.g. National Tech Symposium 2026..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
          <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
            Paragraph Description : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(Detailed event coverage...)</span>
          </label>
          <textarea
            style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '80px', lineHeight: '1.4' }}
            placeholder="Detailed description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Event Image : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(Featured story photo)</span>
            </label>
            <input
              type="file"
              accept="image/*"
              style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
              onChange={(e) => setPhoto(e.target.files[0])}
              required={!editId && items.length === 0}
            />
            {editId && <span style={{ fontSize: '0.85em', color: '#666' }}>Leave empty to keep existing</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Story Link URL : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. # or /events)</span>
            </label>
            <input
              type="text"
              style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="e.g. /events or #"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && (
          <button
            type="button"
            onClick={cancelEdit}
            style={{ ...delBtnStyle, marginLeft: '10px', padding: '8px 25px' }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

const NoticeBoardManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('standard');
  const [linkUrl, setLinkUrl] = useState('#');

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/home/notice-board');
      setItems(res.data.data || []);
    } catch (err) {
      console.error('Failed to fetch notice board:', err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/notice-board/${editId}`, {
          title,
          date,
          type,
          link_url: linkUrl,
        });
      } else {
        await axios.post('http://localhost:5000/api/admin/home/notice-board', {
          title,
          date,
          type,
          link_url: linkUrl,
        });
      }
      cancelEdit();
      fetchItems();
    } catch (error) {
      console.error(error);
      alert('Failed to save Notice.');
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title || '');
    setDate(item.date || '');
    setType(item.type || 'standard');
    setLinkUrl(item.link_url || '#');
  };

  const cancelEdit = () => {
    setEditId(null);
    setTitle('');
    setDate('');
    setType('standard');
    setLinkUrl('#');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/home/notice-board/${id}`);
        fetchItems();
      } catch (error) {
        console.error(error);
        alert('Failed to delete notice.');
      }
    }
  };

  const getBadgeStyle = (badgeType) => {
    switch (badgeType) {
      case 'new':
        return { backgroundColor: '#ef4444', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8em', fontWeight: 'bold' };
      case 'pdf':
        return { backgroundColor: '#ea580c', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8em', fontWeight: 'bold' };
      case 'link':
        return { backgroundColor: '#2563eb', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8em', fontWeight: 'bold' };
      default:
        return { backgroundColor: '#f3f4f6', color: '#4b5563', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8em' };
    }
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>6. Notice Board Section</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Notice Title</th>
            <th>Link URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={{ whiteSpace: 'nowrap', fontSize: '0.9em', color: '#555' }}>{item.date}</td>
              <td>
                <span style={getBadgeStyle(item.type)}>
                  {item.type.toUpperCase()}
                </span>
              </td>
              <td style={{ fontWeight: '500' }}>{item.title}</td>
              <td style={{ fontSize: '0.85em', color: '#666', maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.link_url || '#'}
              </td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button
                  style={{ ...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }}
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Notice Board Item" : "Add Notice Board Item"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Notice Title :</div>
          <div style={inputGroupStyle}>
            <input
              type="text"
              style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="e.g. Revised Schedule for Even Semester..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div style={formRowStyle}>
          <div style={labelStyle}>Date :</div>
          <div style={inputGroupStyle}>
            <input
              type="text"
              style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="e.g. Oct 24, 2026"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div style={formRowStyle}>
          <div style={labelStyle}>Badge Type :</div>
          <div style={inputGroupStyle}>
            <select
              style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="standard">Standard (No Badge)</option>
              <option value="new">NEW (Red Badge)</option>
              <option value="pdf">PDF (Orange Badge)</option>
              <option value="link">LINK (Blue Badge)</option>
            </select>
          </div>
        </div>

        <div style={formRowStyle}>
          <div style={labelStyle}>Link URL :</div>
          <div style={inputGroupStyle}>
            <input
              type="text"
              style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="e.g. /circulars/holiday.pdf or #"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && (
          <button
            type="button"
            onClick={cancelEdit}
            style={{ ...delBtnStyle, marginLeft: '10px', padding: '8px 25px' }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

const AnnouncementManager = () => {
  const [items, setItems] = useState([]);
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/announcement');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (photo) formData.append('photo', photo);
    try {
      await axios.post(`http://localhost:5000/api/admin/home/announcement`, formData);
      setPhoto(null);
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/announcement/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>7. Announcement Popup Section</h3>
      <table className="admin-table">
        <thead><tr><th>Image</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.photo_url && <img src={`http://localhost:5000${item.photo_url}`} alt="announcement" style={{ width: '120px', borderRadius: '4px' }} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add Announcement</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Poster Image :</div>
          <div style={inputGroupStyle}>
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setPhoto(e.target.files[0])} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

const ImageManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [caption, setCaption] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/image');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('caption', caption);
    if (photo) formData.append('photo', photo);
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/image/${editId}`, formData);
      } else {
        await axios.post(`http://localhost:5000/api/admin/home/image`, formData);
      }
      setCaption(''); setPhoto(null); setEditId(null);
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };
  const handleEdit = (item) => {
    setEditId(item.id);
    setCaption(item.caption || '');
    setPhoto(null);
  };
  const cancelEdit = () => {
    setCaption(''); setPhoto(null); setEditId(null);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/image/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>8. Image Section</h3>
      <table className="admin-table">
        <thead><tr><th>Image</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.photo_url && <img src={`http://localhost:5000${item.photo_url}`} alt="img" style={{ width: '80px', borderRadius: '4px' }} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{ ...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Image Section" : "Add Image Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Image Section :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Caption" value={caption} onChange={e => setCaption(e.target.value)} />
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setPhoto(e.target.files[0])} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{ ...delBtnStyle, marginLeft: '10px', padding: '8px 25px' }}>Cancel</button>}
      </form>
    </div>
  );
};

const PrincipalManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/principal');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('message', message);
    if (photo) formData.append('photo', photo);
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/principal/${editId}`, formData);
      } else {
        await axios.post(`http://localhost:5000/api/admin/home/principal`, formData);
      }
      setName(''); setMessage(''); setPhoto(null); setEditId(null);
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };
  const handleEdit = (item) => {
    setEditId(item.id);
    setName(item.name || '');
    setMessage(item.message || '');
    setPhoto(null);
  };
  const cancelEdit = () => {
    setName(''); setMessage(''); setPhoto(null); setEditId(null);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/principal/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>9. Principal Section</h3>
      <table className="admin-table">
        <thead><tr><th>Name</th><th>Message</th><th>Image</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.message}</td>
              <td>{item.photo_url && <img src={`http://localhost:5000${item.photo_url}`} alt="principal" style={{ width: '50px' }} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{ ...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Principal Section" : "Add Principal Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Principal :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
            <textarea style={{ flex: 2, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
          </div>
        </div>
        <div style={formRowStyle}>
          <div style={labelStyle}>Image Upload :</div>
          <div style={inputGroupStyle}>
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setPhoto(e.target.files[0])} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{ ...delBtnStyle, marginLeft: '10px', padding: '8px 25px' }}>Cancel</button>}
      </form>
    </div>
  );
};

const CourseManager = ({ type }) => {
  const title = type === 'ug_course' ? '8. UG Course Section' : '9. PG Course Section';
  const apiPath = `http://localhost:5000/api/admin/home/${type}`;

  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get(apiPath);
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, [apiPath]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('course_name', courseName);
    formData.append('description', description);
    if (photo) formData.append('photo', photo);
    try {
      if (editId) {
        await axios.put(`${apiPath}/${editId}`, formData);
      } else {
        await axios.post(`${apiPath}`, formData);
      }
      setCourseName(''); setDescription(''); setPhoto(null); setEditId(null);
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };
  const handleEdit = (item) => {
    setEditId(item.id);
    setCourseName(item.course_name || '');
    setDescription(item.description || '');
    setPhoto(null);
  };
  const cancelEdit = () => {
    setCourseName(''); setDescription(''); setPhoto(null); setEditId(null);
  };
  const handleDelete = async (id) => {
    await axios.delete(`${apiPath}/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>{title}</h3>
      <table className="admin-table">
        <thead><tr><th>Course Name</th><th>Description</th><th>Image</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.course_name}</td>
              <td>{item.description}</td>
              <td>{item.photo_url && <img src={`http://localhost:5000${item.photo_url}`} alt="course" style={{ width: '50px' }} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{ ...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit {type === 'ug_course' ? 'UG' : 'PG'} Course Section" : "Add {type === 'ug_course' ? 'UG' : 'PG'} Course Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>{type === 'ug_course' ? 'UG' : 'PG'} Course :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Name" value={courseName} onChange={e => setCourseName(e.target.value)} required />
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
          </div>
        </div>
        <div style={formRowStyle}>
          <div style={labelStyle}>Image Upload :</div>
          <div style={inputGroupStyle}>
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setPhoto(e.target.files[0])} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{ ...delBtnStyle, marginLeft: '10px', padding: '8px 25px' }}>Cancel</button>}
      </form>
    </div>
  );
};

const RecruiterManager = () => {
  const [items, setItems] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [showCompaniesView, setShowCompaniesView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef(null);

  // Section Header Text States
  const [titlePrefix, setTitlePrefix] = useState('OUR');
  const [titleHighlight, setTitleHighlight] = useState('INDUSTRY CONNECT');
  const [subtitle, setSubtitle] = useState('A strong network of organizations shaping our students’ careers.');
  const [savingSettings, setSavingSettings] = useState(false);
  const [settingsMsg, setSettingsMsg] = useState('');

  const fetchSettings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/home/recruiter-settings');
      if (res.data && res.data.data) {
        setTitlePrefix(res.data.data.title_prefix || 'OUR');
        setTitleHighlight(res.data.data.title_highlight || 'INDUSTRY CONNECT');
        setSubtitle(res.data.data.subtitle || '');
      }
    } catch (err) {
      console.error('Failed to fetch recruiter settings:', err);
    }
  };

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/home/recruiter');
      setItems(res.data.data || []);
    } catch (err) {
      console.error('Failed to fetch recruiters:', err);
    }
  };

  useEffect(() => {
    fetchItems();
    fetchSettings();
  }, []);

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    try {
      await axios.put('http://localhost:5000/api/admin/home/recruiter-settings', {
        title_prefix: titlePrefix,
        title_highlight: titleHighlight,
        subtitle: subtitle,
      });
      setSettingsMsg('Section text saved successfully!');
      setTimeout(() => setSettingsMsg(''), 3000);
    } catch (error) {
      console.error(error);
      alert('Failed to save recruiter section header text.');
    } finally {
      setSavingSettings(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photo) {
      alert("Please upload a company logo image.");
      return;
    }
    const formData = new FormData();
    formData.append('company_name', companyName);
    formData.append('photo', photo);

    try {
      await axios.post(`http://localhost:5000/api/admin/home/recruiter`, formData);
      setCompanyName('');
      setPhoto(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save recruiter.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this recruiter logo?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/home/recruiter/${id}`);
        fetchItems();
      } catch (error) {
        console.error(error);
        alert("Failed to delete recruiter.");
      }
    }
  };

  const filteredItems = items.filter(item =>
    item.company_name ? item.company_name.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );

  // SUB-VIEW: Entire Company Details & Logos Page
  if (showCompaniesView) {
    return (
      <div style={{ background: '#ffffff', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
          <span style={{ color: '#475569', fontWeight: '600', fontSize: '1.05em' }}>
            Total Registered Companies: <strong style={{ color: '#004d99', fontSize: '1.15em', marginLeft: '4px' }}>{items.length}</strong>
          </span>
          <button
            onClick={() => setShowCompaniesView(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#004d99',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.95em'
            }}
          >
            <FaArrowLeft /> Back to Home Page Manager
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '15px', borderBottom: '2px solid #f1f5f9', paddingBottom: '15px' }}>
          <h3 style={{ ...sectionTitleStyle, margin: 0, fontSize: '1.3em' }}>All Recruiting Companies & Logos</h3>
          <div style={{ position: 'relative', width: '280px' }}>
            <input
              type="text"
              placeholder="Search company name..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '8px 12px 8px 32px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
            />
            <FaSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          </div>
        </div>

        {/* RECRUITERS TABLE */}
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Company Name</th>
              <th>Logo</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, idx) => (
              <tr key={item.id}>
                <td style={{ color: '#94a3b8', width: '40px' }}>{idx + 1}</td>
                <td style={{ fontWeight: '600', fontSize: '1.02em' }}>{item.company_name}</td>
                <td>
                  {item.logo_url && (
                    <div style={{ backgroundColor: '#1e293b', padding: '6px 14px', borderRadius: '6px', display: 'inline-block' }}>
                      <img
                        src={`http://localhost:5000${item.logo_url}`}
                        alt={item.company_name}
                        style={{ height: '36px', maxWidth: '130px', objectFit: 'contain' }}
                      />
                    </div>
                  )}
                </td>
                <td style={{ textAlign: 'center', padding: '10px' }}>
                  <button style={{ ...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box' }} onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ADD RECRUITER FORM */}
        <div style={{ ...addTitleStyle, marginTop: '35px' }}>Add New Recruiter Logo</div>
        <form onSubmit={handleSubmit}>
          <div style={formRowStyle}>
            <div style={labelStyle}>Company Name :</div>
            <div style={inputGroupStyle}>
              <input
                type="text"
                style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                placeholder="e.g. Tata Consultancy Services (TCS)"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                required
              />
            </div>
          </div>
          <div style={formRowStyle}>
            <div style={labelStyle}>Logo Upload :</div>
            <div style={inputGroupStyle}>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
                onChange={e => setPhoto(e.target.files[0])}
                required
              />
            </div>
          </div>
          <button type="submit" style={addBtnStyle}>Add</button>
        </form>
      </div>
    );
  }

  // MAIN VIEW: Section Settings and "View Entire Company Details" button
  return (
    <div>
      <h3 style={sectionTitleStyle}>10. Recruiter Section</h3>

      {/* SECTION HEADER TEXT EDITOR */}
      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#1e40af', fontSize: '1.05em' }}>
          Section Title & Subtitle Settings
        </h4>
        <form onSubmit={handleSaveSettings}>
          <div style={formRowStyle}>
            <div style={labelStyle}>Title Prefix :</div>
            <div style={inputGroupStyle}>
              <input
                type="text"
                style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                placeholder="e.g. OUR"
                value={titlePrefix}
                onChange={e => setTitlePrefix(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={formRowStyle}>
            <div style={labelStyle}>Title Highlight :</div>
            <div style={inputGroupStyle}>
              <input
                type="text"
                style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                placeholder="e.g. INDUSTRY CONNECT"
                value={titleHighlight}
                onChange={e => setTitleHighlight(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={formRowStyle}>
            <div style={labelStyle}>Subtitle / Description :</div>
            <div style={inputGroupStyle}>
              <textarea
                style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '60px' }}
                placeholder="A strong network of organizations shaping our students' careers."
                value={subtitle}
                onChange={e => setSubtitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button type="submit" style={addBtnStyle} disabled={savingSettings}>
              {savingSettings ? "Saving..." : "Save Section Header Text"}
            </button>
            {settingsMsg && <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '0.9em' }}>{settingsMsg}</span>}
          </div>
        </form>
      </div>

      {/* VIEW ENTIRE COMPANY DETAILS BUTTON / CARD */}
      <div
        onClick={() => setShowCompaniesView(true)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 24px',
          backgroundColor: '#ffffff',
          border: '1px solid #cbd5e1',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
          gap: '20px',
          flexWrap: 'wrap',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#004d99';
          e.currentTarget.style.boxShadow = '0 3px 8px rgba(0, 77, 153, 0.08)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#cbd5e1';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04)';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '8px',
            backgroundColor: '#f0f7ff',
            border: '1px solid #bfdbfe',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#004d99',
            fontSize: '1.2em',
            flexShrink: 0
          }}>
            <FaBuilding />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: '700', fontSize: '1.05em', color: '#0f172a' }}>
                View Entire Company Details & Logos
              </span>
              <span style={{
                backgroundColor: '#eff6ff',
                color: '#004d99',
                fontSize: '0.8em',
                padding: '2px 10px',
                borderRadius: '12px',
                fontWeight: '600',
                border: '1px solid #bfdbfe'
              }}>
                {items.length} Companies
              </span>
            </div>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.88em', color: '#64748b' }}>
              Click to manage all recruiting company logos, names, add new, or delete.
            </p>
          </div>
        </div>

        <button
          type="button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#004d99',
            color: '#ffffff',
            border: 'none',
            padding: '9px 18px',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '0.9em',
            boxShadow: '0 2px 4px rgba(0, 77, 153, 0.15)',
            pointerEvents: 'none'
          }}
        >
          <span>Open Company List</span>
          <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

const ReviewManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [pkg, setPkg] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [photo, setPhoto] = useState(null);
  const [currentPhotoUrl, setCurrentPhotoUrl] = useState(null);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  // Settings State
  const [settings, setSettings] = useState({
    badge: 'PLACEMENT RECORD',
    title: 'Proven Track Record of Excellence',
    description: 'Our campus placements stand as a testament to our quality education, modern lab ecosystem, and industry-oriented syllabus.',
    stat1_label: 'Placement Rate', stat1_value: '98%',
    stat2_label: 'Highest Package', stat2_value: '28 LPA',
    stat3_label: 'Top Recruiters', stat3_value: '60+',
    stat4_label: 'Total Offers', stat4_value: '200+'
  });
  const [savingSettings, setSavingSettings] = useState(false);
  const [settingsMsg, setSettingsMsg] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/home/reviews');
      setItems(res.data.data || []);
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
    }
  };

  const fetchSettings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/home/reviews-settings');
      if (res.data && res.data.data) {
        setSettings(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch review settings:', err);
    }
  };

  useEffect(() => {
    fetchItems();
    fetchSettings();
  }, []);

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    try {
      await axios.put('http://localhost:5000/api/admin/home/reviews-settings', settings);
      setSettingsMsg('Placement section settings saved successfully!');
      setTimeout(() => setSettingsMsg(''), 3000);
    } catch (err) {
      console.error(err);
      alert('Failed to save settings.');
    } finally {
      setSavingSettings(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('batch', batch);
    formData.append('company', company);
    formData.append('role', role);
    formData.append('package', pkg);
    formData.append('rating', rating);
    formData.append('review', review);
    if (photo) formData.append('photo', photo);

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/reviews/${editId}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/admin/home/reviews', formData);
      }
      resetForm();
      fetchItems();
    } catch (err) {
      console.error(err);
      alert('Failed to save review card.');
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setName(item.name || '');
    setBatch(item.batch || '');
    setCompany(item.company || '');
    setRole(item.role || '');
    setPkg(item.package || '');
    setRating(item.rating || 5);
    setReview(item.review || '');
    setCurrentPhotoUrl(item.image_url || null);
    setPhoto(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resetForm = () => {
    setEditId(null);
    setName('');
    setBatch('');
    setCompany('');
    setRole('');
    setPkg('');
    setRating(5);
    setReview('');
    setPhoto(null);
    setCurrentPhotoUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this review card?')) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/home/reviews/${id}`);
        fetchItems();
      } catch (err) {
        console.error(err);
        alert('Failed to delete review card.');
      }
    }
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>11. Alumni Reviews & Placement Testimonials Section</h3>

      {/* SECTION SETTINGS (COLLAPSIBLE CARD) */}
      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '18px 20px', marginBottom: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => setShowSettings(!showSettings)}>
          <div>
            <h4 style={{ margin: '0 0 4px 0', color: '#1e40af', fontSize: '1.05em' }}>
              Placement Record & Section Header Settings
            </h4>
            <p style={{ margin: 0, fontSize: '0.86em', color: '#64748b' }}>
              Customize the left-side badge, title, description, and the 4 key placement metrics.
            </p>
          </div>
          <button
            type="button"
            style={{
              background: '#e2e8f0',
              border: 'none',
              borderRadius: '4px',
              padding: '6px 12px',
              fontSize: '0.85em',
              fontWeight: '600',
              color: '#334155',
              cursor: 'pointer'
            }}
          >
            {showSettings ? 'Hide Settings ▲' : 'Edit Section Header & Stats ▼'}
          </button>
        </div>

        {showSettings && (
          <form onSubmit={handleSaveSettings} style={{ marginTop: '20px', borderTop: '1px solid #e2e8f0', paddingTop: '15px' }}>
            <div style={formRowStyle}>
              <div style={labelStyle}>Section Badge :</div>
              <div style={inputGroupStyle}>
                <input
                  type="text"
                  style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                  value={settings.badge || ''}
                  onChange={e => setSettings({ ...settings, badge: e.target.value })}
                  placeholder="e.g. PLACEMENT RECORD"
                  required
                />
              </div>
            </div>

            <div style={formRowStyle}>
              <div style={labelStyle}>Section Title :</div>
              <div style={inputGroupStyle}>
                <input
                  type="text"
                  style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                  value={settings.title || ''}
                  onChange={e => setSettings({ ...settings, title: e.target.value })}
                  placeholder="e.g. Proven Track Record of Excellence"
                  required
                />
              </div>
            </div>

            <div style={formRowStyle}>
              <div style={labelStyle}>Description :</div>
              <div style={inputGroupStyle}>
                <textarea
                  style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '60px' }}
                  value={settings.description || ''}
                  onChange={e => setSettings({ ...settings, description: e.target.value })}
                  placeholder="Brief description about placement excellence..."
                  required
                />
              </div>
            </div>

            <div style={{ marginTop: '15px', marginBottom: '15px', fontWeight: '600', color: '#1e293b' }}>
              Placement Statistics (4 Metrics):
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '20px' }}>
              <div style={{ background: '#ffffff', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.85em', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>Metric 1 (Placement Rate)</div>
                <input
                  type="text"
                  placeholder="Label (e.g. Placement Rate)"
                  style={{ width: '100%', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '8px', boxSizing: 'border-box' }}
                  value={settings.stat1_label || ''}
                  onChange={e => setSettings({ ...settings, stat1_label: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Value (e.g. 98%)"
                  style={{ width: '100%', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                  value={settings.stat1_value || ''}
                  onChange={e => setSettings({ ...settings, stat1_value: e.target.value })}
                />
              </div>

              <div style={{ background: '#ffffff', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.85em', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>Metric 2 (Highest Package)</div>
                <input
                  type="text"
                  placeholder="Label (e.g. Highest Package)"
                  style={{ width: '100%', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '8px', boxSizing: 'border-box' }}
                  value={settings.stat2_label || ''}
                  onChange={e => setSettings({ ...settings, stat2_label: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Value (e.g. 28 LPA)"
                  style={{ width: '100%', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                  value={settings.stat2_value || ''}
                  onChange={e => setSettings({ ...settings, stat2_value: e.target.value })}
                />
              </div>

              <div style={{ background: '#ffffff', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.85em', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>Metric 3 (Top Recruiters)</div>
                <input
                  type="text"
                  placeholder="Label (e.g. Top Recruiters)"
                  style={{ width: '100%', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '8px', boxSizing: 'border-box' }}
                  value={settings.stat3_label || ''}
                  onChange={e => setSettings({ ...settings, stat3_label: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Value (e.g. 60+)"
                  style={{ width: '100%', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                  value={settings.stat3_value || ''}
                  onChange={e => setSettings({ ...settings, stat3_value: e.target.value })}
                />
              </div>

              <div style={{ background: '#ffffff', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.85em', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>Metric 4 (Total Offers)</div>
                <input
                  type="text"
                  placeholder="Label (e.g. Total Offers)"
                  style={{ width: '100%', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '8px', boxSizing: 'border-box' }}
                  value={settings.stat4_label || ''}
                  onChange={e => setSettings({ ...settings, stat4_label: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Value (e.g. 200+)"
                  style={{ width: '100%', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                  value={settings.stat4_value || ''}
                  onChange={e => setSettings({ ...settings, stat4_value: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button type="submit" style={addBtnStyle} disabled={savingSettings}>
                {savingSettings ? "Saving Settings..." : "Save Placement Settings"}
              </button>
              {settingsMsg && <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '0.9em' }}>{settingsMsg}</span>}
            </div>
          </form>
        )}
      </div>

      {/* REVIEWS TABLE */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Batch & Company</th>
            <th>Role</th>
            <th>Package</th>
            <th>Rating</th>
            <th>Review Quote</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={item.id}>
              <td style={{ color: '#94a3b8', width: '35px' }}>{idx + 1}</td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {item.image_url ? (
                    <img
                      src={`http://localhost:5000${item.image_url}`}
                      alt={item.name}
                      style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #e2e8f0' }}
                    />
                  ) : (
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                      <FaUserAlt size={16} />
                    </div>
                  )}
                  <strong style={{ color: '#0f172a' }}>{item.name}</strong>
                </div>
              </td>
              <td>
                <div>{item.batch}</div>
                <strong style={{ color: '#004d99', fontSize: '0.92em' }}>{item.company}</strong>
              </td>
              <td>{item.role}</td>
              <td>
                <span style={{ backgroundColor: '#fff7ed', color: '#c2410c', border: '1px solid #ffedd5', padding: '3px 9px', borderRadius: '12px', fontWeight: '700', fontSize: '0.85em' }}>
                  {item.package}
                </span>
              </td>
              <td>
                <div style={{ display: 'flex', color: '#eab308', gap: '2px' }}>
                  {[...Array(Math.min(5, Math.max(1, item.rating || 5)))].map((_, i) => (
                    <FaStar key={i} size={12} />
                  ))}
                </div>
              </td>
              <td style={{ maxWidth: '240px', fontSize: '0.88em', color: '#475569', fontStyle: 'italic' }}>
                "{item.review && item.review.length > 80 ? `${item.review.slice(0, 80)}...` : item.review}"
              </td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '10px', alignItems: 'center' }}>
                <button style={{ ...addBtnStyle, padding: '5px 12px', margin: 0, width: '70px', boxSizing: 'border-box', fontSize: '0.88em' }} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{ ...delBtnStyle, padding: '5px 12px', margin: 0, width: '70px', boxSizing: 'border-box', fontSize: '0.88em' }} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ADD / EDIT REVIEW FORM */}
      <div ref={formRef} style={{ ...addTitleStyle, marginTop: '35px' }}>
        {editId ? `Edit Review Card: ${name}` : "Add New Review Card"}
      </div>

      <form onSubmit={handleSubmit} style={{ backgroundColor: editId ? '#f0f9ff' : 'transparent', padding: editId ? '20px' : '0', borderRadius: '8px', border: editId ? '1px solid #bae6fd' : 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Student Name : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. Karthik Raj)</span>
            </label>
            <input
              type="text"
              style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="e.g. Karthik Raj"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Batch : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. Batch 2018 - 2022)</span>
            </label>
            <input
              type="text"
              style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="Batch (e.g. Batch 2018 - 2022)"
              value={batch}
              onChange={e => setBatch(e.target.value)}
              required
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Company Name : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. TCS Digital)</span>
            </label>
            <input
              type="text"
              style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="Company Name (e.g. TCS Digital)"
              value={company}
              onChange={e => setCompany(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Job Role / Designation : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. System Engineer)</span>
            </label>
            <input
              type="text"
              style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="Job Role / Designation (e.g. System Engineer)"
              value={role}
              onChange={e => setRole(e.target.value)}
              required
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Package : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. 9 LPA or 12 LPA)</span>
            </label>
            <input
              type="text"
              style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="Package (e.g. 9 LPA or 12 LPA)"
              value={pkg}
              onChange={e => setPkg(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
              Rating / Stars : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(Select 1 to 5 Stars)</span>
            </label>
            <select
              style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'white' }}
              value={rating}
              onChange={e => setRating(parseInt(e.target.value))}
            >
              <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
              <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
              <option value={3}>⭐⭐⭐ (3 Stars)</option>
              <option value={2}>⭐⭐ (2 Stars)</option>
              <option value={1}>⭐ (1 Star)</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
          <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
            Student Photo : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(Optional: Default avatar icon will be used if no photo uploaded)</span>
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
              onChange={e => setPhoto(e.target.files[0])}
            />
            {currentPhotoUrl && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src={`http://localhost:5000${currentPhotoUrl}`}
                  alt="Current"
                  style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <span style={{ fontSize: '0.85em', color: '#64748b' }}>Current photo</span>
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
          <label style={{ fontSize: '0.88em', fontWeight: '600', color: '#1e293b' }}>
            Review Quote : <span style={{ fontWeight: 'normal', color: '#64748b' }}>(e.g. Beyond academics, the college gave me a holistic development environment...)</span>
          </label>
          <textarea
            style={{ padding: '8px 10px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '80px', lineHeight: '1.4' }}
            placeholder="Testimonial message (e.g. Beyond academics, the college gave me a holistic development environment...)"
            value={review}
            onChange={e => setReview(e.target.value)}
            required
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button type="submit" style={addBtnStyle}>
            {editId ? "Update Review" : "Add Review"}
          </button>
          {editId && (
            <button type="button" onClick={resetForm} style={{ ...delBtnStyle, marginTop: '10px', padding: '8px 25px' }}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default HomePageManager;


