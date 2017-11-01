// The second constructor function is called "Class" and has the following properties within it...
// An array of students within the class
// Number of students in the class
// Name of the professor
// Room number
// The Student constructor function from above which adds a new student to the class
// BONUS: Make it so that that your application can take in user input to add new classes and new students to those classes.

var Student = require("./student.js");

function Class(profName, roomNumber) {
	this.students = [];
	this.numOfStudents = 0;
	this.profName = profName;
	this.roomNumber = roomNumber;

	this.addStudent = function(n, s, p) {
		this.students.push(new Student(n, s, p));
		this.numOfStudents = this.students.length;
	}
}


var classInfo = new Class("Jim", "3122");

classInfo.addStudent("Felix", "Node.js", "3.0");

console.log(classInfo);

