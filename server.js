var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3002;

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//Create handlebars view engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Serve static content for the app from the "public" directory in the application directory.
//Public directory becomes /static in html files
app.use('/static', express.static(__dirname + '/public'));

//app.use(express.static(__dirname + '/public'));
//Looks in public for static file to server

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//ROUTES HERE


//Root (www.michellesnirvana.com)
app.get('/', function(req,res) {
	res.render('index');
});

app.get('/aboutme', function(req,res) {
	res.render('aboutme');
});

app.get('/software', function(req,res) {
	res.render('software');
});

app.get('/chemistry', function(req,res) {
	res.render('chemistry');
});

app.get('/music', function(req,res) {
	res.render('music');
});

app.get('/writing', function(req,res) {
	res.render('writing');
});




///
//List on port 3002 or heroku port and log it out
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})