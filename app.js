var express = require("express");
var app = express();
var bodyParser = require("body-parser")
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
var hikeRoutes = [
		{name: "Salmon Creek", image: "https://adevarul.ro/assets/adevarul.ro/MRImage/2015/03/06/54f97e17448e03c0fd4912a5/646x404.jpg"},
		{name: "Granite Hill", image: "https://adevarul.ro/assets/adevarul.ro/MRImage/2015/03/06/54f97aa3448e03c0fd48f898/646x404.jpg"},
		{name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5597/15269411879_01505b711d.jpg"},
		{name: "Salmon Creek", image: "https://adevarul.ro/assets/adevarul.ro/MRImage/2015/03/06/54f97e17448e03c0fd4912a5/646x404.jpg"},
		{name: "Granite Hill", image: "https://adevarul.ro/assets/adevarul.ro/MRImage/2015/03/06/54f97aa3448e03c0fd48f898/646x404.jpg"},
		{name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5597/15269411879_01505b711d.jpg"},
		{name: "Salmon Creek", image: "https://adevarul.ro/assets/adevarul.ro/MRImage/2015/03/06/54f97e17448e03c0fd4912a5/646x404.jpg"},
		{name: "Granite Hill", image: "https://adevarul.ro/assets/adevarul.ro/MRImage/2015/03/06/54f97aa3448e03c0fd48f898/646x404.jpg"},
		{name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5597/15269411879_01505b711d.jpg"}
	]

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/hikeroutes", function(req, res){
	
	res.render("hikeRoutes", {hikeRoutes: hikeRoutes});
});

app.get("/hikeroutes/new" , function(req, res){
	res.render("new");
});

app.post("/hikeroutes" , function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newHikeRoute = {name: name,
		image: image
	}
	hikeRoutes.push(newHikRoute);
	res.redirect("/hikeroutes");
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Hik.io Server Is Online");
});