// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");

// Create a "Book" model with the following configuration
// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER
// 5. Set timestamps to false on this model
var Book = sequelize.define("booklist", {
	title: {
		type: Sequelize.STRING
	},
	author: {
		type: Sequelize.STRING
	},
	genre: {
		type: Sequelize.STRING
	},
	pages: {
		type: Sequelize.INTEGER
	}
}, {
	timestamps: false
});

// Sync model with DB
Book.sync();

// Export the book model for other files to use
module.exports = Book;

