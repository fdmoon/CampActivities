// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // jQuery event handlers should go here.
  $(".delquote").on("click", function() {
  	var id = $(this).data("id");

  	$.ajax("/quotes/" + id, {
  		type: "DELETE"
  	}).then(function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
  	});

  });

  $(".create-form").on("submit", function(event) {
  	event.preventDefault();

    var newQuote = {
      author: $(".create-form [name='author']").val().trim(),
      quote: $(".create-form [name='quote']").val().trim()
    }; 

    $.ajax("/quotes", {
    	type: "POST",
    	data: newQuote
    }).then(function() {
        console.log("created new quote");
        // Reload the page to get the updated list
        location.reload();    	
    });

  });


  $(".update-form").on("submit", function(event) {
  	event.preventDefault();

  	var id = $(this).data("id");

    var updateQuote = {
      author: $(".update-form [name='author']").val().trim(),
      quote: $(".update-form [name='quote']").val().trim()
    }; 

    $.ajax("/quotes/" + id, {
    	type: "PUT",
    	data: updateQuote
    }).then(function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.assign("/");    	
    });
   });

});
