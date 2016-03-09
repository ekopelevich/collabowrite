if(process.env.NODE_ENV !== 'production'){
  require('dotenv').load();
}

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
// var bodyParser = require('body-parser');
// var auth = require('./services/auth');
// var routes =

// var users = require('./routes/users');
// var stories = require('./routes/stories');

app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

require('./routes/routes')(app);

// app.use('/', auth);
// app.use('/', routes);
// app.use('/api/users', users);
// app.use('/api/stories', stories);


app.listen(port, function(){
  console.log('Server is listening on port ' + port);
});

exports = module.exports = app;
