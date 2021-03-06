var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var lang = require('./routes/lang');
var ques = require('./routes/ques');

var port = 3000;

var app = express();

//view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname,'client')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',tasks);
app.use('/api',lang);
app.use('/api',ques);

app.listen(port,function(){
    console.log("Server Started on port "+port);
});



