const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const adminRoutes = require("./routes/adminRoutes");
const homeRoutes = require("./routes/homeRoutes");

const app = express();

console.log("🔥 THIS IS THE CORRECT SERVER.JS");

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/admin/home", homeRoutes);

const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.get("/api/admin/test", (req, res) => {
    res.send("Admin Route Working");
});



app.get('/', (req, res) => {
    res.send("Backend server is running Successfully");
});

app.listen(5000,() => {
    console.log("Backend running on http://localhost:5000");
})