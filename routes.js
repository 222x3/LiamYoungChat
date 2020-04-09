

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
	if (req.body.name == "" || req.body.comment == "") {
		res.json({retVal:false});
		return;
	}
	let obj = new Message(req.body.name,req.body.comment);
	console.log("----New message:(Name:"+req.body.name+")(Comment:"+req.body.comment+")----")
	db.postMessage(obj);
	db.displayMessages();
	res.json({retVal:true});
});

module.exports = router;   //new
