var express = require('express');
var path = require('path');
var gcloud = require('google-cloud');
var firebase = require('firebase');
var multer = require("multer");
var uploader = multer({ storage: multer.memoryStorage({}) });
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


  var config = {
    apiKey: "AIzaSyCuWAvUnbjSAGD7XqansTe2tUoqPORncl0",
    authDomain: "masp-9a79d.firebaseapp.com",
    databaseURL: "https://masp-9a79d.firebaseio.com",
    storageBucket: "masp-9a79d.appspot.com",
    messagingSenderId: "686393566018"
  };
  firebase.initializeApp(config);

const database = firebase.database();

var CLOUD_BUCKET="masp-147618.appspot.com";

var gcs = gcloud.storage({
    projectId: '929887004389', //from storage consogit rele, then click settings, then "x-goog-project-id"
    keyFilename: 'privkey.json' //the key we already set up
});





app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


var port = process.env.PORT || 5000;


app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) { 
	res.sendFile(path.join(__dirname + '/public/index.html')); 

});

app.get('/upload', function (req, res) {
	console.log('GET: upload');
	/*
		change to POST and upload file
	*/
	

});

app.post('/signin', function (req, res) {
	var firebaseUser = req.body.user;
 	const dbRefObject = database.ref().child('search');
    
 	var addy = [];
    dbRefObject.on('value', snap =>{
        var obj = snap.val();
        //addy.push(Object.keys(obj).map(key => obj[key]));
        Object.keys(obj).forEach(function(key) {
        	//console.log(obj[key]);
        	addy.push(obj[key]);

        });
    });


	res.send(addy);

 });


app.listen(port, function () {
  console.log('Example app listening on port 5000!');
});