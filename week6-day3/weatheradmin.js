var fs = require("fs");
var UserSearch = require("./usersearch.js");

var WeatherAdmin = function() {
	this.newUserSearch = function(name, location) {
		var userObj = new UserSearch(name, location);
		userObj.getWeather();

		var str = "Name: " + userObj.name + " Location: " + userObj.location + " Date: " + userObj.date + "\n";
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

