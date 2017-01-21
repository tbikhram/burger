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
		var hbsObject = { burgers: data };
		
		res.render("index", hbsObject);

	});
});

router.post("/burgers/create", function(req, res){
	burger.create(["burger_name", "devoured"],
		[req.body.burger_name,req.body.devoured],
		function(){
		res.redirect("/burgers");
	});
});

router.put("/burgers/update/:id", function(req,res){
	var condition = "id = " + req.params.id;

	

	burger.update({ devoured: req.body.devoured }, condition,
		function(){
		res.redirect("/burgers");
	});
});

router.delete("/burgers/delete/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	burger.delete("burgers", condition, function() {
		res.redirect("/burgers");
	});
});





//exporting routes for server.js to use
module.exports = router;