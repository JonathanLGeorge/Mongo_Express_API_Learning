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
    .then((Country) => {
      res.json({
        confirmation: "success",
        data: Country,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

//add/?name=nameOfAddedCountry&continent=nameOfContinent&population=number
router.get("/add", (req, res, next) => {
  const details = req.query;
  res.json({
    confirmation: "success",
    data: details,
  });

  Country.create(details)
    .then((country) => {
      res.json({
        confirmation: "success",
        data: country,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "failed",
        message: err.message,
      });
    });
});

//update
//localhost:5000/countries/update/idOfCountry?shemaYouwantUpdated=updatedInfo
//localhost:5000/countries/update/605291681c6c71d44de159d2?population=54
//this is a mongoose thing. not a CLI thing
router.get("/update/:id", (req, res, next) => {
  const updateDetails = req.query;
  const countryId = req.params.id;
  // res.json({
  //   confirmation: "success",
  //   data: details,
  // });

  Country.findByIdAndUpdate(countryId, updateDetails, { new: true })
    .then((country) => {
      res.json({
        confirmation: "success",
        data: country,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "failed",
        message: err.message,
      });
    });
});

//to get by id
router.get("/:id", (req, res, next) => {
  Country.findById(req.params.id)
    .then((Country) => {
      res.json({
        confirmation: "success",
        data: Country,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: "Country (" + req.params.id + ") not found",
      });
    });
});
module.exports = router;
