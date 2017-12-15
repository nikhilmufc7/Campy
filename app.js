var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});

var campgroundSchema = new mongoose.Schema({
	name : String,
	image: String
});

var Campground =  mongoose.model("campground",campgroundSchema);

// Campground.create(
// 	{
// 		name : "Joe Nash", 
// 		image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"
// 	},function(err,campground){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("New campground created");
// 		console.log(campground);
// 	}
// });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/",function(req,res){
	res.render("landing");
});

app.get("/campgrounds",function(req,res){
	
	Campground.find({},function(err,allcampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("campground", {campgrounds: allcampgrounds});
		}
	})
	
});

app.post("/campgrounds",function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	Campground.create(newCampground,function(err,newlyCreated){
		if (err) {
			console.log(err);
		}else{
			res.redirect("/campgrounds");
		}
	});

});

app.get("/campgrounds/new",function(req,res){
	res.render("new.ejs");
});


app.listen(3000);