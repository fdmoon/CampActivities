// Instructions

// Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)
// Each character created using your constructor should have the following properties...
// Name: The character's name --> String
// Profession: What the character does for a living --> String
// Gender: The character's gender --> String
// Age: The character's age --> Integer
// Strength: Abstraction for how strong the character is --> Integer
// HitPoints (HP): Abstraction for how much health the character has --> Integer
// PrintStats: Function which prints all of a character's properties to the screen

// Once you have created your constructor, create two new characters and print their properties to the screen
// Fool around and get comfortable with your constructor before moving onto the next parts of the activity

// Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

// IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
// Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
// LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

// BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!

function Character(name, prof, gender, age, strength, hp) {
	this.name = name;
	this.profession = prof;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitpoints = hp;
	this.printStats = function() {
		console.log("========================================");
		console.log("Name: " + this.name);
		console.log("Profession: " + this.profession);
		console.log("Gender: " + this.gender);
		console.log("Age: " + this.age);
		console.log("Strength: " + this.strength);
		console.log("Hitpoints: " + this.hitpoints);
	};

	this.IsAlive = function() {
		if(this.hitpoints > 0) {
			console.log(this.name + " is alive!");
			return true;
		}
		else {
			console.log(this.name + " is dead!");
			return false;
		}
	}
	this.Attack = function(opponent) {
		opponent.hitpoints -= this.strength;
		console.log(opponent.name + "'s hitspoints is " + opponent.hitpoints);
	}
	this.LevelUp = function() {
		this.age += 1;
		this.strength += 5;
		this.hitspoints += 25;
	}
}

var one = new Character("one", "front-end developer", "Male", 35, 10, 100);
var two = new Character("two", "back-end developer", "Female", 30, 8, 90);

one.printStats();
two.printStats();

var inquirer = require("inquirer");

function fightNow(one, two) {
	inquirer
		.prompt([
			{
				type: "list",
				message: "What do you want to do?",
				choices: ["Attack", "LevelUp"],
				name: "action"
			}
		])
		.then(function(resp) {
			if(one.IsAlive()) {
				if(resp.action === "Attack") {
					one.Attack(two);

					if(!two.IsAlive()) {
						console.log(one.name + " win!");
						process.exit();						
					}
				}
				else if (resp.action === "LevelUp") {
					one.LevelUp();
				}

				two.Attack(one);
			}
			else {
				console.log(one.name + " win!");
				process.exit();
			}

			one.printStats();
			two.printStats();

			fightNow(one, two);
		});	
}

fightNow(one, two);

