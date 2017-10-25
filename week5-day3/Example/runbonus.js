var module = require("./band.js");

var music = module.music;

console.log(music);

var genre = process.argv[2];

console.log("A " + genre + " band is " + music[genre]);

