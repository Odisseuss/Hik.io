//Middleware file
var middlewareObj = {};
var Hikeroute = require("../models/hikeroute");
var Comment = require("../models/comment");

middlewareObj.checkOwnership = function checkOwnership(req, res, next){
        if(req.isAuthenticated()){
            Hikeroute.findById(req.params.id, function(err, foundHikeroute){
                if(err){
                    req.flash("error", "Hikeroute not found");
                    res.redirect("back");
                }else{
                    if(foundHikeroute.author.id.equals(req.user._id) ){
                        next() ;
                    }else{
                        req.flash("error", "You don't have permission to do that");
                        res.redirect("back");
                    }
                }
            });
        }else{
            req.flash("error", "You need to be logged in");
            res.redirect("back");
        }
    };


middlewareObj.isLoggedIn = function (req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash("error", "You need to be logged in");
        res.redirect("/login");
    }


middlewareObj.checkCommentOwnership = function (req, res, next){
        if(req.isAuthenticated()){
            Comment.findById(req.params.comment_id, function(err, foundComment){
                if(err){
                    res.redirect("back");
                }else{
                    if(foundComment.author.id.equals(req.user._id) ){
                        next() ;
                    }else{
                        req.flash("error", "You don't have permission to do that");
                        res.redirect("back");
                    }
                }
            });
        }else{
            req.flash("error", "You need to be logged in");
            res.redirect("back");
        }
    }






module.exports = middlewareObj;