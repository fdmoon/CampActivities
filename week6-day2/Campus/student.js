// Instructions

// In this activity we are going to make two constructors in two different files in which one constructor calls upon the other within it.
// The first constructor function is called "Student" and has the following properties within it...
// Name of the student
// Favorite subject
// Current GPA

function Student(name, subject, gpa) {
	this.name = name;
	this.subject = subject;
	this.gpa = gpa;
}

module.exports = Student;

