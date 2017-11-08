// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  console.log(req.url);

  if(req.url === "/") {
	
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/index.html", function(err, data) {

      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  else {
    var requestData = "";
    req.on("data", function(data) {
      requestData += data;
      console.log(data.toString());
    });

    req.on("end", function(data) {
      var retHTML = "<html><body><h1>Here!</h1></body></html>";
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(retHTML);
    });
  }
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
