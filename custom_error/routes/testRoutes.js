const express = require("express");
const router = express.Router();
const CustomError = require("../utils/CustomError");

router.get("/test", (req, res, next) => {
  return next(new CustomError("This is a custom error!", 400));
});

module.exports = router;