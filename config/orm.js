//importing MySQL connection 
var connection = require("../config/connection.js");

//Helper function for SQL syntax

function printQuestionMarks(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push("?");
	}

	return arr.toString();
}

//helper function for SQL syntax
function objToSql(ob){
	var arr =[];

	for (var key in ob) {
		
		  arr.push(key + "=" + ob[key]);
		
	}

	return arr.toString();
}

//object for all the SQl statment functions
var orm = {
	all: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result) {
			if(err) throw err;
			
			cb(result);
		});
	},
	create: function(table, cols, vals, cb){
		var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";
		connection.query(queryString, vals, function(err, result){
				if(err) throw err;
				cb(result);
		});	
		 	
		

	},
	//update of information
	update: function(table, objColVals, condition, cb){
		var queryString = "UPDATE " + table + " SET " + objToSql(objColVals)+ " WHERE " + condition;
		connection.query(queryString, function(err,result) {
			if (err) throw err;
		
			cb(result);

		});
	},

	delete: function (table, condition, cd) {
		var queryString = "DELETE FROM " + table + " WHERE " + condition;
		connection.query(queryString, function(err, result){
			if(err) throw err;
				cd(result);
		});
	}




}

//Export the orm object for the model (burger.js)
module.exports = orm;



