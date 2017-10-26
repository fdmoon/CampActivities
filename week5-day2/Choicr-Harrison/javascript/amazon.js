// Initialize Firebase
var config = {
	apiKey: "AIzaSyCT0d8Wy8DXcIsYQp3hvc22dmz2GDuCZqU",
	authDomain: "campbase-c64d6.firebaseapp.com",
	databaseURL: "https://campbase-c64d6.firebaseio.com",
	projectId: "campbase-c64d6",
	storageBucket: "",
	messagingSenderId: "343604388573"
};


firebase.initializeApp(config);

var PrivateKey = "55uIMEFutrAh1YUj+5Peah+5mlK6QL1a5XbKrTaQ";
var PublicKey = "AKIAJT7OL5NR6LS2A66A";
var AssociateTag = "fdmoon-20";

$(document).ready(function() {
	var database = firebase.database();

	function sha256(stringToSign, secretKey) {
	  var hex = CryptoJS.HmacSHA256(stringToSign, secretKey);
	  return hex.toString(CryptoJS.enc.Base64);
	} 

	// Create ItemSearch query (AWS Product Advertising API)
	function getAmazonItemSearch(keyword, category) {
		var parameters = [];
		parameters.push("AWSAccessKeyId=" + PublicKey);

		parameters.push("Keywords=" + encodeURI(keyword));
		
		// Valid values for SearchIndex
		// [ 'All','Wine','Wireless','ArtsAndCrafts','Miscellaneous','Electronics','Jewelry','MobileApps','Photo','Shoes','KindleStore','Automotive','Vehicles','Pantry','MusicalInstruments','DigitalMusic','GiftCards','FashionBaby','FashionGirls','GourmetFood','HomeGarden','MusicTracks','UnboxVideo','FashionWomen','VideoGames','FashionMen','Kitchen','Video','Software','Beauty','Grocery',,'FashionBoys','Industrial','PetSupplies','OfficeProducts','Magazines','Watches','Luggage','OutdoorLiving','Toys','SportingGoods','PCHardware','Movies','Books','Collectibles','Handmade','VHS','MP3Downloads','Fashion','Tools','Baby','Apparel','Marketplace','DVD','Appliances','Music','LawnAndGarden','WirelessAccessories','Blended','HealthPersonalCare','Classical' ]
		parameters.push("SearchIndex=" + category);

		parameters.push("Operation=ItemSearch");
		parameters.push("Service=AWSECommerceService");
		parameters.push("Timestamp=" + encodeURIComponent(moment().format()));

		parameters.push("AssociateTag=" + AssociateTag);

		parameters.sort();
		var paramString = parameters.join('&');

		var signingKey = "GET\n" + "webservices.amazon.com\n" + "/onca/xml\n" + paramString;

		var signature = sha256(signingKey,PrivateKey);
		    signature = encodeURIComponent(signature);

		var amazonUrl =  "http://webservices.amazon.com/onca/xml?" + paramString + "&Signature=" + signature;

		return amazonUrl;
	}

	// Create ItemLookup query (AWS Product Advertising API)
	function getAmazonItemLookup(id) {
		var parameters = [];
		parameters.push("AWSAccessKeyId=" + PublicKey);

		parameters.push("ItemId=" + id);

		parameters.push("Operation=ItemLookup");
		parameters.push("Service=AWSECommerceService");
		parameters.push("Timestamp=" + encodeURIComponent(moment().format()));

		parameters.push("AssociateTag=" + AssociateTag);

		parameters.sort();
		var paramString = parameters.join('&');

		var signingKey = "GET\n" + "webservices.amazon.com\n" + "/onca/xml\n" + paramString;

		var signature = sha256(signingKey,PrivateKey);
		    signature = encodeURIComponent(signature);

		var amazonUrl =  "http://webservices.amazon.com/onca/xml?" + paramString + "&Signature=" + signature;

		return amazonUrl;
	}

	// When "Search" button is clicked
	$("#select-search").on("click", function(event) {
		// prevent form from submitting
		event.preventDefault();

		// Retrieve data
		var key = $("#data-keyword").val().trim();
		var cat = $("#data-category").val().trim();

		var queryURL = getAmazonItemSearch(key, cat);
		console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: "GET",
			custom: key
			// dataType: 'jsonp'
		}).done(function(resp) {
			console.log(resp);

			// clear data in Firebase
			database.ref("/AmazonSearchItems").set({});

			database.ref("/AmazonSearchItems/Keyword").set(this.custom);

			//resp.documentElement.childNodes[1].childNodes
			//.....ItemSearchResponse
			//.....................Items
			//...................................Item
			for(var i=4; i<resp.documentElement.childNodes[1].childNodes.length; i++) {

				var childData = resp.documentElement.childNodes[1].childNodes[i];

				// ASIN
				var asin = childData.childNodes[0].childNodes[0].nodeValue;
				// DetailPageURL
				var pageUrl = childData.childNodes[1].childNodes[0].nodeValue;

				var childPos;
				if(pageUrl.indexOf("http") !== -1) {
					childPos = childData.childNodes[3];
				}
				else {
					pageUrl = childData.childNodes[2].childNodes[0].nodeValue;

					childPos = childData.childNodes[4];
				}

				// Product Group
				var productGrp = childPos.childNodes[childPos.childNodes.length-2].childNodes[0].nodeValue;
				// Title
				var title = childPos.childNodes[childPos.childNodes.length-1].childNodes[0].nodeValue;

				database.ref("/AmazonSearchItems").push({
					asin: asin,
					title: title,
					group: productGrp,
					url: pageUrl
				});
			}
		}).fail(function(jqXHR, textStatus) {
			$("#display-amazon").empty();

			var div = $("<div class='well'>");
			div.append("<p>"+ jqXHR +"</p>");
			div.append("<p>"+ textStatus +"</p>");
			
			$("#display-amazon").append(div);			
		});
	});
	
	// When data in AmazonSearchItems is changed
	database.ref("/AmazonSearchItems").on("value", function(snap) {
		// Clear table
		$("#display-amazon").empty();

		// Add data to table
		snap.forEach(function(childsnap) {
			if(childsnap.key !== "Keyword") {
				var info = childsnap.val();

				var divMain = $("<div class='well'>");
				divMain.append("<h4><strong>" + info.title + "</strong><h4>");
				divMain.append("<p>ASIN: "+ info.asin +"</p>");
				divMain.append("<p>Product Group: "+ info.group +"</p>");

				var divSub = $("<div>");
				var a = $("<a target='_blank'>");
				a.attr("href", info.url);
				a.text(info.url);
				divSub.append(a);
				divMain.append(divSub);
				// divMain.append("<iframe src='" + info.pageUrl + "'></iframe>");

				$("#display-amazon").append(divMain);
			}
			else {
				$("#data-keyword").val(childsnap.val());
			}
		});
	});	
});

