import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const HomePageManager = () => {
  return (
    <div>
      <h2 style={{ color: '#004d99', marginBottom: '20px' }}>Home Page</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        <MarqueeManager />
        <HeroManager />
        <TimerManager />
        <NewsManager />
        <AnnouncementManager />
        <ImageManager />
        <PrincipalManager />
        {/* <CourseManager type="ug_course" /> */}
        {/* <CourseManager type="pg_course" /> */}
        <CounterManager />
        <RecruiterManager />
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

const MarqueeManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [content, setContent] = useState('');

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/marquee');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/marquee/${editId}`, { content });
      } else {
        await axios.post(`http://localhost:5000/api/admin/home/marquee`, { content });
      }
      setContent(''); setEditId(null);
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
    setContent(''); setEditId(null);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/marquee/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>1. Marquee Section</h3>
      <table className="admin-table">
        <thead><tr><th>Content</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.content}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Marquee Section" : "Add Marquee Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Marquee :</div>
          <div style={inputGroupStyle}>
            <textarea style={{ flex: 1, padding: '8px', minHeight: '60px', border: '1px solid #ccc', borderRadius: '4px' }} value={content} onChange={e=>setContent(e.target.value)} required placeholder="Content"></textarea>
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{...delBtnStyle, marginLeft: '10px', padding: '8px 25px'}}>Cancel</button>}
      </form>
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
    if(photo) formData.append('photo', photo);
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
              <td>{item.photo_url && <img src={`http://localhost:5000${item.photo_url}`} alt="hero" style={{width: '50px'}} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleDelete(item.id)}>Delete</button>
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
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Heading" value={heading} onChange={e=>setHeading(e.target.value)} required />
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Sub Heading" value={subHeading} onChange={e=>setSubHeading(e.target.value)} />
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Button Name" value={buttonName} onChange={e=>setButtonName(e.target.value)} />
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="URL" value={url} onChange={e=>setUrl(e.target.value)} />
          </div>
        </div>
        <div style={formRowStyle}>
          <div style={labelStyle}></div>
          <div style={inputGroupStyle}>
            <textarea style={{ flex: 1, padding: '8px', minHeight: '60px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Paragraph" value={paragraph} onChange={e=>setParagraph(e.target.value)}></textarea>
          </div>
        </div>
        <div style={formRowStyle}>
          <div style={labelStyle}>Image Upload :</div>
          <div style={inputGroupStyle}>
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e=>setPhoto(e.target.files[0])} />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{...delBtnStyle, marginLeft: '10px', padding: '8px 25px'}}>Cancel</button>}
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
                <button style={{...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleDelete(item.id)}>Delete</button>
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
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Event Name" value={eventName} onChange={e=>setEventName(e.target.value)} required />
            <input type="datetime-local" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={targetDate} onChange={e=>setTargetDate(e.target.value)} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{...delBtnStyle, marginLeft: '10px', padding: '8px 25px'}}>Cancel</button>}
      </form>
    </div>
  );
};

const NewsManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/news');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/news/${editId}`, { title, date, content });
      } else {
        await axios.post(`http://localhost:5000/api/admin/home/news`, { title, date, content });
      }
      setTitle(''); setDate(''); setContent(''); setEditId(null);
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };
  const handleEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title || '');
    setDate(item.date ? new Date(item.date).toISOString().split('T')[0] : '');
    setContent(item.content || '');
  };
  const cancelEdit = () => {
    setTitle(''); setDate(''); setContent(''); setEditId(null);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/news/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>4. News Section</h3>
      <table className="admin-table">
        <thead><tr><th>Title</th><th>Date</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit News Section" : "Add News Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>News :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="News Title" value={title} onChange={e=>setTitle(e.target.value)} required />
            <input type="date" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={date} onChange={e=>setDate(e.target.value)} required />
            <textarea style={{ flex: 2, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} required></textarea>
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{...delBtnStyle, marginLeft: '10px', padding: '8px 25px'}}>Cancel</button>}
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
    if(photo) formData.append('photo', photo);
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
      <h3 style={sectionTitleStyle}>5. Announcement Popup Section</h3>
      <table className="admin-table">
        <thead><tr><th>Image</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.photo_url && <img src={`http://localhost:5000${item.photo_url}`} alt="announcement" style={{width: '120px', borderRadius: '4px'}} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleDelete(item.id)}>Delete</button>
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
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e=>setPhoto(e.target.files[0])} required />
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
    if(photo) formData.append('photo', photo);
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
      <h3 style={sectionTitleStyle}>6. Image Section</h3>
      <table className="admin-table">
        <thead><tr><th>Image</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.photo_url && <img src={`http://localhost:5000${item.photo_url}`} alt="img" style={{width: '80px', borderRadius: '4px'}} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleDelete(item.id)}>Delete</button>
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
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Caption" value={caption} onChange={e=>setCaption(e.target.value)} />
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e=>setPhoto(e.target.files[0])} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{...delBtnStyle, marginLeft: '10px', padding: '8px 25px'}}>Cancel</button>}
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
    if(photo) formData.append('photo', photo);
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
      <h3 style={sectionTitleStyle}>7. Principal Section</h3>
      <table className="admin-table">
        <thead><tr><th>Name</th><th>Message</th><th>Image</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.message}</td>
              <td>{item.photo_url && <img src={`http://localhost:5000${item.photo_url}`} alt="principal" style={{width: '50px'}} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleDelete(item.id)}>Delete</button>
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
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
            <textarea style={{ flex: 2, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} required></textarea>
          </div>
        </div>
        <div style={formRowStyle}>
          <div style={labelStyle}>Image Upload :</div>
          <div style={inputGroupStyle}>
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e=>setPhoto(e.target.files[0])} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{...delBtnStyle, marginLeft: '10px', padding: '8px 25px'}}>Cancel</button>}
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
    if(photo) formData.append('photo', photo);
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
              <td>{item.photo_url && <img src={`http://localhost:5000${item.photo_url}`} alt="course" style={{width: '50px'}} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleDelete(item.id)}>Delete</button>
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
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Name" value={courseName} onChange={e=>setCourseName(e.target.value)} required />
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} required />
          </div>
        </div>
        <div style={formRowStyle}>
          <div style={labelStyle}>Image Upload :</div>
          <div style={inputGroupStyle}>
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e=>setPhoto(e.target.files[0])} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{...delBtnStyle, marginLeft: '10px', padding: '8px 25px'}}>Cancel</button>}
      </form>
    </div>
  );
};

const CounterManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState('');
  const [countValue, setCountValue] = useState('');

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/counter');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/counter/${editId}`, { title, count_value: countValue });
      } else {
        await axios.post(`http://localhost:5000/api/admin/home/counter`, { title, count_value: countValue });
      }
      setTitle(''); setCountValue(''); setEditId(null);
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };
  const handleEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title || '');
    setCountValue(item.count_value || '');
  };
  const cancelEdit = () => {
    setTitle(''); setCountValue(''); setEditId(null);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/counter/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>8. Counter Section</h3>
      <table className="admin-table">
        <thead><tr><th>Name</th><th>Count</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.count_value}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Counter Section" : "Add Counter Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Counter Section :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Name" value={title} onChange={e=>setTitle(e.target.value)} required />
            <input type="number" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Count" value={countValue} onChange={e=>setCountValue(e.target.value)} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{...delBtnStyle, marginLeft: '10px', padding: '8px 25px'}}>Cancel</button>}
      </form>
    </div>
  );
};

const RecruiterManager = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/recruiter');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('company_name', companyName);
    if(photo) formData.append('photo', photo);
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/admin/home/recruiter/${editId}`, formData);
      } else {
        await axios.post(`http://localhost:5000/api/admin/home/recruiter`, formData);
      }
      setCompanyName(''); setPhoto(null); setEditId(null);
      fetchItems();
    } catch (error) {
      console.error(error);
      alert("Failed to save.");
    }
  };
  const handleEdit = (item) => {
    setEditId(item.id);
    setCompanyName(item.company_name || '');
    setPhoto(null);
  };
  const cancelEdit = () => {
    setCompanyName(''); setPhoto(null); setEditId(null);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/recruiter/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>9. Recruiter Section</h3>
      <table className="admin-table">
        <thead><tr><th>Company Name</th><th>Logo</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.company_name}</td>
              <td>{item.logo_url && <img src={`http://localhost:5000${item.logo_url}`} alt="logo" style={{width: '50px'}} />}</td>
              <td style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px', alignItems: 'center' }}>
                <button style={{...addBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleEdit(item)}>Edit</button>
                <button style={{...delBtnStyle, padding: '6px 15px', margin: 0, width: '80px', boxSizing: 'border-box'}} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>{editId ? "Edit Recruiter Section" : "Add Recruiter Section"}</div>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Recruiter :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Company Name" value={companyName} onChange={e=>setCompanyName(e.target.value)} />
          </div>
        </div>
        <div style={formRowStyle}>
          <div style={labelStyle}>Logo Upload :</div>
          <div style={inputGroupStyle}>
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e=>setPhoto(e.target.files[0])} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={cancelEdit} style={{...delBtnStyle, marginLeft: '10px', padding: '8px 25px'}}>Cancel</button>}
      </form>
    </div>
  );
};

export default HomePageManager;
