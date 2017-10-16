// Initialize Firebase (YOUR OWN APP)
var config = {
	apiKey: "AIzaSyCT0d8Wy8DXcIsYQp3hvc22dmz2GDuCZqU",
	authDomain: "campbase-c64d6.firebaseapp.com",
	databaseURL: "https://campbase-c64d6.firebaseio.com",
	projectId: "campbase-c64d6",
	storageBucket: "",
	messagingSenderId: "343604388573"
};

firebase.initializeApp(config);   

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
var database = firebase.database();

database.ref().on("value", function(snapshot) {
	// Print the initial data to the console.
	console.log(snapshot.val());

	// Change the html to reflect the initial value.
	var readval = snapshot.val().clickCount;

	// Change the clickCounter to match the data in the database
	clickCounter = readval;

	// Log the value of the clickCounter
	console.log(clickCounter);

	// Change the HTML Value
	$("#click-value").text(clickCounter);
});

// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;


  // Alert User and reset the counter
  if(clickCounter === 0) {
  	alert("You should reset clickCounter!");
  }


  // Save new value to Firebase
  database.ref().set({clickCount: clickCounter});

  // Log the value of clickCounter
  console.log(clickCounter);


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;


  // Save new value to Firebase
  database.ref().set({clickCount: clickCounter});

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values

});
