var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
//var $ = require('jquery');
var session = require('express-session');
var dogctrl = require('./dogctrl.js');//calling the dogs controler
var config = require('./config.js');
var app = express();
var userctrl = require('./userctrl');
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use (session(config));  
app.use(express.static(__dirname + '/public'));
app.post('/login',userctrl);
app.get('/dogs', dogctrl.read);

// app.put('/dogs',dogctrl.update);

// app.post('/dogs',dogctrl.create); 

// app.delete('/dogs',dogctrl.delete);

app.listen(8080, function () {
	 console.log('You are a Ninja!!!!');
});
