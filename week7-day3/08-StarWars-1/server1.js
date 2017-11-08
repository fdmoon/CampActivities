// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//
var obiwankenobi = {
  name: "Obi Wan Kenobi",
  role: "I don't know",
  age: 150,
  forcePoints: 1000
}

var array = [
{
  name: "111111",
  role: "I don't know",
  age: 150,
  forcePoints: 1000
},
{
  name: "22222",
  role: "I don't know",
  age: 150,
  forcePoints: 1000
},
{
  name: "333333",
  role: "I don't know",
  age: 150,
  forcePoints: 1000
}
];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});


// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

app.get("/obi", function(req, res) {
  res.json(obiwankenobi);
});

app.get("/array", function(req, res) {
  res.json(array);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
