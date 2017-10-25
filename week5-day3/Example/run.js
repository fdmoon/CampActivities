var module = require("./band.js");

var music = module.music;

for(var key in music) {
	console.log("A " + key + " band is " + music[key]);
}

