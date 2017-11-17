// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

$(document).ready(function() {
// When the page loads, grab and display all of our chirps
    $.get("/api/all", function(data) {
    	console.log(data);
    	for(var i=0; i<data.length; i++) {
    		var div = $("<div>");
    		div.append(data[i].author + "<br>");
    		div.append(data[i].chirp + "<br>");
    		div.append(data[i].time + "<br><br>");
    		$("#display-chirps").prepend(div);
    	}
    });


// When user chirps
	$("#submit").on("click", function(event) {
		var newChirp = {
			author: $("[name=name]").val().trim(),
			chirp: $("[name=chirp]").val().trim()
		};

		$.ajax("/api/new", {
			type: "POST",
			data: newChirp
		}).then(
			function() {
				// Reload the page to get the updated list
				location.reload();
			}
		);

	});
});