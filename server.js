var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.get('/api/whoami', function(req, res){
  console.log(req.headers);
  var userAgent = req.headers["user-agent"]
  var os = userAgent.substring(userAgent.indexOf('(')+1, userAgent.indexOf(')'))
  var response = {
    ipaddress: req.ip,
    languange: req.headers["accept-language"],
    software: os
  }
  res.json(response)
})

var server = app.listen(process.env.PORT || 3000, function(){
    console.log('App listening on port 3000');
})


//{"ipaddress":"69.255.123.77","language":"en-US","software":"Windows NT 10.0; WOW64"}
