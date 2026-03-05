const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// serve frontend
app.use(express.static(path.join(__dirname, "public")));

// API endpoint
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Node.js backend!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});