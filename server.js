const express = require("express");
const mongoose = require("mongoose");

// const City = require("./models/City"); //added this in the routes/cites
// const Country = require("./models/Country"); ////added this in the routes/countries
//connect to MongoDB
mongoose
  .connect("mongodb://localhost/world", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((data) => {
    console.log(
      "========================\nConnection sucessful.\n========================\ndata: " +
        data
    );
  })
  .catch((err) => {
    console.error("Mongo DB connection failed: " + err.message);
  });

const app = express();

//////////////////////////////////////////////////////////////////////////////
//Routes
//////////////////////////////////////////////////////////////////////////////
const cities = require("./routes/cities");
const countries = require("./routes/countries");
app.use("/cities", cities);
app.use("/countries", countries);
//////////////////////////////////////////////////////////////////////////////

//this is all code that we put into routes to clean up server js. im leaving it hear just for notes and learning
//go to http://localhost:5000/
app.get("/", (req, res, next) => {
  res.json({
    confirmation: "success",
    data: "This is the Mongo project data",
  });
});
/*
//got to http://localhost:5000/cities
app.get("/cities", (req, res, next) => {
  City.find(null)
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

  //   res.json({
  //     confirmation: "success",
  //     data: "This is the cities route.",
  //   });
});

//got to http://localhost:5000/cities
app.get("/countries", (req, res, next) => {
  Country.find(null)
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

  //   res.json({
  //     confirmation: "success",
  //     data: "This is the cities route.",
  //   });
});
*/
app.listen(5000);
console.log("App running on http://localhost:5000");
