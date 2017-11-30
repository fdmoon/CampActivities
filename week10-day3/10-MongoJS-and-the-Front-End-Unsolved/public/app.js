/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  // Add to the table here...
  for(i=0; i<data.length; i++) {
    var tr = $("<tr>");

    tr.append("<td>"+data[i].name+"</td>");
    tr.append("<td>"+data[i].numlegs+"</td>");
    tr.append("<td>"+data[i].class+"</td>");
    tr.append("<td>"+data[i].weight+"</td>");
    tr.append("<td>"+data[i].whatIWouldReallyCallIt+"</td>");

    $("#results").children().eq(1).append(tr);
  }
}

function clearResults() {
  $("#animal-name").removeClass("active");
  $("#animal-legs").removeClass("active");
  $("#animal-class").removeClass("active");
  $("#animal-weight").removeClass("active");
  $("#animal-new-name").removeClass("active");

  $("#results-body").empty();
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});

$("#weight-sort").on("click", function(data) {
  clearResults();

  $.getJSON("/weight", function(data) {
    $("#animal-weight").addClass("active");
    // Call our function to generate a table body
    displayResults(data);
  });
});

$("#name-sort").on("click", function(data) {
  clearResults();

  $.getJSON("/name", function(data) {
    $("#animal-name").addClass("active");
    // Call our function to generate a table body
    displayResults(data);
  });
});

