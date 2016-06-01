var snds = require('./snds.js');

module.exports = {
	create:function (req,res,next) { //manually add snds
    	snds.push(req.body);
      	res.send(snds);
	},
	
	read:function (req, res, next) {
		res.send(snds);
	},
	
	update:function (req,res,next) { //manually update snds id id matches name
    	for(var i = 0; i < snds.length; i++) {
      		if (req.params.id === snds[i].name) {
        	snds[i] = req.body;
      }
    }
    res.send(snds);
	},
	
	delete: function (req,res,next) { //manually delete snds if id matches name
    	for(var i = 0; i < snds.length; i++) {
      		if (req.params.id === snds[i].name) {
        	snds.splice(i,1);
      		}
    	}
    	res.send(snds);
	}
};