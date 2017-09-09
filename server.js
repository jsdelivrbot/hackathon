// Loading necessary modules
var express = require('express');
var bodyParser = require('body-parser');
var clientSessions = require("client-sessions");


// Instantiate express server
var app = express();

// Using modules for app
app.use(express.static(__dirname+'/dist'));
app.use(bodyParser.json()); // Body parser to get the data from ajax calls & form data
app.use(bodyParser.urlencoded()); // Body parser to get the URL GET method data
app.use(clientSessions({
	secret: '0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK' // Secret Key
}));

// Routes to define the call backs
var routes = {};
routes.user = require('./routes/user.js');
routes.questions = require('./routes/questions.js');
routes.database = require('./database-config/mongodb.js');

// // Restful API to get the home page
// app.get('/', function(req, res){
// 	res.sendfile('/dist/index.html');
// });

// Restfull API to login
app.post('/login', routes.user.login);

// Restful API for user registration
app.post('/register', routes.user.register);

// Restfull API to logout the user
app.post('/logout', routes.user.logout);

// Restfull API to get the questions list
app.get('/getQuestions', routes.questions.getQuestions);

// Restfull API to get the users list
app.post('/addQuestion', routes.questions.addQuestion);

var server = app.listen((process.env.PORT || 3000));
console.log("DigiGyan Server is Up running on port 3000");
