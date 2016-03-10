if(process.env.NODE_ENV !== 'production'){
  require('dotenv').load();
}

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
// var knex = require('./services/db');
// var pg = require('pg');
var bodyParser = require('body-parser');
// var routes = require('./routes/index')(app);
// var auth = require('./services/auth');
// var users = require('./routes/users');
// var stories = require('./routes/stories');

//app.use('/', routes);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});

app.get('/stories', function(req, res){
  res.send('hi');
});

// app.use('/', auth);
// app.use('/api/users', users);
// app.use('/api/stories', stories);

app.listen(port, function(){
  console.log('Server is listening on port ' + port);
});

module.exports = app;
