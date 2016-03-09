var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'localhost:8000/cw_db',
    user     : 'cw_admin',
    password : 'cw_password',
    database : 'cw_db',
    charset  : 'utf8'
  }
});

// var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users'
});
