const express = require("express");
const City = require("../models/City");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    confirmation: "sucess",
    data: "this is the cities route",
  });
});

module.exports = router;
