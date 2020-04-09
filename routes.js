

let path = require("path");
let express = require("express");    //new
let router = express.Router();      //new


router.get("/",function(req,res){
//	res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
	res.sendFile(path.resolve(__dirname,"public/views/index.html"));
});


const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Student = require('./Student');

router.post('/create', function(req, res){
	if (req.body.name == "") {
		res.json({retVal:false});
		return;
	}
	let obj = new Student(req.body.identifier,req.body.name);
	res.json({retVal:db.postStudent(obj)});
});


router.get('/read', function(req, res){
	res.json({retVal:db.getStudent(req.query.identifier)});
});


router.put('/update', function(req, res){
	if (req.body.name == "") {
		res.json({retVal:false});
		return;
	}
	let obj = new Student(req.body.identifier,req.body.name);
	res.json({retVal:db.putStudent(obj)});
});

router.delete('/delete/:identifier', function(req, res){
	res.json({retVal:db.deleteStudent(req.params.identifier)});
});




module.exports = router;   //new
