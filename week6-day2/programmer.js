// Instructions
// In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.
// Your "Programmer" constructor should be able to take in the following information...
// The programmer's name
// Their position/job title
// How old they are
// Favorite programming language
// Now create a method for the constructor that would print all of the information contained within an object to the console.
// Finally, create a "Programmer" object and call the method to print its contents

function Programmer(name, title, age, lang) {
	this.name = name;
	this.title = title;
	this.age = age;
	this.lang = lang;

	// this.printInfo = function() {
	// 	console.log("* Name: " + this.name);
	// 	console.log("* Position/job title: " + this.name);
	// 	console.log("* Age: " + this.name);
	// 	console.log("* Favorite programming language: " + this.name);
	// }	
}

Programmer.protot.printInfo = function() {
	for(key in this) {
		if(typeof this[key] !== "function") {
			console.log("* " + key + ": " + this[key]);
		}
	}
}

var me = new Programmer("Felix", "Backend Engineer", 40, "Node.js");

me.printInfo();

