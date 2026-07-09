const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Backend server is running Successfully");
});

app.listen(5000,() => {
    console.log("Backend running on http://localhost:5000");
})