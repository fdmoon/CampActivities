module.exports = function(sequelize, DataType) {
	var User = sequelize.define("User", {
		email: DataType.STRING,
		password: DataType.STRING
	})
	return User;
};

