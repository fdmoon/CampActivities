// Instructions

// Your assignment is to take these two large sets of data and come up with a method to join them together in order to figure out if a given artist's song and album made it into the charts at the time of their release.

// HINT: This can be done in a couple different ways using external data as well, but you do have all of the data you need within your database to find the correlations. Give your methods some though before having to rely upon external info.

// HINT: Remember that MySQL has the ability to combine two or more tables together so long as they share equivalent data. What data is similar between the two lists?

// Once you have managed to successfully bring the two datasets together, start making queries like those you made earlier to this new table as well.

var mysql = require("mysql");
var inquirer = require("inquirer");

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

	startWorking();
});

function startWorking() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "What is your favorite artist? ",
				name: "artist"
			},
			{
				type: "input",
				message: "Search start_year? ",
				name: "start_year"
			},
			{
				type: "input",
				message: "Search end_year? ",
				name: "end_year"
			}			
		])
		.then(function(resp) {
			console.log(resp);

			var querySQL = "SELECT * FROM topAlbums INNER JOIN top5000 ON topalbums.artist=top5000.artist AND topalbums.year=top5000.year AND topalbums.artist='" + resp.artist + "' AND topalbums.year BETWEEN " + resp.start_year + " AND " + resp.end_year;
			console.log(querySQL);

			var query = connection.query(
				querySQL + " ORDER BY topalbums.year",
				function(err, res) {
					if (err) throw err;
					// Log all results of the SELECT statement
					console.log(res);

					connection.end();
				}
			);

			console.log(query.sql);
		}
	);
}

