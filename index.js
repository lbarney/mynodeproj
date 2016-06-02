
var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');

var musicctrl = require('./musicctrl.js');//calling the music controller

var app = express();


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
  
app.use(express.static(__dirname + '/public'));

app.get('/music', musicctrl.read);//     */snds = URL*
app.put('/music',musicctrl.update);
app.post('/music',musicctrl.create); 
app.delete('/music',musicctrl.delete);

app.listen(8080, function () {
	 console.log('You are a Ninja!!!!');
});
