var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

//routes
app.get("/", function(req,res){
	res.render("home");
});
app.get("/fallinlovewith/:thing", function(req,res){
	var thing = req.params.thing;
	res.render("love",{thingVAR: thing});
});

app.get("/posts",function(req,res){
	var posts = [
		{title: "Tornado's", author: "Marten Blaauw"},
		{title: "Draaitafels", author: "Arjan Blaauw"},
		{title: "Kunst", author: "Nienke Blaauw"},
	];
	res.render("posts",{posts: posts});
});

app.listen(3000,function(){
	console.log("Server is listening!");
});