const express = require("express");
const connectDB = require("./configurations/db");
const urlRoutes = require("./routes/urlRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/url", urlRoutes);

app.use((req, res) => {
    res.status(404).send("Route not found");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});