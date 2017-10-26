// Instructions:
// Starting from scratch, build a Node application called bank.js which allows takes in user inputs via the command line to register bank transactions.
// The transactions possible are:
// total - this should tally up all of the money in the bank balance and display it for the user.
// deposit <number> - this should add a positive amount to the bank balance. (No need to display the total here)
// withdraw <number> - this should add a negative amount to the bank balance. (No need to display the total here)
// lotto - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
// For all deposits, withdrawals, or lotto purchases the transaction should be registered in the bank.txt file.
// HINT: Consider making a series of if-then or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).
// Bonus: If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.

var fs = require("fs");

var cmd = process.argv[2];
var amount = 0;

var fileName = "bank.txt";

// read file and calculate total
function calcTotal(str) {
	fs.readFile(fileName, "utf8", function(err, data) {
		var total = 0;

		if(err) {
			console.log(err);
			return;
		}

		var subArr = data.split(",");

		for(var i=0; i<subArr.length; i++) {
			if(parseFloat(subArr[i])) {
				total += parseFloat(subArr[i]);
			}
		}

		console.log(str + total.toFixed(2));
	});
}

// append amount file
function updateAccount(money) {
	var str = ", " + money.toString();

	fs.appendFile(fileName, str, function(err) {
		if(err) {
			console.log(err);
		}
	});
}

switch(cmd) {
	case "total":
		calcTotal("Total: ");
		break;

	case "deposit":
		amount = parseFloat(process.argv[3]);
		updateAccount(amount);
		console.log("Deposit: " + amount);
		break;

	case "withdraw":
		amount = parseFloat(process.argv[3]);
		updateAccount(amount * (-1));
		console.log("Withdraw: " + amount);
		break;

	case "lotto":
		break;

	default:
		console.log("Wrong transaction");
}

