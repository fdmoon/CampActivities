var fs = require("fs");

var WeatherAdmin = function() {
	this.setData = function(str) {
		fs.appendFile("log.txt", str, function(err) {
			if (err) {
				return console.log("Error: " + err);
			}
		});			
	}	
	this.getData = function() {
		fs.readFile("log.txt", "utf8", function(error, data) {
			if (error) {
				return console.log("Error: " + error);
			}
			console.log(data);
		});			
	}
}

module.exports = WeatherAdmin;