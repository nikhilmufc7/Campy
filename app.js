var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/",function(req,res){
	res.render("landing");
});

app.get("/campgrounds",function(req,res){
	var campgrounds = [
	
		{name : "Becka Smith", image : "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
		{name : "Joe Nash", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
		{name : "Louis Naster", image : "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"}
	

	]
	res.render("campground", {campgrounds: campgrounds});
});

app.listen(3000);