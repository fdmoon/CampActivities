// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================
var inquirer = require("inquirer");

var userHealth = 70;
var zombieHealth = 15;

function zombieRPG() {
	inquirer
		.prompt([
			{
				type: "list",
				message: "Try to stay alive! Guess a number between [1-5]",
				choices: ["1", "2", "3", "4", "5"],
				name: "userGuess"
			}
		])
		.then(function(resp) {
			var isGameContinue = true;

			var zomnieGuess = Math.floor(Math.random() * 5 + 1);
			console.log("Zombie rolled " + zomnieGuess);

			var anySlash = Math.floor(Math.random() * 5 + 1);

			if(parseInt(resp.userGuess) === zomnieGuess) {
				console.log("OH NO! You slashed zombie with " + anySlash + " damage");
				zombieHealth -= anySlash;
			}
			else {
				console.log("OH NO! Zombie slashed you with " + anySlash + " damage");
				userHealth -= anySlash;
			}	

			if(userHealth <= 0) {
				console.log("You lose! You died.");
				isGameContinue = false;
			}
			else if(zombieHealth <= 0) {
				console.log("You win! Zombie died.");
				isGameContinue = false;
			}
			else {
				console.log("You have " + userHealth + " health left. The zombie has " + zombieHealth + " health left.");				
			}

			if(isGameContinue) {
				zombieRPG();
			}
		});	
}

zombieRPG();

