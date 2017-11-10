// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sets up database connection
// =============================================================
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	// Your username
	user: "root",
	// Your password
	password: "bootcamp",
	database: "seinfeld_db"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("MySQL connected as id " + connection.threadId + "\n");
});

// Instructions
// Create a Node Application with Express, MySQL, and Body Parser with three Express routes.
// Create a /cast route that will display all the actors and their data ordered by their id's.
// Create a /coolness-chart route that will display all the actors and their data ordered by their coolness points.
// Create a /attitude-chart/:att route that will display all the actors for a specific type of attitude.

// Routes
// =============================================================
app.get("/cast", function(req, res) {

	connection.query("SELECT * FROM actors ORDER BY id", function(err, data) {
		if (err) throw err;

		var html = "<h1>Actors</h1>";
		for(var i=0; i<data.length; i++) {
			html += "<ul>";
			html += "<li>ID: " + data[i].id + "</li>";
			html += "<li>name: " + data[i].name + "</li>";
			html += "<li>coolness_points: " + data[i].coolness_points + "</li>";
			html += "<li>attitude: " + data[i].attitude + "</li>";
			html += "</ul>";
		}
		console.log(res);
		res.send(html);		// Default - HTML !!
	});
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

