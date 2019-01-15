var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
	res.render("landing");
});



//===========
//AUTH ROUTES
//===========


//Show register form


router.get("/register", function(req, res){
	res.render("register");
});

//Handle signup logic

router.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
            req.flash("error", err.message);
            res.redirect("register");
		}
		passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to Hik.io "+ user.username);
			res.redirect("/hikeroutes");
		});
	});
});

//===========
//Login ROUTES
//===========


//Show login form

router.get("/login", function(req, res){
	res.render("login");
});

router.post("/login",passport.authenticate("local", 
	{
		successRedirect: "/hikeroutes",
		failureRedirect: "/login"
	}), function(req, res){

});

//Logout ROUTE

router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "Logged out!");
	res.redirect("/hikeroutes");
});


module.exports = router;