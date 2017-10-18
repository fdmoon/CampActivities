// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

var config = {
apiKey: "AIzaSyCT0d8Wy8DXcIsYQp3hvc22dmz2GDuCZqU",
authDomain: "campbase-c64d6.firebaseapp.com",
databaseURL: "https://campbase-c64d6.firebaseio.com",
projectId: "campbase-c64d6",
storageBucket: "",
messagingSenderId: "343604388573"
};

firebase.initializeApp(config);


// Assign the reference to the database to a variable named 'database'

var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.

// console.log(database.ref());

database.ref().on("value", function(snapshot) {

	// If Firebase has a highPrice and highBidder stored (first case)	
	if(snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

		var savedPrice = snapshot.val().highPrice;
		var savedBidder = snapshot.val().highBidder;

		if(parseInt(savedPrice) > parseInt(highPrice)) {
	// Set the variables for highBidder/highPrice equal to the stored values in firebase.		
			highPrice = savedPrice;
			highBidder = savedBidder;
		}
	}

// Change the HTML to reflect the stored values
	$("#highest-bidder").text(highBidder);
	$("#highest-price").text(highPrice);


// Print the data to the console.
	console.log(highBidder, highPrice);
}, function(errObject) {
	alert("ERROR: " + errObject.code);
});


// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {

// prevent form from submitting with event.preventDefault() or returning false
	// event.preventDefault();

// Get the input values
	var newName = $("#bidder-name").val().trim();
	var newPrice = $("#bidder-price").val().trim();

// Log the Bidder and Price (Even if not the highest)
	console.log(newName, newPrice);


// If Then statements to compare against previous high bidder
	if(parseInt(newPrice) > parseInt(highPrice)) {

// Alert that they are High Bidder
		alert("You are High Bidder!");

// Save the new price in Firebase
		database.ref().set({
			highBidder: newName,
			highPrice: newPrice
		});

// Log the new High Price
		console.log(newName, newPrice);

// Store the new high price and bidder name as a local variable (could have also used the firebase variable)
		highBidder = newName;
		highPrice = newPrice;

// Change the HTML to reflect the new high price and bidder
		$("#highest-bidder").text(highBidder);
		$("#highest-price").text(highPrice);
	}
	else {

// Else tell user their bid was too low via alert
		alert("Your bid was too low!");
	}
});

