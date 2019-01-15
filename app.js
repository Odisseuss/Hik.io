
var express       = require("express"),
	app 	      = express(),
 	bodyParser    = require("body-parser"),
 	mongoose      = require("mongoose"),
 	passport   	  = require("passport"),
 	LocalStrategy = require("passport-local"),
 	Hikeroute     = require("./models/hikeroute"),
 	seedDB        = require("./seeds"),
 	User          = require("./models/user"),
    methodOverride= require("method-override"),
    flash         = require("connect-flash"),
 	Comment       = require("./models/comment")

;
var commentRoutes = require("./routes/comments");
var hikerouteRoutes = require("./routes/hikeroutes");
var authRoutes = require("./routes/index");



//seedDB();
//var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp_v10";
//mongoose.connect('mongodb://localhost:27017/hik_io', { useNewUrlParser: true });
mongodb://<RaresLungescu>:<Pneumosuge11>@ds157844.mlab.com:57844/hikio
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


//Passport config

app.use(require("express-session")({
	secret: "Once upon a time...",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
	next();
});



app.use(authRoutes);
app.use("/hikeroutes", hikerouteRoutes);
app.use("/hikeroutes/:id/comments", commentRoutes);




var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Hik.io Server Is Online");

});