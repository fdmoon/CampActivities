var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",
  // Your password
  password: "bootcamp",
  database: "top_songsDB"
});

connection.connect(function(err) {
	if (err) throw err;

	// console.log("connected as id " + connection.threadId + "\n");

	// Begin working on a Node console application which will allow you to collect more specialized pieces of data. For example...
	startWorking();
});

function startWorking() {
	// A query which returns all data for songs sung by a specific artist
	// A query which returns all artists who appear within the top 5000 more than once
	// A query which returns all data contained within a specific range
	// A query which searches for a specific song in the top 5000 and returns the data for it
	// HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQL's documentation to find some of them.
	readAllDataByArtist('Bing Crosby');
}

function readAllDataByArtist(artist) {
	connection.query(
		"SELECT * FROM top5000 WHERE ?", 
		{
			artist: artist
		},
		function(err, res) {
			if (err) throw err;
			// Log all results of the SELECT statement
			console.log(res);

			showAllArtistAppearMorethanonce();
		}
	);
}

function showAllArtistAppearMorethanonce() {
	connection.query(
		"select artist, count(song) as appearedCount from top5000 group by artist having appearedCount > 1", 
		function(err, res) {
			if (err) throw err;
			// Log all results of the SELECT statement
			console.log(res);

			connection.end();
		}
	);
}

