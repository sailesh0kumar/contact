const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const messages = [];

app.post("/message", (req, res) => {
    const { name, message } = req.body;
    if (!name || !message) {
        return res.status(400).json({ status: "Missing name or message." });
    }
    messages.push({ name, message });
    res.json({ status: "Message received!" });
});

app.get("/message", (req, res) => {
    res.json(messages);
});

app.listen(4000, () => {
    console.log("Server is live at http://localhost:4000");
});
