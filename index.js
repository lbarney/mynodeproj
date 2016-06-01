var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var session = require('express-session');
var userctrl = require('./userctrl');
var sndctrl = require('./sndctrl.js');//calling the snd controler
var config = require('./config.js');
var app = express();


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use (session(config));  
app.use(express.static(__dirname + '/public'));
app.post('/login',userctrl);
app.get('/snds', sndctrl.read);//     */snds = URL*
app.put('/snds',sndctrl.update);
app.post('/snds',sndctrl.create); 
app.delete('/snds',sndctrl.delete);

app.listen(8080, function () {
	 console.log('You are a Ninja!!!!');
});
