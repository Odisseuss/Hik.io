var express    = require("express"),
	app 	   = express(),
 	bodyParser = require("body-parser"),
 	mongoose   = require("mongoose");

mongoose.connect('mongodb://localhost:27017/hik_io', { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


//Schema Setup
var hikeRouteSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Hikeroute = mongoose.model("HikeRoute", hikeRouteSchema);

// Hikeroute.create({
// 	name: "Granite Hill",
// 	description: "This is a really nice hiking route, it guides you near a couple of small quiet villages, and then it carves into a hill, guiding you to the top where you will have an amazing view of the landscape",
// 	 image: "https://adevarul.ro/assets/adevarul.ro/MRImage/2015/03/06/54f97aa3448e03c0fd48f898/646x404.jpg"
// }, function(err, hikeroute){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("created route")
// 		console.log(hikeroute);
// 	}
// });



app.get("/", function(req, res){
	res.render("landing");
});

app.get("/hikeroutes", function(req, res){
	Hikeroute.find({}, function(err, allHikeroutes){
		if(err){
			console.log(err);
		}else{
			res.render("index",{hikeRoutes:allHikeroutes});
		}
	});
	
});

app.get("/hikeroutes/new" , function(req, res){
	res.render("new");
});

app.post("/hikeroutes" , function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newHikeRoute = {
		name: name,
		image: image,
		description: desc
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
app.get("/hikeroutes/:id", function(req, res){
	Hikeroute.findById(req.params.id, function(err, foundHikeRoute){
		if(err){
			console.log(err);
		}else{
			res.render("show", {hikeroute: foundHikeRoute});
		}
	});
	
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Hik.io Server Is Online");
});