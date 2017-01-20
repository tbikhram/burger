var express = require("express");

var router = express.Router();

//importing the model (burger.js) to use its database function
var burger = require("../models/burger.js");

//creating all the routes and set up logic within those routes that are required
router.get("/", function(req, res){
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);

	});
});

router.post("/burgers/create", function(req, res){
	burger.create([
	"name", "devoured"
	],[
		req.body.name,req.body.sleepy
		],function(){
		res.redirect("/burgers");
	});
});

router.put("/burgers/update/:id", function(req,res){
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect("/burgers");
	});
});

//exporting routes for server.js to use
module.exports = router;