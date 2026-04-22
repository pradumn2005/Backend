const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/myDb")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/user", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});