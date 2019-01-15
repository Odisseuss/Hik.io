var express = require("express");
var router = express.Router({mergeParams: true});
var Hikeroute = require("../models/hikeroute")
var Comment = require("../models/comment")
var middleware = require("../middleware");


//COMMENT Route

//Shows create comm form
router.get("/new", middleware.isLoggedIn, function(req, res){
	Hikeroute.findById(req.params.id, function(err, hikeroute){
		if(err){
			console.log(err);
		}else{
			res.render("comments/new", {hikeroute: hikeroute});
		}
	})
	
});

//Handles creation of comm

router.post("/", middleware.isLoggedIn, function(req,res){
	Hikeroute.findById(req.params.id, function(err, hikeroute){
		if(err){
			console.log(err)
			res.redirect("/hikeroutes")
		}else{
			Comment.create(req.body.comment, function(err, comment){
				if(err){
                    req.flash("error", "Something went wrong...");
					console.log(err);
				}else{
					//add username and id to comm
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					//save comm
					comment.save();
					hikeroute.comments.push(comment);
					hikeroute.save();
                    req.flash("success", "Successfully added comment");
					res.redirect("/hikeroutes/" + hikeroute._id);
				}
			})
		}
	})
});

//Edit route
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect("back");
        }else{
            res.render("comments/edit", {hikeroute_id: req.params.id , comment: foundComment});
        }
    });

});

//Update route

router.put("/:comment_id",middleware.checkCommentOwnership, function(req, res){
   Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
       if(err){
           res.redirect("back");
       }else{
           res.redirect("/hikeroutes/"+req.params.id);
       }
   }) ;
});


//Delete route

router.delete("/:comment_id",middleware.checkCommentOwnership, function(req, res){
   Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
           res.redirect("back")
       }else{
           req.flash("success", "Comment deleted");
           res.redirect("/hikeroutes/" + req.params.id)
       }
   } )
});






module.exports = router;