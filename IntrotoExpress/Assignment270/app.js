var express = require('express');
var app = express();

//Routes
app.get("/",function(req,res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal",function(req,res){
	var animal = req.params.animal;
	switch (animal) {
		case 'pig': 
			res.send("The " + animal + " says 'Oink'");
			break;	
		case 'cow': 
			res.send("The " + animal + " says 'Moo'");
			break;	
		case 'dog': 
			res.send("The " + animal + " says 'Woof Woof!'");
			break;
		default:
			res.send("Sorry, page not found... What are you doing with your life?");
	}
});

app.get("/repeat/:word/:repeat",function(req,res){
	var word = req.params.word;
	var rep = req.params.repeat;
	var repeating = word.repeat(rep);
	res.send(repeating);
});

app.get("*",function(req,res){
	res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000,function(){
	console.log("Server has started!");
});