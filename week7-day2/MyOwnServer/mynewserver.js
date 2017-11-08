var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest_Good(request, response) {
	var respstr = ["1111", "2222", "3333", "4444", "5555"];

	var idx = Math.floor(Math.random()*5);
  response.end("You look great! " + respstr[idx] + " (" + request.url + ")");
}

function handleRequest_Bad(request, response) {
  response.end("That's your bad! (" + request.url + ")");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverGood = http.createServer(handleRequest_Good);

var serverBad = http.createServer(handleRequest_Bad);

// Start our server so that it can begin listening to client requests.
serverGood.listen(PORT1, function() {
  console.log("ServerGood listening on: http://localhost:" + PORT1);
});

serverBad.listen(PORT2, function() {
  console.log("ServerBad listening on: http://localhost:" + PORT2);
});

