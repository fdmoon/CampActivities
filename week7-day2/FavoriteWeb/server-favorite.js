var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
	var filename = "";

	console.log(req.url);

	switch(req.url) {
		case "/":
			filename = "/index.html";
			break;		
		case "/index.html":
		case "/food.html":
		case "/movies.html":
		case "/cssframework.html":
			filename = req.url;
			break;
		case "/food":
		case "/movies":
		case "/cssframework":
			filename = req.url + ".html";
			break;			
		default:
			// console.log("Wrong URL!!!");
			break;
	}

	if(filename !== "") {
	  fs.readFile(__dirname + filename, function(err, data) {
	    res.writeHead(200, { "Content-Type": "text/html" });
	    res.end(data);
	  });
	}
	else {
	    res.writeHead(404, { "Content-Type": "text/html" });
	    res.end("<h3>File Not Found</h3>");		
	}
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
