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
        <VideoManager />
        <ImageManager />
        <PrincipalManager />
        <CourseManager type="ug_course" />
        <CourseManager type="pg_course" />
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
  const [content, setContent] = useState('');

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/marquee');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/admin/home/marquee', { content });
    setContent(''); fetchItems();
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
              <td><button style={delBtnStyle} onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add Marquee Section</div>
      <form onSubmit={handleAdd}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Marquee :</div>
          <div style={inputGroupStyle}>
            <textarea style={{ flex: 1, padding: '8px', minHeight: '60px', border: '1px solid #ccc', borderRadius: '4px' }} value={content} onChange={e=>setContent(e.target.value)} required placeholder="Content"></textarea>
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

const HeroManager = () => {
  const [items, setItems] = useState([]);
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

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('sub_heading', subHeading);
    formData.append('paragraph', paragraph);
    formData.append('button_name', buttonName);
    formData.append('url', url);
    if(photo) formData.append('photo', photo);
    
    await axios.post('http://localhost:5000/api/admin/home/hero', formData);
    setHeading(''); setSubHeading(''); setParagraph(''); setButtonName(''); setUrl(''); setPhoto(null);
    fetchItems();
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
              <td><button style={delBtnStyle} onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add Hero Section</div>
      <form onSubmit={handleAdd}>
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
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

const TimerManager = () => {
  const [items, setItems] = useState([]);
  const [eventName, setEventName] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/timer');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/admin/home/timer', { event_name: eventName, target_date: targetDate });
    setEventName(''); setTargetDate(''); fetchItems();
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/timer/${id}`);
    fetchItems();
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
              <td><button style={delBtnStyle} onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add Timer Section</div>
      <form onSubmit={handleAdd}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Timer :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Event Name" value={eventName} onChange={e=>setEventName(e.target.value)} required />
            <input type="datetime-local" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={targetDate} onChange={e=>setTargetDate(e.target.value)} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

const NewsManager = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/news');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/admin/home/news', { title, date, content });
    setTitle(''); setDate(''); setContent(''); fetchItems();
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
              <td><button style={delBtnStyle} onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add News Section</div>
      <form onSubmit={handleAdd}>
        <div style={formRowStyle}>
          <div style={labelStyle}>News :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="News Title" value={title} onChange={e=>setTitle(e.target.value)} required />
            <input type="date" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={date} onChange={e=>setDate(e.target.value)} required />
            <textarea style={{ flex: 2, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} required></textarea>
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

const VideoManager = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/video');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/admin/home/video', { title, video_url: videoUrl });
    setTitle(''); setVideoUrl(''); fetchItems();
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/video/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>5. Video Section</h3>
      <table className="admin-table">
        <thead><tr><th>Video Link</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.video_url}</td>
              <td><button style={delBtnStyle} onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add Video Section</div>
      <form onSubmit={handleAdd}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Video Section :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Url" value={videoUrl} onChange={e=>setVideoUrl(e.target.value)} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

const ImageManager = () => {
  const [items, setItems] = useState([]);
  const [caption, setCaption] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/image');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('caption', caption);
    if(photo) formData.append('photo', photo);
    await axios.post('http://localhost:5000/api/admin/home/image', formData);
    setCaption(''); setPhoto(null); fetchItems();
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
              <td><button style={delBtnStyle} onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add Image Section</div>
      <form onSubmit={handleAdd}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Image Section :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Caption" value={caption} onChange={e=>setCaption(e.target.value)} />
            <input type="file" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e=>setPhoto(e.target.files[0])} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

const PrincipalManager = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/principal');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('message', message);
    if(photo) formData.append('photo', photo);
    await axios.post('http://localhost:5000/api/admin/home/principal', formData);
    setName(''); setMessage(''); setPhoto(null); fetchItems();
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
              <td><button style={delBtnStyle} onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add Principal Section</div>
      <form onSubmit={handleAdd}>
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
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

const CourseManager = ({ type }) => {
  const title = type === 'ug_course' ? '8. UG Course Section' : '9. PG Course Section';
  const apiPath = `http://localhost:5000/api/admin/home/${type}`;
  
  const [items, setItems] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get(apiPath);
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, [apiPath]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('course_name', courseName);
    formData.append('description', description);
    if(photo) formData.append('photo', photo);
    await axios.post(apiPath, formData);
    setCourseName(''); setDescription(''); setPhoto(null); fetchItems();
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
              <td><button style={delBtnStyle} onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add {type === 'ug_course' ? 'UG' : 'PG'} Course Section</div>
      <form onSubmit={handleAdd}>
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
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

const CounterManager = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [countValue, setCountValue] = useState('');

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/counter');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/admin/home/counter', { title, count_value: countValue });
    setTitle(''); setCountValue(''); fetchItems();
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/counter/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>10. Counter Section</h3>
      <table className="admin-table">
        <thead><tr><th>Name</th><th>Count</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.count_value}</td>
              <td><button style={delBtnStyle} onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add Counter Section</div>
      <form onSubmit={handleAdd}>
        <div style={formRowStyle}>
          <div style={labelStyle}>Counter Section :</div>
          <div style={inputGroupStyle}>
            <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Name" value={title} onChange={e=>setTitle(e.target.value)} required />
            <input type="number" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Count" value={countValue} onChange={e=>setCountValue(e.target.value)} required />
          </div>
        </div>
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

const RecruiterManager = () => {
  const [items, setItems] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [photo, setPhoto] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/home/recruiter');
    setItems(res.data.data);
  };
  useEffect(() => { fetchItems(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('company_name', companyName);
    if(photo) formData.append('photo', photo);
    await axios.post('http://localhost:5000/api/admin/home/recruiter', formData);
    setCompanyName(''); setPhoto(null); fetchItems();
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/home/recruiter/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h3 style={sectionTitleStyle}>11. Recruiter Section</h3>
      <table className="admin-table">
        <thead><tr><th>Company Name</th><th>Logo</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.company_name}</td>
              <td>{item.logo_url && <img src={`http://localhost:5000${item.logo_url}`} alt="logo" style={{width: '50px'}} />}</td>
              <td><button style={delBtnStyle} onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={addTitleStyle}>Add Recruiter Section</div>
      <form onSubmit={handleAdd}>
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
        <button type="submit" style={addBtnStyle}>Add</button>
      </form>
    </div>
  );
};

export default HomePageManager;
