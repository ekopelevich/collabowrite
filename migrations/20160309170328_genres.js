exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('genres', function(table) {
      table.increments('id').primary();
      table.string('genre');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('genres')
  ]);
};
