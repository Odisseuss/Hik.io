var express = require("express");
var router = express.Router();
var Hikeroute = require("../models/hikeroute");
var middleware = require("../middleware");

//Root route


router.get("/", function(req, res){
	Hikeroute.find({}, function(err, allHikeroutes){
		if(err){
			console.log(err);
		}else{
			res.render("hikeroutes/index",{hikeRoutes:allHikeroutes});
		}
	});
	
});

//CREATE route

//Shows create form
router.get("/new" , middleware.isLoggedIn, function(req, res){
	res.render("hikeroutes/new");
});


//handles creation of new hikeroute
router.post("/" , middleware.isLoggedIn, function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newHikeRoute = {
		name: name,
		image: image,
		description: desc,
		author: author
	}
	Hikeroute.create(newHikeRoute, function(err, newlyCreated){
		if(err){
			console.log(err);
		}else{
			res.redirect("/hikeroutes");
		}
	});
	
});

//SHOW - Shows more info about one route
router.get("/:id", function(req, res){
	Hikeroute.findById(req.params.id).populate("comments").exec(function(err, foundHikeRoute){
		if(err){
			console.log(err);
		}else{
			console.log(foundHikeRoute);
			res.render("hikeroutes/show", {hikeroute: foundHikeRoute});
		}
	});
	
});

//Edit route


router.get("/:id/edit",middleware.checkOwnership, function (req, res) {


        Hikeroute.findById(req.params.id, function(err, foundHikeroute) {
            res.render("hikeroutes/edit", {hikeroute: foundHikeroute});
        });

});

//Update route

router.put("/:id",middleware.checkOwnership, function(req, res){
   Hikeroute.findByIdAndUpdate(req.params.id, req.body.hikeroute, function(err, updatedHikeroute){
       if(err){
       res.redirect("/hikeroutes");
       }else{
           res.redirect("/hikeroutes/" + req.params.id);
       }
   } );

});

//Delete route
router.delete("/:id",middleware.checkOwnership, function(req,res){
   Hikeroute.findByIdAndRemove(req.params.id, function(err){
       if(err){
       res.redirect("/hikeroutes");
       }else {
           res.redirect("/hikeroutes");
       }
   })
});



module.exports = router;