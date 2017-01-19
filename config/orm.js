//importing MySQL connection 
var connection = require("../config/connection.js");

//Helper function for SQL syntax

function printQestion(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push("?");
	}
	return arr.toString();
}

//helper function for SQL syntax
function objToSql(ob){
	var arr =[];

	for ( var key in ob) {
		if(Object.hasOwnProperty.call(ob,key)){
			arr.push(key+ "=" + ob[key]);
		}
	}
	return arr.toString();
}

//object for all the SQl statment functions
var orm = {
	all: function(tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if(err ){
				throw err;
			}
			cb(resul);
		})
	},
	create: function(table, cols, vals, cb){
		var queryString = "INSERT INTO " + table;

		queryString += "(";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});

	},
	//update of information
	update: function(table, objColVals, condition, cb){
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(onjColVals);
		queryString += "WHERE";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err,result){
			if (err){
				throw err;
			}
			cb(result);
		});
	}
};

//Export the orm object for the model (burger.js)
module.exports = orm;



