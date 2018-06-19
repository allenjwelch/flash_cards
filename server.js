const express = require("express");
const app = express();
app.use(express.static("public"));

// Access MongoDB for scraped collection
const mongojs = require("mongojs");
// Database configuration
const databaseUrl = "scraper";
const collections = ["scrapedBeer"];

// Hook mongojs configuration to the db variable
const db = mongojs(databaseUrl, collections);
  db.on("error", function(error) {
   console.log("Database Error:", error);
  });

app.get("/home", function(req, res) {
  db.scrapedBeer.find({}, function(error, found) {
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