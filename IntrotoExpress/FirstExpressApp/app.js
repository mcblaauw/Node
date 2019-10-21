var express = require("express");

var app = express();

// ROUTES
// "/" => "Hi there!"
app.get("/", function(req,res){
	res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye",function(req,res){
	res.send("Goodbye!");
});
// "/dog" => " meow"
app.get("/dog",function(req,res){
	res.send("Woef woef");
});
// variable route names
app.get("/r/:name", function(req,res) {
	console.log(req.params.name);
	res.send("Puppies!");
});

// All other routes possible (put at the end!)
app.get("*",function(req,res){
	res.send("You are a star");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function(){ 
	console.log("Server has started!");
});
