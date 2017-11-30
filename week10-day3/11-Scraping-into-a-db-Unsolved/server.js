/* Students: Using the tools and techniques you learned so far,
 * you will scrape a website of your choice, then place the data
 * in a MongoDB database. Be sure to make the database and collection
 * before running this exercise.

 * Consult the assignment files from earlier in class
 * if you need a refresher on Cheerio. */

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});

/* TODO: make two more routes
 * -/-/-/-/-/-/-/-/-/-/-/-/- */

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)
app.get("/find", function(req, res) {
	request("https://www.reddit.com/r/webdev", function(error, response, html) {

	  // Load the HTML into cheerio and save it to a variable
	  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
	  var $ = cheerio.load(html);

	  // An empty array to save the data that we'll scrape
	  var results = [];

	  // With cheerio, find each p-tag with the "title" class
	  // (i: iterator. element: the current element)
	  $("p.title").each(function(i, element) {

	    // Save the text of the element in a "title" variable
	    var title = $(element).text();

	    // In the currently selected element, look at its child elements (i.e., its a-tags),
	    // then save the values for any "href" attributes that the child elements may have
	    var link = $(element).children().attr("href");

	    // Save these results in an object that we'll push into the results array we defined earlier
	    results.push({
	      title: title,
	      link: link
	    });
	  });

	  // Log the results once you've looped through each of the elements found with cheerio
	  res.json(results);
	});
});

// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?
app.get("/save", function(req, res) {
	request("https://www.reddit.com/r/webdev", function(error, response, html) {

	  // Load the HTML into cheerio and save it to a variable
	  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
	  var $ = cheerio.load(html);

	  // An empty array to save the data that we'll scrape
	  var results = [];

	  // With cheerio, find each p-tag with the "title" class
	  // (i: iterator. element: the current element)
	  $("p.title").each(function(i, element) {

	    // Save the text of the element in a "title" variable
	    var title = $(element).text();

	    // In the currently selected element, look at its child elements (i.e., its a-tags),
	    // then save the values for any "href" attributes that the child elements may have
	    var link = $(element).children().attr("href");

	    // Save these results in an object that we'll push into the results array we defined earlier
	    results.push({
	      title: title,
	      link: link
	    });
	  });

	  db.scrapedData.insert(results, function(err, result) {
		db.scrapedData.find(function(err, found) {
			res.json(found);
		});
	  });

	});
});

/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
