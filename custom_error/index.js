const express = require("express");
const app = express();

const CustomError = require("./utils/CustomError");
const errorMiddleware = require("./middleware/errorMiddleware");

app.use(express.json());

app.get("/error", (req, res, next) => {
  next(new CustomError("This is a custom error", 400));
});

app.use((req, res, next) => {
  next(new CustomError("Not Found", 404));
});

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
}