var express = require("express");
var app = express();


var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/",function(req,res){
	res.render("landing");
});
var campgrounds = [
	
		{name : "Becka Smith", image : "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
		{name : "Joe Nash", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
		{name : "Louis Naster", image : "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"}

	];

app.get("/campgrounds",function(req,res){
	
	res.render("campground", {campgrounds: campgrounds});
});

app.post("/campgrounds",function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");

});

app.get("/campgrounds/new",function(req,res){
	res.render("new.ejs");
});


app.listen(3000);