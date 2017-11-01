var WeatherAdmin = require("./weatheradmin.js");
var UserSearch = require("./usersearch.js");

var user = process.argv[2];
var name = process.argv[3];
var location = process.argv[4];

for(var i=5; i<process.argv.length; i++) {
	location += (" " + process.argv[i]);
}

var admin = new WeatherAdmin();

if(user === "Admin") {
	admin.getData();
}
else if(user === "user") {
	var userObj = new UserSearch(name, location);
	userObj.getWeather();

	var str = "Name: " + userObj.name + " Location: " + userObj.location + " Date: " + userObj.date + "\n";
	admin.setData(str);
}

