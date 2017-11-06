var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "bootcamp",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  var query = connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    console.log("res[0].flavor => " + res[0].flavor);
    connection.end();
  });

  // logs the actual query being run
  console.log(query.sql);  
}

