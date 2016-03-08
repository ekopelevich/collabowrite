if(process.env.NODE_ENV !== 'production'){
  require('dotenv').load();
}

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

require('./routes/routes')(app);

app.listen(port, function(){
  console.log('Server is listening on ' + port);
});

exports = module.exports = app;
