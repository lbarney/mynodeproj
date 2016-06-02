
var mongojs = require('mongojs');
var ObjectId = require('mongodb').ObjectId;
// methods of mongojs (.insert(data,callback), .find({}, callback) .findAndModify(data that includes id   Object, callback), .remove(id Object, callback))

//var snds = require('./snds.js');

var db = mongojs('music', ['musicInfo']);//  ('database name', [collection])

module.exports = {
	create:function (req,res,next) { //manually add music
    	db.musicInfo.insert(req.body, function(err, result){
    		if(err){
    			res.send(err);
    		}else{
    			res.send(result);
    		}
    	});
	},
	
	read:function (req, res, next) {
		db.musicInfo.find({}, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}		
		});
	},
	
	update:function (req,res,next) { //manually update music id matches name
    	var newObj = {
    		query: {_id: ObjectId(req.params.id)},
    		update: {$set: req.body},
    		new: false
    	};
    	db.musicInfo.findAndModify(newObj, function(err, result){
    		if(err){
    			res.send(err);
    		}else{
    			res.send(result);
    		}
    	});
	},
	
	delete: function (req,res,next) { //manually delete music if id matches name
    	db.musicInfo.remove({_id: ObjectId(req.params.id)}, function(err, result)  {
			if(err){
    			res.send(err);
    		}else{
    			res.send(result);
    		}
    	});
    }
};









