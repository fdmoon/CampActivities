var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",
  // Your password
  password: "bootcamp",
  database: "user_db"
});

connection.connect(function(err) {
	if (err) throw err;

	// console.log("connected as id " + connection.threadId + "\n");
	
	startBay();
});

function startBay() {
	inquirer.prompt([
		{
			type: "rawlist",
			message: "What do you want to select? ",
			choices: ["POST", "BID"],
			name: "act"
		}
	]).then(function(resp) {
		if(resp.act === "POST") {
			goPost();
		}
		else if(resp.act === "BID") {
			goBid();
		}
	});	
}

function goPost() {
	//********************************************
	// in case of POST,

	inquirer.prompt([
		{
			type: "input",
			message: "New Item Name? ",
			name: "name"
		},
		{
			type: "input",
			message: "New Item Type? ",
			name: "type"
		},
		{
			type: "input",
			message: "Starting Price? ",
			name: "price"
		}
	]).then(function(resp) {
		connection.query(
			"INSERT INTO item_info SET ?",
			{
				name: resp.name,
				type: resp.type,
				starting_price: resp.price,
				highest_price: resp.price
			},
			function(err, res) {
				if (err) throw err;

				console.log(res.affectedRows + " item inserted!\n");

				// connection.end();

				startBay();
			}
		);
	});
}

function goBid() {
	//********************************************
	// in case of BID,

	// select items
	connection.query("SELECT * FROM item_info", function(err, res) {
		if (err) throw err;

		// console.log(res);

		inquirer.prompt([
			{
				type: "rawlist",
				message: "What do you want to select? ",
				choices: function() {
					var itemList = [];

					for(var i=0; i<res.length; i++) {
						itemList.push(res[i].name);
					}

					return itemList;
				},
				name: "item"
			}
		]).then(function(resp) {

			// console.log(resp);

			var selectedItem;
			for(var i=0; i<res.length; i++) {
				if(res[i].name === resp.item) {
					selectedItem = res[i];		
				}
			}

			// console.log(selectedItem);

			inquirer
				.prompt([
					{
						type: "input",
						message: "What's your bid? ",
						name: "bid"
					}
				]).then(function(resp) {
					var bid_price = parseInt(resp.bid);

					if(bid_price > selectedItem.highest_price) {
						console.log("Your Bid Accepted!");

						var query = connection.query(
							"UPDATE item_info SET ? WHERE ?",
							[
								{
									highest_price: bid_price
								},
								{
									name: selectedItem.name
								}
							],
							function(err, res) {
								if (err) throw err;
								console.log(res.affectedRows + " products updated!\n");

								startBay();
							}
						);

						console.log(query.sql);
					}
					else
					{
						console.log("Your Bid too Low!");

						startBay();
					}

					// console.log(resp);					
				});			
		});

		// connection.end();
	});	
}

