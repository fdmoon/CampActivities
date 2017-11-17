module.exports = function(sequelize, DataType) {
	var Todo = sequelize.define("todo", {
		text: DataType.STRING,
		complete: DataType.BOOLEAN
	});
	return Todo;
};

