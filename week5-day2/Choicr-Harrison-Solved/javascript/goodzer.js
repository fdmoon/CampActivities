var apiKey = "2e5bc66f2572e9f8f5a2444ecc8bc806";

var map;
var markers = [];   // Create a marker array to hold your markers

var myLatLng = {lat: 30.2672, lng: -97.7431};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        myLatLng.lat = position.coords.latitude;
        myLatLng.lng = position.coords.longitude;
    });
}

function initMap() {
    map = new google.maps.Map(document.getElementById('googlemap'), {
        center: myLatLng,
        zoom: 10
    });

    resetMarker();
}

function refreshMap() {
    // Set re-center and refresh map
    map.setCenter(myLatLng);
    google.maps.event.trigger(map, 'resize');
}

function resetMarker() {
    // Loop through markers and set map to null for each
    for (var i=0; i<markers.length; i++) {
        markers[i].setMap(null);
    }

    // Reset the markers array
    markers = [];    
}

function setMarker(lat, lng, name) {
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: {
            lat: lat,
            lng: lng
        },
        title: name
    });

    // Push marker to markers array
    markers.push(marker);    
}

$(document).ready(function() {
    var database = firebase.database();
    
    database.ref("/UserPosition").set({
      lat: myLatLng.lat,
      lng: myLatLng.lng
    });

    function runQuery(key) {
        var queryURL = "https://api.goodzer.com/products/v0.1/search_stores/?query=" + key + "&lat=" + parseFloat(myLatLng.lat) + "&lng=" + parseFloat(myLatLng.lng) + "&radius=5&priceRange=30:120&apiKey=" + apiKey;
        console.log(queryURL);

        // heroku workaround for Cors
        // var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

        $.get(queryURL, function (resp) {
            console.log(resp);

            // clear data in Firebase
            database.ref("/GoodzerSearchItems").set({});

            for(var i=0; i<resp.stores.length; i++) {
                database.ref("/GoodzerSearchItems").push({
                    id: resp.stores[i].products[0].id,
                    product: resp.stores[i].products[0],
                    store: resp.stores[i].name,
                    location: resp.stores[i].locations[0]
                });
            }
        });

        // The AJAX function uses the queryURL and GETS the JSON data associated with it.
        // The data then gets stored in the variable called: "goodzerData"
        /*
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "jsonp",
            crossOrigin: true
        }).done(function(goodzerData) {
            // Logging the URL so we have access to it for troubleshooting
            console.log("------------------------------------");
            console.log("URL: " + this.url);
            console.log("------------------------------------");

            // Log the goodzer to console, where it will show up as an object
            console.log(goodzerData);
            console.log("------------------------------------");
        });
        */
    }

    $("#select-search").on("click", function(event) {
        // prevents page from reloading
        event.preventDefault();

        // Grabbing text the user typed into the search input
        key = $("#data-keyword").val().trim();

        runQuery(key);

    });

    // When data in GoodzerSearchItems is changed
    database.ref("/GoodzerSearchItems").on("value", function(snap) {
        // Clear table
        $("#display-goodzer").empty();

        resetMarker();

        // Add data to table
        snap.forEach(function(childsnap) {
            var info = childsnap.val();

            var divMain = $("<div class='well clearfix'>");
            divMain.append("<h4><strong>" + info.product.title + "</strong><h4>");

            var img = $("<img>");
            img.addClass("item-img");
            img.attr("src", info.product.image);
            divMain.append(img);

            divMain.append("<p>$ " + info.product.price + " at " + info.store +"</p>");

//             "city": "Austin",
// "state": "TX",
// "address": "1201 Barbara Jordan Blvd",

// "phone": "(512) 469-0501",
// "zipcode": "78723"
            var addr = info.location.address + ", " + info.location.city + ", " + info.location.state + " " + info.location.zipcode;
            divMain.append("<p>" + addr + "</p>");
            divMain.append("<p>Tel: " + info.location.phone + "</p>");

            var divSub = $("<div>");
            var a = $("<a target='_blank'>");
            a.attr("href", info.product.url);
            a.text(info.product.url);
            divSub.append(a);
            divMain.append(divSub);

            $("#display-goodzer").append(divMain);

            var storeInfo = info.store + "\n" + addr + "\n" + info.location.phone;
            setMarker(info.location.lat, info.location.lng, storeInfo);
        });

        refreshMap();
    });

    database.ref("/UserPosition").on("value", function(snap) {
        var info = snap.val();

        myLatLng.lat = info.lat;
        myLatLng.lng = info.lng;

        refreshMap();
    });    
});
