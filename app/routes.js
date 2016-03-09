module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile('./public/build/index.html');
  });
};
