// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer.prompt([
	{
		type: "input",
		message: "user ID: ",
		name: 'usrid'
	},
	{
		type: "password",
		message: "password: ",
		name: "usrpw"
	},
	{
		type: "list",
		message: "language: ",
		choices: ['English', 'Korean', 'French', 'Mandarin'],
		name: "usrlan"
	},
	{
		type: "checkbox",
		message: "skill? ",
		choices: ['HTML', 'CSS', 'Heroku', 'Ruby', 'JS', 'Python'],
		name: "skill",
	},	
	{
		type: "confirm",
		message: "Correct? ",
		name: "confirm",
		default: true
	}
]).then(function(inquirerResp) {
	var checkpw = "1234";

	if(inquirerResp.confirm) {
		if(inquirerResp.usrpw === checkpw) {
			console.log("\n\n[Recap]============================");
			console.log("user ID: " + inquirerResp.usrid);
			console.log("password: " + inquirerResp.usrpw);
			console.log("language: " + inquirerResp.usrlan);
			console.log("skill (" + typeof inquirerResp.skill + "): " + inquirerResp.skill);
			console.log(JSON.stringify(inquirerResp.skill));
			console.log("===================================\n");
		}
		else {
			console.log("\nYou have wrong password, come again when you are more sure.\n");
		}
	}
	else {
		console.log("\nThat's okay, come again when you are more sure.\n");
	}
});

