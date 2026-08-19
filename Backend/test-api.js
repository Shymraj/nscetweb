const axios = require('axios');

axios.post('http://localhost:5000/api/admin/home/enquiry', {
  fullName: "John Doe",
  email: "john@example.com",
  mobile: "1234567890",
  whatsapp: "",
  city: "Madurai",
  subject: "Test Subject",
  message: "Test Message"
}).then(res => {
  console.log("SUCCESS:", res.data);
}).catch(err => {
  console.error("ERROR:", err.response ? err.response.data : err.message);
});
