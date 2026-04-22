const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running... ");
});

app.use('/', userRoutes);

app.listen(3000, () => {
  console.log("Server is listening at http://localhost:3000");
});