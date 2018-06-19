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

db.scrapedBeer.find({}, function(error, found) {
  if (error) { console.log(error); }
  else {
    console.log(found); 
  }
});