var orm = require ("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
//the variables cols and vals are arrays 
	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res){
			cb(res);
		});
	},



	update: function(cols, vals, cb) {
		orm.update("burgers", objColVals, condition, function(res){
			cb(res);
		});
	}
};

//exporting the database functions for the controller (burgers_controller.js)
module.exports = burger;