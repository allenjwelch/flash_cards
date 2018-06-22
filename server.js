const express = require("express");
const app = express();
app.use(express.static("public"));

// Access MongoDB for scraped collection
const mongojs = require("mongojs");
// Database configuration
const databaseUrl = "scraper";
const collections = ["beerData"];

// Hook mongojs configuration to the db variable
const db = mongojs(databaseUrl, collections);
  db.on("error", function(error) {
   console.log("Database Error:", error);
  });

app.get("/beer", function(req, res) {
  db.beerData.find({}, function(error, found) {
    if (error) { console.log(error); }
    else {
      console.log(found); 
      res.json(found); 
    }
  });
});

app.get("/beer/:style", function(req, res) {
  let style = req.params.style;
  db.beerData.find({ familyName: style}, function(error, found) {
    if (error) { console.log(error); }
    else {
      console.log(found); 
      res.json(found); 
    }
  });
});

// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});