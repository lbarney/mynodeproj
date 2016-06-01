var dogs = require('./dogs.js');

module.exports = {
	//create:function (req,res,next) {
	 /* body... */ 
	//},
	read:function (req, res, next) {
	res.send(dogs);
	}//,
	// update:function (req,res,next) {
	//   
	// },
	// delete: function (req,res,next) {
	//  /* body... */ 
	// }
};