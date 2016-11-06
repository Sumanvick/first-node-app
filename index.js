var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.end("This is home page...");
});

app.get('/work',function(req,res){
  res.end("<h1>This is Work page...</h1>");
});

app.get('/work/done',function(req,res){
  res.end("<h1>This is Work-Done page...</h1>");
});

app.listen(8055,function(){
  console.log("The server is running.....");
});
