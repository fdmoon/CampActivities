var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function func1(message, callback) {
	console.log(message);
	callback();
}

// Write a function that runs a function argument if
// its other argument is truthy.
function func2(isRun, callback) {
	if(isRun === true) {
		callback();
	}
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function func3(callback, value) {
	return function() {
		callback(value);
	}
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are you using callbacks anywhere? Where?
fs.writeFile('log1.txt', "Log message1", function (err) {
	if (err) {
		console.log("Error: " + err);
	}
});

var writeFileCallback = function (err) {
	if (err) {
		console.log("Error: " + err);
	}
};

fs.writeFile('log2.txt', "Log message2", writeFileCallback);

