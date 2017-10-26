var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8" , function(err, data) {

	if(err) {
		return console.log(err);
	}

	console.log(data);

	// // in case of no "utf8"
	// var newData = data.toString();
	// var dataArr = newData.split(",")

	var dataArr = data.split(",");

	for(var i=0; i<dataArr.length; i++) {
		console.log(dataArr[i]);
	}
});

