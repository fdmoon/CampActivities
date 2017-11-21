// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/
var formidable = require('formidable')
var path = require('path')

var uploadDir = path.join(__dirname, '/uploads/');

console.log(uploadDir);

app.post('/upload', function(req, res) {

    var form = new formidable.IncomingForm();

    form.multiples = true;
    form.keepExtensions = true;
    form.uploadDir = uploadDir;

    console.log(">>> upload...");

    form.parse(req, (err, fields, files) => {
        console.log(fields);
        console.log(files);
        if (err) return res.status(500).json({ error: err });
            res.status(200).json({ uploaded: true });
        });

    form.on('fileBegin', function (name, file) {
        const [fileName, fileExt] = file.name.split('.');
        file.path = path.join(uploadDir, `${fileName}_${new Date().getTime()}.${fileExt}`);
    });
});

app.get('/download/:fname', function(req, res) {
    var file = uploadDir + req.params.fname;
    // console.log(file);
    res.download(file);
});
/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "view.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters?", function(req, res) {
  // var chosen = req.params.characters;

  // if (chosen) {
  //   console.log(chosen);

  //   for (var i = 0; i < characters.length; i++) {
  //     if (chosen === characters[i].routeName) {
  //       return res.json(characters[i]);
  //     }
  //   }
  //   return res.json(false);
  // }
  // return res.json(characters);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // // req.body hosts is equal to the JSON post sent from the user
  // // This works because of our body-parser middleware
  // var newcharacter = req.body;

  // console.log(newcharacter);

  // // We then add the json the user sent to the character array
  // characters.push(newcharacter);

  // // We then display the JSON to the users
  // res.json(newcharacter);
});


/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/
// var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// var server = require('http').createServer();
// var io = require('socket.io')(server);

io.on('connection', function(client){
    console.log(">>> connection...");
    console.log(client);

    myrand(client);

    client.on('event', function(data){

    });
    client.on('disconnect', function(){

    });
});

// server.listen(8000, function() {
//   console.log("Push listening on PORT " + 8000);
// });

myrand = (client) => setInterval( () => {
    r1 = Math.floor(Math.random()*101);
    r2 = 100-r1;
    client.send(String(r1) + ',' + String(r2));
}, 2000);
/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

// Starts the server to begin listening
// =============================================================
// app.listen(PORT, function() {
http.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

