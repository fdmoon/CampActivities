// Instructions

// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

// Start out by creating a constructor function called "Player" with the following properties and methods...
// name: Property which contains the player's name
// position: Property which holds the player's position
// offense: Property which is a value between 1 and 10 to show how good this player is on offense
// defense: Property which is a value between 1 and 10 to show how good this player is on defense
// goodGame: Method which increases either the player's offense or defense property based upon a coinflip.
// badGame: Method which decreases either the player's offense or defense property based upon a coinflip.
// printStats: Method which prints all of the player's properties to the screen
function Player(name, position, offense, defense) {
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;

	this.goodGame = function() {
		if(Math.floor(Math.random()*2) === 0) {
			this.offense += 1;
		}
		else {
			this.defense += 1;
		}
	};
	this.badGame = function() {
		if(Math.floor(Math.random()*2) === 0) {
			this.offense -= 1;
		}
		else {
			this.defense -= 1;
		}
	};
	this.printStats = function() {
		// console.log("******************************************");
		console.log("* name: " + this.name);
		console.log("  - position: " + this.position);
		console.log("  - offense: " + this.offense);
		console.log("  - defense: " + this.defense);
		// console.log("******************************************");
	}
}

var inquirer = require("inquirer");
var starters = [];	
var subs = [];
var score = 0;
var isScoreChanged = false;

var count = 0;
var maxPlayers = 2;
var maxSubs = 1;

var gameRound = 0;

// Now create a program which allows the user to create 8 unique players; 5 starters and 3 subs. It should take as user input the name, position, offense, and defense of each player.
// Once all of the players have been created, print their stats.
function creatPlayer() {
	console.log("[ PLAYER " + (count + 1) + " ]=================================")
	inquirer
		.prompt([
			{
				type: "input",
				message: "What's your name?",
				name: "name"
			},
			{
				type: "input",
				message: "What's your position?",
				name: "position"
			},
			{
				type: "input",
				message: "Select your offense value?",
				validate: function(value) {
					        if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
					          return true;
					        }
					          return false;
					      },
				name: "offense"
			},
			{
				type: "input",
				message: "Select your defense value?",
				validate: function(value) {
					        if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
					          return true;
					        }
					          return false;
					      },
				name: "defense"
			}			
		])
		.then(function(reg) {
			var newPlayer = new Player(reg.name, reg.position, parseInt(reg.offense), parseInt(reg.defense));

			if(count < maxPlayers) {
				starters.push(newPlayer);

			}
			else if(count < (maxPlayers + maxSubs)) {
				subs.push(newPlayer);
			}
			else {
				console.log("Entry Full!");
			}

			count++;
			if(count < (maxPlayers + maxSubs)) {
				creatPlayer();
			}
			else {
				console.log("[starters]++++++++++++++++++++++++++++++++++++++++");
				for(var i=0; i<starters.length; i++) {
					starters[i].printStats();
				}
				console.log("[subs]++++++++++++++++++++++++++++++++++++++++++++");
				for(var i=0; i<subs.length; i++) {
					subs[i].printStats();
				}
				console.log("++++++++++++++++++++++++++++++++++++++++++++++++++");

				playGame();
			}
		});
}

// Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following:
// Run 10 times. Each time the function runs:
// Two random numbers between 1 and 50 are rolled and compared against the starter's offensive and defensive stats
// If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
// If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
// After the score has been changed, prompt the user to allow them to choose to substitute any of the players within the starters array with any of the players within the subs array.
// After the game has finished (been run 10 times):
// If the score is positive, run goodGame for all of the players currently within the starters array.
// If the score is negative, run badGame for all of the players currently within the starters array.
// If the score is equal to zero, do nothing with the starters.
// Gives the user a message about if they won, and the status of their starters.
// After printing the results, prompts the player if they would like to play again.
// Runs playGame from the start once more if they do.
// Ends the program if they don't.
function playGame() {
	score = 0;
	gameRound = 0;

	playRound();
}

function playRound() {
	if(gameRound < 10) {
		var rand1 = Math.floor(Math.random()*maxPlayers*10 + 1);
		var rand2 = Math.floor(Math.random()*maxPlayers*10 + 1);

		var sumOfOffense = 0;
		var sumOfDefense = 0;

		for(var i=0; i<starters.length; i++) {
			sumOfOffense += starters[i].offense;
			sumOfDefense += starters[i].defense;
		}

		console.log("=> Round " + (gameRound+1));
		console.log("   Random: (" + rand1 + ", " + rand2 + ") vs. " + "Team: (" + sumOfOffense + ", " + sumOfDefense + ")");

		if(rand1 < sumOfOffense) {
			score += 1;
			console.log("Score going up!");
			isScoreChanged = true;
		}
		if(rand2 > sumOfDefense) {
			score -= 1;
			console.log("Score going down!");
			isScoreChanged = true;
		}

		gameRound++;

		if(isScoreChanged) {
			querySubstitute();
			isScoreChanged = false;
		}
		else {
			playRound();	
		}
	}
	else {
		console.log("   Score: " + score);

		if(score > 0) {
			console.log("GOOD GAME!!!");
			for(var j=0; j<starters.length; j++) {
				starters[j].goodGame();
				starters[j].printStats();
			}
		}
		else if(score < 0) {
			console.log("BAD GAME!!!");
			for(var j=0; j<starters.length; j++) {
				starters[j].badGame();
			}
		}
		else {
			console.log("DRAW GAME!!!");
		}

		playGameAgain();		
	}
}

// After the score has been changed, prompt the user to allow them to choose to substitute any of the players within the starters array with any of the players within the subs array.
function querySubstitute() {
	inquirer
		.prompt([
			{
				type: "confirm",
				message: "Do you want to substitute players?",
				name: "confirm"
			}
		])
		.then(function(ans) {
			if(ans.confirm === true) {
				substitutePlayer();
			}
			else {
				playRound();
			}
		});
}

function substitutePlayer() {
	inquirer
		.prompt([
			{
				type: "list",
				message: "Select a player from starters",
				choices: ["1", "2"],
				name: "playerA"
			},
			{
				type: "list",
				message: "Select a player from subs",
				choices: ["1"],
				name: "playerB"
			}			
		])
		.then(function(reply) {
			var tmpPlayer = starters[parseInt(reply.playerA) - 1];
			starters[parseInt(reply.playerA) - 1] = subs[parseInt(reply.playerB) - 1];
			subs[parseInt(reply.playerB) - 1] = tmpPlayer;

			console.log("[starters]++++++++++++++++++++++++++++++++++++++++");
			for(var i=0; i<starters.length; i++) {
				starters[i].printStats();
			}
			console.log("[subs]++++++++++++++++++++++++++++++++++++++++++++");
			for(var i=0; i<subs.length; i++) {
				subs[i].printStats();
			}
			console.log("++++++++++++++++++++++++++++++++++++++++++++++++++");

			playRound();
		});
}		

function playGameAgain() {
	inquirer
		.prompt([
			{
				type: "confirm",
				message: "Do you want to play again?",
				name: "confirm"
			}
		])
		.then(function(ans) {
			if(ans.confirm === true) {
				playGame();
			}
			else {
				console.log("GAME OVER! BYE~~~");
			}
		});
}

// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.
// HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.

creatPlayer();

