const express = require("express");
const City = require("../models/City");
const router = express.Router();

router.get("/", (req, res, next) => {
  //  res.json({
  //    confirmation: "sucess",
  //    data: "this is the countries route",
  //  });

  const query = req.query; //what this allows http://localhost:5000/countries?continent=asia

  City.find(query) //http://localhost:5000/countries?continent=asia
    .then((cities) => {
      res.json({
        confirmation: "success",
        data: cities,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

//to get by id
router.get("/:id", (req, res, next) => {
  City.findById(req.params.id)
    .then((city) => {
      res.json({
        confirmation: "success",
        data: city,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: "City (" + req.params.id + ") not found",
      });
    });
});
module.exports = router;
