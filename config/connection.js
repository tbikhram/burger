var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root", 
	password: "School1313",
	database: "burgers_db"
});

// conneciton 
connection.connect(function(err){
	if(err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

//export connection for the ORM to use
module.exports = connection;