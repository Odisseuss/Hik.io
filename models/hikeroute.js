var mongoose = require("mongoose");

//Schema Setup
var hikeRouteSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

var Hikeroute = mongoose.model("HikeRoute", hikeRouteSchema);

module.exports = Hikeroute;