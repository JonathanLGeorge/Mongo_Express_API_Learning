const express = require("express");
const Country = require("../models/Country");
const router = express.Router();

router.get("/", (req, res, next) => {
  //   res.json({
  //     confirmation: "sucess",
  //     data: "this is the countries route",
  //   });

  const query = req.query; //what this allows http://localhost:5000/countries?continent=asia

  Country.find(query) //http://localhost:5000/countries?continent=asia
    .then((countries) => {
      res.json({
        confirmation: "success",
        data: countries,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

module.exports = router;
