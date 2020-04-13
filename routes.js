

let path = require("path");
let express = require("express");    //new
let router = express.Router();      //new
const myDatabase = require('./myDatabase');
const Message = require('./Message');
let db = new myDatabase();


router.get("/",function(req,res){
//	res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
	res.sendFile(path.resolve(__dirname,"public/views/index.html"));
});
router.post('/create', function(req, res){
	if (req.body.name == "" || req.body.message == "") {
		res.json({retVal:false});
		return;
	}
	let obj = new Message(req.body.name,req.body.message);
	console.log("----New message:(Name:"+req.body.name+")(message:"+req.body.message+")----")
	db.postMessage(obj);
	db.displayMessages();
	res.json({retVal:true});
});
router.get('/read', function(req, res){
	res.json({messages:db.getMessages()});
});

module.exports = router;   //new
